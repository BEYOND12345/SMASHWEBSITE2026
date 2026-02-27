import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface SignupData {
  email: string;
  name?: string;
  phone?: string;
  trade_type?: string;
  quotes_per_week?: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const signupData: SignupData = await req.json();
    console.log('Received signup data:', { email: signupData.email, name: signupData.name });

    const picaSecretKey = Deno.env.get('PICA_SECRET_KEY');
    const picaConnectionKey = Deno.env.get('PICA_GMAIL_CONNECTION_KEY');

    if (!picaSecretKey || !picaConnectionKey) {
      console.error('Pica credentials not configured');
      return new Response(
        JSON.stringify({
          success: true,
          warning: 'Email notifications are not configured',
          message: 'Signup saved to database but no email sent'
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailSubject = `🚀 New Beta Signup: ${signupData.name || signupData.email}`;

    const htmlBody = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #2c3e50; line-height: 1.7; font-size: 16px; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="background: linear-gradient(135deg, #2c5282 0%, #1a365d 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1>New Beta Signup! 🎉</h1>
      </div>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2>Signup Details</h2>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 0; font-weight: 600; width: 180px;">Email:</td>
            <td style="padding: 12px 0;">${signupData.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 0; font-weight: 600;">Name:</td>
            <td style="padding: 12px 0;">${signupData.name || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 0; font-weight: 600;">Phone:</td>
            <td style="padding: 12px 0;">${signupData.phone || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 0; font-weight: 600;">Trade Type:</td>
            <td style="padding: 12px 0;">${signupData.trade_type || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 0; font-weight: 600;">Quotes Per Week:</td>
            <td style="padding: 12px 0;">${signupData.quotes_per_week || 'Not provided'}</td>
          </tr>
        </table>

        ${signupData.message ? `
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2c5282;">
          <h3 style="margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${signupData.message}</p>
        </div>
        ` : ''}

        <p style="color: #718096; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <strong>Received:</strong> ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
    `;

    const mimeEmail = [
      `From: dan@smashinvoices.com`,
      `To: dan@smashinvoices.com`,
      `Subject: ${emailSubject}`,
      'MIME-Version: 1.0',
      'Content-Type: text/html; charset=UTF-8',
      '',
      htmlBody,
    ].join('\r\n');

    console.log('Encoding email to base64url...');

    const encoder = new TextEncoder();
    const data = encoder.encode(mimeEmail);
    const base64 = btoa(String.fromCharCode(...data));
    const encodedEmail = base64
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');

    console.log('Sending email via Pica Gmail API...');

    const emailResponse = await fetch('https://api.picaos.com/v1/passthrough/users/me/messages', {
      method: 'POST',
      headers: {
        'x-pica-secret': picaSecretKey,
        'x-pica-connection-key': picaConnectionKey,
        'x-pica-action-id': 'conn_mod_def::F_JeJ3qaLEg::v9ICSQZxR0un5_ketxbCAQ',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        raw: encodedEmail,
        labelIds: ['INBOX', 'UNREAD']
      })
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Email sending failed:', emailResponse.status, errorText);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email notification failed',
          details: errorText
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailResult = await emailResponse.json();
    console.log('Email sent successfully:', emailResult);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Notification sent successfully',
        emailId: emailResult.id
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );

  } catch (error) {
    console.error('Error processing signup notification:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
