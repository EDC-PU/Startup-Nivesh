import { HeroSection } from '@/components/landing/HeroSection';
import { QuickFactsSection } from '@/components/landing/QuickFactsSection';
import { ValuePropositionSection } from '@/components/landing/ValuePropositionSection';
import { EligibilitySection } from '@/components/landing/EligibilitySection';
import { ApplicationProcessSection } from '@/components/landing/ApplicationProcessSection';
import { EventAgendaSection } from '@/components/landing/EventAgendaSection';
import { LearnMoreSection } from '@/components/landing/LearnMoreSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <QuickFactsSection />
      <ValuePropositionSection />
      <EligibilitySection />
      <ApplicationProcessSection />
      <EventAgendaSection />
      <LearnMoreSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
