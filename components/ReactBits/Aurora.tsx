'use client';
import { motion } from 'framer-motion';

export default function Aurora({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden opacity-60 ${className}`}>
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-[10%] top-0 h-[45vw] min-h-[500px] w-[45vw] min-w-[500px] rounded-full bg-blue-500/20 mix-blend-screen blur-[100px]"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[10%] top-[20%] h-[35vw] min-h-[400px] w-[35vw] min-w-[400px] rounded-full bg-indigo-500/20 mix-blend-screen blur-[120px]"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-10%] left-[20%] h-[55vw] min-h-[600px] w-[55vw] min-w-[600px] rounded-full bg-teal-400/15 mix-blend-screen blur-[130px]"
      />
    </div>
  );
}
