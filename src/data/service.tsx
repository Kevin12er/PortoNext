import type { IconName } from "@/components/ui/Icon";

export type Service = {
  title: string;
  description: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    title: "Web Design",
    description: "Clean and user-friendly UI design",
    icon: "Palette",
  },
  {
    title: "Slicing UI/UX",
    description: "Turning your website design into clean, working code",
    icon: "Laptop",
  },
];