import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="mb-3">
      {label && (
        <label className="block text-[#FFD700] text-sm mb-1">{label}</label>
      )}
      <input
        {...props}
        className="w-full bg-[#0B0B0B] border border-[#FFD700]/40 text-[#FFD700] rounded-md p-2 focus:border-[#00FFFF] outline-none"
      />
    </div>
  );
}
