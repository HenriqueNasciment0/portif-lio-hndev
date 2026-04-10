'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { EASING, STAGGER_CONTAINER, STAGGER_ITEM } from '@/constants/animation';

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
  const [activeSection, setActiveSection] = useState('#hero');
  const { scrollY } = useScroll();

  // Scroll behavior: padding e background conforme o plano
  const navPadding = useTransform(scrollY, [0, 50], ['1.25rem', '0.75rem']);
  const navBgOpacity = useTransform(scrollY, [0, 50], [0, 0.8]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('section[id], footer[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
      transition={{ duration: 0.6, ease: EASING }}
      style={{
        paddingTop: navPadding,
        paddingBottom: navPadding,
        backgroundColor: useTransform(
          navBgOpacity,
          (opacity) => `rgba(0, 0, 0, ${opacity})`
        ),
      }}
      className={`fixed top-0 z-50 w-full backdrop-blur-md transition-colors duration-300 ${
        activeSection !== '#hero' ? 'border-b border-border' : ''
      } ${className}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="min-w-0 flex cursor-pointer items-center gap-3"
          onClick={() => scrollToSection('#hero')}
        >
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold uppercase tracking-[0.22em] text-primary/80 sm:tracking-[0.28em]">
              Henrique
            </div>
            <div className="hidden text-sm text-muted-foreground sm:block">Full Stack Engineer</div>
          </div>
        </motion.div>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <div key={item.href} className="relative">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative z-10 px-4 py-2 text-sm font-bold uppercase transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 bottom-1 h-[3px] bg-foreground"
                      transition={{ duration: 0.3, ease: EASING }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <ThemeToggle />

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#contact')}
            className="inline-flex items-center gap-2 rounded-none bg-foreground px-6 py-2 border-[2px] border-foreground text-sm font-bold uppercase text-background hover:bg-background hover:text-foreground transition-colors"
          >
            Vamos conversar
            <ArrowRight className="size-4" strokeWidth={3} />
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
              <motion.div
                variants={STAGGER_CONTAINER}
                initial="initial"
                animate="animate"
                className="mx-auto flex max-w-7xl flex-col gap-3"
              >
                <motion.div
                  variants={STAGGER_ITEM}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card/70 p-2"
                >
                  <div className="min-w-0 px-2">
                    <p className="truncate text-sm font-semibold text-foreground">Navegação</p>
                    <p className="truncate text-xs text-muted-foreground">
                      Tema e atalhos para as principais seções
                    </p>
                  </div>
                  <div className="shrink-0">
                    <ThemeToggle />
                  </div>
                </motion.div>

                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <motion.button
                      key={item.href}
                      variants={STAGGER_ITEM}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`rounded-none border-l-4 ${isActive ? 'border-foreground bg-muted text-foreground' : 'border-transparent text-muted-foreground hover:bg-muted hover:text-foreground'} px-4 py-3 text-left text-sm font-bold uppercase`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}

                <motion.button
                  variants={STAGGER_ITEM}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('#contact')}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-none border-[2px] border-foreground bg-foreground px-4 py-4 text-sm font-bold uppercase text-background"
                >
                  Iniciar conversa
                  <ArrowRight className="size-4" strokeWidth={3} />
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
