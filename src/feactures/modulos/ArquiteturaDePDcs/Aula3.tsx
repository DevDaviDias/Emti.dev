'use client';

import { Clock, ArrowRight, Cpu, Play, Lightbulb, Zap, FlaskConical, Activity } from "lucide-react";

interface AulaProps {
  onNext?: (id: string) => void;
}

export default function ArqAula3({ onNext }: AulaProps) {
  const videoAulaId = "SEU_VIDEO_ID_AQUI";

  const partes = [
    { nome: "ULA", desc: "Faz os cálculos matemáticos (somar, subtrair, comparar).", cor: "text-blue-400", corBg: "bg-blue-950/20 border-blue-500/10" },
    { nome: "Unidade de Controle", desc: "Coordena tudo. Diz pra cada parte o que fazer e quando.", cor: "text-purple-400", corBg: "bg-purple-950/20 border-purple-500/10" },
    { nome: "Registradores", desc: "Pequenas memórias dentro da CPU. Guardam dados por frações de segundo.", cor: "text-cyan-400", corBg: "bg-cyan-950/20 border-cyan-500/10" },
    { nome: "Cache", desc: "Memória ultrarrápida que guarda o que a CPU usa com frequência.", cor: "text-green-400", corBg: "bg-green-950/20 border-green-500/10" },
  ];

  const ciclo = [
    { num: "01", nome: "Buscar", desc: "A CPU vai até a memória RAM buscar a próxima instrução.", cor: "text-blue-400", border: "border-blue-500/20" },
    { num: "02", nome: "Decodificar", desc: "A CPU entende o que aquela instrução quer dizer.", cor: "text-purple-400", border: "border-purple-500/20" },
    { num: "03", nome: "Executar", desc: "A ULA realiza a operação (cálculo, comparação, etc.).", cor: "text-cyan-400", border: "border-cyan-500/20" },
    { num: "04", nome: "Armazenar", desc: "O resultado é salvo. O ciclo recomeça — bilhões de vezes por segundo.", cor: "text-green-400", border: "border-green-500/20" },
  ];

  const atividades = [
    {
      titulo: "Veja sua CPU ao vivo",
      descricao: "Abra o Gerenciador de Tarefas → Desempenho → CPU. Anote o nome do processador, a velocidade em GHz e o número de núcleos.",
      saida: "Ex: Intel Core i5 — 2.4 GHz — 6 núcleos",
    },
    {
      titulo: "Force o processador",
      descricao: "Com o Gerenciador de Tarefas aberto, abra vários programas ao mesmo tempo. O gráfico de utilização da CPU subiu? O que acontece com o computador?",
      saida: "O gráfico sobe e o computador pode ficar mais lento",
    },
  ];

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16 min-h-screen">

      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-blue-500 flex items-center gap-1"><Cpu size={14} /> Arquitetura de Computadores</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> Aula 03</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          CPU<br />
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">o cérebro do computador</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          A CPU executa bilhões de operações por segundo. Mas como ela faz isso? Nesta aula você vai entender o que tem dentro de um processador e como ele funciona de verdade.
        </p>
      </header>

      <section className="w-full max-w-5xl">
        <div className="space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            <Play size={18} className="text-blue-500" /> Aula em Vídeo
          </h3>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-900 shadow-2xl">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoAulaId}?rel=0`} title="CPU" allowFullScreen />
          </div>
        </div>
      </section>

      <article className="max-w-5xl space-y-16">

        {/* O QUE É */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-y border-zinc-900 py-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-500">
              <Lightbulb size={18} />
              <span className="font-black uppercase text-xs tracking-widest">O que é a CPU?</span>
            </div>
            <p className="text-zinc-300 text-lg font-light leading-snug">
              CPU significa <strong className="text-white">Unidade Central de Processamento</strong>. É o componente que executa todas as instruções do computador.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Ela não "pensa" — ela obedece ordens. Mas obedece tão rápido que parece que está pensando.
            </p>
          </div>
          <div className="p-6 bg-zinc-900/20 rounded-3xl border border-zinc-900 space-y-3">
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Números impressionantes</p>
            {[
              { label: "Velocidade", valor: "Bilhões de operações por segundo", cor: "text-blue-400" },
              { label: "Tamanho", valor: "Menor que uma moeda de 50 centavos", cor: "text-purple-400" },
              { label: "Temperatura", valor: "Pode chegar a 90°C funcionando", cor: "text-orange-400" },
            ].map((f) => (
              <div key={f.label} className="flex gap-3 items-start">
                <span className={`text-xs font-bold w-24 shrink-0 ${f.cor}`}>{f.label}</span>
                <span className="text-zinc-500 text-xs">{f.valor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PARTES */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-blue-500">
            <Cpu size={18} />
            <span className="font-black uppercase text-xs tracking-widest">O que tem dentro do processador?</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partes.map((p) => (
              <div key={p.nome} className={`p-5 rounded-2xl border space-y-2 ${p.corBg}`}>
                <p className={`font-bold text-sm ${p.cor}`}>{p.nome}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CICLO */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-blue-500">
            <Activity size={18} />
            <span className="font-black uppercase text-xs tracking-widest">Como a CPU funciona — o ciclo de 4 passos</span>
          </div>
          <p className="text-zinc-500 text-sm">A CPU repete esse ciclo bilhões de vezes por segundo para executar qualquer programa:</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {ciclo.map((etapa) => (
              <div key={etapa.num} className={`p-5 rounded-2xl bg-zinc-900/40 border ${etapa.border} space-y-3`}>
                <span className={`font-mono font-black text-2xl ${etapa.cor}`}>{etapa.num}</span>
                <p className="text-white font-bold text-sm">{etapa.nome}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{etapa.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 p-4 bg-zinc-900/40 border border-zinc-800/20 rounded-2xl">
            <Lightbulb size={14} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-zinc-200">Exemplo:</strong> Quando você digita 2 + 3 numa calculadora, a CPU busca a instrução de soma, entende que é uma adição, executa o cálculo e mostra o resultado 5. Simples assim — mas feito bilhões de vezes por segundo.
            </p>
          </div>
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
          <h3 className="text-white text-xl font-bold">Explique o ciclo com suas palavras</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Pense em uma ação simples — como abrir um arquivo ou pressionar uma tecla. Escreva, com suas próprias palavras, o que a CPU faz em cada um dos 4 passos do ciclo para realizar essa ação.
          </p>
          <div className="flex items-start gap-3 p-4 bg-zinc-900/40 border border-zinc-800/20 rounded-2xl">
            <Lightbulb size={14} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-zinc-200">Dica:</strong> Não precisa ser técnico. Tente usar palavras simples, como se estivesse explicando para um amigo que nunca estudou isso.
            </p>
          </div>
        </div>

      </article>

      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próxima Aula</p>
          <h4 className="text-white font-bold text-xl uppercase italic tracking-tight underline decoration-blue-500 underline-offset-8">Memórias e Armazenamento</h4>
        </div>
        <button
          onClick={() => onNext?.("arq-aula-4")}
          className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-blue-500 hover:text-white transition-all active:scale-95"
        >
          Finalizar Aula 03
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
}