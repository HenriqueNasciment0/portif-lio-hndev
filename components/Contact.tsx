'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, BriefcaseBusiness } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MotionButton } from './ui/motion-button';
import NoisyGradient from './ReactBits/NoisyGradient';
import RotatingText from './ReactBits/RotatingText';
import { FADE_UP, VIEWPORT } from '@/constants/animation';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'technasc93@gmail.com',
    href: 'mailto:technasc93@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/henriquen-dev',
    href: 'https://www.linkedin.com/in/henriquen-dev/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/HenriqueNasciment0',
    href: 'https://github.com/HenriqueNasciment0',
  },
];

export default function Contact() {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contato via portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );

    window.location.href = `mailto:technasc93@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background NoisyGradient */}
      <NoisyGradient opacity={isMobile ? 0.25 : 0.4} />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          {...FADE_UP}
          whileInView="animate"
          viewport={VIEWPORT}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary/80">
            Contato
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-foreground">
            Vamos falar sobre{' '}
            <RotatingText
              words={['produto', 'operação', 'oportunidade']}
              className="text-primary"
            />
            .
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Se voce precisa de alguem para construir uma aplicacao do zero, evoluir um sistema ja
            em producao ou organizar a camada tecnica de um produto, faz sentido conversarmos.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            {...FADE_UP}
            whileInView="animate"
            viewport={VIEWPORT}
            transition={{ ...FADE_UP.transition, delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="rounded-[2rem] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex shrink-0 size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <BriefcaseBusiness size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">Disponivel para projetos</h3>
                  <p className="text-sm text-muted-foreground">Freelas, consultoria e oportunidades CLT/PJ</p>
                </div>
              </div>

              <div className="space-y-4">
                {channels.map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 rounded-3xl border border-border/70 bg-background/70 p-4 transition-colors hover:border-primary/30"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex shrink-0 size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                    >
                      <Icon size={20} />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="truncate font-medium text-foreground">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-dashed border-primary/35 bg-primary/8 p-5">
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Base atual</p>
                    <p className="font-medium text-foreground">Fortaleza, CE - Brasil</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            {...FADE_UP}
            whileInView="animate"
            viewport={VIEWPORT}
            transition={{ ...FADE_UP.transition, delay: 0.2 }}
          >
            <Card className="rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground">Iniciar uma conversa</h3>
              <p className="mt-3 text-muted-foreground">
                Preencha os campos abaixo para abrir um email com a mensagem pronta. Assim fica
                facil enviar contexto inicial sobre projeto, vaga ou parceria.
              </p>
            </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-2xl"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-2xl"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="rounded-2xl resize-none"
                    placeholder="Conte brevemente o objetivo, prazo, stack ou contexto da oportunidade..."
                  />
                </div>

                <MotionButton
                  type="submit"
                  size="lg"
                  whileTap={{ scale: 0.96 }}
                  className="w-full rounded-2xl text-sm font-semibold shadow-lg shadow-primary/20"
                >
                  Enviar por email
                  <Send className="size-4" />
                </MotionButton>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
