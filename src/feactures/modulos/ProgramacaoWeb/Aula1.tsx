'use client';

import { BookOpen, Clock, ArrowRight, Globe, Monitor, Radio, Zap, Sparkles } from "lucide-react";

export default function AulaProgramacaoWebMinimal() {
  const videoId = "rsFCVjr5yxc";

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16">
      
      {/* HEADER MINIMALISTA */}
      <header className="max-w-4xl space-y-6">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-blue-500">Módulo 01</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1"><Clock size={12} /> 12 min</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          A WEB NÃO <br/>
          <span className="text-zinc-800">NASCEU PRONTA</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Da comunicação rupestre aos cabos submarinos. Uma jornada pela necessidade humana de conexão.
        </p>

        <div className="flex items-center gap-4 pt-4">
          <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 text-[10px] font-bold">
            GG
          </div>
          <div className="text-left">
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Gustavo Guanabara</p>
            <p className="text-zinc-600 text-[10px]">Especialista em Tecnologia</p>
          </div>
        </div>
      </header>

      {/* PLAYER: SEM BORDAS PESADAS, APENAS O FOCO */}
      <section className="w-full max-w-5xl group">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 shadow-2xl transition-all duration-700 group-hover:shadow-blue-500/5">
          <iframe
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="História da Internet"
            allowFullScreen
          />
        </div>
      </section>

      {/* ARTIGO: FOCO TOTAL NO TEXTO */}
      <article className="max-w-3xl space-y-12">
        <blockquote className="border-l-2 border-blue-500 pl-8 my-16">
          <p className="text-2xl text-zinc-300 leading-relaxed font-light italic">
            "A internet é o resultado de uma insatisfação humana constante em busca de conexão."
          </p>
        </blockquote>

        <div className="space-y-6">
          <h2 className="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-3">
            <div className="w-8 h-[1px] bg-blue-500" /> O Big Bang
          </h2>
          <p className="text-zinc-500 leading-relaxed text-lg font-light">
            Tudo começa na necessidade de superar a barreira física. Das <span className="text-zinc-200">pinturas rupestres</span> ao telégrafo de Morse em 1835, o homem sempre buscou enviar dados à distância através de pulsos — o ancestral espiritual do bit.
          </p>
        </div>

        {/* INFOGRÁFICO MINIMALISTA */}
        <div className="py-12 flex justify-center items-center gap-12 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          <Radio size={32} className="text-blue-500" />
          <div className="h-[1px] w-24 bg-zinc-800" />
          <Monitor size={32} className="text-white" />
        </div>

        <div className="space-y-6">
          <h2 className="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-3">
            <div className="w-8 h-[1px] bg-blue-500" /> ARPANET & TCP/IP
          </h2>
          <p className="text-zinc-500 leading-relaxed text-lg font-light">
            Em 1969, nasceu a ARPANET. O desafio? Fazer máquinas diferentes falarem a mesma língua. Foi aqui que <span className="text-zinc-200 font-medium">Vint Cerf e Robert Kahn</span> criaram o TCP/IP, permitindo que a rede crescesse de 4 pontos para o infinito global.
          </p>
        </div>

        {/* CALLOUT BOX MINIMALISTA */}
        <div className="p-8 bg-zinc-900/30 rounded-3xl border border-zinc-900">
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
            <Zap size={14} className="text-blue-500" /> Hipertexto
          </h4>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Tim Berners-Lee uniu tudo no CERN. Ele não apenas imaginou uma teia de documentos, mas construiu o <span className="text-blue-400">HTTP</span> e o <span className="text-blue-400">HTML</span>. Nascia a WWW.
          </p>
        </div>
      </article>

      {/* FOOTER: DIRETO AO PONTO */}
      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próximo Passo</p>
          <h4 className="text-white font-bold text-xl tracking-tight">A Evolução para o HTML5</h4>
        </div>
        
        <button className="group flex items-center gap-4 px-10 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500">
          Continuar <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </footer>
    </div>
  );
}