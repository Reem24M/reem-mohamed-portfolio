import { getAllProjects } from '@/lib/projects';

export default function ProjectsSection() {
  const projects = getAllProjects() as any[];
  const variants = ['d1', 'd2', 'd3'];

  return (
    <section id="projects" className="py-24 text-white">
      <h2 className="mb-14 px-6 text-center text-4xl font-bold">
        My{' '}
        <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-10 px-6">
        {projects.map((p, i) => (
          <a
            key={p.slug}
            href={p.demo || p.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${-i * 2}s` }}
            className={`drift-card ${variants[i % 3]} group w-80 overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0b1020] transition-shadow hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]`}
          >
            <div className="h-44 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full bg-purple-500/15 px-3 py-1 text-xs text-purple-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}