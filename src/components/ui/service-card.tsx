import Icon, { type IconName } from "./Icon";

type ServiceCardProps = {
  icon: IconName;
  title: string;
  description: string;
  className?: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <li
      className={`group flex items-start gap-4 rounded-2xl border border-line bg-card-soft p-5 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/5 md:p-6 ${className}`}
    >
      <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-line/70 bg-card text-accent transition-transform duration-300 group-hover:scale-105">
        <Icon name={icon} size={22} />
      </div>
      <div className="min-w-0">
        <h4 className="mb-1.5 font-semibold text-foreground transition-colors group-hover:text-accent">
          {title}
        </h4>
        <p className="text-xs md:text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </li>
  );
}
