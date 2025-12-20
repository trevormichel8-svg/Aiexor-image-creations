import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ✅ Ensure Supabase client is created safely
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    console.error("Missing Supabase environment variables");
    return NextResponse.json(
      { error: "Supabase not configured properly" },
      { status: 500 }
    );
  }

  const supabase = createClient(url, anonKey);

  const { data, error } = await supabase
    .from("images")
    .select("*")
    .eq("is_public", true)
    .order("created_at", { ascending: false })
    .limit(40);

  if (error) {
    console.error("Supabase query error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}
