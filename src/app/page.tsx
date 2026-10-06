import Sidebar from "@/components/layout/sidebar";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 p-4 md:flex-row md:items-start md:p-8">
      <Sidebar />
      <main className="flex-1 rounded-3xl border border-line bg-card p-5 md:p-8">
        
        <About />
        
      </main>
    </div>
  );
}