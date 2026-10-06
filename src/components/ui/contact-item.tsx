import Icon, { type IconName } from "./Icon";

type ContactItemProps = {
  icon: IconName;
  label: string;
  value: string;
};

export default function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <li className="flex items-center gap-3.5">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-card-soft text-accent">
        <Icon name={icon} />
      </span>
      <div className="min-w-0">
        <p className="text-xs capitalize text-dim">{label}</p>
        <p className="wrap-break-word text-sm font-medium">{value}</p>
      </div>
    </li>
  );
}