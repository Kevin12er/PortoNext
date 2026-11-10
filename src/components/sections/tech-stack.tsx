"use client";

import SectionTitle from "@/components/ui/section-title";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siNestjs,
  siPrisma,
  siPostman,
  siTailwindcss,
  siNodedotjs,
  siPostgresql,
  siJest,
} from "simple-icons/icons";

const techStacks = [
  { name: "HTML", icon: siHtml5, color: "#E34F26" },
  { name: "CSS", icon: siCss, color: "#1572B6" },
  { name: "JavaScript", icon: siJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: siTypescript, color: "#3178C6" },
  { name: "React", icon: siReact, color: "#61DAFB" },
  { name: "Next.js", icon: siNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: siTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: siNodedotjs, color: "#5FA04E" },
  { name: "Nest.js", icon: siNestjs, color: "#E0234E" },
  { name: "PostgreSQL", icon: siPostgresql, color: "#4169E1" },
  { name: "Prisma ORM", icon: siPrisma, color: "#2BB0ED" },
  { name: "Jest", icon: siJest, color: "#C21325" },
  { name: "Postman", icon: siPostman, color: "#FF6C37" },
];

export default function Techstack() {
  return (
    <section>
      <SectionTitle>Tools</SectionTitle>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techStacks.map((tech) => (
          <div
            key={tech.name}
            className="group relative flex flex-col items-center justify-center gap-3.5 rounded-2xl border border-line bg-card-soft p-5 transition-all duration-300 hover:scale-[1.03] hover:border-accent/60 hover:shadow-lg"
          >
            {/* Glowing Icon Wrapper */}
            <div className="relative flex size-14 items-center justify-center rounded-xl border border-line/70 bg-card transition-transform duration-300 group-hover:scale-110">
              {/* Ambient colored light bloom */}
              <div
                className="absolute inset-0 rounded-xl opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-60"
                style={{ backgroundColor: tech.color }}
              />

              {/* Glowing Brand SVG Logo */}
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="relative size-8 transition-all duration-300"
                style={{
                  fill: tech.color,
                  filter: `drop-shadow(0 0 7px ${tech.color}aa)`,
                }}
                aria-label={tech.name}
              >
                <path d={tech.icon.path} />
              </svg>
            </div>

            <p className="text-center text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}