import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionTitle } from '@/components/landing/Section';
import {
  CheckCircle2,
  DollarSignIcon,
  UsersIcon,
  TrendingUpIcon,
  ListChecksIcon,
  MessageSquareIcon,
  BrainIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PropositionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const propositions: PropositionItem[] = [
  { icon: DollarSignIcon, title: 'Funding That’s Real', description: 'Not promises, but cheques.Deals between ₹20 Lakhs – ₹2 Crore.' },
  { icon: UsersIcon, title: 'Investor-First Platform ', description: 'Curated investors who are actively deploying.' },
  { icon: TrendingUpIcon, title: 'Visibility & Validation ', description: 'National media spotlight, ecosystem credibility, mentor access.' },
  { icon: ListChecksIcon, title: 'Elite Selection', description: 'Only 30 startups get into the final arena.' },
  { icon: BrainIcon, title: 'Investor Readiness', description: 'Pitch training & mentorship before the big stage.' },
  { icon: MessageSquareIcon, title: 'Focused Conversations' , description: '1:1 meetings that go beyond “let’s connect later.”' },
];

export function ValuePropositionSection() {
  return (
    <Section id="why-apply">
      <SectionTitle>Why Apply for Startup Nivesh 2.0?</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {propositions.map((prop, index) => (
          <Card
            key={index}
            className="group bg-card text-card-foreground shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_4px_rgba(168,85,247,0.25)] border border-transparent hover:border-purple-500"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <prop.icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-purple-400" />
                <CardTitle className="text-xl font-semibold">{prop.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {prop.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
