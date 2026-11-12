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
      <SectionTitle>Resume</SectionTitle>

      <div className="mb-8 mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <a
          href="/Kevin_ATS_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-card-soft px-4 py-2.5 text-xs font-semibold text-accent transition hover:border-accent hover:bg-accent hover:text-background md:text-sm"
        >
          <Icon name="FileText" size={16} />
          <span>Resume (PDF)</span>
          <Icon name="ExternalLink" size={14} />
        </a>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-line bg-card-soft/60 p-4 sm:p-5 lg:p-6">
          <h2 className="mb-5 sm:mb-7 text-xl sm:text-2xl font-semibold text-foreground">
            Education
          </h2>

          <div className="relative border-l border-line pl-6">
            {education.map((item) => (
              <div key={item.title} className="relative pb-6 sm:pb-8 last:pb-0">
                <span className="absolute left-[-16px] top-2 size-4 rounded-full border-2 border-card bg-accent shadow-[0_0_0_4px_rgba(121,92,255,0.12)]" />

                <div className="rounded-2xl border border-line bg-card px-4 py-4 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-base sm:text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-card-soft/60 p-4 sm:p-5 lg:p-6">
          <h2 className="mb-5 sm:mb-7 text-xl sm:text-2xl font-semibold text-foreground">
            Experience
          </h2>

          <div className="relative border-l border-line pl-6">
            {experiences.map((experience) => (
              <div key={experience.title} className="relative pb-6 sm:pb-8 last:pb-0">
                <span className="absolute left-[-16px] top-2 size-4 rounded-full border-2 border-card bg-accent shadow-[0_0_0_4px_rgba(121,92,255,0.12)]" />

                <div className="rounded-2xl border border-line bg-card px-4 py-4 shadow-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base sm:text-lg font-semibold leading-snug">
                      {experience.title}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-dim whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>

                  <ul className="mt-3 sm:mt-4 space-y-2 text-sm text-muted">
                    {experience.points.map((point) => (
                      <li key={point} className="relative pl-4 leading-relaxed">
                        <span className="absolute left-0 top-[0.65rem] size-1.5 rounded-full bg-accent" />
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
