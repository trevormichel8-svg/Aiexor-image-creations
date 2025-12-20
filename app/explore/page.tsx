"use client";

import { useEffect, useState } from "react";
import ImageCard from "@/components/ImageCard";

export default function ExplorePage() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/images/explore")
      .then((res) => res.json())
      .then(setImages);
  }, []);

  return (
    <section className="explore">
      <h2>Explore Public Creations</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <ImageCard key={i} {...img} />
        ))}
      </div>
    </section>
  );
      }
