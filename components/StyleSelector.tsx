interface Props {
  value: string;
  onChange: (style: string) => void;
}

const styles = [
  "Luxury Gold", "Cyber Neon", "Dark Fantasy", "Oil Painting",
  "Pixel Art", "Watercolor", "Sketch", "3D Render", "Anime Dreamscape",
  "Cinematic", "Realistic Portrait", "Fantasy Landscape",
  "Minimal Tech", "Charcoal Drawing", "Line Art"
];

export default function StyleSelector({ value, onChange }: Props) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {styles.map((s) => (
        <option key={s}>{s}</option>
      ))}
    </select>
  );
      }
