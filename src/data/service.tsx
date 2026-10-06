import { Palette, Laptop } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: "Palette" | "Laptop";
};

export const services: Service[] = [
  {
    title: "Web Design",
    description: "Clean and user-friendly for UI design",
    icon: "Palette",
  },
  {
    title: "Slicing UI/UX",
    description: "Execute your own website design into a line of code",
    icon: "Laptop",
  }
];
