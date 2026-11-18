"use client";

import SectionTitle from "@/components/ui/section-title";
import Icon from "@/components/ui/Icon";

const education = [
  {
    title: "RevoU Fullstack Software Engineer",
    period: "2026",
    description:
      "Program intensif yang fokus pada pengembangan aplikasi web modern, API, database, dan deployment.",
  },
  {
    title: "Sarjanawiyata Tamansiswa University of Yogyakarta",
    period: "2016 — 2021",
    description:
      "Lulus dengan fokus pada pengembangan kemampuan analitis, komunikasi, dan kerja tim dalam lingkungan akademik.",
  },
];

const experiences = [
  {
    title: "J&T Warehouse",
    period: "2022 — 2024",
    points: [
      "Managed incoming and outgoing packages.",
      "Scanned items to ensure accurate package processing.",
      "Ensured packages were ready to be shipped to their destinations.",
      "Delivered packages to customers efficiently and on time.",
    ],
  },
  {
    title: "Space Roastery",
    period: "2021 — 2022",
    points: [
      "Weighed coffee beans according to production requirements.",
      "Cleaned and sorted coffee beans.",
      "Packaged coffee products for distribution.",
      "Ensured every package of coffee beans followed the correct shipping route.",
    ],
  },
  {
    title: "Teacher Internship at SMP N 2 Sewon Bantul of Yogyakarta",
    period: "2020 — 2021",
    points: [
      "Taking student attendance in class.",
      "Preparing learning materials in accordance with the curriculum.",
      "Delivering lessons and teaching students according to the schedule and curriculum.",
      "Assigning tasks to students in class and evaluating their progress.",
    ],
  },
];

export default function Resume() {
  return (
    <section className="pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SectionTitle>Resume</SectionTitle>
        <a
          href="/Kevin_ATS_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-card px-4 py-2.5 text-xs font-semibold text-accent transition-all hover:border-accent/40 hover:bg-accent-soft md:text-sm"
        >
          <Icon name="FileText" size={16} />
          <span>Resume (PDF)</span>
          <Icon name="ExternalLink" size={14} />
        </a>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Education Column */}
        <div className="rounded-3xl border border-line bg-card p-6 sm:p-8">
          <h3 className="font-serif-display mb-6 text-xl font-medium text-foreground sm:text-2xl">
            Education
          </h3>

          <div className="relative border-l border-line pl-6">
            {education.map((item) => (
              <div key={item.title} className="relative pb-8 last:pb-0">
                <span className="absolute left-[-29px] top-1.5 size-3.5 rounded-full border-2 border-card bg-accent" />

                <div className="rounded-2xl border border-line bg-card-soft p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.period}
                  </p>
                  <h4 className="mt-2 font-serif-display text-lg font-medium leading-snug text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="rounded-3xl border border-line bg-card p-6 sm:p-8">
          <h3 className="font-serif-display mb-6 text-xl font-medium text-foreground sm:text-2xl">
            Experience
          </h3>

          <div className="relative border-l border-line pl-6">
            {experiences.map((experience) => (
              <div key={experience.title} className="relative pb-8 last:pb-0">
                <span className="absolute left-[-29px] top-1.5 size-3.5 rounded-full border-2 border-card bg-accent" />

                <div className="rounded-2xl border border-line bg-card-soft p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-serif-display text-lg font-medium leading-snug text-foreground">
                      {experience.title}
                    </h4>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dim whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-sm text-muted">
                    {experience.points.map((point) => (
                      <li key={point} className="relative pl-4 leading-relaxed">
                        <span className="absolute left-0 top-[0.55rem] size-1.5 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}