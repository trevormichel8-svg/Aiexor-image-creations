export const runtime = "nodejs";

import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
  project: process.env.OPENAI_PROJECT_ID!,
  organization: process.env.OPENAI_ORG_ID!,
});

export async function POST(req: Request) {
  console.log("🔵 /api/generate hit");

  try {
    const { prompt } = await req.json();
    console.log("🟡 Prompt:", prompt);

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    console.log("🟢 OpenAI response:", result);

    return NextResponse.json({
      imageUrl: result.data?.[0]?.url ?? null,
      raw: result,
    });
  } catch (err: any) {
    console.error("🔴 GENERATE ERROR:", err);

    return NextResponse.json(
      {
        error: err?.message ?? "Unknown error",
        full: err,
      },
      { status: 500 }
    );
  }
}
