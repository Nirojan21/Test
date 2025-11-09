import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axela - Complete Business Solution for Everyone",
  description: "A complete business solution agency providing creative business solutions, web development, and digital marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


