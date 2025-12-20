import { supabaseServer } from "./supabaseClient";

export async function requireCredits(cost: number) {
  const supabase = supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { ok: false, error: "Unauthorized" };
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("credits")
    .eq("id", user.id)
    .single();

  if (error || !data) {
    return { ok: false, error: "Failed to fetch credits" };
  }

  if (data.credits < cost) {
    return { ok: false, error: "Not enough credits" };
  }

  await supabase
    .from("profiles")
    .update({ credits: data.credits - cost })
    .eq("id", user.id);

  return { ok: true, userId: user.id };
}
