export default function Hero() {
  return (
    <section className="mb-20">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        Mustafa Bengali
      </h1>
      <p className="mt-4 text-lg text-zinc-500">
        Startup founder turned MBA — builds tools that solve real problems.
      </p>
      <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600">
        I build AI-powered automation tools — from financial news pipelines to
        ML-driven sports analytics. Currently pursuing my MBA at INSEAD, with a
        background in startups and a focus on AI, markets, and tech.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="https://github.com/mustafamanubengali-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
