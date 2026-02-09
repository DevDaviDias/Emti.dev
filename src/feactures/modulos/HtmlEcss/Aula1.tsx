'use client';

import { ChevronRight, Play } from "lucide-react";

export default function AulaMinimalista() {
  const videoId = "Ejkb_YpuHWs"; // ID do YouTube

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
      
      {/* PLAYER MINIMALISTA */}
      <div className="relative aspect-video w-full bg-[#09090b] rounded-xl overflow-hidden border border-zinc-800/50 shadow-2xl">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title="Vídeo Aula"
          allowFullScreen
        />
      </div>

      {/* TEXTO E CONTEÚDO */}
      <div className="space-y-8 px-2">
        <header className="space-y-2">
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium uppercase tracking-widest">
            <span>Módulo 01</span>
            <ChevronRight size={12} />
            <span className="text-zinc-300">Introdução</span>
          </div>
          <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">
            A Estrutura Semântica do HTML5
          </h1>
        </header>

        <section className="prose prose-invert max-w-none">
          <p className="text-zinc-400 leading-relaxed text-lg">
            Nesta aula, exploraremos os fundamentos da web moderna. Vamos entender como os motores de busca interpretam seu código e por que a semântica é o pilar de um site profissional.
          </p>
          
          <div className="h-px bg-zinc-800/50 my-8" />

          {/* CHECKLIST DE TÓPICOS */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">Tópicos abordados</h3>
            <ul className="space-y-3">
              {[
                "Estrutura base do documento",
                "Tags de cabeçalho e parágrafos",
                "Navegação e seções semânticas",
                "Boas práticas de acessibilidade"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FOOTER DA AULA (BOTÕES DISCRETOS) */}
        <footer className="flex items-center gap-4 pt-4">
          <button className="px-5 py-2.5 bg-zinc-100 text-zinc-950 text-sm font-bold rounded-lg hover:bg-zinc-200 transition-colors">
            Marcar como concluída
          </button>
          <button className="px-5 py-2.5 bg-zinc-900 text-zinc-400 text-sm font-medium rounded-lg border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 transition-all">
            Material de apoio
          </button>
        </footer>
      </div>
    </div>
  );
}