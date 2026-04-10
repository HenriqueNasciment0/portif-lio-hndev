'use client';
import { useEffect, useState } from 'react';

/**
 * Hook para detectar media queries
 * Útil para desabilitar parallax e tilt em mobile
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

/**
 * Hook para detectar se o dispositivo tem ponteiro fino (mouse)
 * Usado para desabilitar efeitos de hover em touch devices
 */
export function useHasPointer() {
  return useMediaQuery('(pointer: fine)');
}

/**
 * Hook para detectar mobile
 */
export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)');
}
