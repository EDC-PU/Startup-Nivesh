import { Section } from '@/components/landing/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, CalendarClock, MapPin, Mail, Phone } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <Section id="apply-now-final" className="bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <Rocket className="h-16 w-16 mx-auto mb-6 text-accent-foreground animate-bounce" />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Final Call to All Indian Startups!
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Apply now. Secure your chance to be funded at one of the most outcome-driven demo days of 2025.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 shadow-xl transform hover:scale-105 transition-transform duration-200"
            asChild
          >
            <Link href="https://docs.google.com/forms/d/19bLJhT-jui_GFCeY3S0Lldpyr8BVm4YDWwubr-76HJg/viewform?edit_requested=true&pli=1" scroll={false}>Apply Now &rarr;</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <InfoCard icon={CalendarClock} title="Application Deadline" value="30th May 2025" />
            <InfoCard icon={MapPin} title="Event Venue" value="Parul University, Vadodara" />
            <div className="md:col-span-2 lg:col-span-1">
                <InfoCard icon={Mail} title="Email Us" value="startupnivesh.pierc@paruluniversity.ac.in" href="mailto:startupnivesh.pierc@paruluniversity.ac.in" />
            </div>
            <InfoCard icon={Phone} title="Call Us (Option 1)" value="+91 6358915335" href="tel:+916358915335" />
            <InfoCard icon={Phone} title="Call Us (Option 2)" value="+91 9016229329" href="tel:+919016229329" />
        </div>
        <p className="mt-12 text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} PIERC, Parul University. All rights reserved.
        </p>
      </div>
    </Section>
  );
}

interface InfoCardProps {
    icon: React.ElementType;
    title: string;
    value: string;
    href?: string;
}

function InfoCard({ icon: Icon, title, value, href }: InfoCardProps) {
    const content = href ? <Link href={href} className="hover:underline break-all" target="_blank" rel="noopener noreferrer">{value}</Link> : <span className="break-all">{value}</span>;
    return (
        <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg shadow-sm">
            <Icon className="h-6 w-6 text-accent-foreground/80 mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold text-primary-foreground/90">{title}</h4>
                <p className="text-sm text-primary-foreground/80">{content}</p>
            </div>
        </div>
    );
}
