// app/api/verify-otp/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    // Check if OTP exists and is not expired
    const { data, error } = await supabase
      .from("otp_request") // Make sure this matches your table name
      .select("*")
      .eq("email", email)
      .eq("otp", otp)
      .gte("expires_at", new Date().toISOString())
      .maybeSingle();

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json(
        { success: false, error: "Database error" },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, error: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // Mark OTP as verified
    const { error: updateError } = await supabase
      .from("otp_request")
      .update({ verified: true })
      .eq("id", data.id);

    if (updateError) {
      console.error("Update Error:", updateError);
      return NextResponse.json(
        { success: false, error: "Failed to verify OTP" },
        { status: 500 }
      );
    }

    // Optional: Delete the OTP after successful verification for security
    await supabase.from("otp_request").delete().eq("id", data.id);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
