import { useTranslation } from "react-i18next";
import { profile } from "@/data/resume";

// Para usar uma foto, basta salvar src/assets/foto.(jpg|jpeg|png|webp). Sem o arquivo, aparecem as iniciais.
const photos = import.meta.glob<string>("../assets/foto.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const photo = Object.values(photos)[0];

// Traços que percorrem a moldura (mesmos valores do site de referência).
const strokes = [
  { color: "#67e8f9", width: 1.8, dash: "16 84", opacity: 0.1, from: 0 },
  { color: "#67e8f9", width: 0.7, dash: "18 82", opacity: 0.32, from: -1 },
  { color: "#7dd3fc", width: 0.7, dash: "18 82", opacity: 0.38, from: -7 },
  { color: "#38bdf8", width: 0.7, dash: "18 82", opacity: 0.36, from: -13 },
  { color: "#818cf8", width: 0.7, dash: "18 82", opacity: 0.38, from: -19 },
  { color: "#a78bfa", width: 0.7, dash: "18 82", opacity: 0.36, from: -25 },
  { color: "#c4b5fd", width: 0.7, dash: "18 82", opacity: 0.32, from: -31 },
  { color: "#d8b4fe", width: 0.7, dash: "18 82", opacity: 0.24, from: -37 },
  { color: "#e9d5ff", width: 1.7, dash: "14 86", opacity: 0.1, from: -46 },
];

const frame = { x: 1.6, y: 1.6, width: 96.8, height: 96.8, rx: 18, fill: "none" } as const;

export function Avatar() {
  const { t } = useTranslation();

  return (
    <div className="relative aspect-square w-[18.2rem] animate-float md:w-[23.4rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 -z-10 animate-float-glow rounded-[2rem] bg-[radial-gradient(circle_at_50%_45%,rgba(103,232,249,0.7),rgba(129,140,248,0.45)_40%,rgba(196,181,253,0.2)_62%,transparent_74%)] blur-2xl"
      />

      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="avatar-frame" x1="0" y1="0" x2="0.15" y2="1">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="48%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
          <filter id="avatar-edge" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="0.55" />
          </filter>
        </defs>
        <rect {...frame} stroke="url(#avatar-frame)" strokeWidth="0.9" opacity="0.22" filter="url(#avatar-edge)" />
        <rect {...frame} stroke="url(#avatar-frame)" strokeWidth="0.55" opacity="0.9" />
        {strokes.map((s) => (
          <rect
            key={`${s.color}-${s.from}`}
            {...frame}
            stroke={s.color}
            strokeWidth={s.width}
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={s.dash}
            opacity={s.opacity}
            filter="url(#avatar-edge)"
          >
            <animate
              attributeName="stroke-dashoffset"
              from={s.from}
              to={s.from - 100}
              dur="4.6s"
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </svg>

      <div className="absolute inset-[7px] grid place-items-center overflow-hidden rounded-[18%] bg-[radial-gradient(80%_60%_at_82%_0%,rgba(56,189,248,0.16),transparent_50%),linear-gradient(168deg,#07131c_0%,#0c1428_58%,#140e22_100%)]">
        {photo ? (
          <img
            src={photo}
            alt={t("hero.photoAlt")}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <>
            <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden="true" />
            <span
              role="img"
              aria-label={profile.name}
              className="text-gradient relative select-none font-display text-8xl font-semibold tracking-tight md:text-9xl"
            >
              {profile.initials}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
