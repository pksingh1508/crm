import { EmailOTP } from "@/components/email_Templates/EmailOTP";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { email } = body; // Extract email string from the object

    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400
        }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString(); // +5 minutes

    // Store the OTP and email in the database with an expiration time
    const { error: SupabaseError } = await supabase
      .from("otp_request")
      .insert([{ email: email, otp, expires_at: expiresAt }]);

    if (SupabaseError) {
      console.error("Supabase Error:", SupabaseError);
      return new Response(JSON.stringify({ error: SupabaseError.message }), {
        status: 500
      });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "ashutosh@eucareerserwis.pl",
      to: "pawankumarlearner@gmail.com", // Use the actual email string, not hardcoded
      subject: "Your One-Time Password (OTP)",
      react: <EmailOTP OTP={otp} /> // Pass as a function call
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200
    });
  } catch (error: any) {
    console.error("Server Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
}
