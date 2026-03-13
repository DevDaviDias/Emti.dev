'use client';

import { Clock, ArrowRight, Cpu, Play, Lightbulb, Zap, FlaskConical } from "lucide-react";

interface AulaProps {
  onNext?: (id: string) => void;
}

export default function ArqAula1({ onNext }: AulaProps) {
  const videoAulaId = "SEU_VIDEO_ID_AQUI";

  const exemplos = [
    { categoria: "Hardware", cor: "text-blue-400", corBg: "bg-blue-950/20 border-blue-500/10", itens: ["Teclado", "Mouse", "Monitor", "HD / SSD", "Memória RAM", "Processador"] },
    { categoria: "Software", cor: "text-purple-400", corBg: "bg-purple-950/20 border-purple-500/10", itens: ["Windows", "Google Chrome", "Word", "Spotify", "WhatsApp", "Antivírus"] },
  ];

  const atividades = [
    {
      titulo: "Hardware ou Software?",
      descricao: "Classifique cada item: impressora, Minecraft, placa de vídeo, YouTube, pendrive, Paint.",
      saida: "HW: impressora, placa de vídeo, pendrive · SW: Minecraft, YouTube, Paint",
    },
    {
      titulo: "O que você tem aqui?",
      descricao: "Olhe em volta agora. Liste 3 hardwares e 2 softwares que você está usando neste momento.",
      saida: "Ex: monitor, teclado, mouse · Windows, Chrome",
    },
  ];

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16 min-h-screen">

      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-blue-500 flex items-center gap-1"><Cpu size={14} /> Arquitetura de Computadores</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> Aula 01</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          HARDWARE<br />
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">o que é isso?</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Antes de qualquer coisa, você precisa entender a diferença entre hardware e software. É a base de tudo que vem pela frente.
        </p>
      </header>

      <section className="w-full max-w-5xl">
        <div className="space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            <Play size={18} className="text-blue-500" /> Aula em Vídeo
          </h3>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-900 shadow-2xl">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoAulaId}?rel=0`} title="Conceitos de Hardware" allowFullScreen />
          </div>
        </div>
      </section>

      <article className="max-w-5xl space-y-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-y border-zinc-900 py-12">
          <div className="p-6 rounded-3xl bg-blue-950/20 border border-blue-500/10 space-y-3">
            <span className="text-blue-400 font-black text-xs uppercase tracking-widest">Hardware</span>
            <p className="text-zinc-300 text-lg font-light leading-snug">
              É a parte <strong className="text-white">física</strong> do computador. Tudo que você pode <strong className="text-white">tocar</strong>.
            </p>
            <p className="text-zinc-500 text-sm">Monitor, teclado, mouse, HD... se você pode segurar, é hardware.</p>
          </div>
          <div className="p-6 rounded-3xl bg-purple-950/20 border border-purple-500/10 space-y-3">
            <span className="text-purple-400 font-black text-xs uppercase tracking-widest">Software</span>
            <p className="text-zinc-300 text-lg font-light leading-snug">
              É a parte <strong className="text-white">lógica</strong> do computador. Tudo que você <strong className="text-white">não pode tocar</strong>.
            </p>
            <p className="text-zinc-500 text-sm">Windows, Chrome, Word... são programas. Existem só como código.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-white font-black text-xl uppercase tracking-tight">Exemplos do dia a dia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exemplos.map((grupo) => (
              <div key={grupo.categoria} className={`p-6 rounded-3xl border space-y-4 ${grupo.corBg}`}>
                <p className={`font-black text-xs uppercase tracking-widest ${grupo.cor}`}>{grupo.categoria}</p>
                <div className="space-y-2">
                  {grupo.itens.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${grupo.cor.replace("text-", "bg-")}`} />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 space-y-4">
          <div className="flex items-center gap-3 text-blue-500">
            <Lightbulb size={18} />
            <span className="font-black uppercase text-xs tracking-widest">A analogia mais fácil</span>
          </div>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Pense num <strong className="text-white">violão</strong>. O violão em si é o <strong className="text-blue-400">hardware</strong>. A música que você toca nele é o <strong className="text-purple-400">software</strong>.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Sem o violão, não tem como tocar. Sem a música, o violão não serve pra nada. Os dois precisam um do outro — igualzinho ao computador.
          </p>
        </div>

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

        <div className="p-8 md:p-10 rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-zinc-950 space-y-5">
          <div className="flex items-center gap-3 text-blue-500">
            <Zap size={18} />
            <span className="font-black uppercase text-xs tracking-widest">Desafio da Aula</span>
          </div>
          <h3 className="text-white text-xl font-bold">Explique pra alguém da sua família</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Escolha uma pessoa em casa e explique a diferença entre hardware e software usando uma analogia que <strong className="text-zinc-200">você mesmo criou</strong>. Não vale usar a do violão!
          </p>
          <div className="flex items-start gap-3 p-4 bg-zinc-900/40 border border-zinc-800/20 rounded-2xl">
            <Lightbulb size={14} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-zinc-200">Dica:</strong> Pensa em algo do cotidiano com duas partes — uma física e uma "lógica". Uma TV e o sinal que ela recebe. Um caderno e o que você escreve nele.
            </p>
          </div>
        </div>

      </article>

      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próxima Aula</p>
          <h4 className="text-white font-bold text-xl uppercase italic tracking-tight underline decoration-blue-500 underline-offset-8">Componentes Internos e Externos</h4>
        </div>
        <button
          onClick={() => onNext?.("arq-aula-2")}
          className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-blue-500 hover:text-white transition-all active:scale-95"
        >
          Finalizar Aula 01
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
}