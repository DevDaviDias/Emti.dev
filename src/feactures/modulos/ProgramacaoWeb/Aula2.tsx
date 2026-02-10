'use client';

import { Clock, ArrowRight, Monitor, Zap, Layout, MousePointer2, Database, Server, User, Camera, Play, Globe, Code2, Upload } from "lucide-react";

export default function Aula02DaviWeb() {
  const videoId = "S5wHjtStRzY"; // O vídeo do André Souza

  return (
    <div className="w-full mx-auto space-y-12 bg-zinc-950 text-zinc-300 p-6 md:p-16 font-sans">
      
      {/* HEADER: APRESENTAÇÃO DOS NOMES */}
      <header className="space-y-4 border-b border-zinc-800 pb-10">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Aula 02</span>
          <span className="text-zinc-500 text-sm flex items-center gap-1"><Clock size={14} /> 50 min</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
          O QUE É UM <span className="text-blue-500 font-serif italic">SITE?</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed italic">
          "Não se assuste com os nomes, foque na mágica!"
        </p>
      </header>

      {/* 1. O VÍDEO (A EXPLICAÇÃO MAIS SIMPLES) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-blue-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white">Como a mágica acontece 🎥</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 aspect-video bg-black rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <iframe 
              className="w-full h-full" 
              src={`https://www.youtube.com/embed/${videoId}`}
              title="O que é um site?"
              allowFullScreen 
            />
          </div>
          
          <div className="bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800 flex flex-col justify-center space-y-6">
             <div>
                <p className="text-blue-400 font-bold text-[10px] uppercase mb-2 tracking-widest">Dicionário de hoje:</p>
                <ul className="space-y-3 text-sm">
                   <li className="flex gap-2 text-white"><strong>IP:</strong> O endereço da casa do site.</li>
                   <li className="flex gap-2 text-white"><strong>Servidor:</strong> Onde o site fica guardado.</li>
                   <li className="flex gap-2 text-white"><strong>Navegador:</strong> O tradutor do código.</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 2. NOMES QUE VOCÊ VAI OUVIR MUITO (FRONT VS BACK) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <div className="group bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] hover:border-blue-500 transition-all">
          <div className="flex items-center gap-3 text-blue-500 font-black text-2xl mb-4">
            <User size={32} /> FRONT-END
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            É tudo o que você <strong>VÊ</strong>. O desenho, as cores e os botões. É o que vamos criar primeiro!
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold">HTML</span>
            <span className="px-3 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded-full text-xs font-bold">CSS</span>
            <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-xs font-bold">JavaScript</span>
          </div>
        </div>

        <div className="group bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] hover:border-green-500 transition-all">
          <div className="flex items-center gap-3 text-green-500 font-black text-2xl mb-4">
            <Server size={32} /> BACK-END
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            É a parte que você <strong>NÃO VÊ</strong>. O "cérebro" que guarda as mensagens e as senhas.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">Banco de Dados</span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs font-bold">PHP / Node</span>
          </div>
        </div>
      </section>

      {/* 3. ATIVIDADE PRÁTICA: O DESENHO (O SEU PRIMEIRO FRONT-END) */}
      <section className="bg-white text-black p-10 rounded-[3rem] shadow-2xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">Atividade: Seu Primeiro Rascunho</h2>
          <p className="text-lg font-medium text-zinc-600 italic">"Todo grande site começou num pedaço de papel."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-2xl">O que desenhar? ✏️</h3>
              <p className="text-zinc-700 leading-relaxed">
                Desenhe como você quer o seu <strong>Portfólio</strong>. Pode se inspirar no Instagram, YouTube ou Shopee. Escolha:
              </p>
              <ul className="text-sm space-y-2 text-zinc-600 font-medium">
                <li className="flex items-center gap-2">🔹 Onde vai sua foto de perfil?</li>
                <li className="flex items-center gap-2">🔹 Onde vão aparecer seus projetos?</li>
                <li className="flex items-center gap-2">🔹 Qual cor vai brilhar mais?</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-100 rounded-3xl p-10 flex flex-col items-center justify-center border-4 border-dashed border-zinc-300 gap-4 group hover:border-blue-600 transition-all">
            <Camera size={48} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
            <div className="text-center">
              <p className="font-bold text-xl">Upload da Foto</p>
              <p className="text-sm text-zinc-500">Tire uma foto do seu papel e mande aqui!</p>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <Upload size={18} /> ENVIAR DESENHO
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER: PREPARANDO PARA A PRÓXIMA */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-zinc-900">
        <div className="text-center md:text-left">
           <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Fim da Aula 02</p>
           <p className="text-white font-medium">Guarde bem esse desenho, ele vai ganhar vida!</p>
        </div>
        <button className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-blue-500/20">
          PRÓXIMA AULA: INSTALANDO AS FERRAMENTAS <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </footer>
    </div>
  );
}