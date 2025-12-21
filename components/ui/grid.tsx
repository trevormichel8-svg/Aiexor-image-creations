import React from "react";

interface GridProps {
  children: React.ReactNode;
  columns?: number;
}

export default function Grid({ children, columns = 3 }: GridProps) {
  return (
    <div
      className={`grid gap-4`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
