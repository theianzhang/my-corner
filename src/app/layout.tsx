import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import GoogleAnalytics from "@/components/Tracking/GoogleAnalytics";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ian's Corner",
  description: "Personal website of Ian Zhang",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A1A1A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className} suppressHydrationWarning>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'G-3NE0TCYVJY'} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}