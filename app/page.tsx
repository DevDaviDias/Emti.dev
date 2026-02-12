'use client';

import Template from "@/app/Template/pages";
import { ArrowUpRight, Code2, Cpu, Globe, Layout, Terminal, Zap } from "lucide-react";

export default function Home() {
  const trilhas = [
    { nome: "Fundamentos de Hardware", materia: "Arquitetura", icon: <Cpu />, cor: "text-yellow-500", border: "border-yellow-500/20", progress: 15 },
    { nome: "Desenvolvimento Core", materia: "Java POO", icon: <Code2 />, cor: "text-orange-500", border: "border-orange-500/20", progress: 40 },
    { nome: "Interface e Design", materia: "HTML & CSS", icon: <Layout />, cor: "text-purple-500", border: "border-purple-500/20", progress: 80 },
    { nome: "Infraestrutura Web", materia: "Prog. Web", icon: <Globe />, cor: "text-indigo-500", border: "border-indigo-500/20", progress: 10 },
  ];

  return (
    <Template>
      <div className="w-full min-h-screen p-6 md:p-12 bg-[#050505]">
        
        {/* Topo: Status do Perfil */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-500 mb-2">
              <Zap size={16} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Status: Online</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              BEM-VINDO AO <span className="text-zinc-500">EMTI.</span>DEV
            </h2>
          </div>
          
          <div className="flex gap-8 border-l border-zinc-800 pl-8">
            <div className="text-left">
              <p className="text-zinc-500 text-[10px] uppercase font-bold mb-1">XP Total</p>
              <p className="text-white font-mono text-xl">12.450</p>
            </div>
            <div className="text-left">
              <p className="text-zinc-500 text-[10px] uppercase font-bold mb-1">Rank</p>
              <p className="text-blue-500 font-mono text-xl">PRO</p>
            </div>
          </div>
        </div>

        {/* Corpo: Trilha de Aprendizado Estilo Lista */}
        <div className="space-y-4 max-w-5xl">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-6">Trilhas de Aprendizado Ativas</p>
          
          {trilhas.map((trilha) => (
            <div 
              key={trilha.materia}
              className={`group relative flex flex-col md:flex-row items-center justify-between p-1 border ${trilha.border} bg-zinc-900/10 rounded-2xl hover:bg-zinc-900/40 transition-all duration-500 cursor-pointer`}
            >
              <div className="flex items-center gap-6 p-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800 ${trilha.cor}`}>
                  {trilha.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-none mb-1">{trilha.nome}</h4>
                  <p className="text-zinc-500 text-xs uppercase tracking-tighter">{trilha.materia}</p>
                </div>
              </div>

              {/* Barra de Progresso Interna */}
              <div className="flex items-center gap-8 px-6 w-full md:w-auto">
                <div className="hidden md:block w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-current ${trilha.cor}`} 
                    style={{ width: `${trilha.progress}%` }}
                  />
                </div>
                <span className={`font-mono text-xs ${trilha.cor}`}>{trilha.progress}%</span>
                <div className="p-2 rounded-full bg-zinc-900 text-zinc-600 group-hover:text-white group-hover:bg-zinc-800 transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Template>
  );
}