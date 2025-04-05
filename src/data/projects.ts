export interface Project {
  title: string;
  description: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
  tags: { name: string }[];
}

export const projects: Project[] = [
  {
    title: 'Sistema de Gestão de Chamados',
    description: 'Desenvolvimento de um sistema para gerenciamento e acompanhamento de chamados técnicos internos.',
    emoji: '💻',
    gradientFrom: 'blue',
    gradientTo: 'indigo',
    tags: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'SQL' }
    ]
  },
  {
    title: 'Dashboard de Análise de Dados',
    description: 'Criação de painéis interativos para visualização e análise de dados operacionais da empresa.',
    emoji: '📊',
    gradientFrom: 'purple',
    gradientTo: 'pink',
    tags: [
      { name: 'Python' },
      { name: 'React' },
      { name: 'D3.js' }
    ]
  },
  {
    title: 'Automação de Processos',
    description: 'Implementação de rotinas automatizadas para otimização de processos administrativos e operacionais.',
    emoji: '🔄',
    gradientFrom: 'teal',
    gradientTo: 'green',
    tags: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'Shell Script' }
    ]
  },
  {
    title: 'Portal de Documentação Técnica',
    description: 'Desenvolvimento de um portal centralizado para armazenar e consultar documentação técnica de sistemas.',
    emoji: '📚',
    gradientFrom: 'yellow',
    gradientTo: 'orange',
    tags: [
      { name: 'Next.js' },
      { name: 'Markdown' },
      { name: 'Tailwind CSS' }
    ]
  },
  {
    title: 'Monitoramento de Infraestrutura',
    description: 'Implementação de sistema para monitoramento proativo de servidores e serviços de TI.',
    emoji: '🔍',
    gradientFrom: 'red',
    gradientTo: 'pink',
    tags: [
      { name: 'Grafana' },
      { name: 'Prometheus' },
      { name: 'Python' }
    ]
  },
  {
    title: 'Aplicativo de Gestão de Atividades',
    description: 'Desenvolvimento de aplicativo para gerenciamento de tarefas e atividades de equipe.',
    emoji: '📱',
    gradientFrom: 'cyan',
    gradientTo: 'blue',
    tags: [
      { name: 'React Native' },
      { name: 'Firebase' },
      { name: 'TypeScript' }
    ]
  }
];