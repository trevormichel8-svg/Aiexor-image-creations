import React from "react";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

export default function Select({ options, value, onChange }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#0B0B0B] text-[#FFD700] border border-[#FFD700]/40 p-2 rounded-md w-full"
    >
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-[#0B0B0B]">
          {opt}
        </option>
      ))}
    </select>
  );
}
