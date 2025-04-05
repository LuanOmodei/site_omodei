/**
 * Este arquivo ajuda a converter classes Tailwind v3/v4 incompatíveis 
 * para seus equivalentes no Tailwind v4 conforme instalado atualmente.
 */

export const colorMap = {
  // Mapeamento de cores
  'slate-900': '#0f172a',  // CSS equivalente
  'slate-800': '#1e293b',
  'blue-500': '#3b82f6',
  'blue-600': '#2563eb',
  'blue-400': '#60a5fa',
  'green-500': '#22c55e',
  'white': '#ffffff',
};

/**
 * Converte nomes de classes Tailwind para CSS inline quando necessário
 */
export function tailwindToInline(className: string): Record<string, string> {
  const styles: Record<string, string> = {};
  
  // Background
  if (className.includes('bg-')) {
    const colorKey = className.replace('bg-', '');
    if (colorMap[colorKey]) {
      styles.backgroundColor = colorMap[colorKey];
    }
  }
  
  // Text Color
  if (className.includes('text-')) {
    const colorKey = className.replace('text-', '');
    if (colorMap[colorKey]) {
      styles.color = colorMap[colorKey];
    }
  }
  
  // Border Color
  if (className.includes('border-')) {
    const colorKey = className.replace('border-', '');
    if (colorMap[colorKey]) {
      styles.borderColor = colorMap[colorKey];
    }
  }
  
  return styles;
}
