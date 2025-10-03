'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionTitle } from '@/components/landing/Section';
import {
  Award,
  CalendarDays,
  Users,
  MapPin,
  ListChecks,
  DollarSign,
  Handshake,
  CalendarClock,
  Mail,
  Phone,
  Building2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FactItem {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}

const facts: FactItem[] = [
  { icon: Award, title: 'Event Name', value: 'Startup Nivesh 2.0' },
  { icon: CalendarDays, title: 'Event Dates', value: '22nd-24 Jan 2025' },
  { icon: DollarSign, title: 'Funding Cap', value: '20 Lacs - 1 Crore' },
  { icon: Building2, title: 'Organized By', value: 'PIERC, Parul University' },
  { icon: MapPin, title: 'Location', value: 'Vadodara, Gujarat (Parul University Campus)' },
  { icon: ListChecks, title: 'Startups Selected', value: 'Top 30 from across India' },
  { icon: DollarSign, title: 'Assured Investment', value: 'Minimum 3 startups will be funded' },
  { icon: Handshake, title: 'Investors Joining', value: '20+ reputed investors & VCs' },
  { icon: CalendarClock, title: 'Application Deadline', value: '5th November 2025' },
  { icon: Mail, title: 'Email Contact', value: 'startupnivesh.pierc@paruluniversity.ac.in', href: 'mailto:startupnivesh.pierc@paruluniversity.ac.in' },
  { icon: Phone, title: 'Phone Contact', value: '+91 6358915335 | +91 9016229329', href: 'tel:+916358915335' },
];

export function QuickFactsSection() {
  return (
    <Section id="facts" className="bg-transparent">
      <SectionTitle>Quick Facts</SectionTitle>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group bg-purple-700 bg-opacity-70 backdrop-blur-md text-white shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_4px_rgba(168,85,247,0.4)]">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <fact.icon className="h-8 w-8 text-purple-200 transition-colors duration-300 group-hover:text-white" />
                <CardTitle className="text-lg font-semibold">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {fact.href ? (
                  <a
                    href={fact.href}
                    className="text-sm text-purple-100 group-hover:text-white transition-colors duration-300 break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fact.value}
                  </a>
                ) : (
                  <p className="text-sm text-purple-100 group-hover:text-white transition-colors duration-300 break-words">
                    {fact.value}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
