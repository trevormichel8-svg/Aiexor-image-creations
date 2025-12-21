"use client";
import React from "react";

interface ImageCardProps {
  src: string;
  prompt?: string;
  style?: string;
  author?: string;
  isPublic?: boolean;
}

export default function ImageCard({
  src,
  prompt,
  style,
  author,
  isPublic = false,
}: ImageCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md border border-[#FFD700]/30 bg-[#0B0B0B] hover:scale-[1.02] transition-transform duration-300">
      <img
        src={src}
        alt={prompt || "Generated image"}
        className="w-full h-64 object-cover"
      />
      <div className="p-3">
        {prompt && (
          <p className="text-sm text-[#FFD700]/90 font-medium mb-1 truncate">
            {prompt}
          </p>
        )}
        {style && (
          <p className="text-xs text-[#00FFFF]/70 italic mb-1">{style}</p>
        )}
        {author && (
          <p className="text-xs text-gray-400">
            By: <span className="text-[#FFD700]">{author}</span>
          </p>
        )}
      </div>

      {isPublic && (
        <span className="absolute top-2 right-2 text-xs bg-[#00FFFF]/20 text-[#00FFFF] px-2 py-0.5 rounded-full border border-[#00FFFF]/40">
          Public
        </span>
      )}
    </div>
  );
}
