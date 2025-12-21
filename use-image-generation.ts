"use client";

import { useState } from "react";
import { suggestions } from "@/lib/suggestions";

interface ImageResult {
  image?: string;
  error?: string;
}

export function useImageGeneration() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Luxury Gold");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);
    setImage(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, style }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate image");
      }

      const data: ImageResult = await res.json();
      setImage(data.image || null);

      // Fire toast
      window.dispatchEvent(
        new CustomEvent("toast", {
          detail: { message: "Image generated successfully!", type: "success" },
        })
      );
    } catch (err: any) {
      console.error(err);
      window.dispatchEvent(
        new CustomEvent("toast", {
          detail: { message: "Image generation failed.", type: "error" },
        })
      );
    } finally {
      setLoading(false);
    }
  }

  function randomSuggestion() {
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    setPrompt(random);
  }

  return {
    prompt,
    setPrompt,
    style,
    setStyle,
    loading,
    image,
    generate,
    randomSuggestion,
  };
}
