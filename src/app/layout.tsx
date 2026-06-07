import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Powers the app-screen mockups' uppercase mono labels (timestamps, tags),
// matching the Feast app's monospace type. Exposed as a CSS variable.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Feast - Your AI Kitchen Companion",
  description:
    "The intelligent way to plan, shop, and cook. Your AI team of Nutritionist, Dietitian, Chef & Coach — all in your pocket.",
  openGraph: {
    title: "Feast - Your AI Kitchen Companion",
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
    <html
      lang="en"
      className={`${inter.className} ${jetbrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
