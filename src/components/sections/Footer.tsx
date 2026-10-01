import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { profile } from "@/data/resume";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("hero.role")} · {new Date().getFullYear()}
          </p>
        </div>
        <a
          href="#about"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground/90 transition hover:border-white/30 hover:bg-white/5"
        >
          {t("footer.backToTop")}
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
