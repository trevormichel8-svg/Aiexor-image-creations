export const runtime = "nodejs";

import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
  project: process.env.OPENAI_PROJECT_ID!,
  organization: process.env.OPENAI_ORG_ID!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    const base64Image = result.data[0].b64_json;

    if (!base64Image) {
      throw new Error("No image returned");
    }

    const imageUrl = `data:image/png;base64,${base64Image}`;

    return NextResponse.json({ imageUrl });
  } catch (err: any) {
    console.error("IMAGE ERROR:", err);
    return NextResponse.json(
      { error: err.message ?? "Image generation failed" },
      { status: 500 }
    );
  }
}
