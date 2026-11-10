import { getAllProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const projects = getAllProjects() as any[];

  // بنكرر القائمة مرتين عشان الحركة تبان مستمرة
  const loop = [...projects, ...projects];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] pt-24 text-white">
      <h1 className="mb-10 px-6 text-center text-4xl font-bold">
        My{' '}
        <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      <div className="cards-track px-6">
        {loop.map((p, i) => (
          <a
            key={`${p.slug}-${i}`}
            href={p.demo || p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-80 shrink-0 overflow-hidden rounded-2xl border border-purple-500/20 bg-white/5 transition hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            {/* صورة المشروع */}
            <div className="h-44 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold">{p.title}</h2>
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
    </main>
  );
}