"use client";
import React from "react";

interface Props {
  onPick: (prompt: string) => void;
}

const suggestions = [
  "A futuristic golden city at sunset",
  "An astronaut relaxing on a turquoise beach",
  "A dragon sculpted from molten gold",
  "Cyberpunk portrait with glowing tattoos",
  "Luxury car under neon lights"
];

export default function PromptSuggestion({ onPick }: Props) {
  return (
    <div className="mt-4 p-3 bg-[#0D0D0D] border border-[#00FFFF]/30 rounded-md">
      <h4 className="text-[#FFD700] font-semibold mb-2">Try one of these ideas</h4>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => onPick(s)}
            className="text-xs px-3 py-1 rounded-md border border-[#FFD700]/40 text-[#FFD700] hover:bg-[#FFD700]/10"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
