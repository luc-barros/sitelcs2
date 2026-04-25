import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Lucas | Portfolio",
  description: "Support Analyst & Backend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent-light`}>
        {children}
      </body>
    </html>
  );
}
