"use client";

import { useState } from "react";

export default function HeroSection({ onGenerate }: { onGenerate: (prompt: string, style: string) => void }) {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Luxury Gold");

  const artStyles = [
    "Luxury Gold", "Photorealistic", "Oil Painting", "Watercolor", "Digital Painting", "Cyberpunk",
    "Steampunk", "Fantasy Illustration", "Anime", "Pixel Art", "Vector Art", "3D Render",
    "Neon Glow", "Retro Futurism", "Surrealism", "Minimalism", "Abstract", "Dreamcore", "Lofi Aesthetic",
    "Line Art", "Ink Wash", "Pop Art", "Noir", "Cinematic", "Realism"
  ];

  return (
    <section
      style={{
        textAlign: "center",
        padding: "8rem 1rem 5rem 1rem",
        color: "#f5f5f5",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#FFD700",
          fontWeight: 700,
          textShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
          marginBottom: "1rem",
        }}
      >
        Create <span style={{ color: "#ffec8b" }}>Stunning AI Images</span> in Seconds.
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#ccc",
          maxWidth: "640px",
          margin: "0 auto 3rem auto",
          lineHeight: 1.7,
        }}
      >
        Turn your ideas into incredible visuals with Aiexor's powerful AI image generator. Fast, easy, and limitless creativity at your fingertips.
      </p>

      {/* Generator Card */}
      <div
        style={{
          background: "rgba(26, 26, 26, 0.85)",
          border: "1px solid #FFD700",
          borderRadius: "16px",
          padding: "2rem",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: "0 0 30px rgba(255, 215, 0, 0.25)",
        }}
      >
        <h3 style={{ color: "#FFD700", marginBottom: "1rem" }}>⚡ AI Image Generator</h3>

        <textarea
          placeholder="Describe your image idea..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{
            width: "100%",
            minHeight: "80px",
            borderRadius: "8px",
            border: "1px solid #FFD700",
            background: "#0f0f0f",
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
            border: "1px solid #FFD700",
            background: "#141414",
            color: "#f5f5f5",
            fontSize: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          {artStyles.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          onClick={() => onGenerate(prompt, style)}
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #FFD700, #FFEC8B)",
            border: "none",
            borderRadius: "8px",
            padding: "1rem",
            fontWeight: 700,
            color: "#000",
            cursor: "pointer",
            boxShadow: "0 0 15px rgba(255, 215, 0, 0.4)",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.transform = "scale(1)")
          }
        >
          Generate Image
        </button>
      </div>
    </section>
  );
}
