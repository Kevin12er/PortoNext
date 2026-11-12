export type Project = {
  id: string;
  title: string;
  category?: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  schemaUrl?: string;
  prdUrl?: string;
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
    githubUrl: "https://github.com/Kevin12er/learnbridge",
    docsUrl: "https://crack-be-kevin12er-production.up.railway.app/api/docs",
    schemaUrl: "https://dbdiagram.io/d/6a62dfbf067336e1dee4986f",
    prdUrl: "https://drive.google.com/file/d/1jmhUheUohZRcQgqp_sYDKkUnre-nWYr2/view?usp=drive_link",
  },
  {
    id: "revoshop",
    title: "RevoShop",
    category: "E-Commerce App",
    description:
      "Full-stack e-commerce platform featuring product listings, detailed product views, shopping cart management, a dedicated dashboard for item updates, category-based related products, and seamless client-side navigation.",
    tech: ["Next.js", "React", "Tailwind CSS", "React Icons"],
    liveUrl: "https://milestone-3-kevin12er-ylzm.vercel.app/",
    githubUrl: "https://github.com/Revou-FSSE-Feb26/milestone-3-Kevin12er",
  },
  {
    id: "revofun",
    title: "RevoFun",
    category: "Interactive Games",
    description:
      "A collection of interactive web-based games including Whack-a-Mole, Typing Game, Guess Number, Rock-Paper-Scissors, and Memory Card Game, featuring real-time timers, score tracking, and responsive design.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://revou-fsse-feb26.github.io/milestone-2-Kevin12er/",
    githubUrl: "https://github.com/Revou-FSSE-Feb26/milestone-2-Kevin12er",
  },
];
