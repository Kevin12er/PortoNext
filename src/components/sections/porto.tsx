"use client";

import SectionTitle from "@/components/ui/section-title";
import { projects } from "@/data/portofolio";
import Icon from "@/components/ui/Icon";

export default function Portofolio() {
  return (
    <section>
      <SectionTitle>Portofolio</SectionTitle>
      <p className="mt-3 text-sm text-muted md:text-base leading-relaxed">
        A selection of things I&apos;ve designed, built, and shipped.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
          >
            <div className="flex flex-1 flex-col p-6">
              {/* Header: Icon & Category */}
              <div className="flex items-center justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-xl border border-line bg-card-soft text-accent transition-transform duration-300 group-hover:scale-105">
                  <Icon name="FolderCode" size={22} />
                </span>

                {project.category && (
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {project.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="mt-4 font-serif-display text-lg font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-line bg-card-soft px-2.5 py-1 text-xs font-medium text-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex items-center justify-between gap-3 border-t border-line bg-card-soft/50 px-6 py-4">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-accent"
                >
                  <Icon name="Github" size={16} />
                  <span>GitHub</span>
                </a>
              ) : (
                <span />
              )}
              <a
                href={`/portofolio/${project.id}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-accent/40 hover:text-accent"
              >
                <span>Studi Kasus</span>
                <Icon name="ExternalLink" size={12} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}