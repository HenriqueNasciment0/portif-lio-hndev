'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

const navItems = [
  { href: '#hero', label: 'Início' },
  { href: '#about', label: 'Perfil' },
  { href: '#skills', label: 'Stack' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];

export default function Header({ className = '' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/60 bg-background/82 backdrop-blur-xl'
          : 'bg-transparent'
      } ${className}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="min-w-0 flex cursor-pointer items-center gap-3"
          onClick={() => scrollToSection('#hero')}
        >
          <div className="flex size-11 items-center justify-center rounded-2xl border border-border/70 bg-card/80 text-sm font-black tracking-[0.3em] text-primary shadow-sm backdrop-blur">
            HN
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold uppercase tracking-[0.22em] text-primary/80 sm:tracking-[0.28em]">
              Henrique
            </div>
            <div className="hidden text-sm text-muted-foreground sm:block">Full Stack Engineer</div>
          </div>
        </motion.div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/65 p-1 backdrop-blur">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection(item.href)}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <ThemeToggle />

          <motion.button
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#contact')}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25"
          >
            Vamos conversar
            <ArrowRight className="size-4" />
          </motion.button>
        </div>

        <div className="shrink-0 md:hidden">
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex size-11 items-center justify-center rounded-2xl border border-border/70 bg-card/70 text-foreground backdrop-blur"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[68px] bg-black/20 backdrop-blur-[2px] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22 }}
              className="border-b border-border/60 bg-background/96 px-4 pb-5 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3">
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card/70 p-2">
                  <div className="min-w-0 px-2">
                    <p className="truncate text-sm font-semibold text-foreground">Navegação</p>
                    <p className="truncate text-xs text-muted-foreground">
                      Tema e atalhos para as principais seções
                    </p>
                  </div>
                  <div className="shrink-0">
                    <ThemeToggle />
                  </div>
                </div>

                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.href)}
                    className="rounded-2xl border border-border/60 bg-card/80 px-4 py-3 text-left text-sm font-medium text-foreground"
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('#contact')}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Iniciar conversa
                  <ArrowRight className="size-4" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
