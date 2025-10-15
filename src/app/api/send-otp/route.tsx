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
    // Read request body safely
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400
      });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    //Store the OTP and email in the database with an expiration time
    // await supabase.from("otp_requests").insert([{ email, otp }]);
    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // test sender
      to: [email], // make sure it's an array
      subject: "Your One-Time Password (OTP)",
      react: <EmailOTP OTP={otp} /> // ✅ function call, not JSX
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, otp, data }), {
      status: 200
    });
  } catch (error: any) {
    console.error("Server Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
}
