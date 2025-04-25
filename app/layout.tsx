import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Providers from "@/app/providers";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Aura Landing Page",
  description: "A modern landing page built with Next.js and Tailwind CSS",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground font-sans antialiased h-screen flex flex-col overflow-x-hidden max-w-[100vw]`}>
        <Providers>
          <Navbar />
          <main className="flex-grow pt-16 w-full">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
