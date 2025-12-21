import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export default function Label({ text, ...props }: LabelProps) {
  return (
    <label {...props} className="block text-[#FFD700] text-sm mb-1">
      {text}
    </label>
  );
}
