'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import { FADE_UP, VIEWPORT } from '@/constants/animation';

const socialLinks = [
  { icon: Github, href: 'https://github.com/HenriqueNasciment0', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/henriquen-dev/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:technasc93@gmail.com', label: 'Email' },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/60 px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        {...FADE_UP}
        whileInView="animate"
        viewport={VIEWPORT}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Henrique Nascimento</h3>
            <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
              Engenharia full stack para produtos digitais com foco em execucao, clareza tecnica e
              operacao em producao.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground">Links</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {[
                { label: 'Inicio', href: '#hero' },
                { label: 'Sobre', href: '#about' },
                { label: 'Stack', href: '#skills' },
                { label: 'Projetos', href: '#projects' },
                { label: 'Contato', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    whileHover={{ y: -2 }}
                    className="inline-block transition-colors hover:text-foreground"
                  >
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>technasc93@gmail.com</p>
              <p>Fortaleza, CE - Brasil</p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Henrique Nascimento. Todos os direitos reservados.</p>
          <p className="mt-2">Construido com Next.js, TypeScript, Tailwind CSS e Framer Motion.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
