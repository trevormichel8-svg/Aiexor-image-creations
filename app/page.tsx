"use client";

import { useState } from "react";

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Luxury Gold");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const artStyles = [
    "Luxury Gold", "Cyber Neon", "Dark Fantasy", "Anime Dreamscape",
    "Oil Painting", "Pixel Art", "Minimalist", "Realistic Portrait",
    "Futuristic City", "Cinematic Lighting", "Sketch", "Surreal Abstract",
    "Nature Fantasy", "3D Render", "Charcoal Drawing", "Watercolor"
  ];

  async function generateImage() {
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
      <h2>AI Image Generator</h2>
      <textarea
        placeholder="Describe your image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <select value={style} onChange={(e) => setStyle(e.target.value)}>
        {artStyles.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <button onClick={generateImage} disabled={loading}>
        {loading ? "Generating..." : "Generate Image"}
      </button>
      {image && (
        <div className="image-preview">
          <img src={image} alt="Generated" />
          <a className="btn-sale" href="/gallery">View Gallery</a>
        </div>
      )}
    </section>
  );
}
