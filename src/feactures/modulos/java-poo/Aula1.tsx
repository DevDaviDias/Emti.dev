'use client';

import { PlayCircle, FileText, Lightbulb, CheckCircle } from "lucide-react";

export default function AulaJava1() {
  // ID do vídeo que você pega no link do YouTube (depois do v=)
  const videoId = "qSREUghPqMo"; 

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* SEÇÃO DO VÍDEO */}
      <div className="group relative aspect-video w-full bg-black rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Vídeo da Aula"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* CABEÇALHO DA AULA */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <PlayCircle className="text-blue-500" size={32} />
          Introdução ao Java e Configuração
        </h1>
        <p className="text-zinc-400 text-lg">
          Nesta primeira aula, vamos entender por que o Java é multiplataforma e preparar o seu computador com o JDK.
        </p>
      </div>

      {/* GRID DE CONTEÚDO EXTRA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* O QUE VOCÊ VAI APRENDER */}
        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
          <h3 className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
            <Lightbulb size={20} /> O que vamos aprender
          </h3>
          <ul className="space-y-3">
            {[
              "História e evolução do Java",
              "Diferença entre JRE e JDK",
              "Configuração das Variáveis de Ambiente",
              "Seu primeiro programa: Hello World"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                <CheckCircle size={16} className="text-emerald-500 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* MATERIAIS PARA DOWNLOAD */}
        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
          <h3 className="text-zinc-100 font-semibold mb-4 flex items-center gap-2">
            <FileText size={20} /> Material de Apoio
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors group">
              <span className="text-sm text-zinc-300">Slides da Aula 01 (PDF)</span>
              <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded">BAIXAR</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors group">
              <span className="text-sm text-zinc-300">Links Úteis (Download JDK)</span>
              <span className="text-[10px] bg-zinc-700 text-zinc-400 px-2 py-1 rounded">LINK</span>
            </button>
          </div>
        </div>

      </div>

      {/* NOTA DE RODAPÉ / DESAFIO */}
      <div className="p-6 bg-gradient-to-r from-blue-600/10 to-transparent border-l-4 border-blue-600 rounded-r-3xl">
        <h4 className="text-white font-bold mb-1">Dica de Ouro:</h4>
        <p className="text-sm text-zinc-400 italic">
          "Não pule a configuração das variáveis de ambiente! Sem isso, o comando 'javac' não funcionará no seu terminal."
        </p>
      </div>
    </div>
  );
}