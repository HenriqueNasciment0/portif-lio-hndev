'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Sou desenvolvedor <strong>FullStack</strong> desde 2022, formado pela Trybe. Moro em
              Fortaleza-CE e tenho experiência com aplicações web e mobile, sempre focado em
              entregar soluções robustas e escaláveis.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Minhas principais tecnologias incluem{' '}
              <strong>Node.js, TypeScript, Next.js, NestJS, PostgreSQL e MySQL</strong>. Desde 2025,
              venho me aprofundando também em <strong>Go e Rust</strong>, explorando performance e
              programação de sistemas.
            </p>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={20} />
              <span>Fortaleza, Ceará - Brasil</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar size={20} />
              <span>Desenvolvendo desde 2022</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              O que me motiva
            </h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Resolver problemas complexos com código limpo e eficiente</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Aprender continuamente novas tecnologias e padrões</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Contribuir para projetos que impactem positivamente as pessoas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Colaborar em equipes diversas e multidisciplinares</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
