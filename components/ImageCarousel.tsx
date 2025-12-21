"use client";
import React, { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  if (images.length === 0)
    return <p className="text-center text-[#FFD700]">No images yet.</p>;

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-lg border border-[#FFD700]/30">
        <img
          src={images[current]}
          alt={`Generated image ${current + 1}`}
          className="w-full object-cover"
        />
      </div>
      <div className="flex justify-between w-full max-w-lg mt-3">
        <button onClick={prev} className="text-[#00FFFF] hover:text-[#FFD700] transition">
          ◀ Prev
        </button>
        <p className="text-sm text-[#CCCCCC]">
          {current + 1} / {images.length}
        </p>
        <button onClick={next} className="text-[#00FFFF] hover:text-[#FFD700] transition">
          Next ▶
        </button>
      </div>
    </div>
  );
}
