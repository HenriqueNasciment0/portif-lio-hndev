'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock3, Github, ImageIcon } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import TiltCard from './ReactBits/TiltCard';
import ShinyText from './ReactBits/ShinyText';
import { featuredProjects, inProgressProjects } from '@/lib/site-data';
import { useIsMobile, useHasPointer } from '@/hooks/useMediaQuery';
import { FADE_UP, VIEWPORT, STAGGER_CONTAINER, STAGGER_ITEM } from '@/constants/animation';

function ProjectImage({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [hasError, setHasError] = useState(false);

  // Se src estiver vazio, mostrar placeholder imediatamente
  const showPlaceholder = !src || hasError;

  const imageContent = (
    <div className="relative aspect-[16/10]">
      {!showPlaceholder ? (
        <>
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 620px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setHasError(true)}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </>
      ) : (
          <div className="flex h-full items-center justify-center bg-zinc-950 p-6 text-center [background-image:radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]">
            <div className="space-y-3">
              <div className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-white/8 text-white/50">
                <ImageIcon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white/70">{title}</p>
                <p className="mt-2 text-xs leading-6 text-white/30">
                  {src.replace(/^\//, '')}
                </p>
              </div>
            </div>
          </div>
        )}
    </div>
  );

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-border/70 bg-background/70">
      {imageContent}
    </div>
  );
}

export default function Projects() {
  const hasPointer = useHasPointer();
  const isMobile = useIsMobile();

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
          {featuredProjects.map((project, index) => {
            const isFeatured = index === 0; // Primeiro projeto é o case principal

            return (
              <motion.div
                key={project.title}
                {...FADE_UP}
                whileInView="animate"
                viewport={VIEWPORT}
                transition={{ ...FADE_UP.transition, delay: index * 0.15 }}
                className="group h-full flex flex-col"
              >
                <Parallax speed={isMobile ? 0 : (index % 2 !== 0 ? 5 : 0)} className="h-full flex flex-col">
                  <TiltCard disabled={!hasPointer} className="h-full flex flex-col">
                    <Card className="surface-card h-full flex flex-col rounded-[2rem] border-border/70 py-0 shadow-none">
                      <CardHeader className="px-6 pt-6">
                        <ProjectImage
                          src={project.imageSrc}
                          title={`Preview de ${project.title}`}
                        />

                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        {isFeatured && (
                          <motion.div
                            animate={{ scale: [1, 1.03, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <Badge className="border-amber-400 bg-amber-400/10 text-amber-400 hover:bg-amber-400/20">
                              Case principal
                            </Badge>
                          </motion.div>
                        )}
                        <Badge>{project.status}</Badge>
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>

                  <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-7 text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 px-6 pb-6 flex-grow">
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

                      <motion.div
                        variants={STAGGER_CONTAINER}
                        initial="initial"
                        whileInView="animate"
                        viewport={VIEWPORT}
                        className="flex flex-wrap gap-2"
                      >
                        {project.technologies.map((tech) => (
                          <motion.div key={tech} variants={STAGGER_ITEM}>
                            <Badge variant="outline">{tech}</Badge>
                          </motion.div>
                        ))}
                      </motion.div>

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
                  </TiltCard>
                </Parallax>
              </motion.div>
            );
          })}
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
                className="group h-full flex flex-col"
              >
                <Card className="surface-card h-full flex flex-col rounded-[2rem] border-border/70 py-0 shadow-none">
                  <CardHeader className="px-6 pt-6">
                    <ProjectImage src={project.imageSrc} title={`Preview de ${project.title}`} />
                    <Badge variant="secondary" className="w-fit">
                      {project.status}
                    </Badge>
                    <CardTitle className="text-xl text-foreground">
                      <ShinyText>{project.title}</ShinyText>
                    </CardTitle>
                    <CardDescription className="text-sm leading-7 text-muted-foreground">
                      {project.category}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-5 px-6 pb-6 flex-grow">
                    <p className="text-sm leading-7 text-muted-foreground opacity-75">
                      {project.description}
                    </p>
                    <motion.div
                      variants={STAGGER_CONTAINER}
                      initial="initial"
                      whileInView="animate"
                      viewport={VIEWPORT}
                      className="flex flex-wrap gap-2"
                    >
                      {project.technologies.map((tech) => (
                        <motion.div key={tech} variants={STAGGER_ITEM}>
                          <Badge variant="outline">{tech}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>
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
