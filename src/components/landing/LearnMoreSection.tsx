import { Section, SectionTitle } from '@/components/landing/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Video, Instagram, FileText } from 'lucide-react';

const learnMoreLinks = [
  {
    icon: Video,
    text: 'Watch Intro Video',
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
  },
  {
    icon: Instagram,
    text: 'Explore Full Event Details on Instagram',
    href: 'https://www.instagram.com/paruluniversity/', // Placeholder
  },
  {
    icon: FileText,
    text: 'Download Brochure (PDF)',
    href: '#', // Placeholder for PDF link
    download: true,
  },
];

export function LearnMoreSection() {
  return (
    <Section id="learn-more">
      <SectionTitle>Want to Know More?</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {learnMoreLinks.map((item, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <item.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">{item.text}</h3>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link href={item.href} target="_blank" rel="noopener noreferrer" download={item.download}>
                  {item.download ? 'Download' : 'Explore'}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
