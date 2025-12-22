import "../styles/globals.css";

export const metadata = {
  title: "Aiexor.com",
  description:
    "Turning ideas into incredable  AI art with Aiexor Image Creator powered by OPENAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.5rem 0",
            background: "rgba(0,0,0,0.7)",
            borderBottom: "1px solid rgba(255,215,0,0.3)",
            boxShadow: "0 0 25px rgba(255,215,0,0.2)",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "2rem",
              fontWeight: 700,
              background:
                "linear-gradient(90deg, #FFD700 0%, #8B8000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 25px rgba(255,215,0,0.3)",
              letterSpacing: "1px",
            }}
          >
            Aiexor.com
          </h1>
        </header>

        <main>{children}</main>

        <footer
          style={{
            textAlign: "center",
            padding: "1.5rem",
            borderTop: "1px solid rgba(255,215,0,0.3)",
            background: "rgba(0,0,0,0.6)",
            color: "#bfbfbf",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} Aiexor.com — Turning ideas into stunning AI art.
        </footer>
      </body>
    </html>
  );
}
