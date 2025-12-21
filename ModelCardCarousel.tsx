"use client";
import React, { useState } from "react";

const MODELS = [
  {
    name: "GPT-Image 1.5",
    desc: "Fast & versatile for artistic and photorealistic results.",
    accent: "#FFD700",
  },
  {
    name: "Luxury Render",
    desc: "Perfect for high-end, glossy 3D or gold-themed artwork.",
    accent: "#00FFFF",
  },
  {
    name: "CyberDream",
    desc: "Vibrant neon-inspired scenes and futuristic portraits.",
    accent: "#FFD700",
  },
  {
    name: "Fantasy Vision",
    desc: "Ideal for magical, surreal, and imaginative visuals.",
    accent: "#00FFFF",
  },
];

interface Props {
  onSelect: (model: string) => void;
}

export default function ModelCardCarousel({ onSelect }: Props) {
  const [selected, setSelected] = useState(MODELS[0].name);

  const handleSelect = (model: string) => {
    setSelected(model);
    onSelect(model);
  };

  return (
    <div className="mt-4 bg-[#0B0B0B] border border-[#FFD700]/30 rounded-md p-4 overflow-x-auto">
      <h3 className="text-lg font-semibold text-[#FFD700] mb-3">
        Choose a Model
      </h3>
      <div className="flex gap-4 overflow-x-scroll pb-2">
        {MODELS.map((m) => (
          <button
            key={m.name}
            onClick={() => handleSelect(m.name)}
            className={`min-w-[220px] flex-shrink-0 border rounded-md px-3 py-2 text-left transition-all duration-200 ${
              selected === m.name
                ? "bg-gradient-to-r from-[#FFD700] to-[#00FFFF] text-black"
                : "border-[#00FFFF]/30 bg-[#0D0D0D] text-[#FFD700] hover:border-[#FFD700]/60"
            }`}
          >
            <p className="font-bold text-sm">{m.name}</p>
            <p className="text-xs opacity-80 mt-1">{m.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
