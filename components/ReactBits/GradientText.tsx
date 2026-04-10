'use client';
import { motion } from 'framer-motion';

export default function GradientText({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{ backgroundPosition: ['0% center', '-200% center'] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.span>
  );
}
