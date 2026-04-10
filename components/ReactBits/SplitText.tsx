'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { EASING } from '@/constants/animation';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

export default function SplitText({
  text,
  className = '',
  delay = 0,
  wordDelay = 0.08,
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const words = text.split(' ');

  return (
    <h2 ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + index * wordDelay,
            ease: EASING,
          }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}
