import React, { useState } from "react";

interface TabsProps {
  tabs: string[];
  children: React.ReactNode[];
}

export default function Tabs({ tabs, children }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex space-x-2 mb-3 border-b border-[#FFD700]/30">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`px-4 py-2 font-semibold ${
              i === active
                ? "text-[#FFD700] border-b-2 border-[#FFD700]"
                : "text-[#CCCCCC] hover:text-[#00FFFF]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-[#CCCCCC]">{children[active]}</div>
    </div>
  );
}
