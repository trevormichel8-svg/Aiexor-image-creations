import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function PromptInput({ value, onChange, onSubmit }: Props) {
  return (
    <div className="flex items-center border border-[#00FFFF]/40 rounded-md p-2 bg-[#0D0D0D]">
      <input
        type="text"
        value={value}
        placeholder="Enter your prompt..."
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent text-[#FFD700] outline-none px-2"
      />
      <button
        onClick={onSubmit}
        className="px-4 py-1 bg-gradient-to-r from-[#FFD700] to-[#00FFFF] text-black font-semibold rounded-md"
      >
        Go
      </button>
    </div>
  );
}
