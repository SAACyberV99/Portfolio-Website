import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SABER Ahmed Amine — Full-Stack Developer",
  description:
    "Portfolio of SABER Ahmed Amine — a full-stack developer crafting modern web experiences.",
  openGraph: {
    title: "SABER Ahmed Amine — Full-Stack Developer",
    description: "Portfolio of SABER Ahmed Amine — a full-stack developer crafting modern web experiences.",
    type: "website",
  },
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
