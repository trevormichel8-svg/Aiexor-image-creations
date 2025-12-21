import React from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  variant?: "gold" | "turquoise" | "dark";
}

export default function Banner({
  title,
  subtitle,
  variant = "dark",
}: BannerProps) {
  const styles = {
    gold: "bg-gradient-to-r from-[#FFD700]/70 to-[#B8860B]/40 text-black",
    turquoise: "bg-gradient-to-r from-[#00FFFF]/60 to-[#009999]/40 text-black",
    dark: "bg-[#0B0B0B] border border-[#FFD700]/40 text-[#FFD700]",
  }[variant];

  return (
    <div
      className={`p-6 rounded-lg text-center shadow-lg ${styles}`}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-sm">{subtitle}</p>}
    </div>
  );
}
