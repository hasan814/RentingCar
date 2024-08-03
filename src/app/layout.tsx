import type { Metadata } from "next";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Renting Car App",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
