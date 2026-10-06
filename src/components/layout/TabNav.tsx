export const tabs = [
  "About",
  "Resume",
  "Portfolio",
  "Contact",
] as const;
export type TabName = (typeof tabs)[number];

type TabNavProps = {
  active: TabName;
  onChange: (tab: TabName) => void;
};

export default function TabNav({ active, onChange }: TabNavProps) {
  return (
    <nav
      aria-label="Menu utama"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:absolute md:bottom-auto md:left-auto md:right-0 md:top-0 md:rounded-bl-2xl md:rounded-tr-3xl md:border-0 md:bg-card-soft md:pb-0 md:backdrop-blur-none"
    >
      <ul className="flex md:gap-6 md:px-6">
        {tabs.map((tab) => (
          <li key={tab} className="flex-1 md:flex-none">
            <button
              type="button"
              onClick={() => onChange(tab)}
              aria-current={active === tab ? "page" : undefined}
              className={`min-h-12 cursor-pointer w-full text-xs font-medium md:text-sm ${
                active === tab ? "text-accent" : "text-dim hover:text-muted"
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
