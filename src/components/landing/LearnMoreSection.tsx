"use client";
import { Section, SectionTitle } from '@/components/landing/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Video, Instagram, FileText } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const learnMoreLinks = [
  {
    icon: Instagram,
    text: 'Explore Full Event Details on Instagram',
    href: 'https://www.instagram.com/p/DJJ5Wfgsxf2/?igsh=ZHFra21iOXlvdjBn',
  },
  {
    icon: FileText,
    text: 'Download Brochure (PDF)',
    href: 'https://firebasestorage.googleapis.com/v0/b/edc-pierc.appspot.com/o/Startup%20Demo%20Day%20investor.pdf?alt=media&token=74771085-142d-4130-99ed-a53888687537',
    download: true,
  },
];

export function LearnMoreSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <Section id="learn-more">
      <SectionTitle>Want to Know More?</SectionTitle>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
        }}
        className="flex flex-wrap justify-center gap-8 mt-10"
      >
        {learnMoreLinks.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="transition duration-300"
          >
            <Card className="w-[300px] sm:w-[400px] bg-background border border-muted shadow-md hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-shadow duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-accent/10 text-white rounded-full p-3 mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">{item.text}</h3>
                <Button
                  variant="outline"
                  className="border-primary text-white text-white hover:bg-primary hover:text-white transition-colors duration-300"
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
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
