'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'TranslateLua',
      description:
        'Landing page profissional para captação de leads interessados em serviços de tradução inglês-português. Integração com Google Sheets para gerenciamento automático de leads.',
      technologies: ['Next.js', 'React', 'Google Sheets API', 'TailwindCSS', 'Vercel'],
      github: 'https://github.com/HenriqueNasciment0/lp-luatrad',
      demo: 'https://translatelua.vercel.app/',
      image: '🌐',
      featured: true,
    },
    {
      id: 2,
      title: 'API de Gerenciamento',
      description:
        'API REST robusta para gerenciamento de recursos com autenticação JWT e documentação Swagger.',
      technologies: ['NestJS', 'TypeScript', 'Prisma', 'JWT', 'Swagger'],
      github: '#',
      demo: '#',
      image: '⚙️',
      featured: false,
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description:
        'Dashboard interativo para visualização de dados em tempo real com gráficos e métricas avançadas.',
      technologies: ['React', 'D3.js', 'WebSocket', 'Chart.js', 'TailwindCSS'],
      github: '#',
      demo: '#',
      image: '📊',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile App React Native',
      description:
        'Aplicativo mobile multiplataforma com sincronização offline e notificações push.',
      technologies: ['React Native', 'Expo', 'AsyncStorage', 'Push Notifications'],
      github: '#',
      demo: '#',
      image: '📱',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Projetos em Destaque
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, desde aplicações web completas até APIs robustas e
            aplicativos mobile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  Destaque
                </div>
              )}

              <div className="text-4xl mb-4">{project.image}</div>

              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
                >
                  <Github size={16} />
                  Código
                </motion.a>

                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  <ExternalLink size={16} />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/HenriqueNasciment0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <Github size={20} />
            Ver todos os projetos no GitHub
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}