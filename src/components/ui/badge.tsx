import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-lg bg-card-soft px-3.5 py-0.5 text-xs text-muted">
      {children}
    </span>
  );
}