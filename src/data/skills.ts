export interface Skill {
  name: string;
  level: number; // 1-10
}

export const technicalSkills: Skill[] = [
  { name: 'JavaScript', level: 8 },
  { name: 'TypeScript', level: 7 },
  { name: 'React', level: 7 },
  { name: 'Next.js', level: 7 },
  { name: 'Python', level: 6 },
  { name: 'SQL', level: 7 },
  { name: 'Git', level: 7 },
  { name: 'Node.js', level: 6 },
  { name: 'HTML/CSS', level: 8 },
];

export const softSkills: Skill[] = [
  { name: 'Resolução de Problemas', level: 9 },
  { name: 'Trabalho em Equipe', level: 8 },
  { name: 'Comunicação', level: 8 },
  { name: 'Adaptabilidade', level: 9 },
  { name: 'Gestão de Tempo', level: 7 },
];