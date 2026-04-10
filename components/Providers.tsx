'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import { MotionConfig } from 'framer-motion';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ParallaxProvider>{children}</ParallaxProvider>
    </MotionConfig>
  );
}
