import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionTitle } from '@/components/landing/Section';
import { CheckCircle2, DollarSignIcon, UsersIcon, TrendingUpIcon, ListChecksIcon, MessageSquareIcon, BrainIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PropositionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const propositions: PropositionItem[] = [
  { icon: DollarSignIcon, title: 'Assured Funding', description: 'Not just a pitch — real investment Assured for at least 3 startups.' },
  { icon: UsersIcon, title: 'Top-tier Investors', description: 'Handpicked investors who are actually looking to invest.' },
  { icon: TrendingUpIcon, title: 'Massive Exposure', description: 'Present your startup to media, ecosystem enablers, and top mentors.' },
  { icon: ListChecksIcon, title: 'Curated Selection', description: 'Only the top 30 startups will be shortlisted for final pitching.' },
  { icon: BrainIcon, title: 'Mentorship & Pitch Training', description: 'For the final selected startups.' },
  { icon: MessageSquareIcon, title: 'One-on-One Investor Interactions', description: 'Real conversations that lead to real results.' },
];

export function ValuePropositionSection() {
  return (
    <Section id="why-apply">
      <SectionTitle>Why Apply for Startup Nivesh 1.0?</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {propositions.map((prop, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <prop.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl font-semibold">{prop.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{prop.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
