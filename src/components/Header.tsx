import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header: FC = () => {
  return (
    <header className="container py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 rounded-full overflow-hidden"
          style={{ 
            boxShadow: '0 0 0 4px var(--primary), 0 0 0 8px rgba(52, 144, 220, 0.3)', 
          }}
        >
          <div className="absolute inset-0 bg-primary opacity-20"></div>
          <Image 
            src="/avatar.jpg" 
            alt="Luan Omodei Marinheiro" 
            width={200}
            height={200}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/200?text=LO';
            }}
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Luan Omodei <span className="gradient-text">Marinheiro</span>
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Analista de Sistemas Jr
          </motion.h2>
          <motion.p 
            className="mb-6 max-w-2xl text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Com experiência em suporte e análise de sistemas, atuo no desenvolvimento de soluções técnicas, suporte a usuários 
            e implementação de melhorias em processos. Sou apaixonado por tecnologia e inovação, buscando constantemente 
            novos conhecimentos e desafios na área de TI.
          </motion.p>

          <motion.div 
            className="flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a href="https://github.com/luanomodeii" target="_blank" rel="noopener noreferrer" className="text-2xl text-text-primary hover:text-primary transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/luan-omodei" target="_blank" rel="noopener noreferrer" className="text-2xl text-text-primary hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:luan.omodei@email.com" className="text-2xl text-text-primary hover:text-primary transition-colors">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;