"use client";

import { useEffect, useState, type ReactNode } from "react";
import TabNav, { tabs, type TabName } from "./TabNav";

type MainPanelProps = {
  sections: Partial<Record<TabName, ReactNode>>;
};

function tabToHash(tab: TabName) {
  return tab.toLowerCase();
}

function hashToTab(hash: string): TabName {
  const value = hash.replace("#", "").toLowerCase();

  const tab = tabs.find(
    (item) => item.toLowerCase() === value
  );

  return tab ?? "About";
}

export default function MainPanel({ sections }: MainPanelProps) {
  const [active, setActive] = useState<TabName>("About");

  useEffect(() => {
    if (window.location.hash) {
      setActive(hashToTab(window.location.hash));
    }

    const handleHashChange = () => {
      setActive(hashToTab(window.location.hash));
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  function handleChange(tab: TabName) {
    setActive(tab);

    window.history.replaceState(
      null,
      "",
      `#${tabToHash(tab)}`
    );

    window.scrollTo({ top: 0 });
  }

  return (
    <main className="relative flex-1 rounded-3xl border border-line bg-card p-5 md:p-8">
      <TabNav active={active} onChange={handleChange} />

      {sections[active] ?? (
        <p className="text-muted">{active} segera hadir.</p>
      )}
    </main>
  );
}