"use client";
import React, { useState } from "react";

const MODELS = [
  "GPT-Image 1.5",
  "Photorealistic HD",
  "Digital Painting",
  "Fantasy Render",
  "Cyberpunk Neon",
  "Minimalist Concept"
];

interface Props {
  onSelect: (model: string) => void;
}

export default function ModelSelect({ onSelect }: Props) {
  const [selected, setSelected] = useState(MODELS[0]);

  const handleSelect = (model: string) => {
    setSelected(model);
    onSelect(model);
  };

  return (
    <div className="mt-4 p-4 border border-[#FFD700]/30 rounded-md bg-[#0D0D0D]">
      <h4 className="text-[#FFD700] font-semibold mb-2">Select AI Model</h4>
      <div className="grid grid-cols-2 gap-3">
        {MODELS.map((model) => (
          <button
            key={model}
            onClick={() => handleSelect(model)}
            className={`px-3 py-2 rounded-md text-sm font-medium border transition ${
              selected === model
                ? "border-[#FFD700] bg-gradient-to-r from-[#FFD700] to-[#00FFFF] text-black"
                : "border-[#00FFFF]/40 text-[#00FFFF] hover:bg-[#00FFFF]/10"
            }`}
          >
            {model}
          </button>
        ))}
      </div>
    </div>
  );
}
