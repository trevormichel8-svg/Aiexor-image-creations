import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-[#0B0B0B] border border-[#FFD700]/30 rounded-lg p-6 max-w-md w-full">
        {title && <h3 className="text-[#FFD700] mb-3 text-lg">{title}</h3>}
        <div className="text-[#CCCCCC]">{children}</div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[#FFD700] text-black rounded-md hover:opacity-80"
        >
          Close
        </button>
      </div>
    </div>
  );
}
