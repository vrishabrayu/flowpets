import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "FLOWPETS PRIVATE LIMITED | Premium Organic Rose & Lotus Petal Cones",
  description:
    "FLOWPETS PRIVATE LIMITED manufactures premium organic rose and lotus petal cones with vibrant natural color, soothing aroma, and eco-friendly packaging.",
  metadataBase: new URL("https://www.flowpets.com"),
  keywords: [
    "FLOWPETS",
    "organic rose petal cones",
    "organic lotus petal cones",
    "natural petal cones",
    "premium floral cones",
    "eco-friendly incense alternative",
    "chemical free cones"
  ],
  openGraph: {
    title: "FLOWPETS PRIVATE LIMITED",
    description:
      "Premium organic rose and lotus petal cones crafted from the finest petals.",
    type: "website",
    url: "https://www.flowpets.com"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-gradient-to-b from-flowpets-light/20 via-white to-flowpets-beige/40">
        {children}
      </body>
    </html>
  );
}

