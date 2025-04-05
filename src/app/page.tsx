"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Header from '@/components/Header';
import SectionTitle from '@/components/SectionTitle';
import ExperienceItem from '@/components/ExperienceItem';
import EducationCard from '@/components/EducationCard';
import SkillBar from '@/components/SkillBar';
import ContactItem from '@/components/ContactItem';
import ContactForm from '@/components/ContactForm';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { technicalSkills, softSkills } from '@/data/skills';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <ThemeToggle />

        <main className="container pb-12">
          {/* About Section */}
          <section className="mb-20">
            <SectionTitle>Sobre Mim</SectionTitle>
            <motion.div 
              className="prose prose-lg max-w-none text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                Sou um Analista de Sistemas Junior com formação em Engenharia de Software e especialização em desenvolvimento 
                Full Stack e Python. Tenho experiência profissional na área de TI, começando como aprendiz e evoluindo para posições 
                de suporte e análise de sistemas.
              </p>
              <p>
                Minha trajetória profissional na Scheffer me proporcionou experiência em diversas áreas técnicas, desde o suporte 
                aos usuários até o desenvolvimento de relatórios e interfaces. Tenho habilidades em gerenciamento de incidentes, 
                documentação técnica e monitoramento de sistemas, sempre buscando soluções eficientes para os desafios tecnológicos.
              </p>
              <p>
                Estou constantemente me atualizando e aprimorando minhas habilidades técnicas através de cursos e especializações, 
                com foco em desenvolvimento de software e análise de sistemas.
              </p>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section className="mb-20">
            <SectionTitle>Experiência Profissional</SectionTitle>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  location={exp.location}
                  description={exp.description}
                  responsibilities={exp.responsibilities}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <SectionTitle>Formação Acadêmica</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <EducationCard
                  key={index}
                  institution={edu.institution}
                  degree={edu.degree}
                  period={edu.period}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-20">
            <SectionTitle>Habilidades</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card p-6"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">Técnicas</h3>
                <div>
                  {technicalSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      index={index}
                      color="#3490dc"
                      type="technical"
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card p-6"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">Interpessoais</h3>
                <div>
                  {softSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      index={index}
                      color="#f59e0b"
                      type="soft"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-20">
            <SectionTitle>Projetos</SectionTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  emoji={project.emoji}
                  gradientFrom={project.gradientFrom}
                  gradientTo={project.gradientTo}
                  tags={project.tags}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <SectionTitle>Contato</SectionTitle>

            <motion.div 
              className="glass-effect p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Informações de Contato</h3>
                  <p className="text-text-secondary mb-6">
                    Estou disponível para novas oportunidades e desafios. Entre em contato para conversarmos sobre como posso contribuir para o seu projeto ou empresa.
                  </p>
                  <div className="space-y-4">
                    <ContactItem 
                      icon={<FaEnvelope className="text-xl" />}
                      href="mailto:luan.omodei@email.com"
                      text="luan.omodei@email.com"
                    />
                    <ContactItem 
                      icon={<FaLinkedin className="text-xl" />}
                      href="https://linkedin.com/in/luan-omodei"
                      text="linkedin.com/in/luan-omodei"
                      external
                    />
                    <ContactItem 
                      icon={<FaGithub className="text-xl" />}
                      href="https://github.com/luanomodeii"
                      text="github.com/luanomodeii"
                      external
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Envie-me uma Mensagem</h3>
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}