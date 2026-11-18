import Sidebar from "@/components/layout/sidebar";
import About from "@/components/sections/about";
import Portofolio from "@/components/sections/porto";
import Resume from "@/components/sections/resume";
import Techstack from "@/components/sections/tech-stack";
import MainPanel from "@/components/layout/main-panel";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col gap-8 p-6 md:flex-row md:items-start md:p-10">
      <Sidebar />
      <main className="min-h-[calc(100vh-3.5rem)] flex-1 rounded-3xl border border-line bg-card p-8 md:p-12">
        <MainPanel
          sections={{
            About: <About />,
            Portfolio: <Portofolio />,
            Resume: <Resume />,
            Contact: <Contact />,
            Tools: <Techstack />,
          }}
        />
      </main>
    </div>
  );
}