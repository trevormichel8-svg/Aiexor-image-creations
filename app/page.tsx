"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("None");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // --- Generate Image using your API route ---
  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImage(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, style }),
      });

      const data = await response.json();

      if (data.image) {
        setImage(data.image);
      } else {
        console.error("Error:", data.error);
        alert("Image generation failed. Try again!");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  // --- 100+ art styles dropdown ---
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

  return (
    <main>
      {/* === Hero Section === */}
      <section
        style={{
          textAlign: "center",
          padding: "8rem 1rem 5rem 1rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#00e0d8",
            textShadow: "0 0 20px rgba(0, 224, 216, 0.8)",
            fontWeight: 700,
          }}
        >
          Create Stunning AI Images in Seconds
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            color: "#f5f5f5",
            maxWidth: "650px",
            margin: "1.5rem auto",
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Type your idea, choose an art style, and let Aiexor turn your
          imagination into visual art — powered by next-gen AI.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 650, behavior: "smooth" })}
          style={{
            background: "linear-gradient(90deg, #00e0d8, #ffd700)",
            color: "#000",
            fontWeight: 700,
            border: "none",
            borderRadius: "8px",
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(0, 224, 216, 0.4)",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.transform = "scale(1)")
          }
        >
          Start Creating →
        </button>
      </section>

      {/* === Generator Section === */}
      <section
        className="generator"
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2 style={{ color: "#ffd700", marginBottom: "1rem" }}>
          AI Image Generator
        </h2>

        <textarea
          placeholder="Describe your image idea..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{
            width: "100%",
            minHeight: "100px",
            borderRadius: "8px",
            border: "1px solid #00e0d8",
            background: "#0f1f1f",
            color: "#f5f5f5",
            padding: "0.8rem",
            fontSize: "1rem",
            marginBottom: "1rem",
          }}
        />

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          style={{
            width: "100%",
            padding: "0.8rem",
            borderRadius: "8px",
            border: "1px solid #00e0d8",
            background: "#0f1f1f",
            color: "#f5f5f5",
            fontSize: "1rem",
            marginBottom: "1rem",
          }}
        >
          {styles.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button onClick={handleGenerate}>Generate Image</button>

        {loading && (
          <p style={{ marginTop: "1rem", color: "#00e0d8" }}>
            Generating your masterpiece...
          </p>
        )}

        {image && (
          <div className="image-preview">
            <img
              src={image}
              alt="AI generated result"
              style={{
                borderRadius: "12px",
                marginTop: "2rem",
                border: "2px solid #00e0d8",
                boxShadow: "0 0 20px rgba(0, 224, 216, 0.5)",
              }}
            />
          </div>
        )}
      </section>
    </main>
  );
}
