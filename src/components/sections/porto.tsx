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

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between rounded-2xl border border-line bg-card-soft p-5 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/5 md:p-6"
          >
            <div>
              {/* Header: Icon & Category */}
              <div className="flex items-center justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-xl border border-line/70 bg-card text-accent transition-transform duration-300 group-hover:scale-105">
                  <Icon name="FolderCode" size={22} />
                </span>

                {project.category && (
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {project.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-accent md:text-xl">
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
                    className="rounded-lg border border-line/60 bg-card px-2.5 py-1 text-xs font-medium text-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-medium">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted transition hover:text-accent"
                >
                  <Icon name="Github" size={16} />
                  <span>View on GitHub</span>
                </a>
              ) : (
                <div />
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-accent transition hover:underline"
                >
                  <span>Live Website</span>
                  <Icon name="ExternalLink" size={14} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
