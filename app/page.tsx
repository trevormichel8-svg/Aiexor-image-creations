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
    const cleanedPrompt = prompt.trim();
    if (!cleanedPrompt) return;

    const finalPrompt = style === "None" ? cleanedPrompt : `${cleanedPrompt}, ${style}`;
    console.log("Generate:", finalPrompt);
  };

  return (
    <main className="min-h-screen flex flex-col items-center px-4 pt-14 pb-20">
      {/* HERO + GENERATOR */}
      <section className="w-full max-w-[420px] text-center hero-glow">
        <div className="flex justify-center mb-6">
          <div className="text-6xl gold-text font-bold">A</div>
        </div>

        <h1 className="text-[2.1rem] font-bold leading-tight mb-4">
  <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
    Welcome to Aiexor.com
  </span>
  <span className="block gold-text drop-shadow-[0_0_35px_rgba(255,179,71,0.6)]">
     Let Your Imagination Guide You
  </span>
</h1>

        <p className="text-sm text-muted mb-10 leading-relaxed">
  Turn your ideas into incredible AI art with Aiexor Image Generator
  powered by OPENAI.
  <br />
  Fast, easy, and limitless creativity at your fingertips.
</p>

        {/* GENERATOR CARD */}
        <div className="glass glow-border rounded-2xl p-5">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-left">
            AI Image Generator
          </h3>

          <div className="space-y-3">
            <input
              placeholder="Describe your image idea..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleGenerate();
              }}
            />

            <select value={style} onChange={(e) => setStyle(e.target.value)}>
              {styles.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <button
              className="btn-gold w-full py-3 text-sm"
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
      <section className="w-full max-w-[420px] mt-16 space-y-10">
        <div>
          <div className="text-xl mb-2"></div>
          <h4 className="font-semibold mb-1">Speed</h4>
          <p className="text-sm text-muted">
            Generate high-quality images in just seconds.
          </p>
        </div>

        <div>
          <div className="text-xl mb-2">💡</div>
          <h4 className="font-semibold mb-1">Creativity</h4>
          <p className="text-sm text-muted">
            Bring any concept to life with detailed, unique visuals.
          </p>
        </div>

        <div>
          <div className="text-xl mb-2">💎</div>
          <h4 className="font-semibold mb-1">Quality</h4>
          <p className="text-sm text-muted">
            Powered by OPENAI for stunning, high-resolution results.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-xs text-muted mt-20 text-center">
        Made with <span className="gold-text">❤</span> by Aiexor
        <br />© 2025 Aiexor
      </footer>
    </main>
  );
}
