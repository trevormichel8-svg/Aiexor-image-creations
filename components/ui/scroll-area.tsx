import React from "react";

export default function ScrollArea({
  children,
  height = "300px",
}: {
  children: React.ReactNode;
  height?: string;
}) {
  return (
    <div
      style={{ maxHeight: height }}
      className="overflow-y-auto p-2 border border-[#FFD700]/30 rounded-md bg-[#0B0B0B] scrollbar-thin scrollbar-thumb-[#00FFFF] scrollbar-track-[#0B0B0B]"
    >
      {children}
    </div>
  );
}
