"use client";

import { useState } from "react";

const styles = [
  "None",
  "Photorealistic",
  "Oil Painting",
  "Watercolor",
  "Charcoal Sketch",
  "Pencil Drawing",
  "Digital Painting",
  "Pixel Art",
  "Low Poly 3D",
  "Line Art",
  "Cartoon",
  "Anime",
  "Manga Ink",
  "Cyberpunk",
  "Steampunk",
  "Futuristic Sci-Fi",
  "Fantasy Illustration",
  "Concept Art",
  "Abstract Expressionism",
  "Impressionism",
  "Minimalism",
  "Pop Art",
  "Cubism",
  "Surrealism",
  "Vector Art",
  "Isometric",
  "Flat Design",
  "Matte Painting",
  "Graffiti",
  "Street Art",
  "3D Render",
  "Glitchcore",
  "Vaporwave",
  "Synthwave",
  "Dark Fantasy",
  "Baroque",
  "Renaissance",
  "Ukiyo-e",
  "Art Nouveau",
  "Art Deco",
  "Retro Futurism",
  "Chiaroscuro",
  "Ink Wash",
  "Pastel Drawing",
  "Realism",
  "Expressionism",
  "Psychedelic",
  "Comic Book",
  "Noir",
  "Digital Collage",
  "Photo Collage",
  "Claymation",
  "Stop Motion",
  "Paper Cut",
  "Neon Glow",
  "Infrared",
  "Long Exposure",
  "Macro Photography",
  "Cinematic Lighting",
  "Studio Portrait",
  "Film Grain",
  "Bokeh",
  "HDR",
  "Lofi Aesthetic",
  "Dreamcore",
  "Cottagecore",
  "Nature Photography",
  "Wildlife Art",
  "Landscape Painting",
  "Seascape",
  "Space Art",
  "Galaxy Scene",
  "AI-Generated Abstract",
  "Brush Stroke",
  "Ink Pen",
  "Stencil",
  "Graffiti Marker",
  "Mixed Media",
  "Mosaic",
  "Stained Glass",
  "Embroidery",
  "Pixel Mosaic",
  "Wireframe",
  "Blueprint",
  "Digital Wireframe",
  "Retro Game",
  "8-bit Art",
  "16-bit Art",
  "Comic Pop",
  "Kawaii",
  "Linework Tattoo",
  "Geometric Pattern",
  "Fractal Design",
  "Neural Dream",
  "AR/VR Hologram",
  "Photobash",
  "Real-Time Render",
  "Motion Blur",
  "AI Glow",
];

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState(styles[0]);

  const handleGenerate = () => {
    const finalPrompt =
      style === "None" ? prompt : `${prompt}, ${style}`;
    console.log("Generate:", finalPrompt);
  };

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16">
      {/* HERO */}
      <section className="max-w-4xl text-center">
        <div className="flex justify-center mb-4">
          <div className="text-5xl gold-text font-bold">A</div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Create <span className="gold-text">Stunning AI Images</span>
          <br /> in Seconds.
        </h1>

        <p className="text-muted max-w-2xl mx-auto mb-10">
          Turn your ideas into incredible visuals with Aiexor’s powerful AI
          image generator. Fast, easy, and limitless creativity at your
          fingertips.
        </p>

        {/* GENERATOR */}
        <div className="glass glow-border rounded-2xl p-6 max-w-xl mx-auto">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            🤖 AI Image Generator
          </h3>

          <div className="space-y-4">
            <input
              placeholder="Describe your image idea..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              {styles.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <button
              className="btn-gold w-full"
              onClick={handleGenerate}
            >
              Generate Image
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 max-w-5xl w-full mt-20">
        {[
          {
            title: "Speed",
            icon: "⚡",
            text: "Generate high-quality images in just seconds.",
          },
          {
            title: "Creativity",
            icon: "💡",
            text: "Bring any concept to life with detailed, unique visuals.",
          },
          {
            title: "Quality",
            icon: "💎",
            text: "Powered by advanced AI for stunning, high-resolution results.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="glass glow-border rounded-xl p-6 text-center"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h4 className="font-semibold mb-2 gold-text">{item.title}</h4>
            <p className="text-muted text-sm">{item.text}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="text-muted text-sm mt-20 text-center">
        <p className="mb-2">
          Made with <span className="gold-text">❤</span> by Aiexor
        </p>
        <p>© 2025 Aiexor</p>
      </footer>
    </main>
  );
}
