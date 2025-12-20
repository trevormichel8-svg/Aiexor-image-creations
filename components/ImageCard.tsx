interface ImageCardProps {
  image_url: string;
  prompt: string;
  style?: string;
}

export default function ImageCard({ image_url, prompt, style }: ImageCardProps) {
  return (
    <div className="image-card">
      <img src={image_url} alt={prompt} />
      <div className="info">
        <p>{prompt}</p>
        {style && <small>{style}</small>}
      </div>
    </div>
  );
}
