import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt, style } = await req.json();

    if (!prompt || !style) {
      return NextResponse.json({ error: "Missing prompt or style" }, { status: 400 });
    }

    const finalPrompt = `${style} style: ${prompt}`;

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: finalPrompt,
      size: "1024x1024",
    });

    const imageBase64 = result.data[0].b64_json;
    const imageDataUrl = `data:image/png;base64,${imageBase64}`;

    return NextResponse.json({ image: imageDataUrl });
  } catch (error: any) {
    console.error("Image generation failed:", error);
    return NextResponse.json({ error: "Image generation failed" }, { status: 500 });
  }
}
