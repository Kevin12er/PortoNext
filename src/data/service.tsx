import type { IconName } from "@/components/ui/Icon";

export type Service = {
  title: string;
  description: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    title: "REST API Development",
    description:
      "Building scalable, structured backend services and RESTful APIs using NestJS, Node.js, and Postman for testing.",
    icon: "Server",
  },
  {
    title: "Database Modeling",
    description:
      "Designing efficient relational database schemas, relations, and migrations with PostgreSQL and Prisma ORM.",
    icon: "Database",
  },
  {
    title: "Authentication & Authorization",
    description:
      "Implementing secure user auth workflows, JWT token validation, password hashing, and role-based access control.",
    icon: "ShieldCheck",
  },
  {
    title: "Responsive Web Design",
    description:
      "Crafting mobile-first, pixel-perfect, and interactive interfaces using Next.js, React, and Tailwind CSS.",
    icon: "Layout",
  },
  {
    title: "Unit Testing",
    description:
      "Writing automated tests and verifying core business logic to ensure code quality, reliability, and maintainability.",
    icon: "TestTube",
  },
];