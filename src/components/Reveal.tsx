import { motion } from "framer-motion";
import type { ReactNode } from "react";

const offsets = {
  up: { y: 48 },
  left: { x: -48 },
  scale: { scale: 0.92 },
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  from?: keyof typeof offsets;
  delay?: number;
};

export const easeSmooth = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className, from = "up", delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeSmooth, delay }}
    >
      {children}
    </motion.div>
  );
}
