"use client";

import React, { useState } from "react";
import LoadingOverlay from "./loading-overlay";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    if (!prompt.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await res.json();
      setImageUrl(data.imageUrl);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      {loading && <LoadingOverlay />}

      <textarea
        className="w-full p-3 border rounded-md"
        placeholder="Describe the image you want to generate..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full bg-black text-white py-2 rounded-md disabled:opacity-50"
      >
        Generate Image
      </button>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {imageUrl && (
        <div className="mt-4">
          <img
            src={imageUrl}
            alt="Generated"
            className="w-full rounded-md"
          />
        </div>
      )}
    </div>
  );
}
