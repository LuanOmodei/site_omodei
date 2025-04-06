// Mapeamento de cores, com tipagem explícita
export const colorMap: { [key in 'slate-900' | 'slate-800' | 'blue-500' | 'blue-600' | 'blue-400' | 'green-500' | 'white']: string } = {
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
    const colorKey = className.replace('bg-', '') as keyof typeof colorMap; // Garantindo que colorKey é uma chave válida
    if (colorMap[colorKey]) {
      styles.backgroundColor = colorMap[colorKey];
    }
  }

  // Text Color
  if (className.includes('text-')) {
    const colorKey = className.replace('text-', '') as keyof typeof colorMap; // Garantindo que colorKey é uma chave válida
    if (colorMap[colorKey]) {
      styles.color = colorMap[colorKey];
    }
  }

  // Border Color
  if (className.includes('border-')) {
    const colorKey = className.replace('border-', '') as keyof typeof colorMap; // Garantindo que colorKey é uma chave válida
    if (colorMap[colorKey]) {
      styles.borderColor = colorMap[colorKey];
    }
  }

  return styles;
}
