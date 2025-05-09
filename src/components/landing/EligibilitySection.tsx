 "use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionTitle } from '@/components/landing/Section';
import { Briefcase, Rocket, Users, BarChart } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// Custom MapPin icon
function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const eligibilityCriteria = [
  { icon: Rocket, text: "Startups at MVP, revenue, or scaling stage" },
  { icon: Briefcase, text: "Any sector or domain" },
  { icon: MapPin, text: "From any part of India" },
  { icon: Users, text: "Startup teams with a strong pitch and vision to grow" },
  { icon: BarChart, text: "Prior funding is not a barrier — we welcome all growth-stage founders" },
];

export function EligibilitySection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Section id="eligibility" className="bg-secondary">
      <SectionTitle>Who Can Apply?</SectionTitle>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
        }}
      >
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">This opportunity is for:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {eligibilityCriteria.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
}
