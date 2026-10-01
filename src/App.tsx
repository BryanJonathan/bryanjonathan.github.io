import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";

export default function App() {
  const { t } = useTranslation();

  return (
    // `strict` garante que só `m.*` seja usado, mantendo fora do bundle as features que não usamos.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen">
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            {t("nav.skip")}
          </a>
          <Background />
          <Header />
          <main id="content">
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
