"use client";
import React, { useState } from "react";

export default function QualityModeToggle({
  onChange,
}: {
  onChange: (mode: string) => void;
}) {
  const [mode, setMode] = useState("Standard");

  const toggleMode = () => {
    const newMode = mode === "Standard" ? "High Quality" : "Standard";
    setMode(newMode);
    onChange(newMode);
  };

  return (
    <div className="flex justify-between items-center bg-[#0D0D0D] border border-[#FFD700]/30 p-3 rounded-md">
      <div>
        <h4 className="text-[#FFD700] font-semibold text-sm">Quality Mode</h4>
        <p className="text-[#00FFFF]/70 text-xs">{mode}</p>
      </div>
      <button
        onClick={toggleMode}
        className="px-4 py-1 text-sm font-semibold bg-gradient-to-r from-[#FFD700] to-[#00FFFF] rounded-md text-black"
      >
        Toggle
      </button>
    </div>
  );
}
