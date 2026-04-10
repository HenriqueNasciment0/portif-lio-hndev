'use client';
import Image from 'next/image';
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
  { label: 'Entrega', value: 'Do produto ao deploy' },
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
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-4 pb-18 pt-8 sm:px-6 sm:pb-16 lg:px-8 lg:pt-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.18),_transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.12),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.22),_transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.18] dark:opacity-[0.08] [background-image:linear-gradient(rgba(100,116,139,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:min-h-[39rem] lg:grid-cols-[minmax(0,1.18fr)_minmax(18rem,21rem)] lg:gap-14 xl:grid-cols-[minmax(0,1.22fr)_minmax(19rem,22rem)]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 flex max-w-4xl flex-col justify-center lg:order-1 lg:max-w-none"
        >
          <div className="space-y-6">
            <div className="max-w-[980px]">
              <div className="rounded-[2rem] border border-border/70 bg-card/55 px-3 py-4 shadow-2xl shadow-primary/10 backdrop-blur-md sm:px-6 sm:py-5 lg:px-7 lg:py-6">
                <div className="hidden md:block">
                  <TextPressure
                    text="Henrique Nascimento"
                    flex
                    alpha={false}
                    stroke={false}
                    width
                    weight
                    italic
                    textColor="var(--foreground)"
                    minFontSize={86}
                  />
                </div>

                <div className="md:hidden">
                  <TextPressure
                    text="Henrique"
                    flex
                    alpha={false}
                    stroke={false}
                    width
                    weight
                    italic
                    textColor="var(--foreground)"
                    minFontSize={52}
                  />
                </div>
              </div>
            </div>

            <div className="flex min-h-14 items-center overflow-hidden text-lg font-medium text-muted-foreground sm:text-2xl lg:text-[1.8rem]">
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
              className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg lg:max-w-2xl lg:text-[1.12rem] lg:leading-9"
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
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:mt-10"
          >
            <Button
              size="lg"
              className="rounded-full px-7 text-sm font-semibold shadow-xl shadow-primary/25 sm:w-auto lg:h-12"
              onClick={() => scrollToSection('#projects')}
            >
              Ver projetos estrategicos
              <ArrowRight className="size-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary/35 bg-background/40 px-7 text-sm font-semibold backdrop-blur sm:w-auto lg:h-12"
              onClick={() => scrollToSection('#contact')}
            >
              Conversar sobre uma oportunidade
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3 lg:mt-10"
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
          className="surface-card surface-glow order-1 rounded-[2rem] p-4 sm:p-5 lg:order-2 lg:max-h-[calc(100vh-8.5rem)] lg:self-center lg:overflow-hidden"
        >
          <div className="mb-4 overflow-hidden rounded-[1.5rem] border border-border/70 bg-background/60">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[0.92]">
              <Image
                src="/images/profile/henrique-profile.webp"
                alt="Foto de perfil de Henrique Nascimento"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 28rem, 26rem"
                className="object-cover object-center lg:object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4">
                <p className="text-base font-semibold text-white">Henrique Nascimento</p>
                <p className="mt-1 text-xs leading-5 text-white/80 sm:text-sm">
                  Full stack engineer com foco em produto, deploy e operacao.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + index * 0.12 }}
                className="rounded-[1.3rem] border border-border/70 bg-background/60 p-3 backdrop-blur"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 rounded-[1.3rem] border border-dashed border-primary/35 bg-primary/8 p-3">
            <p className="text-sm font-semibold text-foreground">Stack principal</p>
            <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
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
