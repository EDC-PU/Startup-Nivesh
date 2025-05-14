"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/landing/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Mic, Users, Award } from "lucide-react";

const agenda = {
  format: "Day 1: Startup Pitches + Networking Lounge | June 27, 2025",
  day1: [
    { time: "Morning", activity: "PIERC Briefing + Campus Tour", icon: CalendarDays },
    { time: "Afternoon", activity: "Startup Pitches: 7-min each (One-to-Many Format)", icon: Mic },
    { time: "Late Afternoon", activity: "Investor Shortlisting (Based on Interest)", icon: Users },
    { time: "Evening", activity: "Cultural Evening + Gala Dinner + Networking", icon: CalendarDays },
  ],
  day2Title: "Day 2: Investor Panels + Final Pitch Rounds | June 28, 2025",
  day2: [
    { time: "Morning", activity: "Panel Discussion (30–40 mins)", icon: Users },
    { time: "Late Morning", activity: "Final 1:1 Startup-Investor Pitch Rounds (30–60 min each)", icon: Mic },
    { time: "Afternoon", activity: "LOI Announcement", icon: Award },
  ],
};

export function EventAgendaSection() {
  return (
    <Section id="agenda" className="bg-secondary py-16">
      <SectionTitle>Event Agenda</SectionTitle>

      <div className="max-w-4xl mx-auto space-y-12 px-4">
        {[ 
          { title: agenda.format, items: agenda.day1 },
          { title: agenda.day2Title, items: agenda.day2 },
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
                        <span className="font-semibold">{item.time}:</span>{" "}
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
