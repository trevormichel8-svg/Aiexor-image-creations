import "./globals.css";

export const metadata = {
  title: "Aiexor – AI Image Creator",
  description: "Generate stunning AI art in seconds with Aiexor",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1 className="logo">Aiexor</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/login">Login</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">© {new Date().getFullYear()} Aiexor</footer>
      </body>
    </html>
  );
}
