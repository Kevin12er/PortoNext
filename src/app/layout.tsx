import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Kevin Langga | Web Developer",
  description: "Portfolio of Kevin Langga as a junior web developer who will start his career in web development industry",
  openGraph: {
    title: "Kevin Langga | Junior web developer",
    description: "Portofolio of Kevin Langga as a junior web developer",
    images: [""]
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body>{children}</body>
    </html>
  );
}