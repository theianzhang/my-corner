import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Ian's Corner",
  description: "Personal website of Ian Zhang",
  icons: {
    icon: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
