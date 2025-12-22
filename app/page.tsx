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
    if (!prompt.trim()) return;

    const finalPrompt =
      style === "None" ? prompt : `${prompt}, ${style}`;

    console.log("Generate:", finalPrompt);
  };

  return (
    <main className="min-h-screen flex flex-col items-center px-4 pt-20 pb-20">
      {/* HERO */}
      <section className="w-full max-w-[420px] text-center mb-16">
        <h1 className="text-[2.2rem] font-semibold leading-tight mb-6">
          <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            Aiexor.com
          </span>
          <span className="block gold-text drop-shadow-[0_0_35px_rgba(255,170,80,0.7)]">
            Let Your Imagination Run Wild.
          </span>
        </h1>

        <p className="text-sm text-gray-400 mb-12 leading-relaxed">
          Turn your ideas into incredible AI art  with Aiexor Image Creator powered by OPENAI.
          <br />
          Fast, easy, and limitless creativity at your fingertips.
        </p>

        {/* GENERATOR */}
        <div className="glass glow-border rounded-2xl p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-left">
             GPT-Image 1.5
          </h3>

          <div className="space-y-3">
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
              className="btn-gold w-full py-3"
              onClick={handleGenerate}
              disabled={!prompt.trim()}
              style={{
                opacity: prompt.trim() ? 1 : 0.6,
                cursor: prompt.trim() ? "pointer" : "not-allowed",
              }}
            >
              Generate Image
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full max-w-[420px] space-y-10">
        <div>
          <span className="icon-gold">⚡</span>
          <h4 className="font-semibold mt-2">Speed</h4>
          <p className="text-sm text-gray-400">
            Generate high-quality images in just seconds.
          </p>
        </div>

        <div>
          <span className="icon-gold">💡</span>
          <h4 className="font-semibold mt-2">Creativity</h4>
          <p className="text-sm text-gray-400">
            Bring any concept to life with detailed, unique visuals.
          </p>
        </div>

        <div>
          <span className="icon-gold">💎</span>
          <h4 className="font-semibold mt-2">Quality</h4>
          <p className="text-sm text-gray-400">
            Powered by OPENAI for stunning, high-resolution results.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-xs text-gray-500 mt-20 text-center">
        Made with <span className="gold-text">❤</span> by Aiexor
        <br />© 2025 Aiexor
      </footer>
    </main>
  );
}
