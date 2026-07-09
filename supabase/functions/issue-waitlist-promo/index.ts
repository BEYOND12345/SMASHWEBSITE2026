import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function generatePromoCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `SMASH-${suffix}`;
}

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ success: false, error: "Method not allowed" }, 405);
  }

  try {
    const { email, source = "landing_popup" } = await req.json();

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return jsonResponse({ success: false, error: "Invalid email address" }, 400);
    }

    const normalizedEmail = email.trim().toLowerCase();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    const { data: existing, error: selectError } = await supabase
      .from("waitlist_leads")
      .select("id, promo_code")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (selectError) {
      console.error("Select error:", selectError);
      return jsonResponse({ success: false, error: "Database error" }, 500);
    }

    if (existing?.promo_code) {
      return jsonResponse({ success: true, promo_code: existing.promo_code });
    }

    const promoCode = generatePromoCode();

    if (existing) {
      const { error: updateError } = await supabase
        .from("waitlist_leads")
        .update({ promo_code: promoCode, code_issued: true })
        .eq("id", existing.id);

      if (updateError) {
        console.error("Update error:", updateError);
        return jsonResponse({ success: false, error: "Failed to issue code" }, 500);
      }
    } else {
      const { error: insertError } = await supabase.from("waitlist_leads").insert({
        email: normalizedEmail,
        source,
        promo_code: promoCode,
        code_issued: true,
      });

      if (insertError) {
        if (insertError.code === "23505") {
          const { data: retry } = await supabase
            .from("waitlist_leads")
            .select("promo_code")
            .eq("email", normalizedEmail)
            .maybeSingle();

          if (retry?.promo_code) {
            return jsonResponse({ success: true, promo_code: retry.promo_code });
          }
        }

        console.error("Insert error:", insertError);
        return jsonResponse({ success: false, error: "Failed to register email" }, 500);
      }
    }

    return jsonResponse({ success: true, promo_code: promoCode });
  } catch (error) {
    console.error("Error issuing waitlist promo:", error);
    return jsonResponse(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      500,
    );
  }
});
