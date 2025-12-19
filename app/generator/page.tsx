"use client";

import { useState } from "react";

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate() {
    setLoading(true);
    setError("");
    setImage(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate");
      setImage(data.image);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #001510 0%, #003C3C 50%, #012120 100%)",
        color: "#E6C87F",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
        padding: "3rem 1rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          background: "linear-gradient(90deg,#E6C87F,#48E0CC)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Aiexor Image Creator
      </h1>

      <textarea
        placeholder="Describe your image idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "120px",
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #48E0CC",
          background: "#021A18",
          color: "#E6C87F",
        }}
      />

      <div>
        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            border: "none",
            fontWeight: "bold",
            background:
              "linear-gradient(90deg, #E6C87F 0%, #48E0CC 100%)",
            color: "#000",
            cursor: "pointer",
          }}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {image && (
        <div style={{ marginTop: "2rem" }}>
          <img
            src={image}
            alt="Generated"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              border: "2px solid #48E0CC",
            }}
          />
        </div>
      )}
    </main>
  );
}
