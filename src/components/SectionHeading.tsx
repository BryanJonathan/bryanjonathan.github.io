import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center", className }: SectionHeadingProps) {
  if (align === "center") {
    return (
      <Reveal className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
        )}
        <h2 className="font-display text-3xl font-semibold text-foreground md:text-5xl">{title}</h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
      </Reveal>
    );
  }

  return (
    <Reveal className={cn("mb-10 max-w-3xl", className)}>
      {eyebrow && (
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">{title}</h2>
      <span className="mt-4 block h-0.5 w-16 rounded-full bg-[image:var(--gradient-primary)]" />
      <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
    </Reveal>
  );
}
