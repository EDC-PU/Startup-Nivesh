import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionTitle } from '@/components/landing/Section';
import { Award, CalendarDays, Users, MapPin, ListChecks, DollarSign, Handshake, CalendarClock, Mail, Phone, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FactItem {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}

const facts: FactItem[] = [
  { icon: Award, title: 'Event Name', value: 'Startup Nivesh 1.0' },
  { icon: CalendarDays, title: 'Event Dates', value: '27-28 June 2025' },
  { icon: DollarSign, title: 'Funding Cap', value: '20 Lacs - 1 Crore' },
  { icon: Building2, title: 'Organized By', value: 'PIERC, Parul University' },
  { icon: MapPin, title: 'Location', value: 'Vadodara, Gujarat (Parul University Campus)' },
  { icon: ListChecks, title: 'Startups Selected', value: 'Top 30 from across India' },
  { icon: DollarSign, title: 'Assured Investment', value: 'Minimum 3 startups will be funded' },
  { icon: Handshake, title: 'Investors Joining', value: '20+ reputed investors & VCs' },
  { icon: CalendarClock, title: 'Application Deadline', value: '30th May 2025' },
  { icon: Mail, title: 'Email Contact', value: 'startupnivesh.pierc@paruluniversity.ac.in', href: 'mailto:startupnivesh.pierc@paruluniversity.ac.in' },
  { icon: Phone, title: 'Phone Contact', value: '+91 6358915335 | +91 9016229329', href: 'tel:+916358915335' },
  
];

export function QuickFactsSection() {
  return (
    <Section id="facts" className="bg-secondary">
      <SectionTitle>Quick Facts</SectionTitle>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {facts.map((fact, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <fact.icon className="h-8 w-8 text-primary" />
              <CardTitle className="text-lg font-semibold">{fact.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 flex-grow">
              {fact.href ? (
                <a href={fact.href} className="text-sm text-muted-foreground hover:text-primary transition-colors break-words" target="_blank" rel="noopener noreferrer">
                  {fact.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground break-words">{fact.value}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
