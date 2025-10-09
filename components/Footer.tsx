'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/seuusuario', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/seuusuario', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:henrique@exemplo.com', label: 'Email' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre mim */}
          <div>
            <h3 className="text-xl font-bold mb-4">Henrique Nascimento</h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor FullStack apaixonado por criar soluções elegantes e eficientes. Sempre
              explorando novas tecnologias e boas práticas.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { label: 'Sobre', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projetos', href: '#projects' },
                { label: 'Contato', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 tecnnasc93@gmail.com</p>
              <p>📍 Fortaleza, CE - Brasil</p>
              <div className="flex gap-3 mt-4">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Henrique Nascimento. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Desenvolvido com ❤️ usando React + Next.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
