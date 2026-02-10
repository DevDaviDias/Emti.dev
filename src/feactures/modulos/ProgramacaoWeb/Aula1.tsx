'use client';

import { BookOpen, Clock, ArrowRight, Globe, Share2, Bookmark } from "lucide-react";

export default function AulaProgramacaoWeb1() {
  const videoId = "Ejkb_YpuHWs";

  return (
    <div className="max-w-3xl mx-auto space-y-16 py-10 animate-in fade-in duration-1000">
      
      {/* HEADER ESTILO BLOG */}
      <header className="space-y-6 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 text-zinc-500 text-sm font-medium">
          <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs tracking-tighter">Módulo 01</span>
          <span className="flex items-center gap-1"><Clock size={14} /> 15 min de leitura</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          A Web não nasceu pronta: <br/> 
          <span className="text-zinc-500 italic font-serif">Uma jornada de 1835 até hoje.</span>
        </h1>

        <div className="flex items-center justify-center md:justify-start gap-3 pt-4 border-b border-zinc-800 pb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-zinc-800 border border-zinc-700" />
          <div className="text-left text-sm">
            <p className="text-zinc-200 font-medium">Professor Especialista</p>
            <p className="text-zinc-500 text-xs">Atualizado em 10 de Fev, 2026</p>
          </div>
          <div className="ml-auto flex gap-2">
             <button className="p-2 text-zinc-500 hover:text-white transition-colors"><Bookmark size={20} /></button>
             <button className="p-2 text-zinc-500 hover:text-white transition-colors"><Share2 size={20} /></button>
          </div>
        </div>
      </header>

      {/* PLAYER DE VÍDEO (COMO UM DESTAQUE DE ARTIGO) */}
      <section className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-zinc-900 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative aspect-video w-full bg-black rounded-[2rem] overflow-hidden border border-zinc-800 shadow-2xl">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="Vídeo Aula"
            allowFullScreen
          />
        </div>
      </section>

      {/* CONTEÚDO EM FORMATO DE ARTIGO */}
      <article className="prose prose-zinc prose-invert max-w-none">
        <p className="text-xl text-zinc-400 leading-relaxed font-serif italic mb-12">
          "A internet é muito mais do que cabos e códigos; é o maior esforço de conexão coletiva da história da humanidade."
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">O Nascimento do Protocolo</h2>
        <p className="text-zinc-400 leading-loose">
          Muitos acreditam que a internet surgiu nos anos 90, mas as raízes do envio de dados remontam a 1835. Samuel Morse não apenas criou o telégrafo, ele criou o primeiro <strong>protocolo binário</strong> funcional. Pontos e traços foram os ancestrais do nosso <code className="text-blue-400">0</code> e <code className="text-blue-400">1</code>.
        </p>

        <div className="my-12 rounded-2xl overflow-hidden border border-zinc-800">
           
           <p className="text-center text-[10px] text-zinc-500 p-4 bg-zinc-900/50 uppercase tracking-widest">Fig 1.1: O Telégrafo original e a tabela de código binário primário.</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">A Era de Tim Berners-Lee</h2>
        <p className="text-zinc-400 leading-loose">
          No final dos anos 80, no laboratório CERN, um engenheiro britânico percebeu que a internet era uma "estrada vazia". Ele criou o <strong>HTML</strong> e o <strong>HTTP</strong> para serem o veículo e o combustível. Com o hipertexto, a informação deixou de ser estática e passou a ser conectada por links.
        </p>

        {/* BOX DE DESTAQUE TÉCNICO */}
        <div className="my-10 p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl space-y-4">
          <h4 className="text-white font-bold flex items-center gap-2">
            <Globe className="text-blue-500" size={20} /> O Conceito Cliente-Servidor
          </h4>
          <p className="text-sm text-zinc-400">
            Imagine um restaurante: você (o <strong>Cliente</strong>) faz um pedido (<strong>Request</strong>). 
            O garçom leva o pedido até a cozinha (<strong>Servidor</strong>), que prepara o prato e o envia de volta (<strong>Response</strong>). 
            Sem esse ciclo, a web moderna simplesmente não existiria.
          </p>
          
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">O que aprendemos hoje?</h2>
        <p className="text-zinc-400 leading-loose">
          A base da web não é apenas escrever código, mas entender como os pacotes de dados viajam por <strong>cabos submarinos</strong> e são interpretados pelo seu navegador.
        </p>
        
      </article>

      {/* FOOTER DO BLOG: PRÓXIMOS PASSOS */}
      <footer className="pt-12 border-t border-zinc-800 space-y-8">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="space-y-1">
            <h4 className="text-white font-bold">Gostou deste estudo?</h4>
            <p className="text-zinc-500 text-sm">Próxima leitura: Fundamentos do HTML5</p>
          </div>
          <button className="group flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all">
            Próxima Aula <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* MATERIAL DE APOIO COMO LISTA DE REFERÊNCIAS */}
        <div className="bg-zinc-900/20 p-6 rounded-2xl">
          <h5 className="text-zinc-300 font-semibold mb-4 text-xs uppercase tracking-widest">Referências Bibliográficas</h5>
          <ul className="space-y-2 list-none p-0">
             <li><a href="#" className="text-zinc-500 hover:text-blue-400 text-sm flex items-center gap-2 no-underline"><BookOpen size={14}/> MDN Web Docs: History of the Web</a></li>
             <li><a href="#" className="text-zinc-500 hover:text-blue-400 text-sm flex items-center gap-2 no-underline"><BookOpen size={14}/> CERN: The birth of the Web</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}