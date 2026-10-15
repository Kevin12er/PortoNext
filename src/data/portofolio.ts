export type Project = {
  id: string;
  title: string;
  category?: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "learnbridge",
    title: "LearnBridge",
    category: "Fullstack Platform",
    description:
      "A comprehensive fullstack learning platform designed to connect instructors and students in one interactive experience, featuring class scheduling, learning materials, and student grading systems.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
    ],
    liveUrl: "https://www.learnbridge.fun/",
    githubUrl: "https://github.com/Kevin12er",
  },
];