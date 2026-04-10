'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LaptopMinimal, MoonStar, SunMedium } from 'lucide-react';
import { motion } from 'framer-motion';

const themes = [
  { value: 'light', label: 'Claro', icon: SunMedium },
  { value: 'dark', label: 'Escuro', icon: MoonStar },
];

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-11 w-[126px] rounded-full border border-border/60 bg-card/60" />;
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/70 bg-card/75 p-1 shadow-sm backdrop-blur">
      <div className="flex items-center rounded-full bg-secondary/70 px-2 py-1 text-[11px] font-medium text-muted-foreground">
        <LaptopMinimal className="mr-1 size-3.5" />
        Tema
      </div>
      {themes.map(({ value, label, icon: Icon }) => {
        const active = resolvedTheme === value;

        return (
          <motion.button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            whileTap={{ scale: 0.96 }}
            className={`relative inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
              active ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-pressed={active}
            aria-label={`Ativar tema ${label.toLowerCase()}`}
          >
            {active && (
              <motion.span
                layoutId="theme-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <Icon className="size-3.5" />
              {label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
