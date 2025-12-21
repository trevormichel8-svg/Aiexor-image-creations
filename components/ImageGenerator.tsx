"use client";
import React, { useState } from "react";
import LoadingOverlay from "./loading-overlay";
import Toast from "./toast";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  async function handleGenerate() {
    if (!prompt.trim()) {
      setToast({ message: "Please enter a prompt.", type: "error" });
      return;
    }
    setLoading(true);
    setImage(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (res.ok) {
        setImage(data.image);
        setToast({ message: "Image generated successfully!", type: "success" });
      } else {
        setToast({ message: data.error || "Error generating image.", type: "error" });
      }
    } catch {
      setToast({ message: "Server error. Try again later.", type: "error" });
    }
    setLoading(false);
  }

  return (
    <section className="text-center p-6 bg-[#0D0D0D] border border-[#FFD700]/30 rounded-lg">
      <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Create AI Art</h2>
      <textarea
        placeholder="Describe your image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-3 bg-[#050505] border border-[#00FFFF]/30 rounded-md text-white"
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#00FFFF] rounded-md font-semibold text-black hover:opacity-90"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
      {image && <img src={image} alt="Generated" className="mt-5 rounded-md border border-[#FFD700]/30" />}
      {loading && <LoadingOverlay text="Creating your masterpiece..." />}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </section>
  );
}
