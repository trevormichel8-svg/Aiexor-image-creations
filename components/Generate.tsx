"use client";

import { useState } from "react";
import StyleSelector from "./StyleSelector";
import CreditDisplay from "./CreditDisplay";

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Luxury Gold");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function generateImage() {
    if (!prompt.trim()) return;
    setLoading(true);
    setImage(null);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, style }),
    });
    const data = await res.json();
    setImage(data.image);
    setLoading(false);
  }

  return (
    <section className="generator">
      <h2>Generate Your AI Image</h2>
      <CreditDisplay />
      <textarea
        placeholder="Describe your image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <StyleSelector value={style} onChange={setStyle} />
      <button onClick={generateImage} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
      {image && (
        <div className="image-preview">
          <img src={image} alt="Generated" />
        </div>
      )}
    </section>
  );
    }
