import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  PenTool,
  Code,
  Smartphone,
  Gauge,
} from "lucide-react";

// Satu-satunya daftar ikon. Tambah ikon baru cukup di sini.
const icons = {
  Mail,
  Phone,
  Calendar,
  MapPin,
  PenTool,
  Code,
  Smartphone,
  Gauge,
};

// Tipe diturunkan otomatis dari kunci kamus di atas.
export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  className,
}: IconProps) {
  const Component = icons[name];

  if (!Component) return null;

  // aria-hidden: ikon hanya hiasan, teks di sampingnya sudah menjelaskan
  return (
    <Component
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    />
  );
}