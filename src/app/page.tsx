import Sidebar from "@/components/layout/sidebar";
import About from "@/components/sections/about";
import Portofolio from "@/components/sections/porto";
import Resume from "@/components/sections/resume";
import Techstack from "@/components/sections/tech-stack";
import MainPanel from "@/components/layout/main-panel";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 p-4 md:flex-row md:items-start md:p-8">
      <Sidebar />
      <main className="flex-1 rounded-3xl border border-line bg-card p-5 md:p-8">
        <MainPanel sections={{ About: <About />, Portfolio: <Portofolio />, Contact: <Contact />, Tools: <Techstack />, Resume: <Resume /> }} />
      </main>
    </div>
  );
}
