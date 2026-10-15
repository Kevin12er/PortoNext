// import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import type { IconName } from "@/components/ui/Icon";

export type Contact = {
  label: string;
  value: string;
  icon: IconName;
};

export type Social = {
  name: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  contacts: Contact[];
  socials: Social[];
  about: string[];
};

export const profile: Profile = {
  name: "Kevin Langga",
  role: "Junior Web Developer",
  contacts: [
    { label: "email", value: "kikoirfan45@gmail.com", icon: "Mail" },
    { label: "phone", value: "085842503952", icon: "Phone" },
    { label: "birthday", value: "5 August 1997", icon: "Calendar" },
    { label: "location", value: "Yogyakarta, Indonesia", icon: "MapPin" },
  ],
  socials: [
    { name: "Github", href: "https://github.com/Kevin12er" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kevin-langga-a0303a355/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/eatbiscuits9?stkn=d2huczByM2tjb2tu@utm_source=gr",
    },
    { name: "TikTok", href: "https://www.tiktok.com/@hehehew07" },
  ],
  about: [
    "I am a junior fullstack engineer who values honest self-assessment and learning by building. This helps me grow quickly, ask for help early, and give realistic progress updates on real tasks.",
    "As part of the Faculty phase of my RevoU program, I am building LearnBridge, a fullstack web application that helps teachers create learning materials and questions anytime, from anywhere. I have implemented automatic grading for multiple-choice questions, so teachers can see results immediately and follow each student's progress.",
    "Before moving into tech, I worked in a coffee shop packaging orders, which taught me attention to detail. Through building LearnBridge, I developed technical skills in responsive, mobile-first frontend interfaces with Next.js, TypeScript, and Tailwind CSS, plus REST APIs with NestJS and Prisma ORM, testing endpoints in Postman.",
    "With hands-on experience building a fullstack application and a habit of learning by doing, I am ready to contribute to a team and grow quickly through real-world work.",
  ],
};
