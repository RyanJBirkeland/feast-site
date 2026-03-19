import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { error: "Service unavailable" },
      { status: 503 }
    );
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      email: email.toLowerCase().trim(),
      source: "landing-page",
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    // Duplicate email (unique constraint violation) — still show success
    if (text.includes("duplicate") || text.includes("unique")) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Failed to join" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
