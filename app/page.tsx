"use client";

import { useState } from "react";
import HeroSection from "../components/HeroSection";
import FeatureGrid from "../components/FeatureGrid";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ Full art style list from original file
  const styles = [
    "None",
    "Photorealistic",
    "Oil Painting",
    "Watercolor",
    "Charcoal Sketch",
    "Pencil Drawing",
    "Digital Painting",
    "Pixel Art",
    "Low Poly 3D",
    "Line Art",
    "Cartoon",
    "Anime",
    "Manga Ink",
    "Cyberpunk",
    "Steampunk",
    "Futuristic Sci-Fi",
    "Fantasy Illustration",
    "Concept Art",
    "Abstract Expressionism",
    "Impressionism",
    "Minimalism",
    "Pop Art",
    "Cubism",
    "Surrealism",
    "Vector Art",
    "Isometric",
    "Flat Design",
    "Matte Painting",
    "Graffiti",
    "Street Art",
    "3D Render",
    "Glitchcore",
    "Vaporwave",
    "Synthwave",
    "Dark Fantasy",
    "Baroque",
    "Renaissance",
    "Ukiyo-e",
    "Art Nouveau",
    "Art Deco",
    "Retro Futurism",
    "Chiaroscuro",
    "Ink Wash",
    "Pastel Drawing",
    "Realism",
    "Expressionism",
    "Psychedelic",
    "Comic Book",
    "Noir",
    "Digital Collage",
    "Photo Collage",
    "Claymation",
    "Stop Motion",
    "Paper Cut",
    "Neon Glow",
    "Infrared",
    "Long Exposure",
    "Macro Photography",
    "Cinematic Lighting",
    "Studio Portrait",
    "Film Grain",
    "Bokeh",
    "HDR",
    "Lofi Aesthetic",
    "Dreamcore",
    "Cottagecore",
    "Nature Photography",
    "Wildlife Art",
    "Landscape Painting",
    "Seascape",
    "Space Art",
    "Galaxy Scene",
    "AI-Generated Abstract",
    "Brush Stroke",
    "Ink Pen",
    "Stencil",
    "Graffiti Marker",
    "Mixed Media",
    "Mosaic",
    "Stained Glass",
    "Embroidery",
    "Pixel Mosaic",
    "Wireframe",
    "Blueprint",
    "Digital Wireframe",
    "Retro Game",
    "8-bit Art",
    "16-bit Art",
    "Comic Pop",
    "Kawaii",
    "Linework Tattoo",
    "Geometric Pattern",
    "Fractal Design",
    "Neural Dream",
    "AR/VR Hologram",
    "Photobash",
    "Real-Time Render",
    "Motion Blur",
    "AI Glow",
  ];

  async function handleGenerate(prompt: string, style: string) {
    if (!prompt.trim()) return;
    setLoading(true);
    setImage(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, style }),
      });

      const data = await res.json();
      if (data.image) setImage(data.image);
      else console.error("Error:", data.error);
    } catch (err) {
      console.error("Generation failed:", err);
    }

    setLoading(false);
  }

  return (
    <main>
      <div className="generator">
        <HeroSection onGenerate={handleGenerate} styles={styles} />

        {loading && (
          <p style={{ textAlign: "center", color: "#FFD700" }}>
            Generating your masterpiece...
          </p>
        )}

        {image && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <img
              src={image}
              alt="Generated"
              style={{
                borderRadius: "12px",
                maxWidth: "90%",
                boxShadow: "0 0 35px rgba(255, 215, 0, 0.4)",
              }}
            />
          </div>
        )}
      </div>

      <FeatureGrid />
    </main>
  );
}
