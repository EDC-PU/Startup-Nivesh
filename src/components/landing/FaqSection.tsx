import { Section, SectionTitle, SectionSubtitle } from '@/components/landing/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { runFaqGenerator, type FAQItem } from '@/ai/flows/runFaqGenerator';


// This text would ideally be dynamically constructed from all page sections.
// For simplicity in this example, we'll use a predefined summary.
const landingPageContentSummary = `
Startup Nivesh 2.0 is an outcome-driven Demo Day by PIERC, Parul University in Vadodara, Gujarat on 21-23 January, 2026.
It connects 30 selected startups with 20+ investors, guaranteeing funding for at least 3 startups.
Benefits include assured funding, top-tier investor access, media exposure, mentorship, and 1:1 investor meetings.
Open to MVP, revenue, or scaling stage startups from any sector in India.
Application process: Form -> Shortlisting -> Finalist Announcement -> Pitch Training -> Live Pitch.
Application deadline: 9th November, 2025. Contact: startupnivesh.pierc@paruluniversity.ac.in, +91 6358915335, +91 9016229329.
Physical presence required if selected.
`;

const sampleFaqs: FAQItem[] = [
  {
    question: "Q1. Where will this event happen?",
    answer: "It will take place at the Parul University Campus, Vadodara, Gujarat."
  },
  {
    question: "Q2. What stage startups can apply?",
    answer: "Any startup that is ready to pitch — MVP, early-revenue, or scaling."
  },
  {
    question: "Q3. What happens if I am not selected in Top 30?",
    answer: "You still gain visibility within our investor pool. We keep all profiles for future matchmaking."
  },
  {
    question: "Q4. Who are the investors?",
    answer: "We have a mix of angel investors, micro VCs, and sector-specific funders. Names will be revealed closer to the event."
  },
  {
    question: "Q5. Will everyone get a chance to pitch?",
    answer: "Only the top 30 startups (out of all applications) will be shortlisted for pitching on the Demo Day."
  },
  {
    question: "Q6. Do I need to be physically present?",
    answer: "Yes. If selected, you must pitch live at PIERC, Parul University on 21-23 January, 2026."
  }
];

export async function FaqSection() {
  let faqs: FAQItem[] = [];

  try {
    const generatedFaqs = await runFaqGenerator(landingPageContentSummary);
    if (generatedFaqs && generatedFaqs.length > 0) {
      faqs = generatedFaqs;
    } else {
      console.warn("AI FAQ generation returned no FAQs or an empty list. Using sample FAQs as fallback.");
      faqs = sampleFaqs;
    }
  } catch (error) {
    console.error("Error generating FAQs with AI model:", error);
    // Fallback to sample FAQs in case of any error
    faqs = sampleFaqs;
  }

  if (!faqs || faqs.length === 0) {
    // This case should ideally not be hit if sampleFaqs is always populated,
    // but as a final fallback, ensure we have something to render.
    console.warn("No FAQs available (neither generated nor sample). Using default sample FAQs.");
    faqs = sampleFaqs;
  }


  return (
    <Section id="faq" className="bg-transparent">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <SectionSubtitle>
        Got questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, feel free to reach out.
      </SectionSubtitle>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-b-0">
              <AccordionTrigger className="text-left hover:no-underline text-lg font-medium py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 pt-0 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
