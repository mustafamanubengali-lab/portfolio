import ProjectCard from "./project-card";

const projects = [
  {
    name: "FPL Recommender",
    description:
      "ML-powered Fantasy Premier League transfer recommendations. Uses XGBoost models trained on historical data to predict player performance and suggest optimal transfers.",
    tags: ["Next.js", "XGBoost", "TypeScript", "Python"],
    repoUrl: "https://github.com/mustafamanubengali-lab/fpl-recommender",
    screenshot: "/screenshots/fpl-recommender.png",
  },
  {
    name: "Travel Planner",
    description:
      "AI travel destination finder. Chat about your trip preferences, and it discovers geographically diverse destinations with flight affordability validation.",
    tags: ["Express.js", "Gemini AI", "Vanilla JS"],
    repoUrl: "https://github.com/mustafamanubengali-lab/travel-planner",
    screenshot: "/screenshots/travel-planner.png",
  },
  {
    name: "FT Scraper",
    description:
      "AI-summarized Financial Times articles delivered to WhatsApp. Scrapes articles by topic, generates structured summaries with Gemini AI, and sends to groups on a schedule.",
    tags: ["Puppeteer", "Gemini AI", "WhatsApp", "Node.js"],
    repoUrl: "https://github.com/mustafamanubengali-lab/ft-scraper",
  },
  {
    name: "INSEAD Pre-Read Agent",
    description:
      "Automated MBA class prep. Fetches tomorrow's schedule, downloads pre-reads from Canvas LMS, summarizes with AI, and emails a formatted Word doc before class.",
    tags: ["Puppeteer", "Gemini AI", "Canvas LMS", "Node.js"],
    repoUrl: "https://github.com/mustafamanubengali-lab/pre-read-summarizer",
  },
];

export default function Projects() {
  return (
    <section>
      <p className="text-sm font-medium tracking-widest uppercase text-zinc-400 mb-4">
        Selected Work
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
        Projects
      </h2>
      <p className="mt-3 text-base text-zinc-500 max-w-xl">
        AI-powered tools I&apos;ve built to automate real workflows — from
        financial analysis to travel planning.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
