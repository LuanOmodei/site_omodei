export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Analista de Sistemas Jr',
    company: 'Scheffer',
    period: 'jul de 2024 - o momento',
    location: 'Sapezal, Mato Grosso, Brasil',
    description: '',
    responsibilities: [],
  },
  {
    title: 'Analista Suporte TI Jr',
    company: 'Scheffer',
    period: 'jul de 2022 - jun de 2024',
    location: 'Sapezal, Mato Grosso, Brasil',
    description: 'Desempenhei um papel crucial no suporte técnico e no desenvolvimento de soluções para usuários internos, focando na resolução de problemas software, além do desenvolvimento de relatórios e telas',
    responsibilities: [
      'Suporte Técnico: Atendimento a usuários internos, resolvendo problemas relacionados aos sistemas, ERP, Vetorh, Gatec.',
      'Manutenção de Sistemas: Atualização e manutenção de sistemas operacionais e aplicativos.',
      'Gestão de Incidentes: Registro e acompanhamento de chamados técnicos, garantindo a resolução dentro do prazo.',
      'Documentação: Documentação de procedimentos e soluções para facilitar futuras consultas.',
      'Monitoramento de Sistemas: Monitoramento proativo de sistemas e redes para evitar falhas e garantir o desempenho contínuo.',
      'Desenvolvimento de Relatórios: Criação e manutenção de relatórios para diferentes áreas da empresa, proporcionando dados e insights importantes para tomada de decisões.',
      'Desenvolvimento de Telas: Desenvolvimento de telas de nível básico e mediano para sistemas internos.'
    ],
  },
  {
    title: 'Assistente de Infraestrutura de TI',
    company: 'Scheffer',
    period: 'out de 2021 - jul de 2022',
    location: 'Sapezal, Mato Grosso, Brasil',
    description: 'Desempenhei um papel essencial no atendimento a usuários, fornecendo suporte técnico em problemas com computadores, impressoras e outras questões técnicas de TI, garantindo a manutenção e eficiência da infraestrutura tecnológica.',
    responsibilities: [
      'Suporte a Usuários: Atendimento e suporte técnico a usuários internos, resolvendo problemas relacionados a computadores, impressoras e outros equipamentos de TI.',
      'Manutenção de Equipamentos: Realização de manutenção preventiva e corretiva em computadores, impressoras e periféricos.',
      'Instalação e Configuração: Instalação e configuração de softwares, sistemas operacionais e novos equipamentos de TI.',
      'Gestão de Incidentes: Registro e acompanhamento de chamados técnicos, garantindo a resolução eficiente dos problemas reportados.',
      'Documentação: Documentação de problemas e soluções para referência futura e melhoria contínua do suporte.',
      'Monitoramento de Performance: Monitoramento do desempenho dos equipamentos e redes para identificar e solucionar problemas proativamente.'
    ],
  },
  {
    title: 'Auxiliar de Infraestrutura de TI',
    company: 'Scheffer',
    period: 'mar de 2020 - out de 2021',
    location: 'Sapezal, Mato Grosso, Brasil',
    description: 'Contribuí significativamente para a instalação, manutenção e suporte de equipamentos de TI, assegurando o bom funcionamento das operações diárias e o suporte técnico básico aos usuários.',
    responsibilities: [
      'Instalação de Equipamentos: Instalação e configuração de equipamentos de informática e periféricos.',
      'Manutenção Preventiva: Execução de manutenção preventiva e corretiva em equipamentos de TI.',
      'Apoio Técnico: Suporte técnico básico a usuários, incluindo resolução de problemas de hardware e software.',
      'Configuração de Redes: Auxílio na configuração e manutenção de redes locais (LAN).',
      'Controle de Chamados: Registro e acompanhamento de chamados técnicos.'
    ],
  },
  {
    title: 'Aprendiz',
    company: 'Scheffer',
    period: 'mar de 2018 - mar de 2020',
    location: 'Sapezal, Mato Grosso, Brasil',
    description: 'Atuei em um papel multifacetado como aprendiz, adquirindo experiência prática em diversas áreas, incluindo financeira, processos, auditoria e TI, contribuindo para o suporte técnico e administrativo da empresa.',
    responsibilities: [
      'Área Financeira: Suporte administrativo, análise financeira e conciliação bancária.',
      'Área de Processos: Mapeamento, documentação e análise de eficiência de processos empresariais.',
      'Área de Auditoria: Verificação de conformidade, análise de dados e preparação de relatórios.',
      'Área de TI: Suporte técnico básico, instalação de equipamentos e manutenção preventiva.'
    ],
  }
];