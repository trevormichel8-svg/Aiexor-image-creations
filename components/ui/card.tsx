import React from "react";

export default function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-[#0B0B0B] border border-[#FFD700]/30 rounded-xl p-4 shadow-md">
      {title && <h3 className="text-[#FFD700] text-lg mb-2">{title}</h3>}
      {children}
    </div>
  );
}
