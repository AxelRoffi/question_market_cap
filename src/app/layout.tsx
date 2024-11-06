import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Providers } from "./providers/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuestionMarketCap",
  description: "A decentralized opinion exchange platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}