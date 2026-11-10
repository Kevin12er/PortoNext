import SectionTitle from "@/components/ui/section-title";
import ServiceCard from "@/components/ui/service-card";
import { services } from "@/data/service";

const highlights = [
  "Backend Developer",
  "REST APIs & Databases",
  "High Attention to Detail",
  "Learning by Building",
];

export default function About() {
  return (
    <section>
      <SectionTitle>About Me</SectionTitle>

      {/* Main Bio Card */}
      <div className="mt-6 rounded-2xl border border-line bg-card-soft p-5 md:p-7">
        <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
          <p className="text-base font-normal text-foreground/95 md:text-lg">
            I am a{" "}
            <span className="font-semibold text-foreground">
              junior Backend developer
            </span>{" "}
            who values honest self-assessment and{" "}
            <span className="font-medium text-accent">
              learning by building
            </span>
            . This helps me grow quickly, ask for help early, and give realistic
            progress updates on real tasks.
          </p>

          <p>
            As part of the Faculty phase of my RevoU program, I am building{" "}
            <span className="font-semibold text-foreground">LearnBridge</span>,
            a fullstack web application that helps teachers create learning
            materials and questions anytime, from anywhere. I have implemented
            automatic grading for multiple-choice questions, so teachers can see
            results immediately and follow each student&apos;s progress.
          </p>

          <p>
            Before moving into tech, I worked in a coffee shop packaging orders,
            which taught me strong attention to detail. Through building
            LearnBridge, I developed technical skills in responsive,
            mobile-first frontend interfaces with{" "}
            <span className="font-medium text-foreground">
              Next.js, TypeScript, and Tailwind CSS
            </span>
            , plus REST APIs with{" "}
            <span className="font-medium text-foreground">
              NestJS and Prisma ORM
            </span>
            , testing endpoints in{" "}
            <span className="font-medium text-foreground">Postman</span>.
          </p>

          <p className="border-l-2 border-accent pl-4 font-normal text-foreground/90 italic">
            &ldquo;With hands-on experience building a fullstack application and
            a habit of learning by doing, I am ready to contribute to a team and
            grow quickly through real-world work.&rdquo;
          </p>
        </div>

        {/* Highlight Badges */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-line/60 pt-5">
          {highlights.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-line/70 bg-card px-3 py-1.5 text-xs font-medium text-dim transition hover:border-accent hover:text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* What I'm Doing Section */}
      <div className="mb-5 mt-10">
        <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
          What I&apos;m Doing
        </h3>
        <p className="mt-1 text-sm text-muted">
          Core technical competencies and development focus areas.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            className={
              index === services.length - 1 && services.length % 2 !== 0
                ? "md:col-span-2"
                : ""
            }
          />
        ))}
      </ul>
    </section>
  );
}