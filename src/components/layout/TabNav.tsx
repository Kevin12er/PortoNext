import Icon, { type IconName } from "../ui/Icon";

export const tabs = [
  "About",
  "Portfolio",
  "Resume",
  "Contact",
  "Tools",
] as const;
export type TabName = (typeof tabs)[number];

const tabIcons: Record<TabName, IconName> = {
  About: "User",
  Portfolio: "FolderCode",
  Resume: "FileText",
  Contact: "Mail",
  Tools: "Wrench",
};

type TabNavProps = {
  active: TabName;
  onChange: (tab: TabName) => void;
};

export default function TabNav({ active, onChange }: TabNavProps) {
  return (
    <nav
      aria-label="Menu utama"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line/60 bg-card/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:sticky md:top-auto md:border-t-0 md:bg-transparent md:pb-0 md:backdrop-blur-none"
    >
      {/* Smooth gradient mask container for mobile scrolling content */}
      <div className="pointer-events-none absolute inset-x-0 -top-12 h-12 bg-gradient-to-t from-background/90 via-background/40 to-transparent md:hidden" />

      <div className="p-2 md:p-0">
        <div className="flex items-center gap-1 rounded-2xl border border-line bg-card-soft/80 p-1 backdrop-blur-sm md:gap-2 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
          {tabs.map((tab) => {
            const isActive = active === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onChange(tab)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 md:px-4 md:py-3 md:text-base ${
                  isActive
                    ? "bg-card text-accent shadow-sm"
                    : "text-muted hover:text-foreground hover:bg-card/60"
                }`}
              >
                <Icon
                  name={tabIcons[tab]}
                  size={18}
                  className={`transition-colors ${isActive ? "text-accent" : "text-dim group-hover:text-foreground"}`}
                />
                <span className={isActive ? "text-accent" : ""}>{tab}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 hidden size-1 -translate-x-1/2 rounded-full bg-accent md:block" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}