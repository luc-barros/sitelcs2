"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 z-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-semibold mb-6">
            Olá, mundo! 👋
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
            Sou <span className="text-gradient">Lucas</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
            Support Analyst & Backend Developer
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
            Especialista em resolver problemas complexos e construir sistemas backend robustos e escaláveis. Focado em transformar dados em inteligência com alta performance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-accent to-secondary rounded-full font-bold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] flex items-center gap-2"
            >
              Ver Projetos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/5 transition-all"
            >
              Fale Comigo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
