import React from "react";

interface ProgressProps {
  value: number;
}

export default function Progress({ value }: ProgressProps) {
  return (
    <div className="w-full bg-[#1a1a1a] border border-[#FFD700]/30 rounded-full h-3 overflow-hidden">
      <div
        className="bg-gradient-to-r from-[#FFD700] to-[#00FFFF] h-full"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      ></div>
    </div>
  );
}
