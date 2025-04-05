import { FC } from 'react';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  index: number;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  period, 
  location, 
  description, 
  responsibilities,
  index
}) => {
  return (
    <motion.div 
      className="relative pl-8 pb-8 border-l-2 border-border-color"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
      <h3 className="text-2xl font-bold gradient-text mb-1">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center text-text-secondary mb-2">
        <span className="font-semibold">{company}</span>
        <span className="hidden sm:block sm:mx-2">•</span>
        <span>{period}</span>
      </div>
      <p className="text-sm text-text-muted mb-4">{location}</p>
      {description && <p className="text-text-secondary mb-4">{description}</p>}
      
      {responsibilities.length > 0 && (
        <div className="glass-effect p-4 rounded-lg mt-3">
          <h4 className="text-lg font-semibold mb-2">Responsabilidades:</h4>
          <ul className="list-disc pl-5 text-text-secondary space-y-1">
            {responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceItem;