import ProjectCard from "./project-card";

const projects = [
  {
    name: "FT Scraper",
    description:
      "AI-summarized Financial Times articles delivered to WhatsApp. Scrapes articles by topic, generates structured summaries with Gemini AI, captures validated charts, and sends to groups on a schedule.",
    tags: ["Puppeteer", "Gemini AI", "WhatsApp", "Node.js"],
    repoUrl: "https://github.com/mustafamanubengali-lab/ft-scraper",
  },
  {
    name: "FPL Recommender",
    description:
      "ML-powered Fantasy Premier League transfer recommendations. Uses XGBoost models trained on historical data to predict player performance and suggest optimal transfers.",
    tags: ["Next.js", "XGBoost", "TypeScript", "Python"],
    repoUrl: "https://github.com/mustafamanubengali-lab/fpl-recommender",
  },
  {
    name: "INSEAD Pre-Read Agent",
    description:
      "Automated MBA class prep. Fetches tomorrow's schedule, downloads pre-reads from Canvas LMS, summarizes with AI, and emails a formatted Word doc before class.",
    tags: ["Puppeteer", "Gemini AI", "Canvas LMS", "Node.js"],
    repoUrl: "https://github.com/mustafamanubengali-lab/pre-read-summarizer",
  },
  {
    name: "Travel Planner",
    description:
      "AI travel destination finder. Chat about your trip preferences, and it discovers geographically diverse destinations with flight affordability validation.",
    tags: ["Express.js", "Gemini AI", "Vanilla JS"],
    repoUrl: "https://github.com/mustafamanubengali-lab/travel-planner",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
        Projects
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
