/**
 * Utilitários para detecção de capacidades do dispositivo
 */

/**
 * Verifica se o dispositivo tem ponteiro fino (mouse)
 * Usado para desabilitar efeitos de hover/tilt em touch devices
 */
export function hasPointer(): boolean {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(pointer: fine)').matches;
}

/**
 * Verifica se é um dispositivo móvel
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 768px)').matches;
}

/**
 * Verifica se é um dispositivo touch
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0
  );
}
