'use client';
import { motion } from 'framer-motion';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export default function ShinyText({
  children,
  className = '',
  duration = 3,
}: ShinyTextProps) {
  return (
    <motion.span
      className={`relative inline-block bg-gradient-to-r from-foreground via-foreground/50 to-foreground bg-[length:200%_100%] bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
}
