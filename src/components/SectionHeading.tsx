import { Reveal } from "./Reveal";

type HeadingProps = {
  title: string;
  subtitle: string;
};

// Título de seção (h2): centralizado, com eyebrow.
export function SectionHeading({ eyebrow, title, subtitle }: HeadingProps & { eyebrow: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-foreground md:text-5xl">{title}</h2>
      <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
    </Reveal>
  );
}

// Título de subseção (h3): alinhado à esquerda, dentro de uma seção.
export function SubsectionHeading({ title, subtitle }: HeadingProps) {
  return (
    <Reveal className="mb-6">
      <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">{title}</h3>
      <span aria-hidden="true" className="mt-3 block h-0.5 w-12 rounded-full bg-[image:var(--gradient-primary)]" />
      <p className="mt-3 text-sm text-muted-foreground md:text-base">{subtitle}</p>
    </Reveal>
  );
}
