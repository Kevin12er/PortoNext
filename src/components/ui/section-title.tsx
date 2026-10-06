import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="relative mb-6 pb-3 text-2xl font-semibold text-foreground md:text-3xl after:absolute after:bottom-0 after:left-0 after:h-1 after:w-8 after:rounded-full after:bg-accent">
      {children}
    </h2>
  );
}