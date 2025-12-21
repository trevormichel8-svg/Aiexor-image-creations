import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? images.length - 1 : index - 1);
  const next = () =>
    setIndex(index === images.length - 1 ? 0 : index + 1);

  return (
    <div className="relative w-full bg-[#0B0B0B] border border-[#00FFFF]/30 rounded-lg p-2">
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="w-full h-64 object-cover rounded-md"
      />
      <div className="flex justify-between mt-2">
        <button
          onClick={prev}
          className="text-[#FFD700] font-bold hover:opacity-75"
        >
          ‹ Prev
        </button>
        <button
          onClick={next}
          className="text-[#00FFFF] font-bold hover:opacity-75"
        >
          Next ›
        </button>
      </div>
    </div>
  );
}
