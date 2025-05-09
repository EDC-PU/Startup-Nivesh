import { Section, SectionTitle } from '@/components/landing/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Video, Instagram, FileText } from 'lucide-react';

const learnMoreLinks = [
  {
    icon: Instagram,
    text: 'Explore Full Event Details on Instagram',
    href: 'https://www.instagram.com/p/DJJ5Wfgsxf2/?igsh=ZHFra21iOXlvdjBn', // Placeholder
  },
  {
    icon: FileText,
    text: 'Download Brochure (PDF)',
    href: 'https://firebasestorage.googleapis.com/v0/b/edc-pierc.appspot.com/o/Startup%20Demo%20Day%20investor.pdf?alt=media&token=74771085-142d-4130-99ed-a53888687537', // Placeholder for PDF link
    download: true,
  },
];

export function LearnMoreSection() {
  return (
    <Section id="learn-more">
  <SectionTitle>Want to Know More?</SectionTitle>
  <div className="flex flex-wrap justify-center gap-8">
    {learnMoreLinks.map((item, index) => (
      <Card key={index} className="w-[500px] shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center">
        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
          <item.icon className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-4">{item.text}</h3>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              download={item.download}
            >
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
