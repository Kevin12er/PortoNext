import SectionTitle from "@/components/ui/section-title";
import Icon from "@/components/ui/Icon";

const education = [
  {
    title: "RevoU Fullstack Software Engineer",
    period: "2026",
  },
  {
    title: "Sarjanawiyata Tamansiswa University of Yogyakarta",
    period: "2016 — 2021",
  },
];

const experiences = [
  {
    title: "J&T Warehouse",
    points: [
      "Managed incoming and outgoing packages.",
      "Scanned items to ensure accurate package processing.",
      "Ensured packages were ready to be shipped to their destinations.",
      "delivery the package to the customer",
    ],
  },
  {
    title: "Space Roastery",
    points: [
      "Weighed coffee beans according to production requirements.",
      "Cleaned and sorted coffee beans.",
      "Packaged coffee products for distribution.",
      "ensuring that every package of coffee beans is on the correct shipping route",
    ],
  },
  {
    title: "Teacher Internship at SMP N 2 Sewon Bantul of yogyakarta",
    points: [
      "taking student attendance in class",
      "preparing learning materials in accordance with the available curriculum",
      "delivering lessons and teaching students in the classroom in accordance with the established curriculum and prepared materials",
      "Assigning tasks to students in class",
    ],
  },
];

export default function Resume() {
  return (
    <section>
      <SectionTitle>Resume</SectionTitle>

      <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
        <a
          href="/Kevin-Langga.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-line bg-card-soft px-4 py-2.5 text-xs font-semibold text-accent transition hover:border-accent hover:bg-accent hover:text-background md:text-sm"
        >
          <Icon name="FileText" size={16} />
          <span>Lihat Resume (PDF)</span>
          <Icon name="ExternalLink" size={14} />
        </a>
      </div>

      {/* Education */}
      <div className="mt-10">
        <h2 className="mb-8 text-2xl font-semibold">Education</h2>

        <div className="relative ml-2 border-l border-line pl-8">
          {education.map((item) => (
            <div key={item.title} className="relative pb-8 last:pb-2">
              <span className="absolute -left-9.5 top-1.5 size-4 rounded-full bg-accent" />

              <h3 className="text-lg font-semibold md:text-xl">
                {item.title}
              </h3>

              <p className="mt-2 text-accent">{item.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-14">
        <h2 className="mb-8 text-2xl font-semibold">Experience</h2>

        <div className="relative ml-2 border-l border-line pl-8">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="relative pb-10 last:pb-2"
            >
              <span className="absolute -left-9.5 top-1.5 size-4 rounded-full bg-accent" />

              <h3 className="text-lg font-semibold md:text-xl">
                {experience.title}
              </h3>

              <ul className="mt-3 space-y-2 text-muted">
                {experience.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 leading-relaxed"
                  >
                    <span className="absolute left-0 top-2.5 size-1.5 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}