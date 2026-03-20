import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feast — Your AI Meal Planning Companion",
  description:
    "Feast plans your meals through natural conversation. Your AI team of Dietitian, Chef & Coach learns what you love and gets smarter every week.",
  openGraph: {
    title: "Feast — Your AI Meal Planning Companion",
    description:
      "Your AI team of Dietitian, Chef & Coach. Meal planning through natural conversation.",
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
