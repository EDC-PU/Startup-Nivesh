import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from "@vercel/analytics/next";
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/landing/Header';
import BubbleEffect from '@/components/landing/BubbleEffect';

export const metadata: Metadata = {
  title: 'Startup Nivesh 2.0 - Funding Committed',
  description:
    'India’s most outcome-driven Demo Day. 30 handpicked startups. 20+ active investors. Assured minimum 3 startup investments.',
  keywords: [
    'Startup Funding India',
    'Demo Day India 2025',
    'Startup Nivesh 2.0',
    'Indian Startup Investors',
    'Angel Investors India',
    'VC Funding India',
    'Venture Capital India',
    'Seed Funding India',
    'Early Stage Startup Funding',
    'Growth Stage Investment',
    'Investor Startup Matchmaking',
    'Startup Pitch Event India',
    'Fundraising Event for Startups',
    'Entrepreneurship Event India',
    'Startup Investment Platform',
    'Startup Ecosystem India',
    'Private Equity India',
    'Business Angels India',
    'Startup Expo India',
    'Startup Mentorship India',
    'Indian Startup Growth',
    'Investment Opportunities India',
    'Raising Capital in India',
    'Startup Demo Day Asia',
    'Startup Networking India',
    'Investor Startup Meetings',
    'Startup Deal Closure',
    'Startup Showcase India',
    'Startup Accelerator India',
    'Best Startup Funding Events',
    'Indian Angel Networks',
    'Startup Fundraising 2025',
  ],
  authors: [{ name: 'Startup Nivesh Team' }],
  openGraph: {
    title: 'Startup Nivesh 2.0 - Where Ambition Meets Capital',
    description:
      'India’s most outcome-driven investment platform. 30 Startups. 20+ Investors. 3 Assured Deals.',
    url: 'https://startupnivesh.pierc.org',
    siteName: 'Startup Nivesh 2.0',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://startupnivesh.pierc.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Startup Nivesh 2.0',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Nivesh 2.0 - India’s Demo Day for Real Investments',
    description:
      '30 startups. 20+ investors. 3 days of real funding opportunities.',
    images: ['https://startupnivesh.pierc.org/og-image.png'],
    creator: '@startupnivesh',
  },
  // GEO Tags
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
  metadataBase: new URL('https://startupnivesh.pierc.org'),
  alternates: {
    canonical: 'https://startupnivesh.pierc.org',
  },
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
