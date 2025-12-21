import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "turquoise" | "dark";
  label: string;
}

export default function Button({
  label,
  variant = "gold",
  ...props
}: ButtonProps) {
  const styles = {
    gold: "bg-[#FFD700] text-black hover:opacity-90",
    turquoise: "bg-[#00FFFF] text-black hover:opacity-90",
    dark: "bg-[#0B0B0B] text-[#FFD700] border border-[#FFD700]",
  }[variant];

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md font-semibold transition ${styles}`}
    >
      {label}
    </button>
  );
}
