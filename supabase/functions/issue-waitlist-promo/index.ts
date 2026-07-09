import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PROMO_CODE = "SMASHFREE1";

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
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseKey =
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ??
      Deno.env.get("SUPABASE_ANON_KEY") ??
      "";

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: insertError } = await supabase.from("waitlist_leads").insert({
      email: normalizedEmail,
      source,
      promo_code: PROMO_CODE,
      code_issued: true,
    });

    if (insertError && insertError.code !== "23505") {
      console.error("Insert error:", insertError);
      return jsonResponse({ success: false, error: "Failed to register email" }, 500);
    }

    return jsonResponse({ success: true, promo_code: PROMO_CODE });
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
