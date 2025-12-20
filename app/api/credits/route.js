import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ credits: 0 });

  const { data } = await supabase
    .from("profiles")
    .select("credits")
    .eq("id", user.id)
    .single();

  return NextResponse.json({ credits: data?.credits ?? 0 });
}
