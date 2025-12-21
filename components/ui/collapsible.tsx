import React, { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export default function Collapsible({ title, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#00FFFF]/30 rounded-md bg-[#0B0B0B]">
      <button
        className="w-full text-left px-4 py-2 font-semibold text-[#FFD700] bg-[#0F0F0F]"
        onClick={() => setOpen(!open)}
      >
        {title} {open ? "−" : "+"}
      </button>
      {open && <div className="p-4 text-[#CCCCCC]">{children}</div>}
    </div>
  );
}
