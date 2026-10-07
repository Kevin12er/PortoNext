"use client";
import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import { learnBridgeImages } from "@/data/portofolio";
import { useState } from "react";
import Icon from "../ui/Icon";

export default function Portofolio() {
  const [index, setIndex] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const imageLength = learnBridgeImages.length;

  return (
    <section>
      <SectionTitle>Portofolio</SectionTitle>

      <div className="space-y-4">
        <h2 className="font-bold tracking-tight text-xl md:text-3xl">
          LearnBridge
        </h2>
        <p className="tracking-tight text-xl md:text-2xl">
          A <span className="font-bold">fullstack</span> platform designed to
          connect instructors and students in one learning experience.
        </p>
        <a
          href="https://www.learnbridge.fun/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl border border-line bg-card-soft px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background"
        >
          Live Website
        </a>
        <div className="relative flex h-100 items-center justify-center">
          <Image
            src={learnBridgeImages[index]}
            width={500}
            height={400}
            alt="main picture"
            className="max-h-95 w-auto object-contain"
          />
          <button
            type="button"
            onClick={() => setIsDetailOpen(true)}
            className="absolute bottom-3 cursor-pointer left-1/2 -translate-x-1/2 rounded-lg bg-card-soft px-4 py-2 text-sm font-medium text-accent"
          >
            Lihat Detail
          </button>
          <div className="flex justify-between">
            <Icon
              name="ChevronLeft"
              onClick={() =>
                setIndex(index === 0 ? imageLength - 1 : index - 1)
              }
              className="absolute top-45 left-2 grid size-10  place-items-center rounded-xl bg-card-soft text-accent  cursor-pointer"
            />
            <Icon
              name="ChevronRight"
              onClick={() =>
                setIndex(index === imageLength - 1 ? 0 : index + 1)
              }
              className="absolute right-2 top-45 grid size-10  place-items-center rounded-xl bg-card-soft text-accent  cursor-pointer"
            />
          </div>
          {isDetailOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
              <div className="relative max-h-[90vh] max-w-[90vw]">
                <Image
                  src={learnBridgeImages[index]}
                  width={1200}
                  height={900}
                  alt="LearnBridge detail"
                  className="max-h-[85vh] w-auto object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsDetailOpen(false)}
                className="absolute right-5 top-5 ..."
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
