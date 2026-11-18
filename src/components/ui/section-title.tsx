import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="font-serif-display relative mb-8 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
      {children}
      <span className="mt-2 flex h-1 w-12 rounded-full bg-accent" />
    </h2>
  );
}