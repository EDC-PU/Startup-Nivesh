 "use client"
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '@/components/landing/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Mic, Users, Award } from 'lucide-react';

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
    <Section  id="agenda" className="bg-secondary">
      <SectionTitle>Event Agenda</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-12">
       
          {/* Day 1 agenda card */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <CalendarDays className="h-7 w-7" />
                {agenda.format}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {agenda.day1.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">{item.time}:</span> {item.activity}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Day 2 agenda card */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <CalendarDays className="h-7 w-7" />
                {agenda.day2Title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {agenda.day2.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">{item.time}:</span> {item.activity}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        
      </div>
    </Section>
  );
}
