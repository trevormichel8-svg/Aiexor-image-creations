"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #001510 0%, #003C3C 50%, #012120 100%)",
        color: "#E6C87F",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", background: "linear-gradient(90deg,#E6C87F,#48E0CC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        Aiexor.com is For Sale
      </h1>
      <p style={{ maxWidth: "650px", marginTop: "1rem", lineHeight: 1.6 }}>
        Aiexor.com combines <strong>AI</strong> and <strong>exploration</strong>
        — a short, futuristic, brand-ready name ideal for artificial intelligence,
        creative tech, or automation ventures.
      </p>

      <section style={{ marginTop: "2rem", maxWidth: "700px" }}>
        <h2>Why Aiexor.com is a Premium Domain</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
          <li>✔ Short, easy to pronounce, and 100% brandable</li>
          <li>✔ Natural synergy with AI, tech, and innovation fields</li>
          <li>✔ Backlinks from <strong>Medium</strong> and <strong>GitHub</strong></li>
          <li>✔ SEO trust signals and search visibility already established</li>
          <li>✔ Perfect for startups, AI tools, or SaaS platforms</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem", maxWidth: "700px" }}>
        <h2>Industries It Fits</h2>
        <p>
          Artificial Intelligence • SaaS • Tech Startups • Machine Learning • Automation •
          Creative Tools • Data Platforms • Design &amp; Branding • Digital Marketing
        </p>
      </section>

      <section style={{ marginTop: "2rem", maxWidth: "700px" }}>
        <h2>Built-In SEO &amp; Traffic Advantage</h2>
        <p>
          With backlinks from trusted sources and organic search presence, Aiexor.com
          saves new owners months of growth time — making it a smart acquisition for
          ambitious projects.
        </p>
      </section>

      <a
        href="mailto:aiexorcom7@gmail.com?subject=Offer for Aiexor.com"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          background:
            "linear-gradient(90deg, #E6C87F 0%, #48E0CC 100%)",
          color: "#000",
          padding: "1rem 2rem",
          borderRadius: "6px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Make an Offer
      </a>

      <p style={{ marginTop: "1.5rem" }}>
        Or visit the{" "}
        <a href="/generator" style={{ color: "#48E0CC" }}>
          Aiexor Image Creator
        </a>
        .
      </p>
    </main>
  );
        }
