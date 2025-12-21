import React from "react";

export default function ImageDisplay({ src, prompt }: { src: string; prompt?: string }) {
  return (
    <div className="bg-[#0D0D0D] border border-[#FFD700]/30 rounded-lg p-3 text-center">
      <img src={src} alt={prompt || "AI Generated"} className="rounded-md mx-auto" />
      {prompt && <p className="mt-2 text-[#00FFFF]/80 text-sm">{prompt}</p>}
    </div>
  );
}
