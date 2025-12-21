"use client";
import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-full h-full py-10">
      <div
        className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 
        border-[#FFD700] border-t-[#00FFFF]"
      />
    </div>
  );
}
