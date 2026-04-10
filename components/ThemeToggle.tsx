'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonStar, SunMedium } from 'lucide-react';
import { Switch } from './ui/switch';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-6 w-11 rounded-full bg-border/40 animate-pulse" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="flex items-center gap-2">
      <SunMedium className="size-4 text-muted-foreground" />
      <Switch 
        checked={isDark} 
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} 
        aria-label="Alternar tema escuro/claro"
      />
      <MoonStar className="size-4 text-muted-foreground" />
    </div>
  );
}
