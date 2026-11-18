import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3.5 py-1 text-xs font-medium text-accent">
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}