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
} from "simple-icons/icons";

const techStacks = [
  { name: "HTML", icon: siHtml5 },
  { name: "CSS", icon: siCss },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Nest.js", icon: siNestjs },
  { name: "Prisma ORM", icon: siPrisma },
  { name: "Postman", icon: siPostman },
  { name: "Tailwind CSS", icon: siTailwindcss },
];

export default function Techstack() {
  return (
    <section>
      <SectionTitle>Tools</SectionTitle>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {techStacks.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-card-soft p-5 transition hover:border-accent"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="size-10 transition group-hover:scale-110"
              aria-label={tech.name}
            >
              <path d={tech.icon.path} />
            </svg>

            <p className="text-center font-semibold group-hover:text-accent">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}