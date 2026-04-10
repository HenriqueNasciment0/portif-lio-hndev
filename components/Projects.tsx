'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock3, Github, ImageIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { featuredProjects, inProgressProjects } from '@/lib/site-data';

function ProjectImage({
  src,
  title,
  hint,
}: {
  src: string;
  title: string;
  hint: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-border/70 bg-background/70">
      <div className="flex aspect-[16/10] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),transparent_55%)] p-6 text-center">
        <div className="space-y-3">
          <div className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ImageIcon className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{title}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{hint}</p>
            <p className="mt-2 text-xs font-medium text-foreground">{src.replace(/^\//, '')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
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
              Projetos em destaque
            </p>
            <h2 className="text-3xl font-semibold text-foreground md:text-5xl">
              Produtos digitais construidos com foco em entrega, conversao e operacao real.
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="surface-card h-full rounded-[2rem] border-border/70 py-0 shadow-none">
                <CardHeader className="px-6 pt-6">
                  <ProjectImage
                    src={project.imageSrc}
                    title={`Preview de ${project.title}`}
                    hint={project.imageHint}
                  />

                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {project.status}
                    </span>
                    <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-7 text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 px-6 pb-6">
                  <div className="rounded-3xl border border-border/70 bg-background/70 p-5">
                    <p className="text-sm font-semibold text-foreground">Escopo do projeto</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.impact}</p>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-semibold text-foreground">Destaques</p>
                    <div className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                          <span className="mt-2 size-2 rounded-full bg-primary" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/70 bg-background/70 px-3 py-2 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.note && (
                    <div className="rounded-3xl border border-dashed border-primary/35 bg-primary/8 p-4 text-sm leading-7 text-muted-foreground">
                      {project.note}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex flex-wrap gap-3 border-t border-border/60 px-6 py-6">
                  {project.repoUrl && (
                    <Button asChild variant="outline" className="rounded-full">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="size-4" />
                        Codigo
                      </a>
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button asChild className="rounded-full">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Ver projeto
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <Clock3 className="size-5" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Aplicacoes em andamento</h3>
              <p className="text-sm text-muted-foreground">
                Projetos em evolucao que ampliam o escopo do portfólio em produto, operacao e mobile.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {inProgressProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="surface-card h-full rounded-[2rem] border-border/70 py-0 shadow-none">
                  <CardHeader className="px-6 pt-6">
                    <ProjectImage
                      src={project.imageSrc}
                      title={`Preview de ${project.title}`}
                      hint={project.imageHint}
                    />
                    <span className="w-fit rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {project.status}
                    </span>
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-7 text-muted-foreground">
                      {project.category}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-5 px-6 pb-6">
                    <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/70 bg-background/70 px-3 py-2 text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" className="rounded-full">
            <a href="https://github.com/HenriqueNasciment0" target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
              Ver mais no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
