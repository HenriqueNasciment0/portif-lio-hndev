'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { MotionButton } from './ui/motion-button';
import { Parallax } from 'react-scroll-parallax';
import Aurora from './ReactBits/Aurora';
import BlurText from './ReactBits/BlurText';
import GradientText from './ReactBits/GradientText';
import { EASING, STAGGER_CONTAINER, FADE_UP } from '@/constants/animation';

const roleWords = [
  'Produtos SaaS escaláveis',
  'Backends robustos',
  'Interfaces precisas',
  'Deploy e Operações',
];

const metrics = [
  { label: 'Em construção', value: 'Desde 2022' },
  { label: 'Especialização', value: 'Full Stack / SaaS' },
  { label: 'Entrega', value: 'Fim a Fim' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/HenriqueNasciment0', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/henriquen-dev/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:technasc93@gmail.com', label: 'Email' },
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % roleWords.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (selector: string) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-5rem)] items-center px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12 overflow-hidden">
      
      {/* Background Animado React Bits */}
      <Aurora className="z-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center flex-col-reverse md:flex-row">
          
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-8 md:gap-10"
          >
            <div className="space-y-4">
              <BlurText 
                text={"Henrique\nNascimento."} 
                className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-[6rem] uppercase leading-[0.9] text-foreground"
              />
              
              <div className="flex h-12 items-center overflow-hidden text-xl font-medium tracking-tight sm:text-2xl pt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWord}
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: EASING }}
                    className="border-l-[6px] border-foreground pl-5 uppercase font-bold"
                  >
                    <GradientText className="block text-foreground">
                      {roleWords[currentWord]}
                    </GradientText>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              variants={FADE_UP}
              className="max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground border-t-[3px] border-border pt-6"
            >
              Desenvolvo produtos digitais estruturados, do conceito ao ambiente de produção. Arquitetura backend sólida, interfaces minimalistas e implantações operacionais limpas. 
              Sem abstrações desnecessárias, apenas pura engenharia.
            </motion.p>

            <motion.div
              variants={FADE_UP}
              className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 w-full sm:w-auto"
            >
              <MotionButton
                size="lg"
                className="h-14 w-full sm:w-auto rounded-none px-8 text-sm font-bold uppercase tracking-wider bg-foreground text-background transition-colors"
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver Projetos
                <ArrowRight className="ml-2 size-5" strokeWidth={3} />
              </MotionButton>
              <MotionButton
                variant="outline"
                size="lg"
                className="h-14 w-full sm:w-auto rounded-none border-[3px] border-foreground px-8 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors bg-transparent"
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contato
              </MotionButton>
            </motion.div>
          </motion.div>

          {/* Wrapper responsivo da foto para Mobile vs Desktop com Parallax */}
          <motion.aside
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col gap-6 md:gap-8 w-full max-w-[260px] sm:max-w-[320px] md:max-w-[480px] mx-auto lg:mr-0 mt-8 md:mt-0 items-center md:items-stretch"
          >
            <Parallax 
               speed={isMobile ? 0 : -5} 
               scale={isMobile ? [1, 1] : [1, 1.08]} 
               disabled={isMobile}
               className="w-full"
            >
              <div className="relative aspect-[4/5] w-full border-[3px] border-foreground bg-muted p-2 md:p-3">
                <div className="relative h-full w-full grayscale contrast-[1.1] transition-all duration-700 hover:grayscale-0">
                  <Image
                    src="/images/profile/henrique-profile.webp"
                    alt="Henrique Nascimento"
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 30rem"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Parallax>

            {/* Metrics */}
            <div className="w-full grid grid-cols-1 gap-y-5 sm:grid-cols-3 gap-x-4">
              {metrics.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={FADE_UP}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="border-t-[3px] border-foreground pt-3 text-center md:text-left"
                >
                  <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm md:text-base font-bold text-foreground break-words">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 md:gap-3 justify-center md:justify-start w-full">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center border-[3px] border-foreground bg-transparent text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <Icon className="size-5 md:size-6" strokeWidth={2.5} />
                </motion.a>
              ))}
            </div>
          </motion.aside>

        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-foreground p-4"
        onClick={() => scrollToSection('#about')}
        aria-label="Ir para a seção sobre"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={32} strokeWidth={2} />
        </motion.div>
      </motion.button>
    </section>
  );
}
