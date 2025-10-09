'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Globe, Server, Database, Smartphone } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'blue',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'NestJS', 'Express', 'Go', 'Rust'],
      color: 'green',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma'],
      color: 'purple',
    },
    {
      title: 'Mobile & Tools',
      icon: Smartphone,
      skills: ['React Native', 'Docker', 'Git', 'Jest', 'Linux'],
      color: 'orange',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Tecnologias & Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div
                className={`w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900 rounded-lg flex items-center justify-center mb-4`}
              >
                <category.icon
                  className={`text-${category.color}-600 dark:text-${category.color}-400`}
                  size={24}
                />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full inline-block mr-2 mb-2"
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
