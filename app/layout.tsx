import "../styles/globals.css";

export const metadata = {
  title: "Aiexor.com",
  description:
    "Turning ideas into incredible AI art with Aiexor Image Creator powered by OpenAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Background glow overlay */}
        <div className="background-lights"></div>

        {/* Header */}
        <header className="main-header">
          <h1 className="logo-text">Aiexor.com</h1>
        </header>

        <main className="content">{children}</main>

        {/* Footer */}
        <footer className="main-footer">
          © {new Date().getFullYear()} Aiexor.com — Turning ideas into stunning AI art.
        </footer>
      </body>
    </html>
  );
}
