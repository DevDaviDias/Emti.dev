'use client';

import { PlayCircle, Coffee, Box, Brain, ListOrdered, Smartphone, Sparkles } from "lucide-react";

export default function AulaJavaMinimalista() {
  const videoId = "sZAxLRMxEUo"; 

  return (
    <div className="flex flex-col gap-12 animate-in fade-in duration-700 bg-zinc-950 p-6 md:p-16">
      
      {/* 1. HEADER MINIMALISTA */}
      <header className="max-w-4xl space-y-2">
        <div className="flex items-center gap-2 text-orange-500 font-medium text-xs uppercase tracking-[0.3em] mb-4">
          <Sparkles size={14} /> Aula Inaugural
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          JAVA <span className="text-zinc-800">POO</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed">
          Entenda por que o Java domina o mundo e como ele organiza a realidade em código.
        </p>
      </header>

      {/* 2. PLAYER REFINADO */}
      <section className="w-full max-w-5xl group">
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 group-hover:border-orange-500/30">
          <iframe
            className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Dicionário do Programador - Java"
            allowFullScreen
          />
        </div>
      </section>

      {/* 3. CONCEITOS EM GRID LIMPO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
        
        {/* História & Contexto */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Coffee size={24} />
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Origem & Mercado</h3>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Nascido da necessidade de conectar dispositivos, o Java (nome de uma ilha de café) hoje sustenta desde o <span className="text-zinc-300 font-medium">Minecraft</span> até sistemas bancários e a <span className="text-zinc-300 font-medium">NASA</span>. É a linguagem da estabilidade.
          </p>
        </div>

        {/* Algoritmo */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <ListOrdered size={24} />
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">O Algoritmo</h3>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Nada mais é do que uma <span className="text-zinc-300 font-medium">receita passo a passo</span>. O segredo da programação não é saber digitar rápido, mas sim saber explicar uma tarefa simples para uma máquina que não tem iniciativa.
          </p>
        </div>
      </div>

      {/* 4. POO - O CONCEITO CHAVE (MUITO MAIS LIMPO) */}
      <section className="border-t border-zinc-900 pt-12 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">
          <div className="space-y-4 max-w-md">
            <h4 className="text-2xl font-bold text-white tracking-tight">Pensamento em Objetos</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              No Java, simulamos a vida real. Um objeto tem <span className="text-orange-500/80">Atributos</span> (quem ele é) e <span className="text-orange-500/80">Métodos</span> (o que ele faz).
            </p>
          </div>

          <div className="flex gap-4">
            <div className="px-6 py-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center">
              <span className="block text-[10px] text-zinc-600 font-black uppercase mb-1">Atributos</span>
              <span className="text-zinc-300 text-sm font-medium">Cor, Marca, Peso</span>
            </div>
            <div className="px-6 py-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center">
              <span className="block text-[10px] text-zinc-600 font-black uppercase mb-1">Métodos</span>
              <span className="text-zinc-300 text-sm font-medium">Ligar(), Mover()</span>
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
  );
}