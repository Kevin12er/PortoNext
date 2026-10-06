import Icon, { type IconName } from "./Icon";

type ServiceCardProps = {
  icon: IconName;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <li className="flex gap-4 rounded-2xl border border-line bg-card-soft p-5">
      <span className="shrink-0 text-accent">
        <Icon name={icon} size={32} strokeWidth={1.5} />
      </span>
      <div>
        <h3 className="mb-1 font-medium">{title}</h3>
        <p className="text-sm font-light text-muted">{description}</p>
      </div>
    </li>
  );
}