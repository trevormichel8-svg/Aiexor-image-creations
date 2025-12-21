"use client";
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-[#FFD700] text-sm font-semibold">{label}</label>
      )}
      <textarea
        {...props}
        className={`w-full min-h-[120px] p-3 rounded-md border border-[#00FFFF]/30 
        bg-[#0B0B0B] text-[#EAEAEA] placeholder-gray-400 
        focus:outline-none focus:border-[#FFD700]/50 
        focus:ring-1 focus:ring-[#FFD700]/40 transition-all`}
      />
    </div>
  );
}

