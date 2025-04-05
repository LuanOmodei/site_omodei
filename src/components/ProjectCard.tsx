import { FC } from 'react';
import { motion } from 'framer-motion';

interface ProjectTag {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
  tags: ProjectTag[];
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ 
  title, 
  description, 
  emoji, 
  tags,
  index
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card"
    >
      <div className="h-48 bg-card-bg flex items-center justify-center">
        <span className="text-6xl">{emoji}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-full glass-effect">{tag.name}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;