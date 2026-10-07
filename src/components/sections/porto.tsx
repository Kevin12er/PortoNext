"use client";
import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import { learnBridgeImages } from "@/data/portofolio";
import { useState } from "react";
import Icon from "../ui/Icon";

export default function Portofolio() {
  const [index, setIndex] = useState(0);
  const imageLength = learnBridgeImages.length

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
        <div className="text-center">
          <Image
            src={learnBridgeImages[index]}
            width={500}
            height={400}
            alt="main picture"
          />
          <div className="flex justify-between">
            <Icon
              name="ChevronLeft"
              onClick={() => setIndex(
                index === 0 ? imageLength - 1 : index - 1
              )}
              className="grid size-10  place-items-center rounded-xl bg-card-soft text-accent  cursor-pointer"
            />
            <Icon
              name="ChevronRight"
              onClick={() => setIndex(
                index === imageLength - 1 ? 0 : index + 1
              )}
              className="grid size-10  place-items-center rounded-xl bg-card-soft text-accent  cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
