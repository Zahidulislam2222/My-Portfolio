import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Terminal,
  GitBranch,
  Braces,
  Cpu,
  Bot,
  Sparkles,
  HeartPulse,
  Stethoscope,
  Activity,
  Pill,
  Sun,
  Leaf,
  Zap,
  Wind,
  type LucideIcon,
} from "lucide-react";

/**
 * Full-page ambient background — themed icons (AI, coding, medical, solar/green
 * energy) drift slowly behind all content. Low opacity, pointer-events-none,
 * fixed to the viewport so it spans the whole page. Respects reduced-motion.
 */

type FloatItem = {
  Icon: LucideIcon;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number; // vertical drift distance (px)
  tone: "ai" | "code" | "medical" | "energy";
};

const TONE_CLASS: Record<FloatItem["tone"], string> = {
  ai: "text-primary",
  code: "text-cyan-400",
  medical: "text-emerald-400",
  energy: "text-amber-400",
};

// Hand-placed so the field feels balanced, not random clumps.
const ITEMS: FloatItem[] = [
  { Icon: Brain,       top: "8%",  left: "6%",  size: 46, duration: 18, delay: 0,   drift: 40, tone: "ai" },
  { Icon: Code2,       top: "16%", left: "84%", size: 40, duration: 22, delay: 1.5, drift: 55, tone: "code" },
  { Icon: HeartPulse,  top: "30%", left: "14%", size: 44, duration: 20, delay: 0.8, drift: 35, tone: "medical" },
  { Icon: Sun,         top: "12%", left: "46%", size: 38, duration: 24, delay: 2.2, drift: 50, tone: "energy" },
  { Icon: Terminal,    top: "44%", left: "90%", size: 36, duration: 19, delay: 0.4, drift: 45, tone: "code" },
  { Icon: Cpu,         top: "54%", left: "8%",  size: 42, duration: 23, delay: 1.1, drift: 60, tone: "ai" },
  { Icon: Leaf,        top: "40%", left: "52%", size: 34, duration: 26, delay: 3,   drift: 40, tone: "energy" },
  { Icon: Stethoscope, top: "66%", left: "78%", size: 44, duration: 21, delay: 0.6, drift: 38, tone: "medical" },
  { Icon: Sparkles,    top: "70%", left: "30%", size: 32, duration: 17, delay: 2.6, drift: 50, tone: "ai" },
  { Icon: GitBranch,   top: "82%", left: "60%", size: 38, duration: 25, delay: 1.8, drift: 44, tone: "code" },
  { Icon: Zap,         top: "78%", left: "12%", size: 36, duration: 20, delay: 0.2, drift: 52, tone: "energy" },
  { Icon: Activity,    top: "88%", left: "88%", size: 40, duration: 22, delay: 2.9, drift: 36, tone: "medical" },
  { Icon: Bot,         top: "24%", left: "66%", size: 36, duration: 24, delay: 1.3, drift: 48, tone: "ai" },
  { Icon: Braces,      top: "58%", left: "40%", size: 30, duration: 18, delay: 3.4, drift: 42, tone: "code" },
  { Icon: Pill,        top: "6%",  left: "70%", size: 32, duration: 27, delay: 0.9, drift: 40, tone: "medical" },
  { Icon: Wind,        top: "50%", left: "70%", size: 34, duration: 23, delay: 2.1, drift: 46, tone: "energy" },
];

export const FloatingBackground = () => {
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none motion-reduce:hidden"
    >
      {ITEMS.map((item, i) => {
        const { Icon, top, left, size, duration, delay, drift, tone } = item;
        return (
          <motion.div
            key={i}
            className={`absolute ${TONE_CLASS[tone]}`}
            style={{ top, left, opacity: 0.08 }}
            animate={{
              y: [0, -drift, 0],
              rotate: [0, 8, 0],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon style={{ width: size, height: size }} strokeWidth={1.25} />
          </motion.div>
        );
      })}
    </div>
  );
};
