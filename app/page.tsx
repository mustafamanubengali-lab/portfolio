import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-4xl px-6 py-20 sm:py-32">
        <Hero />
        <Projects />
        <footer className="mt-24 pt-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-400">
            Mustafa Bengali &middot; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
}
