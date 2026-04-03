import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-3xl px-6 py-20 sm:py-32">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
