export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="grid-pattern absolute inset-0 opacity-70" />
      <div className="absolute -left-24 top-10 h-72 w-72 animate-blob rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 animate-blob rounded-full bg-accent/25 blur-3xl [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-blob rounded-full bg-primary/20 blur-3xl [animation-delay:-11s]" />
    </div>
  );
}
