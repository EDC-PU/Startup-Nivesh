"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/landing/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";  
import { CalendarDays, Mic, Users, Award, Utensils } from "lucide-react";

const agenda = {
  format: "Day 1: Inauguration + Open Pitching | 22nd Jan 2026 (Thursday)",
  day1Title: "Day 1: Inauguration + Open Pitching | 22nd Jan 2026 (Thursday)",
  day1: [
    { time: "10:30 AM – 11:00 AM", activity: "Inauguration Ceremony of VSF 6.0", icon: CalendarDays },
    { time: "12:30 PM – 01:00 PM", activity: "Campus Visit", icon: Users },
    { time: "01:00 PM – 02:00 PM", activity: "Lunch", icon: Utensils },
    { time: "02:00 PM – 02:30 PM", activity: "Brief on Startup Nivesh 2.0", icon: Mic },
    { time: "02:30 PM – 03:30 PM", activity: "Open Pitching – Round 1 (7 startups | One-to-Many | 7 min each: 5-min presentation + 2-min Q&A)", icon: Mic },
    { time: "03:30 PM – 04:00 PM", activity: "High Tea", icon: Utensils },
    { time: "04:00 PM – 05:30 PM", activity: "Open Pitching – Round 2 (8 startups | One-to-Many)", icon: Mic },
    { time: "05:30 PM – 06:30 PM", activity: "Investor–Trustee Meeting with Top Management of Parul University", icon: Users },
    { time: "06:30 PM – 08:00 PM", activity: "Indoor/Outdoor Fun Activities & Games", icon: CalendarDays },
    { time: "08:00 PM – 09:30 PM", activity: "Networking Dinner", icon: Utensils },
  ],
  day2Title: "Day 2: Open Pitching + One-to-One Investor Discussions | 23rd Jan 2026 (Friday)",
  day2: [
    { time: "09:30 AM – 10:30 AM", activity: "Breakfast", icon: Utensils },
    { time: "10:30 AM – 01:00 PM", activity: "Open Pitching (15 startups | One-to-Many)", icon: Mic },
    { time: "01:00 PM – 02:00 PM", activity: "Lunch", icon: Utensils },
    { time: "02:00 PM – 03:30 PM", activity: "One-to-One Startup–Investor Discussions (3 startups per investor)", icon: Users },
    { time: "03:30 PM – 04:00 PM", activity: "High Tea", icon: Utensils },
    { time: "04:00 PM – 06:00 PM", activity: "One-to-One Startup–Investor Discussions (4 startups per investor)", icon: Users },
  ],
  day3Title: "Day 3: Final One-to-One Rounds + Valedictory | 24th Jan 2026 (Saturday)",
  day3: [
    { time: "09:30 AM – 10:30 AM", activity: "Breakfast", icon: Utensils },
    { time: "10:30 AM – 01:00 PM", activity: "One-to-One Startup–Investor Discussions (5 startups per investor)", icon: Users },
    { time: "01:00 PM – 02:00 PM", activity: "Lunch", icon: Utensils },
    { time: "02:00 PM – 03:30 PM", activity: "One-to-One Startup–Investor Discussions (3 startups per investor)", icon: Users },
    { time: "03:30 PM – 04:00 PM", activity: "High Tea", icon: Utensils },
    { time: "04:00 PM – 06:00 PM", activity: "Valedictory Ceremony + LoI Announcements", icon: Award },
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
