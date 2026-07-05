const projects = [
  {
    name: "Project One",
    description: "A short description of this project goes here.",
    href: "https://github.com/Niconyberg",
  },
  {
    name: "Project Two",
    description: "A short description of this project goes here.",
    href: "https://github.com/Niconyberg",
  },
  {
    name: "Project Three",
    description: "A short description of this project goes here.",
    href: "https://github.com/Niconyberg",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/Niconyberg" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:nico.nyberg@gmail.com" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-2xl flex-col gap-20 px-6 py-24 sm:px-8">
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Nico Nyberg
          </h1>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Hi, I&apos;m Nico. I build software and enjoy working on projects
            at the intersection of engineering and design. Welcome to my
            portfolio.
          </p>
          <div className="flex gap-6 pt-2 text-sm font-medium text-zinc-950 dark:text-zinc-50">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 rounded-xl border border-black/[.08] p-5 transition-colors hover:bg-black/[.02] dark:border-white/[.145] dark:hover:bg-white/[.03]"
              >
                <h3 className="font-medium text-black dark:text-zinc-50">
                  {project.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="w-full max-w-2xl px-6 py-8 text-sm text-zinc-500 sm:px-8">
        &copy; {new Date().getFullYear()} Nico Nyberg
      </footer>
    </div>
  );
}
