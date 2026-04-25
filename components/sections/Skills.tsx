"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", category: "Language" },
  { name: "FastAPI", category: "Framework" },
  { name: "Oracle Database", category: "Database" },
  { name: "PL/SQL", category: "Database" },
  { name: "Java", category: "Language" },
  { name: "ERP RMS", category: "Integration" },
  { name: "SQL", category: "Database" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Docker", category: "DevOps" },
  { name: "Linux", category: "OS" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/[0.02] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            Tecnologias e ferramentas com as quais trabalho para entregar sistemas performáticos e integrados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative px-6 py-3 bg-background border border-white/10 rounded-full overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 font-medium text-gray-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
