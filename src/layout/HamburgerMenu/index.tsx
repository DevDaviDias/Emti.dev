'use client';

import React from 'react';
import {
  Cpu,
  Monitor,
  BrainCircuit,
  Palette,
  Coffee,
  Globe,
  LayoutDashboard
} from 'lucide-react';

interface MenuProps {
  children: React.ReactNode;
  onChangeSessao: (slug: string) => void;
  sessaoAtiva: string;
}

export default function HamburgerMenu({ children, onChangeSessao, sessaoAtiva }: MenuProps) {

  // Mapeamento com ícones do Lucide
  const materias = [
    { nome: 'Lógica de programação', slug: 'logica', icon: <BrainCircuit size={20} /> },
    { nome: 'Arquitetura e manutenção de pcs', slug: 'hardware', icon: <Cpu size={20} /> },
    { nome: 'Sistemas Operacionais', slug: 'so', icon: <Monitor size={20} /> },
    { nome: 'Html e Css', slug: 'html-css', icon: <Palette size={20} /> },
    { nome: 'Java POO', slug: 'java', icon: <Coffee size={20} /> },
    { nome: 'Programação web', slug: 'web', icon: <Globe size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100 antialiased font-sans">

      {/* 🖥️ SIDEBAR DESKTOP */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-zinc-900/30 border-r border-zinc-800/50 flex-col p-6 backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <LayoutDashboard size={18} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tighter">
            aula<span className="text-blue-500">dev</span>
          </h1>
        </div>
        

        <nav className="flex flex-col gap-4">
          <p className="text-zinc-500 text-[13px] uppercase tracking-[0.2em] mb-6 font-bold ml-2">Matérias</p>

          {materias.map((m) => {
            const isActive = sessaoAtiva === m.slug;
            return (
              <button
                key={m.slug}
                onClick={() => onChangeSessao(m.slug)}
                // Adicionado: w-full e justify-start para garantir alinhamento
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm group w-full justify-start ${isActive
                  ? 'bg-blue-600/10 text-blue-400 shadow-[inset_0_0_20px_rgba(37,99,235,0.05)]'
                  : 'hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-200'
                  }`}
              >
                {/* Ícone fixo (não encolhe) */}
                <span className={`shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {m.icon}
                </span>

                {/* Nome com truncamento: se for muito grande, vira "..." */}
                <span className="font-medium truncate text-left w-full overflow-hidden whitespace-nowrap">
                  {m.nome}
                </span>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* 📱 MENU MOBILE (Nubank Style) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-lg border-t border-zinc-800 z-[100] px-4 py-3 pb-6">
        <div className="flex justify-between items-center max-w-md mx-auto">
          {materias.map((m) => {
            const isActive = sessaoAtiva === m.slug;
            return (
              <button
                key={m.slug}
                onClick={() => onChangeSessao(m.slug)}
                className={`flex flex-col items-center gap-1 transition-all ${isActive ? 'text-blue-500' : 'text-zinc-500'
                  }`}
              >
                <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-500/10' : ''}`}>
                  {m.icon}
                </div>

              </button>
            );
          })}
        </div>
      </nav>

      {/* 📝 CONTEÚDO COM ANIMAÇÃO CORRIGIDA */}
      {/* 📝 CONTEÚDO OCUPANDO A TELA TODA */}
      <div className="flex-1 md:pl-64 w-full">
        {/* Removido o 'max-w-4xl' e o 'mx-auto' para permitir que o conteúdo estique */}
        <div className="w-full px-4 md:px-8 py-6">
          {/* Usamos o key para forçar a animação toda vez que a sessão muda */}
          <div
            key={sessaoAtiva}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out w-full"
          >
            {children}
          </div>
        </div>
      </div>

    </div>
  );
}