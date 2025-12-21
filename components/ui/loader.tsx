import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin w-10 h-10 border-4 border-t-[#00FFFF] border-[#FFD700] rounded-full"></div>
    </div>
  );
}
