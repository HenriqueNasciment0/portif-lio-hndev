'use client';
import { motion } from 'framer-motion';

interface NoisyGradientProps {
  className?: string;
  opacity?: number;
}

export default function NoisyGradient({
  className = '',
  opacity = 0.4,
}: NoisyGradientProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity }}
    >
      {/* Base gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 bg-repeat opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
}
