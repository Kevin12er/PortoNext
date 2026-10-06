import SectionTitle from "@/components/ui/section-title";
import ServiceCard from "@/components/ui/service-card";
import { profile } from "@/data/profile";
import { services } from "@/data/service";

export default function About() {
  return (
    <section>
      <SectionTitle>About Me</SectionTitle>

      <div className="space-y-4 font-light text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mb-4 mt-8 text-xl font-medium">What I&apos;m Doing</h3>
      <ul className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </ul>
    </section>
  );
}