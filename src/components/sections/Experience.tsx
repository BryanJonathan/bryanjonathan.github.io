import { Trans, useTranslation } from "react-i18next";
import { experiences, type Experience as ExperienceItem } from "@/data/resume";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

// `<b>` nos textos de i18n vira este destaque (números e resultados).
const highlightComponents = { b: <strong className="font-semibold text-foreground" /> };

function formatMonth(value: string, language: string) {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(language, { month: "short", year: "numeric" }).format(new Date(year, month - 1, 1));
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage ?? "pt-BR";
  const key = `resume.experience.${item.id}`;
  const highlights = t(`${key}.highlights`, { returnObjects: true }) as string[];

  return (
    <article className="glass-panel rounded-3xl p-5 md:p-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
        <time dateTime={item.start}>{formatMonth(item.start, language)}</time>
        {" — "}
        {item.end ? <time dateTime={item.end}>{formatMonth(item.end, language)}</time> : t("resume.experience.present")}
      </p>
      <h3 className="mt-2 font-display text-xl text-foreground md:text-2xl">{t(`${key}.role`)}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {item.company} · {t(`${key}.location`)}
      </p>

      <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
        {highlights.map((_, index) => (
          <li
            key={index}
            className="relative pl-5 text-sm leading-relaxed text-foreground/75 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[image:var(--gradient-primary)] md:text-[0.9375rem]"
          >
            <Trans i18nKey={`${key}.highlights.${index}`} components={highlightComponents} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section-anchor px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={t("sections.experience.eyebrow")}
          title={t("sections.experience.title")}
          subtitle={t("sections.experience.subtitle")}
        />
        <ol className="relative space-y-6 border-l border-white/10 pl-8 md:pl-12">
          {experiences.map((item) => (
            <li key={item.id} className="relative">
              <Reveal>
                <span
                  aria-hidden="true"
                  className="glow-ring absolute -left-[1.85rem] top-2 h-3.5 w-3.5 rounded-full bg-[image:var(--gradient-primary)] md:-left-[2.85rem]"
                />
                <ExperienceCard item={item} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
