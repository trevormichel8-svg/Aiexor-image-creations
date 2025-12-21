import React, { useState } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full mb-2 bg-[#0B0B0B] border border-[#FFD700]/50 text-[#FFD700] text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
}
