import { ArrowRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { highlights, profile } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Avatar, hasPhoto } from "../Avatar";
import { Reveal } from "../Reveal";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-anchor relative flex min-h-screen items-center px-6 pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal from="left">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">{t("hero.greeting")}</p>
          </Reveal>
          <Reveal from="left" delay={0.05}>
            <h1 className="text-gradient mt-4 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal from="left" delay={0.1}>
            <p className="mt-4 text-lg text-foreground md:text-2xl">{t("hero.role")}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{t("hero.bio")}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                {t("hero.ctaContact")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#experience"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-card px-6 text-sm font-medium text-foreground transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/30 sm:w-auto"
              >
                {t("hero.ctaExperience")}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map(({ id, icon: Icon }) => (
                <li key={id} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-card/80 p-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-base font-medium leading-tight text-foreground">
                      {t(`hero.highlights.${id}.title`)}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{t(`hero.highlights.${id}.detail`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {t("profile.location")}
            </p>
          </Reveal>
        </div>

        {/* Sem foto, as iniciais são só decoração: no mobile elas empurrariam o conteúdo uma tela para baixo. */}
        <Reveal from="scale" delay={0.1} className={cn("flex justify-center", !hasPhoto && "max-lg:hidden")}>
          <Avatar />
        </Reveal>
      </div>
    </section>
  );
}
