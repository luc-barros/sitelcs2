"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/[0.02] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Vamos <span className="text-gradient">Conversar?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Estou aberto a novas oportunidades e desafios. Se você tem um projeto em mente ou quer apenas dizer um olá, me envie uma mensagem!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Informações de Contato</h3>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent-light" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">lucas@example.com</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:-translate-y-1 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:-translate-y-1 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="text-white" size={20} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400 ml-1">Nome</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400 ml-1">Mensagem</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    placeholder="Como posso ajudar?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent to-secondary rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2 group"
                >
                  Enviar Mensagem
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="mt-24 py-6 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Lucas. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
