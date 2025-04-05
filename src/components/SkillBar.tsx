import { FC } from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
  color: string;
  type: 'technical' | 'soft';
}

const SkillBar: FC<SkillBarProps> = ({ name, level, index, color, type }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-base">{name}</span>
        <span className="text-sm text-gray-400">{level}/10</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div 
          className={`skill-bar-fill ${type}`}
          style={{ width: `${level * 10}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level * 10}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;