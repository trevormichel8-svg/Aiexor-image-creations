import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { supabaseServer } from "@/lib/supabaseClient";
import { requireCredits } from "@/lib/credits";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const GenerateSchema = z.object({
  prompt: z.string().min(3),
  style: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, style } = GenerateSchema.parse(body);

    const credit = await requireCredits(1);
    if (!credit.ok) {
      return NextResponse.json({ error: credit.error }, { status: 400 });
    }

    const image = await openai.images.generate({
      model: "gpt-image-1.5",
      prompt: `${prompt} in ${style || "artistic"} style`,
      size: "1024x1024",
    });

    const imageUrl = image.data[0].url;

    const supabase = supabaseServer();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user && imageUrl) {
      await supabase.from("images").insert({
        user_id: user.id,
        image_url: imageUrl,
        prompt,
        style,
        is_public: false,
        created_at: new Date().toISOString(),
      });
    }

    return NextResponse.json({ image: imageUrl });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message ?? "Failed to generate image" },
      { status: 500 }
    );
  }
}
