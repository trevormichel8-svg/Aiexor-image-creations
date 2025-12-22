import "./globals.css";

export const metadata = {
  title: "Aiexor — AI Image Generator",
  description: "Create stunning AI images in seconds with Aiexor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* GOLD STREAK BACKGROUND */}
        <div className="streak-layer">
          <span className="streak" />
          <span className="streak" />
          <span className="streak" />
        </div>

        {children}
      </body>
    </html>
  );
}
