export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-8 gap-4 max-w-container-max mx-auto">
        <div className="font-display text-headline-lg text-primary font-bold">
          Luis Martínez
        </div>
        <div className="font-mono text-code-label text-on-surface-variant tracking-widest">
          &copy; {year} Luis Martínez. Full Stack Developer
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors font-mono text-code-label tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors font-mono text-code-label tracking-widest"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
