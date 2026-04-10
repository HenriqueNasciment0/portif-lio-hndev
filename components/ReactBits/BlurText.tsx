'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { EASING } from '@/constants/animation';

export default function BlurText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Pode conter \n para quebra de linha (split por quebra de linha ou espaço)
  const lines = text.split('\n');

  return (
    <h1 ref={ref} className={`flex flex-col ${className}`}>
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} className="flex flex-wrap">
          {line.split(' ').map((word, wordIdx) => {
            const index = lineIdx * 10 + wordIdx; // pseudo index para delay
            return (
              <motion.span
                key={wordIdx}
                initial={{ filter: 'blur(12px)', opacity: 0, y: 15 }}
                animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.12, ease: EASING }}
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}
