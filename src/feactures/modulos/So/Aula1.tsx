'use client';

import { Clock, ArrowRight, Monitor, Cpu, Layers, HardDrive, BookOpen, ExternalLink } from "lucide-react";

interface AulaProps {
  onNext: (slug: string) => void;
}

export default function AulaSistemasOperacionais1({ onNext }: AulaProps) {
  const videoId = "BcMAuf8hit8";
  const proximaAulaSlug = "so-aula-2";

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16">
      
      {/* 1. HEADER */}
      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-emerald-500">Módulo 01</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          O CÉREBRO DO <br/>
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">Computador</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          O que acontece entre o apertar do botão de ligar e a tela colorida que você vê? Conheça o Sistema Operacional.
        </p>
      </header>

      {/* 2. PLAYER DE VÍDEO */}
      <section className="w-full max-w-5xl group">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 shadow-2xl transition-all duration-700 group-hover:shadow-emerald-500/5 border border-zinc-900">
          <iframe
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="O que é um Sistema Operacional?"
            allowFullScreen
          />
        </div>
      </section>

      {/* 3. CONTEÚDO EM GRID */}
      <article className="max-w-5xl space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-y border-zinc-900 py-12">
          <div className="space-y-4">
             <h3 className="text-emerald-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
                <Cpu size={16} /> O Grande Gerente
             </h3>
             <p className="text-zinc-300 text-2xl font-light leading-snug">
                "O SO é como o gerente de uma empresa: organiza tudo e manda cada peça trabalhar."
             </p>
          </div>
          <div className="p-8 bg-zinc-900/20 rounded-3xl border border-zinc-900 text-zinc-500 text-sm leading-relaxed">
            Sem ele, o hardware (peças) seria apenas metal e plástico. Ele é a ponte entre você e a máquina.
          </div>
        </div>

        {/* --- NOVA SEÇÃO: LEITURA COMPLEMENTAR --- */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-900 space-y-6">
          <div className="flex items-center gap-3 text-emerald-500">
            <BookOpen size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Aprofundamento</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl text-white font-bold">Por que ler sobre isso?</h3>
            <p className="text-zinc-400 leading-relaxed max-w-3xl">
              Para quem está começando agora, entender a teoria por trás dos Sistemas Operacionais ajuda a compreender como os programas que você vai criar no futuro gerenciam memória e processos. Este guia da HostMidia explica de forma simples os conceitos de Kernel, drivers e a evolução dos sistemas.
            </p>
            
            <a 
              href="https://www.hostmidia.com.br/blog/sistema-operacional/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium transition-colors group"
            >
              Ler artigo completo 
              <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
        {/* -------------------------------------- */}

        <div className="space-y-8">
           <h2 className="text-white font-bold text-xl tracking-tight">Principais Funções</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 space-y-2">
                 <Monitor className="text-emerald-500" size={20} />
                 <h4 className="text-zinc-200 font-bold text-sm">Interface</h4>
                 <p className="text-zinc-500 text-xs">Cria a tela, ícones e janelas que facilitam o uso.</p>
              </div>
              <div className="p-6 rounded-2xl border border-zinc-800/30 bg-zinc-900/10 space-y-2">
                 <Layers className="text-emerald-500" size={20} />
                 <h4 className="text-zinc-200 font-bold text-sm">Programas</h4>
                 <p className="text-zinc-500 text-xs">Permite que o navegador, jogos e apps funcionem.</p>
              </div>
              <div className="p-6 rounded-2xl border border-zinc-800/30 bg-zinc-900/10 space-y-2">
                 <HardDrive className="text-emerald-500" size={20} />
                 <h4 className="text-zinc-200 font-bold text-sm">Hardware</h4>
                 <p className="text-zinc-500 text-xs">Gerencia teclado, mouse, memória e arquivos.</p>
              </div>
           </div>
        </div>
      </article>

      {/* 4. FOOTER */}
      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2 text-left">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próximo Passo</p>
          <h4 className="text-white font-bold text-xl tracking-tight uppercase">Windows vs Linux</h4>
        </div>
        
        <button 
          onClick={() => onNext(proximaAulaSlug)}
          className="group flex items-center gap-4 px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-500 shadow-xl shadow-white/5"
        >
          Continuar <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </footer>
    </div>
  );
}