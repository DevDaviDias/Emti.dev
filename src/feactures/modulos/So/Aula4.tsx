'use client';

import { ArrowRight, BookOpen, ExternalLink, Terminal, Cpu, Database, Share2, ShieldCheck, Coffee } from "lucide-react";

interface AulaProps {
  onNext: (slug: string) => void;
}

export default function AulaUniversoLinux({ onNext }: AulaProps) {
  // ID de vídeo focado em: O que é Linux e Software Livre
  const videoId = "yvH-S-v_fV8"; 
  const proximaAulaSlug = "so-aula-arquivos"; // Próximo passo: Gerenciamento de Arquivos

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16">
      
      {/* 1. HEADER */}
      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-orange-500">Módulo 01</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="text-zinc-500">Sistemas Operacionais</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          O UNIVERSO <br/>
          <span className="text-orange-600 uppercase text-4xl md:text-6xl italic font-light">Linux</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Mais que um sistema, uma filosofia. Conheça o Kernel que alimenta desde smartphones até as supermáquinas da NASA.
        </p>
      </header>

      {/* 2. PLAYER DE VÍDEO */}
      <section className="w-full max-w-5xl group">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 shadow-2xl transition-all duration-700 group-hover:shadow-orange-500/5 border border-zinc-900">
          <iframe
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="O que é Linux?"
            allowFullScreen
          />
        </div>
      </section>

      {/* 3. CONTEÚDO EM GRID */}
      <article className="max-w-5xl space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-y border-zinc-900 py-12">
          <div className="space-y-4">
             <h3 className="text-orange-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
                <Share2 size={16} /> Software Livre
             </h3>
             <p className="text-zinc-300 text-2xl font-light leading-snug">
                "No Linux, você não é apenas um usuário; você tem a liberdade de ver, modificar e distribuir o código."
             </p>
          </div>
          <div className="p-8 bg-zinc-900/20 rounded-3xl border border-zinc-900 text-zinc-500 text-sm leading-relaxed">
            Criado por Linus Torvalds em 1991, o Linux é um <strong>Kernel</strong> (núcleo). As "Distros" como Ubuntu, Debian e Fedora são o sistema completo construído ao redor desse núcleo.
          </div>
        </div>

        {/* --- SEÇÃO: LEITURA COMPLEMENTAR --- */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-900 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <BookOpen size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Filosofia Open Source</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl text-white font-bold">O Poder do Pinguim (Tux)</h3>
            <p className="text-zinc-400 leading-relaxed max-w-3xl">
              Entender o Linux é essencial para qualquer técnico de TI. Ele é a base da internet (servidores), da computação em nuvem e do Android. Aprender Linux é ganhar superpoderes na linha de comando e total controle sobre o hardware.
            </p>
            
            <a 
              href="https://www.redhat.com/pt-br/topics/linux/what-is-linux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors group"
            >
              Guia definitivo Red Hat 
              <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="space-y-8">
           <h2 className="text-white font-bold text-xl tracking-tight">Por que aprender Linux?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 space-y-2">
                 <Terminal className="text-orange-500" size={20} />
                 <h4 className="text-zinc-200 font-bold text-sm">Linha de Comando</h4>
                 <p className="text-zinc-500 text-xs">Eficiência total sem precisar de interface gráfica pesada.</p>
              </div>
              <div className="p-6 rounded-2xl border border-zinc-800/30 bg-zinc-900/10 space-y-2">
                 <ShieldCheck className="text-orange-500" size={20} />
                 <h4 className="text-zinc-200 font-bold text-sm">Segurança</h4>
                 <p className="text-zinc-500 text-xs">Sistema de permissões rígido e menos vulnerável a vírus comuns.</p>
              </div>
              <div className="p-6 rounded-2xl border border-zinc-800/30 bg-zinc-900/10 space-y-2">
                 <Database className="text-orange-500" size={20} />
                 <h4 className="text-zinc-200 font-bold text-sm">Estabilidade</h4>
                 <p className="text-zinc-500 text-xs">Capaz de ficar meses ligado sem precisar reiniciar ou travar.</p>
              </div>
           </div>
        </div>
      </article>

      {/* 4. FOOTER */}
      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2 text-left">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próximo Passo</p>
          <h4 className="text-white font-bold text-xl tracking-tight uppercase">Gerenciamento de Arquivos e Terminal</h4>
        </div>
        
        <button 
          onClick={() => onNext(proximaAulaSlug)}
          className="group flex items-center gap-4 px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-orange-600 hover:text-white transition-all duration-500 shadow-xl shadow-white/5"
        >
          Continuar <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </footer>
    </div>
  );
}