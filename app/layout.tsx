import "./globals.css";

export const metadata = {
  title: "Aiexor – AI Image Creator",
  description: "Generate stunning AI art in seconds with Aiexor",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header>
          <h1 className="logo">
            Aiexor<span style={{ color: "#ffd700" }}>.</span>
          </h1>
          <nav>
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/login">Login</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          © {new Date().getFullYear()} Aiexor — Powered by AI & Creativity
        </footer>
      </body>
    </html>
  );
}
