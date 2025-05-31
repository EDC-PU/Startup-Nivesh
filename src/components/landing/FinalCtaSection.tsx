'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/landing/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, CalendarClock, MapPin, Mail, Phone } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function FinalCtaSection() {
  return (
    <Section
      id="apply-now-final"
      className="py-8 md:py-12 lg:py-24 bg-transparent text-primary-foreground
                 "
    >
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Rocket className="h-16 w-16 mx-auto text-accent-foreground animate-bounce" />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Final Call to All Indian Startups!
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Apply now. Secure your chance to be funded at one of the most outcome-driven demo days of 2025.
        </p>

        <motion.div variants={fadeInUp} className="mt-10">
          <Button
            size="lg"
            className="bg-white hover:bg-accent/90 text-black text-lg px-10 py-6 
                       border-2 border-accent shadow-[0_0_20px_rgba(99,102,241,0.6)] 
                       hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] 
                       transform hover:scale-105 transition duration-300"
            asChild
          >
            <Link
              href="https://docs.google.com/forms/d/19bLJhT-jui_GFCeY3S0Lldpyr8BVm4YDWwubr-76HJg/viewform?edit_requested=true&pli=1"
              target="_blank"
            >
              Apply Now &rarr;
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {infoCards.map((card, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <InfoCard {...card} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p className="mt-12 text-sm text-primary-foreground/70" variants={fadeInUp}>
          © {new Date().getFullYear()} PIERC, Parul University. All rights reserved.
        </motion.p>
      </motion.div>
    </Section>
  );
}

const infoCards = [
  { icon: CalendarClock, title: 'Application Deadline', value: '8th June, 2025' },
  { icon: MapPin, title: 'Event Venue', value: 'Parul University, Vadodara' },
  { icon: Mail, title: 'Email Us', value: 'startupnivesh.pierc@paruluniversity.ac.in', href: 'mailto:startupnivesh.pierc@paruluniversity.ac.in' },
  { icon: Phone, title: 'Call Us (Option 1)', value: '+91 6358915335', href: 'tel:+916358915335' },
  { icon: Phone, title: 'Call Us (Option 2)', value: '+91 9016229329', href: 'tel:+919016229329' },
];

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}

function InfoCard({ icon: Icon, title, value, href }: InfoCardProps) {
  const content = href ? (
    <Link href={href} className="hover:underline break-all" target="_blank" rel="noopener noreferrer">
      {value}
    </Link>
  ) : (
    <span className="break-all">{value}</span>
  );

  return (
    <div
      className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg shadow-sm 
                 border border-accent/20 hover:border-accent 
                 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] 
                 transition duration-300"
    >
      <Icon className="h-6 w-6 text-accent-foreground/80 mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-primary-foreground/90">{title}</h4>
        <p className="text-sm text-primary-foreground/80">{content}</p>
      </div>
    </div>
  );
}
