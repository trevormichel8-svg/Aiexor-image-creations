"use client";

import React from "react";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/90 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 border-4 border-[#FFD700] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-[#00FFFF] font-semibold text-sm tracking-wide">
          Generating your masterpiece...
        </p>
      </div>
    </div>
  );
}
