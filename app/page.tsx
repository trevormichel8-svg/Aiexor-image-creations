"use client";

import { useState } from "react";

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Luxury Gold");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const artStyles = [
    // ✨ Elegant / Luxury
    "Luxury Gold", "Royal Marble", "Diamond Glow", "Opulent Portrait", "Golden Hour Glow",

    // 🌌 Sci-Fi / Futuristic
    "Cyber Neon", "Futuristic City", "Tech Noir", "Quantum Realm", "Space Odyssey", "Mech Armor", "AI Circuit", "Retro-Futurism",

    // 🧚 Fantasy / Mythical
    "Dark Fantasy", "Medieval Magic", "Mythical Creature", "Elven Forest", "Fire & Ice", "Celestial Dream", "Nature Fantasy", "Arcane Wizardry",

    // 🧠 Surreal / Abstract
    "Surreal Abstract", "Dreamcore", "Liquid Metal", "Fractal Geometry", "Impossible Architecture", "Cosmic Fragments", "Psychedelic Vision",

    // 🎭 Artistic Realism
    "Oil Painting", "Watercolor", "Charcoal Drawing", "Realistic Portrait", "Cinematic Lighting", "Hyperrealism", "Chiaroscuro Lighting",

    // 🕹️ Retro / Pop Culture
    "Pixel Art", "Vaporwave", "Synthwave", "80s Aesthetic", "Retro Comic", "Analog Film Grain",

    // 🎨 Minimal / Modern
    "Minimalist", "Vector Flat Design", "Geometric Symmetry", "Clean Line Art", "Typography Focused",

    // 💫 Anime / Cartoon
    "Anime Dreamscape", "Studio Ghibli Style", "Manga Sketch", "Comic Book Hero", "Cartoon Flat", "Chibi Character",

    // 🧱 3D / Rendered
    "3D Render", "Clay Model", "Plasticine Art", "Glass Sculpture", "Photorealistic Render", "Cinematic 3D",

    // 🌿 Nature & Environment
    "Underwater Coral", "Mystic Forest", "Desert Mirage", "Aurora Borealis", "Tropical Paradise", "Mountain Valley",

    // 🕯️ Atmospheric
    "Low Light Mood", "Fog & Mist", "Sunset Glow", "Nighttime Skyline", "Vintage Sepia", "Ethereal Glow"
  ];

  async function generateImage() {
    if (!prompt.trim()) {
      setError("Please enter a description before generating.");
      return;
    }

    setError(null);
    setLoading(true);
    setImage(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, style }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Image generation failed.");
      }

      setImage(data.image);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="generator">
      <h2>🎨 AI Image Generator</h2>

      <textarea
        placeholder="Describe your image idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="input-area"
      />

      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="dropdown"
      >
        {artStyles.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <button onClick={generateImage} disabled={loading} className="generate-btn">
        {loading ? "✨ Generating..." : "Generate Image"}
      </button>

      {error && <p className="error-text">{error}</p>}

      {image && (
        <div className="image-preview">
          <img src={image} alt="Generated artwork" />
          <a className="btn-sale" href="/gallery">View Gallery</a>
        </div>
      )}
    </section>
  );
}
