interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}

export default function ProjectCard({
  name,
  description,
  tags,
  repoUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-zinc-200 p-6 transition-all hover:border-zinc-400 hover:shadow-sm">
      <h3 className="text-lg font-semibold text-zinc-900">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          Source
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
