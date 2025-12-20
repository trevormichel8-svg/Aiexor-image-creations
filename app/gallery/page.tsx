"use client";

import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/images/explore")
      .then((res) => res.json())
      .then(setImages);
  }, []);

  return (
    <section className="gallery">
      <h2>Public AI Art Feed</h2>
      <div className="gallery-grid">
        {images.length > 0 ? (
          images.map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={img.image_url} alt={img.prompt} />
              <p>{img.prompt}</p>
            </div>
          ))
        ) : (
          <p>No images yet.</p>
        )}
      </div>
    </section>
  );
}
