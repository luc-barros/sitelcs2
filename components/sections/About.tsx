"use client";

import { motion } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Sou um profissional apaixonado por tecnologia, atualmente focado em 
                <strong className="text-white"> desenvolvimento backend </strong> e 
                <strong className="text-white"> engenharia de dados</strong>.
              </p>
              <p>
                Com formação em Análise e Desenvolvimento de Sistemas (ADS), desenvolvi uma base sólida em arquitetura de software e resolução de problemas. Minha trajetória como Analista de Suporte me ensinou a ter uma visão crítica sobre como sistemas escaláveis devem se comportar em ambientes de produção.
              </p>
              <p>
                Meu objetivo é criar soluções eficientes que transformem processos de negócios complexos em fluxos automatizados e otimizados, utilizando as melhores práticas do mercado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <User className="text-accent" size={24} />,
                  title: "Perfil",
                  desc: "Desenvolvedor Backend",
                },
                {
                  icon: <MapPin className="text-accent" size={24} />,
                  title: "Base",
                  desc: "Campinas / SP",
                },
                {
                  icon: <GraduationCap className="text-accent" size={24} />,
                  title: "Formação",
                  desc: "Análise e Desenvolvimento de Sistemas",
                },
                {
                  icon: <Briefcase className="text-accent" size={24} />,
                  title: "Foco Atual",
                  desc: "Engenharia de Dados & Integrações",
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
