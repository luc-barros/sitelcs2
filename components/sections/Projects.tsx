"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Code, Activity } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Integração Oracle & App de Precificação",
      description: "Sistema robusto de precificação construído com FastAPI. Realiza o processamento de grandes volumes de registros diretamente do Oracle Database, garantindo alta performance e consistência dos dados para tomada de decisão.",
      tags: ["FastAPI", "Python", "Oracle DB", "PL/SQL"],
      icon: <Database className="text-accent" size={32} />,
      featured: true,
      link: "#",
      github: "#"
    },
    {
      title: "Automação de Rotinas ERP RMS",
      description: "Scripts e integrações focadas em automatizar rotinas diárias e gerar relatórios customizados a partir do sistema ERP RMS, economizando horas de trabalho manual da equipe.",
      tags: ["Python", "SQL", "ERP RMS"],
      icon: <Activity className="text-accent" size={32} />,
      featured: false,
      link: "#",
      github: "#"
    },
    {
      title: "API de Gestão de Chamados",
      description: "API RESTful desenvolvida em Java para gestão interna de chamados de suporte técnico, com autenticação JWT e documentação Swagger.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      icon: <Code className="text-accent" size={32} />,
      featured: false,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Projetos <span className="text-gradient">Em Destaque</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)] bg-white/[0.03] border ${
                  project.featured ? "border-accent/50 lg:col-span-2 lg:flex gap-8 items-center" : "border-white/10"
                }`}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {project.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent-light rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
