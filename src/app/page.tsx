import Head from 'next/head';
import React from "react";
import { HeroSection } from '@/components/landing/HeroSection';
import { QuickFactsSection } from '@/components/landing/QuickFactsSection';
import { ValuePropositionSection } from '@/components/landing/ValuePropositionSection';
import { EligibilitySection } from '@/components/landing/EligibilitySection';
import { ApplicationProcessSection } from '@/components/landing/ApplicationProcessSection';
import { EventAgendaSection } from '@/components/landing/EventAgendaSection';
import { LearnMoreSection } from '@/components/landing/LearnMoreSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import BubbleEffect from '@/components/landing/BubbleEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Startup Nivesh 2.0 – India’s Premier Demo Day for Startup Funding | PIERC</title>
        <meta
          name="description"
          content="Apply to Startup Nivesh 2.0 – India’s most outcome-driven demo day hosted by PIERC at Parul University. 30 startups. 20+ investors. Assured investments."
        />
        <meta
          name="keywords"
          content="Startup Nivesh, demo day India, startup funding 2026, pitch to investors, Parul University startups, Indian startup events"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Startup Nivesh 2.0 – Assured Funding for Indian Startups" />
        <meta property="og:description" content="30 startups. 20+ investors. Real funding guaranteed. Apply by November 5th, 2025." />
        <meta property="og:url" content="https://startupnivesh.pierc.org" />
        <meta property="og:image:secure_url" content="https://www.pierc.org/assets/mainBgImage.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Startup Nivesh 2.0 – Assured Startup Funding in India" />
        <meta name="twitter:description" content="Pitch your startup at India’s most result-oriented demo day. Hosted by PIERC, Parul University." />
        <meta name="twitter:image:secure_url" content="https://www.pierc.org/assets/mainBgImage.png" />
        <link rel="canonical" href="https://startupnivesh.pierc.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Startup Nivesh 2.0",
              startDate: "2026-01-21",
              endDate: "2026-01-23",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: "Parul University",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Waghodia Road",
                  addressLocality: "Vadodara",
                  postalCode: "391760",
                  addressCountry: "IN",
                },
              },
              image: ["https://www.pierc.org/assets/mainBgImage.png"],
              description:
                "India’s most outcome-driven startup demo day with 30 top startups and 20+ investors. Assured funding for at least 3 startups.",
              organizer: {
                "@type": "Organization",
                name: "PIERC, Parul University",
                url: "https://pierc.org",
              },
              performer: {
                "@type": "Organization",
                name: "Startup Nivesh Team",
              },
            }),
          }}
        />
      </Head>
      <main className="flex flex-col min-h-screen relative">
        
      <div id="bubble-container" className="bubble-container fixed top-0 left-0 w-full h-full z-10 pointer-events-none"></div>
        <BubbleEffect />
        <div className="bg-gradient-to-b from-[#0f0f10] via-[#150020] to-[#3f0071] text-white">
          <HeroSection />
          <QuickFactsSection />
        </div>
        <ValuePropositionSection />
        <EligibilitySection />
        <ApplicationProcessSection />
        <EventAgendaSection />
         <div className="bg-gradient-to-b from-[#0f0f10] via-[#150020] to-[#3f0071] text-white">
            <LearnMoreSection />
           <FaqSection />
            <FinalCtaSection />
        </div>   
      </main>
    </>
  );
}
