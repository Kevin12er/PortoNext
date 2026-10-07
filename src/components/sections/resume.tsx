import SectionTitle from "@/components/ui/section-title";

const education = [
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
    ],
  },
  {
    title: "Space Roastery",
    points: [
      "Weighed coffee beans according to production requirements.",
      "Cleaned and sorted coffee beans.",
      "Packaged coffee products for distribution.",
    ],
  },
  {
    title: "BATAN Cleaning Service",
    points: [
      "Cleaned and maintained the sports building.",
      "Maintained and cleaned the surrounding building grounds.",
    ],
  },
];

export default function Resume() {
  return (
    <section>
      <SectionTitle>Resume</SectionTitle>

      {/* Education */}
      <div className="mt-10">
        <h2 className="mb-8 text-2xl font-semibold">Education</h2>

        <div className="relative ml-2 border-l border-line pl-8">
          {education.map((item) => (
            <div key={item.title} className="relative pb-2">
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