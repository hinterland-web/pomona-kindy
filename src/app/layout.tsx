import type { Metadata } from "next";
import {Mulish } from "next/font/google";
import "./globals.css";
import { Navbar101, Navbar1Defaults } from "@/components/main-layout/NavBar";
import { Footer2, Footer2Defaults } from "@/components/main-layout/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pomona Kindy",
  description: "Where Imagination Moves Mountains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navbar101 {...Navbar1Defaults} />
        
        {children}
        <Footer2 {...Footer2Defaults} />
      </body>
    </html>
  );
}
