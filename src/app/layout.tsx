import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feast - Your Kitchen Companion",
  description:
    "The intelligent way to plan, shop, and cook. Your AI team of Nutritionist, Dietitian, Chef & Coach — all in your pocket.",
  openGraph: {
    title: "Feast - Your Kitchen Companion",
    description:
      "AI-powered meal planning for the modern kitchen. Plan smarter, shop easier, cook better.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
