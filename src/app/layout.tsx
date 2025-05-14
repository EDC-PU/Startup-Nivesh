import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from "@vercel/analytics/next";
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/landing/Header';
import BubbleEffect from '@/components/landing/BubbleEffect';


export const metadata: Metadata = {
  title: 'Startup Nivesh 1.0 - Funding Commited',
  description: 'India’s most outcome-driven Demo Day. 30 handpicked startups. 20+ active investors. Assured minimum 3 startup investments.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        
        <Header />
         <Analytics />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
