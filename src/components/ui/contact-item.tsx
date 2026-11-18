import Icon, { type IconName } from "./Icon";

type ContactItemProps = {
  icon: IconName;
  label: string;
  value: string;
};

export default function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <li className="group flex items-center gap-3.5">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-card-soft text-muted transition-colors group-hover:bg-accent-soft group-hover:text-accent">
        <Icon name={icon} size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dim">
          {label}
        </p>
        <p className="wrap-break-word text-sm font-medium text-foreground/90">
          {value}
        </p>
      </div>
    </li>
  );
}