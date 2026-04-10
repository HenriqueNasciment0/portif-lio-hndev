'use client';
import { motion } from 'framer-motion';
import { Blocks, Database, Globe, Server, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    accent: 'bg-sky-500/12 text-sky-600 dark:text-sky-300',
    border: 'border-sky-500/20',
    description: 'Interfaces rápidas, responsivas e orientadas a conversão.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-300',
    border: 'border-emerald-500/20',
    description: 'APIs, regras de negócio, integrações, filas e arquitetura modular.',
    skills: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Autenticação'],
  },
  {
    title: 'Dados & Infra',
    icon: Database,
    accent: 'bg-amber-500/12 text-amber-600 dark:text-amber-300',
    border: 'border-amber-500/20',
    description: 'Modelagem, persistência, deploy e sustentação em produção.',
    skills: ['PostgreSQL', 'MySQL', 'Prisma', 'Docker', 'Linux/VPS'],
  },
  {
    title: 'Mobile & Automação',
    icon: Smartphone,
    accent: 'bg-fuchsia-500/12 text-fuchsia-600 dark:text-fuchsia-300',
    border: 'border-fuchsia-500/20',
    description: 'Apps mobile, integrações externas e automações operacionais.',
    skills: ['React Native', 'Expo', 'n8n', 'Webhooks', 'Monitoramento'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary/80">
              Stack principal
            </p>
            <h2 className="text-3xl font-semibold text-foreground md:text-5xl">
              Tecnologias escolhidas para construir, publicar e manter produtos.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
            <Blocks className="size-4 text-primary" />
            Web, mobile, APIs e infraestrutura
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`surface-card rounded-[2rem] p-6 ${category.border}`}
            >
              <div className={`mb-5 flex size-13 items-center justify-center rounded-2xl ${category.accent}`}>
                <category.icon size={24} />
              </div>

              <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{category.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-full border border-border/70 bg-background/70 px-3 py-2 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
