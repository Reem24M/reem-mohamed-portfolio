const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/[.08] bg-white/85 backdrop-blur dark:border-white/[.12] dark:bg-black/85">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-10"
      >
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-zinc-950 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
        >
          Reem<span className="text-indigo-500">.</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 sm:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
