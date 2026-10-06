"use client";

import { useState, type ReactNode } from "react";
import TabNav, { type TabName } from "./TabNav";

type MainPanelProps = {
  sections: Partial<Record<TabName, ReactNode>>;
};

export default function MainPanel({ sections }: MainPanelProps) {
  const [active, setActive] = useState<TabName>("About");

  function handleChange(tab: TabName) {
    setActive(tab);
    window.scrollTo({ top: 0 });
  }

  return (
    <main className="relative flex-1 rounded-3xl border border-line bg-card p-5 md:p-8">
      <TabNav active={active} onChange={handleChange} />
      {sections[active] ?? <p className="text-muted">{active} segera hadir.</p>}
    </main>
  );
}
