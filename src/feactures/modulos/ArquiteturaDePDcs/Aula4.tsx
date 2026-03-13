'use client';

import { Clock, ArrowRight, Cpu, Play, Lightbulb, Zap, FlaskConical, Database } from "lucide-react";

interface AulaProps {
  onNext?: (id: string) => void;
}

export default function ArqAula4({ onNext }: AulaProps) {
  const videoAulaId = "SEU_VIDEO_ID_AQUI";

  const memorias = [
    {
      nome: "RAM",
      tipo: "Temporária",
      persiste: false,
      descricao: "Guarda o que está aberto agora. Quando você desliga o computador, tudo que estava na RAM some.",
      exemplo: "Como a mesa de trabalho — você usa enquanto está trabalhando.",
      velocidade: "Muito rápida",
      capacidade: "8 GB a 32 GB",
      cor: "text-cyan-400",
      corBg: "bg-cyan-950/20 border-cyan-500/10",
    },
    {
      nome: "HD (HDD)",
      tipo: "Permanente",
      persiste: true,
      descricao: "Guarda arquivos para sempre usando discos magnéticos que giram. Mais lento, mas tem muito espaço.",
      exemplo: "Como um arquivo de gavetas — guarda tudo, mesmo com a luz apagada.",
      velocidade: "Lento",
      capacidade: "500 GB a 4 TB",
      cor: "text-yellow-400",
      corBg: "bg-yellow-950/20 border-yellow-500/10",
    },
    {
      nome: "SSD",
      tipo: "Permanente",
      persiste: true,
      descricao: "Também guarda arquivos para sempre, mas usa chips de memória. Muito mais rápido que o HD.",
      exemplo: "Como um arquivo de gavetas turbinado — guarda tudo e você acha na hora.",
      velocidade: "Rápido",
      capacidade: "120 GB a 2 TB",
      cor: "text-green-400",
      corBg: "bg-green-950/20 border-green-500/10",
    },
  ];

  const comparacao = [
    { aspecto: "Tecnologia", hd: "Disco magnético girando", ssd: "Chips de memória flash" },
    { aspecto: "Velocidade", hd: "~100 MB/s", ssd: "~500 MB/s ou mais" },
    { aspecto: "Ruído", hd: "Faz barulho", ssd: "Silencioso" },
    { aspecto: "Resistência", hd: "Sensível a quedas", ssd: "Mais resistente" },
    { aspecto: "Preço", hd: "Mais barato por GB", ssd: "Mais caro por GB" },
  ];

  const atividades = [
    {
      titulo: "Quanto de RAM você tem?",
      descricao: "Abra o Gerenciador de Tarefas → Desempenho → Memória. Quantos GB de RAM o seu computador tem? Quanto está sendo usado agora?",
      saida: "Ex: 8 GB total — 4.2 GB em uso",
    },
    {
      titulo: "HD ou SSD?",
      descricao: "No mesmo Gerenciador de Tarefas → Desempenho → Disco. Você consegue ver se é um HDD ou SSD? Qual é a velocidade de leitura?",
      saida: "Ex: SSD — Leitura: 520 MB/s",
    },
  ];

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16 min-h-screen">

      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-blue-500 flex items-center gap-1"><Cpu size={14} /> Arquitetura de Computadores</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> Aula 04</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          MEMÓRIAS<br />
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">e Armazenamento</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          RAM, HD, SSD — todo mundo já ouviu esses nomes, mas poucos sabem a diferença de verdade. Nesta aula isso vai ficar claro de uma vez por todas.
        </p>
      </header>

      <section className="w-full max-w-5xl">
        <div className="space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            <Play size={18} className="text-blue-500" /> Aula em Vídeo
          </h3>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-900 shadow-2xl">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoAulaId}?rel=0`} title="Memórias e Armazenamento" allowFullScreen />
          </div>
        </div>
      </section>

      <article className="max-w-5xl space-y-16">

        {/* DIFERENÇA PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-y border-zinc-900 py-12">
          <div className="p-6 rounded-3xl bg-cyan-950/20 border border-cyan-500/10 space-y-3">
            <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Memória RAM — Temporária</span>
            <p className="text-zinc-300 text-lg font-light leading-snug">
              Guarda o que você está usando <strong className="text-white">agora</strong>. Apagou a luz — perdeu tudo.
            </p>
            <p className="text-zinc-500 text-sm">Rápida, mas volátil. É como a sua mesa de trabalho.</p>
          </div>
          <div className="p-6 rounded-3xl bg-green-950/20 border border-green-500/10 space-y-3">
            <span className="text-green-400 font-black text-xs uppercase tracking-widest">HD / SSD — Permanente</span>
            <p className="text-zinc-300 text-lg font-light leading-snug">
              Guarda seus arquivos <strong className="text-white">para sempre</strong>. Desligou — continua lá.
            </p>
            <p className="text-zinc-500 text-sm">Mais lento que a RAM, mas não perde dados. É o seu armário.</p>
          </div>
        </div>

        {/* OS 3 TIPOS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-blue-500">
            <Database size={18} />
            <span className="font-black uppercase text-xs tracking-widest">Os 3 tipos que você precisa conhecer</span>
          </div>
          <div className="space-y-4">
            {memorias.map((m) => (
              <div key={m.nome} className={`p-6 rounded-2xl border space-y-3 ${m.corBg}`}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className={`font-black text-lg ${m.cor}`}>{m.nome}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-widest ${m.persiste ? "text-green-400 bg-green-950/30 border-green-500/20" : "text-red-400 bg-red-950/30 border-red-500/20"}`}>
                    {m.tipo}
                  </span>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">{m.descricao}</p>
                <p className="text-zinc-600 text-xs italic">{m.exemplo}</p>
                <div className="flex gap-6 pt-1">
                  <div>
                    <p className="text-zinc-600 text-[9px] uppercase tracking-widest">Velocidade</p>
                    <p className={`text-xs font-bold ${m.cor}`}>{m.velocidade}</p>
                  </div>
                  <div>
                    <p className="text-zinc-600 text-[9px] uppercase tracking-widest">Capacidade comum</p>
                    <p className={`text-xs font-bold ${m.cor}`}>{m.capacidade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HD vs SSD */}
        <div className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 space-y-6">
          <div className="flex items-center gap-3 text-blue-500">
            <Lightbulb size={18} />
            <span className="font-black uppercase text-xs tracking-widest">HD vs SSD — qual é melhor?</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th className="text-left text-zinc-600 uppercase tracking-widest font-black text-[10px] pb-3 pr-4 w-32">Aspecto</th>
                  <th className="text-left text-yellow-400 uppercase tracking-widest font-black text-[10px] pb-3 pr-4">HD</th>
                  <th className="text-left text-green-400 uppercase tracking-widest font-black text-[10px] pb-3">SSD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                {comparacao.map((row) => (
                  <tr key={row.aspecto}>
                    <td className="text-zinc-600 py-3 pr-4 font-mono">{row.aspecto}</td>
                    <td className="text-zinc-300 py-3 pr-4">{row.hd}</td>
                    <td className="text-zinc-300 py-3">{row.ssd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-zinc-500 text-xs leading-relaxed">
            O SSD é mais rápido em tudo — por isso computadores com SSD ligam e abrem programas muito mais rápido. O HD ainda é usado quando se precisa de muito espaço por um custo baixo.
          </p>
        </div>

        {/* ATIVIDADES */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-blue-500">
            <FlaskConical size={18} />
            <span className="font-black uppercase text-xs tracking-widest">Atividades</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {atividades.map((atv, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-400 font-black text-[10px]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="text-white font-bold text-sm">{atv.titulo}</h4>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">{atv.descricao}</p>
                <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-[11px]">
                  <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">Resposta</p>
                  <p className="text-green-400">{atv.saida}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESAFIO */}
        <div className="p-8 md:p-10 rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-zinc-950 space-y-5">
          <div className="flex items-center gap-3 text-blue-500">
            <Zap size={18} />
            <span className="font-black uppercase text-xs tracking-widest">Desafio da Aula</span>
          </div>
          <h3 className="text-white text-xl font-bold">Recomende um upgrade</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Um colega reclama que o computador está lento. Ele tem 4 GB de RAM e um HD. O que você recomendaria trocar primeiro e por quê? Escreva a resposta com base no que você aprendeu hoje.
          </p>
          <div className="flex items-start gap-3 p-4 bg-zinc-900/40 border border-zinc-800/20 rounded-2xl">
            <Lightbulb size={14} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-zinc-200">Dica:</strong> Pense no que causa mais lentidão no dia a dia: pouca RAM (computador trava ao abrir muitas abas) ou HD lento (demora para ligar e abrir programas). A resposta depende do que o usuário faz mais!
            </p>
          </div>
        </div>

      </article>

      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Módulo concluído!</p>
          <h4 className="text-white font-bold text-xl uppercase italic tracking-tight underline decoration-blue-500 underline-offset-8">Parabéns por chegar até aqui 🎉</h4>
        </div>
        <button
          onClick={() => onNext?.("arq-aula-5")}
          className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-blue-500 hover:text-white transition-all active:scale-95"
        >
          Finalizar Aula 04
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
}