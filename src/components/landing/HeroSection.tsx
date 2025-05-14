'use client';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/landing/Section';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="pt-24 md:pt-32 lg:pt-40 bg-transparent text-primary-foreground"
    >
      <div className="container mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Badge
            variant="outline"
            className="border-primary/50 text-primary text-sm py-1 px-3 transition-colors duration-300 hover:border-primary hover:bg-primary/10"
          >
            India’s Premier Demo Day
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl group"
        >
          <span className="block leading-snug group-hover:opacity-90 transition-opacity duration-300">
            Startup Nivesh 1.0 –
          </span>
          <span className="block text-primary text-3xl leading-snug group-hover:text-accent transition-colors duration-300">
            Where Funding is Not a Chance,
          </span>
          <span className="block text-primary text-3xl leading-snug group-hover:text-accent transition-colors duration-300">
            But a Commitment.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl transition-opacity duration-300 hover:opacity-90"
        >
          India’s most outcome-driven Demo Day is here!
          30 handpicked startups. 20+ active investors. Assured minimum 3 startup investments — and many more possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg transform transition duration-200 hover:scale-105 hover:shadow-xl active:scale-100"
            asChild
          >
            <Link href="https://docs.google.com/forms/d/19bLJhT-jui_GFCeY3S0Lldpyr8BVm4YDWwubr-76HJg/viewform">
              Apply Now &rarr;
            </Link>
          </Button>

          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-foreground">Application Deadline:</p>
            <p className="text-lg font-bold text-primary transition-colors duration-300 hover:text-accent">
              30th May 2025
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
