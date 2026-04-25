"use client";
import React, { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Portfolio() {
  const [init, setInit] = useState(false);

  // Inicializa o motor de partículas
  useEffect(() => {
    loadSlim(window.tsParticles).then(() => setInit(true));
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30">
      {/* Efeito Antigravity Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: "#ffffff" },
              links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1, outModes: { default: "bounce" } },
              number: { density: { enable: true, width: 800 }, value: 80 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Conteúdo do Site (Fica acima das partículas) */}
      <div className="relative z-10">
        {/* Header Glassmorphism */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10 px-8 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            LUCAS.DEV
          </h1>
          <div className="space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-400 transition">Início</a>
            <a href="#sobre" className="hover:text-blue-400 transition">Sobre</a>
            <a href="#projetos" className="hover:text-blue-400 transition">Projetos</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-6xl font-extrabold mb-4 tracking-tight">
            Support Analyst & <br />
            <span className="text-blue-500">Backend Developer</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-lg mb-8">
            Especialista em Oracle (PL/SQL) e estudante de ADS.
            Focado em criar integrações robustas e sistemas eficientes em Campinas/SP.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
              Ver Projetos
            </button>
            <button className="border border-slate-700 hover:bg-slate-800 px-8 py-3 rounded-full font-bold transition-all">
              Contato
            </button>
          </div>
        </section>

        {/* Seção Sobre (Apenas exemplo) */}
        <section id="sobre" className="py-20 px-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Sobre Mim</h3>
          <p className="text-slate-300 leading-relaxed italic">
            "Atuando há mais de 3 anos com suporte técnico e bancos de dados,
            atualmente mergulhado no curso de ADS para elevar minhas automações com Python e FastAPI ao próximo nível."
          </p>
        </section>
      </div>
    </main>
  );
}