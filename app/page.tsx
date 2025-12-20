'use client';
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');

  const generateImage = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImage(data.image);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Aiexor AI Image Generator</h1>
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="p-3 w-80 text-black rounded mb-4"
        placeholder="Enter your prompt..."
      />
      <button
        onClick={generateImage}
        className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-500"
      >
        Generate
      </button>
      {image && (
        <img src={image} alt="Generated" className="mt-6 rounded shadow-lg w-96" />
      )}
    </main>
  );
}
