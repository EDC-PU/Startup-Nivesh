import { Section, SectionTitle } from '@/components/landing/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, Award, Presentation, Goal } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Fill the Application Form',
    description: 'Submit your startup details through our online application form.',
    icon: FileText,
    action: {
      text: 'Link to Form 🔗',
      href: '#apply-now-final', // Placeholder link
    },
  },
  {
    step: 2,
    title: 'Shortlisting by Expert Committee',
    description: 'Our committee will review applications and select promising startups.',
    icon: Users,
  },
  {
    step: 3,
    title: 'Finalists (Top 30) Announced',
    description: 'The top 30 selected startups will be notified and announced.',
    icon: Award,
  },
  {
    step: 4,
    title: 'Attend Virtual Pitch Training',
    description: 'Finalists will receive mentorship and training to refine their pitches.',
    icon: Presentation,
  },
  {
    step: 5,
    title: 'Pitch Live & Secure Investment',
    description: 'Present your startup live at the event to investors and secure funding.',
    icon: Goal,
  },
];

export function ApplicationProcessSection() {
  return (
    <Section id="process">
      <SectionTitle>Application Process</SectionTitle>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
          {processSteps.map((item, index) => (
            <div key={item.step} className="relative md:flex md:items-start">
              {/* Circle and Icon for desktop */}
              <div className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                <item.icon className="w-6 h-6" />
              </div>

              <Card className={`w-full md:w-10/12 shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:ml-auto md:mr-[8.333%]' : 'md:mr-auto md:ml-[8.333%]'}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 md:hidden">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Step {item.step}: {item.title}
                    </h3>
                  </div>
                  <h3 className="hidden md:block text-xl font-semibold text-primary mb-2">
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  {item.action && (
                    <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Link href={item.action.href}>{item.action.text}</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
