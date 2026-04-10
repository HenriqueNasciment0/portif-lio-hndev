'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, BriefcaseBusiness } from 'lucide-react';
import { Button } from './ui/button';

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
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary/80">
            Contato
          </p>
          <h2 className="text-3xl font-semibold text-foreground md:text-5xl">
            Vamos falar sobre produto, operacao ou uma nova oportunidade.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Se voce precisa de alguem para construir uma aplicacao do zero, evoluir um sistema ja
            em producao ou organizar a camada tecnica de um produto, faz sentido conversarmos.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="surface-card rounded-[2rem] p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <BriefcaseBusiness size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Disponivel para projetos</h3>
                  <p className="text-sm text-muted-foreground">Freelas, consultoria e oportunidades CLT/PJ</p>
                </div>
              </div>

              <div className="space-y-4">
                {channels.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-3xl border border-border/70 bg-background/70 p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="font-medium text-foreground">{value}</p>
                    </div>
                  </a>
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="surface-card rounded-[2rem] p-8 sm:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground">Escreva sua mensagem</h3>
              <p className="mt-3 text-muted-foreground">
                O envio abre seu cliente de email com os dados ja preenchidos, sem depender de uma
                API fake no front-end.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-2xl text-sm font-semibold shadow-lg shadow-primary/20"
              >
                Enviar por email
                <Send className="size-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
