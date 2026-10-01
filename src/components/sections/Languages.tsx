import { useTranslation } from "react-i18next";
import { spokenLanguages, type SpokenLanguage } from "@/data/resume";
import { Reveal } from "../Reveal";
import { SubsectionHeading } from "../SectionHeading";

function LanguageCard({ language }: { language: SpokenLanguage }) {
  const { t } = useTranslation();

  return (
    <article className="glass-panel relative flex h-full flex-col rounded-3xl p-6">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] font-display text-base font-semibold text-primary-foreground">
        {language.code}
      </span>
      {language.cefr && (
        <div className="absolute right-6 top-6 text-right">
          <p className="text-gradient font-display text-4xl font-semibold leading-none">{language.cefr}</p>
          <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {t("sections.languages.cefr")}
          </p>
        </div>
      )}
      <h4 className="mt-5 font-display text-2xl text-foreground">{t(`resume.languages.${language.id}.name`)}</h4>
      <p className="mt-3 inline-flex w-fit rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {t(`resume.languages.${language.id}.level`)}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {t(`resume.languages.${language.id}.description`)}
      </p>
    </article>
  );
}

export function Languages() {
  const { t } = useTranslation();

  return (
    <div className="mt-16">
      <SubsectionHeading title={t("sections.languages.title")} subtitle={t("sections.languages.subtitle")} />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {spokenLanguages.map((language, index) => (
          <li key={language.id}>
            <Reveal className="h-full" delay={index * 0.08}>
              <LanguageCard language={language} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
