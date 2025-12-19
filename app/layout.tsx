import "./../styles/globals.css";

export const metadata = {
  title: "Aiexor – AI Image Creator & Premium Domain",
  description: "Generate stunning AI images or acquire Aiexor.com, a premium domain for AI ventures.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
