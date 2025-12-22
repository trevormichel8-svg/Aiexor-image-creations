export default function FeatureGrid() {
  const features = [
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
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1.5rem",
        maxWidth: "900px",
        margin: "5rem auto 3rem auto",
        padding: "0 1rem",
      }}
    >
      {features.map((f) => (
        <div
          key={f.title}
          style={{
            background: "rgba(26, 26, 26, 0.85)",
            border: "1px solid #FFD700",
            borderRadius: "12px",
            textAlign: "center",
            padding: "2rem 1.5rem",
            color: "#f5f5f5",
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.15)",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget.style.transform = "scale(1.05)");
            (e.currentTarget.style.boxShadow =
              "0 0 30px rgba(255, 215, 0, 0.4)");
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.style.transform = "scale(1)");
            (e.currentTarget.style.boxShadow =
              "0 0 20px rgba(255, 215, 0, 0.15)");
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              color: "#FFD700",
              marginBottom: "0.8rem",
            }}
          >
            {f.icon}
          </div>
          <h3
            style={{
              color: "#FFD700",
              marginBottom: "0.5rem",
              fontSize: "1.3rem",
            }}
          >
            {f.title}
          </h3>
          <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: 1.6 }}>
            {f.text}
          </p>
        </div>
      ))}
    </section>
  );
}
