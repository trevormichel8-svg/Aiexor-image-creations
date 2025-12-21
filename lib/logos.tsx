import React from "react";

export const AiexorLogo = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#FFD700"
          strokeWidth="2"
        />
        <path
          d="M12 6v6l4 2"
          stroke="#FFD700"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-semibold text-lg">Aiexor</span>
    </div>
  );
};
