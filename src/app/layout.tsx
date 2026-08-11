import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: "DigitalKiss — Development of Games, Websites, Mobile Apps, NFT & Design",
  description:
    "Професійна розробка веб-сайтів, мобільних додатків, 2D/3D дизайну, анімації, ігор та NFT від компанії DigitalKiss. Базове SEO у подарунок до кожного проекту.",
  keywords: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Games", "Websites", "Mobile Apps", "NFT", "DigitalKiss", "SEO"],
  authors: [{ name: "DigitalKiss" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "DigitalKiss — Games, Websites, Mobile Apps, NFT",
    description: "Професійна IT-розробка, маркетинг та дизайн під ключ.",
    url: "https://digitalkiss.com.ua",
    siteName: "DigitalKiss",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className="dark scroll-smooth"
    >
      <body className="bg-zinc-950 text-zinc-100 font-sans min-h-screen selection:bg-cyan-500 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
