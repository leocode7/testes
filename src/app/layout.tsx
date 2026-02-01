import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Testes",
  description: "Para testes diversos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Link href={"/"}>Home</Link>
        {children}
      </body>
    </html>
  );
}
