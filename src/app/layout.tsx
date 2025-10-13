import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Create by Adi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
