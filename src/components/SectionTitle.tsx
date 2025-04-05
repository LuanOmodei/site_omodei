import { FC } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <motion.h2 
      className={`section-title text-3xl font-bold ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;