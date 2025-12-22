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
        <div className="gold-streaks">
          <span className="gold-streak" />
          <span className="gold-streak" />
          <span className="gold-streak" />
        </div>

        {children}
      </body>
    </html>
  );
}
