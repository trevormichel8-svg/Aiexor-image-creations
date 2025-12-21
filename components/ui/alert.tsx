import React from "react";

interface AlertProps {
  title: string;
  message: string;
  type?: "success" | "error" | "info";
}

export default function Alert({ title, message, type = "info" }: AlertProps) {
  const colors = {
    success: "bg-emerald-900 border-emerald-400 text-emerald-100",
    error: "bg-red-900 border-red-500 text-red-100",
    info: "bg-[#0B0B0B] border-[#00FFFF] text-[#FFD700]",
  }[type];

  return (
    <div className={`border p-4 rounded-md ${colors}`}>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-sm">{message}</p>
    </div>
  );
}
