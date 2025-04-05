import { FC } from 'react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  index: number;
}

const EducationCard: FC<EducationCardProps> = ({ institution, degree, period, index }) => {
  return (
    <motion.div 
      className="card p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="mb-4 text-primary text-3xl">
        🎓
      </div>
      <h3 className="text-xl font-bold mb-2">{institution}</h3>
      <p className="text-text-secondary mb-2">{degree}</p>
      <p className="text-sm text-text-muted">{period}</p>
    </motion.div>
  );
};

export default EducationCard;