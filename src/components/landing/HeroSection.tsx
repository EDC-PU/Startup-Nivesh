import { Button } from '@/components/ui/button';
import { Section } from '@/components/landing/Section';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  return (
    <Section id="hero" className="pt-24 md:pt-32 lg:pt-40 bg-gradient-to-b from-secondary via-background to-background">
      <div className="container mx-auto text-center">
        <Badge variant="outline" className="mb-4 border-primary/50 text-primary text-sm py-1 px-3">
          India’s Premier Demo Day
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Startup Nivesh 1.0 –</span>
          <span className="block text-primary">Where Funding is Not a Chance,</span>
          <span className="block text-primary">But a Commitment.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          India’s most outcome-driven Demo Day is here!
          30 handpicked startups. 20+ active investors. Assured minimum 3 startup investments — and many more possibilities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-transform duration-200" asChild>
            <Link href="https://docs.google.com/forms/d/19bLJhT-jui_GFCeY3S0Lldpyr8BVm4YDWwubr-76HJg/viewform?edit_requested=true&pli=1" scroll={false}>Apply Now &rarr;</Link>
          </Button>
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-foreground">Application Deadline:</p>
            <p className="text-lg font-bold text-primary">30th May 2025</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
