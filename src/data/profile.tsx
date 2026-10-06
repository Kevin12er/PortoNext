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
    { name: "LinkedIn", href: "https://www.linkedin.com/in/kevin-langga-a0303a355/" },
    { name: "Instagram", href: "https://www.instagram.com/eatbiscuits9?stkn=d2huczByM2tjb2tu@utm_source=gr" },
    { name: "TikTok", href: "https://www.tiktok.com/@hehehew07" },
  ],
  about: [
    "Hey i am Kevin langga, a junior web developer who start to build career as a fullstack software engineer",
    "I am currently starting to learn several tech stacks for web development, such as React, Next.js, NestJS, Prisma ORM, and Postman",
    ". Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use"
  ],
};
