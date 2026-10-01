import { useTranslation } from "react-i18next";
import { profile, sectionIds } from "@/data/resume";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { t } = useTranslation();
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a
          href="#about"
          aria-label={profile.name}
          className="glass-panel rounded-full px-4 py-2 font-display text-sm tracking-wide"
        >
          {profile.initials}
        </a>

        <nav className="glass-panel hidden items-center gap-1 rounded-full p-1 md:flex" aria-label={t("nav.menu")}>
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors",
                active === id ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden md:inline-flex" />
          <MobileMenu active={active} />
        </div>
      </div>
    </header>
  );
}
