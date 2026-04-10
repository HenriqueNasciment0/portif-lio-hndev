export const EASING = [0.25, 0.1, 0.25, 1] as const; // ease-out suave

export const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASING },
};

export const STAGGER_CONTAINER = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const STAGGER_ITEM = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASING },
};

export const VIEWPORT = { once: true, margin: '-80px' };
