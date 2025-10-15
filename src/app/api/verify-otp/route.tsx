// app/api/verify-otp/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { email, otp } = await req.json();

  const { data } = await supabase
    .from("otp_requests")
    .select("*")
    .eq("email", email)
    .eq("otp", otp)
    .eq("verified", false)
    .single();

  if (!data) return NextResponse.json({ success: false });

  await supabase
    .from("otp_requests")
    .update({ verified: true })
    .eq("id", data.id);

  // mark session as verified (could store in cookie or database)
  return NextResponse.json({ success: true });
}
