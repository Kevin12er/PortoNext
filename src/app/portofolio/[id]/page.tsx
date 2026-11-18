import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/data/case-studies";
import SectionTitle from "@/components/ui/section-title";
import Icon from "@/components/ui/Icon";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ id: cs.id }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cs = getCaseStudy(id);

  if (!cs) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link
          href="/#portfolio"
          className="hover:text-accent transition"
        >
          Kembali ke Portofolio
        </Link>
        <span>/</span>
        <span className="text-foreground">{cs.title}</span>
      </nav>

      {/* Hero Card */}
      <div className="mb-10 rounded-3xl border border-line bg-card-soft p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Icon name="Layout" size={16} className="text-accent" />
          <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {cs.title}
          </h1>
        </div>
        <p className="text-sm text-muted leading-relaxed max-w-md">
          {cs.excerpt}
        </p>
      </div>

      <SectionTitle>Studi Kasus</SectionTitle>

      <div className="space-y-6">
        {/* Project Overview Card */}
        <section className="rounded-2xl border border-line bg-card-soft p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="FileText" size={16} className="text-accent" />
            <h2 className="text-xl font-semibold text-foreground">
              Project Overview
            </h2>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            {cs.overview}
          </p>
        </section>

        {/* The Problem Card */}
        <section className="rounded-2xl border border-line bg-card-soft p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="AlertTriangle" size={16} className="text-accent" />
            <h2 className="text-xl font-semibold text-foreground">
              {cs.problem.title}
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm text-muted leading-relaxed list-disc pl-6">
            {cs.problem.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {/* Solution Card */}
        <section className="rounded-2xl border border-line bg-card-soft p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="Zap" size={16} className="text-accent" />
            <h2 className="text-xl font-semibold text-foreground">
              {cs.solution.title}
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm text-muted leading-relaxed list-disc pl-6">
            {cs.solution.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {/* Key Capabilities Card */}
        {cs.capabilities && (
          <section className="rounded-2xl border border-line bg-card-soft p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Rocket" size={16} className="text-accent" />
              <h2 className="text-xl font-semibold text-foreground">
                {cs.capabilities.title}
              </h2>
            </div>
            <ul className="space-y-2.5 text-sm text-muted leading-relaxed list-disc pl-6">
              {cs.capabilities.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack Card */}
        <section className="rounded-2xl border border-line bg-card-soft p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="Database" size={16} className="text-accent" />
            <h2 className="text-xl font-semibold text-foreground">
              Technical Stack
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(cs.techStack).map(([category, items]) => (
              <div
                key={category}
                className="rounded-xl border border-line/50 bg-card p-4"
              >
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul className="space-y-1 text-xs text-muted leading-relaxed">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-0.5 size-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Impact Card */}
        <section className="rounded-2xl border border-accent/25 bg-accent/5 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="Gauge" size={16} className="text-accent" />
            <h2 className="text-xl font-semibold text-foreground">
              Implementation Impact
            </h2>
          </div>
          <p className="text-sm text-muted leading-relaxed italic">
            {cs.impact}
          </p>
        </section>

        {/* Links Card */}
        <section className="rounded-2xl border border-line bg-card-soft p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="ExternalLink" size={16} className="text-accent" />
            <h2 className="text-xl font-semibold text-foreground">
              Link & Referensi
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {cs.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent hover:bg-accent/5"
              >
                <span>{link.label}</span>
                <Icon name="ExternalLink" size={12} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
