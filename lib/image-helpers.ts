// Utility functions for working with generated images

export function formatPrompt(prompt: string, style?: string): string {
  return `${prompt.trim()}${style ? ` in ${style} style` : ""}`;
}

export function getImageFilename(prompt: string): string {
  const clean = prompt.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  return `${clean}_${Date.now()}.png`;
}

export function placeholderImage(): string {
  return "https://placehold.co/600x600/0B0B0B/FFD700?text=Aiexor+Image";
}
