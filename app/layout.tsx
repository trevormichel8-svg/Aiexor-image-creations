import "../styles/globals.css";
import AnimatedBackground from "../components/AnimatedBackground";

export const metadata = {
  title: "Aiexor.com",
  description: "Turning ideas into stunning AI art with Aiexor Image Creator powered by OpenAI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Subtle animated background */}
        <AnimatedBackground />

        {/* Simplified Header */}
        <header>
          <h1
            className="logo"
            style={{
              color: "#00e0d8",
              fontFamily: "Orbitron, sans-serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              letterSpacing: "1px",
              textShadow: "0 0 10px rgba(0, 224, 216, 0.5)",
            }}
          >
            Aiexor Image Creator
          </h1>
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} Aiexor.com — Turning ideas into stunning AI art
        </footer>
      </body>
    </html>
  );
}
