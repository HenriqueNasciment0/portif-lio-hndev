'use client';
import { motion } from 'framer-motion';
import { Activity, Calendar, MapPin, Rocket, ShieldCheck } from 'lucide-react';
import SpotlightCard from './ReactBits/SpotlightCard';
import { FADE_UP, VIEWPORT } from '@/constants/animation';

const strengths = [
  {
    icon: Rocket,
    title: 'Entrega ponta a ponta',
    description:
      'Participo de discovery, modelagem tecnica, implementacao, deploy, monitoramento e evolucao continua.',
  },
  {
    icon: ShieldCheck,
    title: 'Visao de operacao',
    description:
      'Penso em observabilidade, ambiente, automacao, estabilidade e sustentacao do produto apos o go-live.',
  },
  {
    icon: Activity,
    title: 'Produto com impacto',
    description:
      'Priorizo interfaces claras, performance e automacoes que melhoram conversao e reduzem trabalho manual.',
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...FADE_UP}
          whileInView="animate"
          viewport={VIEWPORT}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary/80">
            Perfil profissional
          </p>
          <h2 className="text-3xl font-semibold text-foreground md:text-5xl">
            Engenharia full stack com pensamento de produto e operacao.
          </h2>
        </motion.div>

        {/* Separador animado */}
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12 h-[2px] border-0 bg-gradient-to-r from-transparent via-border to-transparent origin-center"
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Coluna esquerda: bio + Produto com impacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="surface-card rounded-[2rem] p-8 sm:p-10">
              <p className="text-lg leading-8 text-muted-foreground">
                Sou desenvolvedor <strong className="text-foreground">full stack</strong>, formado
                pela Trybe, atuando desde 2022 na construcao de aplicacoes web e mobile com foco em
                produtos que precisam funcionar bem em producao.
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                Minha base mais forte esta em{' '}
                <strong className="text-foreground">
                  Node.js, TypeScript, Next.js, NestJS, PostgreSQL, MySQL e React Native
                </strong>
                . Tambem venho explorando Go e Rust para ampliar repertorio de performance,
                concorrencia e arquitetura.
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                O diferencial que quero comunicar no portfólio e o mesmo que busco nos projetos:
                capacidade de sair da interface e chegar ate deploy, monitoramento, integrações e
                automacoes reais.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border/70 bg-background/60 p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <MapPin size={18} />
                    Base
                  </div>
                  <p className="text-lg font-semibold text-foreground">Fortaleza, Ceara - Brasil</p>
                </div>

                <div className="rounded-3xl border border-border/70 bg-background/60 p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Calendar size={18} />
                    Jornada
                  </div>
                  <p className="text-lg font-semibold text-foreground">Construindo desde 2022</p>
                </div>
              </div>
            </div>

            {/* Produto com impacto — abaixo do card de bio */}
            <motion.div
              {...FADE_UP}
              whileInView="animate"
              viewport={VIEWPORT}
              transition={{ ...FADE_UP.transition, delay: 0.2 }}
            >
              <SpotlightCard className="rounded-[2rem] p-7">
                <div className="mb-5 flex size-13 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{strengths[2].title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{strengths[2].description}</p>
              </SpotlightCard>
            </motion.div>
          </motion.div>

          {/* Coluna direita: Entrega + Visao de operacao + Direcao */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {strengths.slice(0, 2).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...FADE_UP}
                  whileInView="animate"
                  viewport={VIEWPORT}
                  transition={{ ...FADE_UP.transition, delay: index * 0.1 }}
                >
                  <SpotlightCard className="rounded-[2rem] p-7">
                    <div className="mb-5 flex size-13 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                  </SpotlightCard>
                </motion.div>
              );
            })}

            <div className="rounded-[2rem] border border-dashed border-primary/35 bg-primary/8 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
                Direcao
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Meu objetivo aqui e posicionar melhor a profundidade tecnica dos projetos: nao so o
                que foi construido, mas como cada produto foi sustentado, operado e levado a
                producao.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
