"use client";
import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import { learnBridgeImages } from "@/data/portofolio";
import { useState } from "react";
import Icon from "../ui/Icon";

export default function Portofolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const imageLength = learnBridgeImages.length;

  const openDetail = (idx: number) => setSelectedIndex(idx);
  const closeDetail = () => setSelectedIndex(null);

  const goPrev = () =>
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? imageLength - 1 : prev - 1
    );
  const goNext = () =>
    setSelectedIndex((prev) =>
      prev === null ? null : prev === imageLength - 1 ? 0 : prev + 1
    );

  return (
    <section>
      <SectionTitle>Portofolio</SectionTitle>

      <div className="space-y-5">
        {/* Project Header */}
        <div className="space-y-3">
          <h2 className="font-bold tracking-tight text-xl md:text-3xl">
            LearnBridge
          </h2>
          <p className="tracking-tight text-base md:text-lg text-muted leading-relaxed">
            A <span className="font-bold text-foreground">fullstack</span>{" "}
            platform designed to connect instructors and students in one
            learning experience.
          </p>
          <a
            href="https://www.learnbridge.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-card-soft px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background"
          >
            <Icon name="Eye" size={16} />
            Live Website
          </a>
        </div>

        {/* Image Gallery — flex wrap, small thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {learnBridgeImages.map((src, idx) => (
            <div
              key={src}
              className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-line bg-card-soft transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
              onClick={() => openDetail(idx)}
            >
              {/* Thumbnail Image */}
              <Image
                src={src}
                fill
                alt={`LearnBridge screenshot ${idx + 1}`}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 176px, 224px"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 transition-all duration-300 group-hover:bg-black/60">
                <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background shadow-lg">
                    <Icon name="ZoomIn" size={16} />
                    Lihat Detail
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={closeDetail}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeDetail}
            className="absolute right-4 top-4 z-10 grid size-10 cursor-pointer place-items-center rounded-full bg-card-soft/80 text-foreground transition hover:bg-accent hover:text-background"
          >
            <Icon name="X" size={20} />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 z-10 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-card-soft/80 text-accent transition hover:bg-accent hover:text-background"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={learnBridgeImages[selectedIndex]}
              width={1200}
              height={900}
              alt={`LearnBridge detail ${selectedIndex + 1}`}
              className="max-h-[85vh] w-auto rounded-xl object-contain"
            />
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-card-soft/80 px-4 py-1.5 text-sm font-medium text-muted">
              {selectedIndex + 1} / {imageLength}
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 z-10 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-card-soft/80 text-accent transition hover:bg-accent hover:text-background"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
