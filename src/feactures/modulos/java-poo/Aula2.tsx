'use client';

import { Clock, ArrowRight, Download, Code2, CheckCircle2, Coffee, ExternalLink, Box, PlayCircle } from "lucide-react";
import { AulaProps } from "../../aulas/index";

export default function JavaAula2({ onNext }: AulaProps) {
  // Vídeo 1: Instalação do JDK (Guanabara)
  const videoJdkId = "IG1vAom3vrU"; 
  // Vídeo 2: Instalação do Eclipse (Guanabara - O link que você enviou)
  const videoEclipseId = "7dEN6Ix4yBQ"; 

  const proximaAulaSlug = "java-aula-3";

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16 min-h-screen">
      
      {/* 1. HEADER */}
      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-orange-500 flex items-center gap-1"><Coffee size={14} /> Java POO</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> Aula 02</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          PREPARANDO A <br/>
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">Máquina</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Siga o passo a passo para instalar o JDK (o motor) e o Eclipse (a nossa oficina). Sem essas ferramentas, não há código.
        </p>
      </header>

      {/* 2. PLAYERS DE VÍDEO (GUANABARA SERIES) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* VÍDEO 1: JDK */}
        <div className="space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            <PlayCircle size={18} className="text-orange-500" /> 1. O Motor: Instalar JDK
          </h3>
          <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-900 shadow-2xl transition-all hover:border-orange-500/30">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoJdkId}?rel=0`}
              title="Instalação JDK"
              allowFullScreen
            />
          </div>
        </div>

        {/* VÍDEO 2: ECLIPSE */}
        <div className="space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            <PlayCircle size={18} className="text-blue-500" /> 2. A Oficina: Instalar Eclipse
          </h3>
          <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-900 shadow-2xl transition-all hover:border-blue-500/30">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoEclipseId}?rel=0`}
              title="Instalação Eclipse"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 3. RESUMO TÉCNICO E DOWNLOADS */}
      <article className="max-w-5xl space-y-12">
        
        {/* EXPLICAÇÃO JDK */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-900 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Box size={20} />
            <span className="font-black uppercase text-xs tracking-widest">O que é o JDK?</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 italic">
            <div className="space-y-4">
              <p className="text-zinc-400 leading-relaxed text-sm font-light">
                O <strong>JDK (Java Development Kit)</strong> é o conjunto de ferramentas que "ensina" seu computador a falar Java. Ele pega o texto que você escreve e o transforma em algo que qualquer sistema entende.
              </p>
            </div>
            <div className="space-y-3 bg-zinc-950/50 p-6 rounded-3xl border border-zinc-800">
              <p className="text-xs text-zinc-500 leading-relaxed">
                <strong className="text-orange-500 uppercase">Compilador:</strong> Traduz seu código para Bytecode.<br/><br/>
                <strong className="text-orange-500 uppercase">JVM:</strong> A Máquina Virtual que roda o código em qualquer SO.
              </p>
            </div>
          </div>
          
        </div>

        {/* LINKS DE DOWNLOAD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-[10px]">
          <a 
            href="https://www.oracle.com/java/technologies/downloads/" 
            target="_blank"
            className="group p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-900 hover:border-orange-500/50 transition-all flex justify-between items-center"
          >
            <div className="space-y-1">
              <h4 className="text-white font-bold text-lg font-sans">Site Oficial do JDK</h4>
              <p className="text-zinc-600 uppercase tracking-widest">Oracle Cloud / Java SE</p>
            </div>
            <ExternalLink size={20} className="text-zinc-800 group-hover:text-orange-500 transition-colors" />
          </a>

          <a 
            href="https://www.eclipse.org/downloads/packages/" 
            target="_blank"
            className="group p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-900 hover:border-blue-500/50 transition-all flex justify-between items-center"
          >
            <div className="space-y-1">
              <h4 className="text-white font-bold text-lg font-sans">Download Eclipse</h4>
              <p className="text-zinc-600 uppercase tracking-widest">Eclipse IDE for Java Devs</p>
            </div>
            <ExternalLink size={20} className="text-zinc-800 group-hover:text-blue-500 transition-colors" />
          </a>
        </div>

        {/* CHECKLIST */}
        <div className="p-8 border border-zinc-900 rounded-3xl bg-zinc-900/10">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Verificação de Sucesso:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Instalou o JDK primeiro?",
              "Configurou as variáveis de ambiente?",
              "O Eclipse abriu sem erros?",
              "O ícone do Java aparece na barra?"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 text-zinc-500 text-xs">
                <CheckCircle2 size={14} className="text-emerald-500" /> {step}
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* 4. FOOTER */}
      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próxima Etapa</p>
          <h4 className="text-white font-bold text-xl uppercase italic tracking-tight">Primeiro Código: Hello World</h4>
        </div>
        
      
      </footer>
    </div>
  );
}