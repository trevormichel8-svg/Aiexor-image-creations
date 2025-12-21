"use client";

import { useState } from "react";
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
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Generation failed");
      }

      setImageUrl(data.imageUrl);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">
      {loading && <LoadingOverlay />}

      <textarea
        className="w-full p-3 border rounded-md"
        placeholder="Describe the image you want..."
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

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Generated"
          className="w-full rounded-md"
        />
      )}
    </div>
  );
}
