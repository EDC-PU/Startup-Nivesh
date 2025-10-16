"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/landing/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";  
import { CalendarDays, Mic, Users, Award, Utensils, PartyPopper, Handshake } from "lucide-react";

const agenda = {
  day1Title: "Day 1: Inauguration + Open Pitching | 21st Jan 2026",
  day1: [
    { activity: "Inauguration Ceremony of VSF 6.0", icon: PartyPopper },
    { activity: "Brief on Startup Nivesh 2.0", icon: Mic },
    { activity: "Open Pitching", icon: Mic },
    { activity: "Indoor/Outdoor Fun Activities & Games", icon: CalendarDays },
    { activity: "Networking Dinner", icon: Utensils },
  ],
  day2Title: "Day 2: Open Pitching + One-to-One Investor Discussions | 22nd Jan 2026",
  day2: [
    { activity: "Open Pitching", icon: Mic },
    { activity: "One-to-One Startup–Investor Discussions", icon: Users },
  ],
  day3Title: "Day 3: Final One-to-One Rounds + Valedictory | 23rd Jan 2026",
  day3: [
    { activity: "One-to-One Startup–Investor Discussions", icon: Users },
    { activity: "Valedictory Ceremony", icon: Award },
    { activity: "LoI Announcements", icon: Handshake },
  ],
};

export function EventAgendaSection() {
  return (
    <Section id="agenda" className="bg-secondary py-16">
      <SectionTitle>Event Agenda</SectionTitle>

      <div className="max-w-4xl mx-auto space-y-12 px-4">
        {[ 
          { title: agenda.day1Title, items: agenda.day1 },
          { title: agenda.day2Title, items: agenda.day2 },
          { title: agenda.day3Title, items: agenda.day3 },

        ].map((day, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-accent border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <CalendarDays className="h-7 w-7" />
                  {day.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {day.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <item.icon className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        {item.activity}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
