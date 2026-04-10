'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Github, ImageIcon, Linkedin, Mail } from 'lucide-react';
import TextPressure from './TextAnimations/TextPressure/TextPressure';
import { Button } from './ui/button';

const roleWords = [
  'Produtos SaaS escalaveis',
  'Backends em Node.js e TypeScript',
  'Interfaces modernas com Next.js',
  'Deploy, VPS e observabilidade',
];

const metrics = [
  { label: 'Em construcao desde', value: '2022' },
  { label: 'Foco principal', value: 'SaaS + Web' },
  { label: 'Entrega', value: 'Produto ao deploy' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/HenriqueNasciment0', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/henriquen-dev/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:technasc93@gmail.com', label: 'Email' },
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % roleWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (selector: string) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.18),_transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.12),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.22),_transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.18] dark:opacity-[0.08] [background-image:linear-gradient(rgba(100,116,139,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_23rem]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="space-y-6">
            <div className="max-w-[900px]">
              <div className="rounded-[2rem] border border-border/70 bg-card/55 px-4 py-5 shadow-2xl shadow-primary/10 backdrop-blur-md sm:px-6">
                <div className="hidden sm:block">
                  <TextPressure
                    text="Henrique Nascimento"
                    flex
                    alpha={false}
                    stroke={false}
                    width
                    weight
                    italic
                    textColor="var(--foreground)"
                    minFontSize={72}
                  />
                </div>

                <div className="sm:hidden">
                  <TextPressure
                    text="Henrique"
                    flex
                    alpha={false}
                    stroke={false}
                    width
                    weight
                    italic
                    textColor="var(--foreground)"
                    minFontSize={54}
                  />
                </div>
              </div>
            </div>

            <div className="flex h-10 items-center overflow-hidden text-lg font-medium text-muted-foreground sm:text-2xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  {roleWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              Desenvolvo produtos digitais do conceito ao ambiente de producao. Meu trabalho passa
              por arquitetura backend, interfaces de alta conversao, deploy em VPS, monitoramento
              e automacoes que sustentam operacoes reais.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-full px-7 text-sm font-semibold shadow-xl shadow-primary/25"
              onClick={() => scrollToSection('#projects')}
            >
              Ver projetos estrategicos
              <ArrowRight className="size-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary/35 bg-background/40 px-7 text-sm font-semibold backdrop-blur"
              onClick={() => scrollToSection('#contact')}
            >
              Conversar sobre uma oportunidade
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/75 px-4 py-3 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-foreground"
                aria-label={label}
              >
                <Icon className="size-4" />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="surface-card surface-glow rounded-[2rem] p-6"
        >
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
              Perfil
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">Perfil de entrega</h2>
          </div>

          <div className="mb-6 overflow-hidden rounded-[1.75rem] border border-dashed border-border/70 bg-background/60">
            <div className="flex aspect-[4/5] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),transparent_55%)] p-6 text-center">
              <div className="space-y-3">
                <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ImageIcon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Foto de perfil</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Coloque sua foto em
                    <br />
                    <span className="font-medium text-foreground">
                      public/images/profile/henrique-profile.webp
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + index * 0.12 }}
                className="rounded-3xl border border-border/70 bg-background/60 p-4 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-dashed border-primary/35 bg-primary/8 p-4">
            <p className="text-sm font-semibold text-foreground">Stack principal</p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              TypeScript, Node.js, Next.js, NestJS, PostgreSQL, automacao com n8n e operacao em
              Linux/VPS.
            </p>
          </div>
        </motion.aside>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
        onClick={() => scrollToSection('#about')}
        aria-label="Ir para a seção sobre"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={30} />
        </motion.div>
      </motion.button>
    </section>
  );
}
