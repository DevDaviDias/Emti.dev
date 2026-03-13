'use client';

import { Clock, ArrowRight, Cpu, Play, Lightbulb, Zap, FlaskConical, Monitor } from "lucide-react";

interface AulaProps {
  onNext?: (id: string) => void;
}

export default function ArqAula2({ onNext }: AulaProps) {
  const videoAulaId = "SEU_VIDEO_ID_AQUI";

  const internos = [
    { nome: "Processador (CPU)", funcao: "O cérebro do computador. Faz todos os cálculos.", cor: "text-blue-400" },
    { nome: "Memória RAM", funcao: "Guarda temporariamente o que está sendo usado agora.", cor: "text-purple-400" },
    { nome: "HD / SSD", funcao: "Guarda seus arquivos para sempre, mesmo desligado.", cor: "text-cyan-400" },
    { nome: "Placa-Mãe", funcao: "Liga e conecta todas as peças entre si.", cor: "text-green-400" },
    { nome: "Fonte de Alimentação", funcao: "Pega a energia da tomada e distribui para as peças.", cor: "text-yellow-400" },
    { nome: "Placa de Vídeo", funcao: "Processa as imagens que aparecem na tela.", cor: "text-orange-400" },
  ];

  const perifericos = [
    { tipo: "Entrada", desc: "Enviam informações para o computador", cor: "text-green-400", corBg: "bg-green-950/20 border-green-500/10", exemplos: ["Teclado", "Mouse", "Webcam", "Microfone"] },
    { tipo: "Saída", desc: "Recebem informações do computador", cor: "text-blue-400", corBg: "bg-blue-950/20 border-blue-500/10", exemplos: ["Monitor", "Impressora", "Caixa de som"] },
    { tipo: "Misto", desc: "Fazem os dois ao mesmo tempo", cor: "text-purple-400", corBg: "bg-purple-950/20 border-purple-500/10", exemplos: ["Pendrive", "HD Externo", "Touchscreen"] },
  ];

  const atividades = [
    {
      titulo: "Descubra sua RAM",
      descricao: "Aperte Ctrl + Shift + Esc → clique em Desempenho → Memória. Quanto de RAM o seu computador tem?",
      saida: "Ex: 8 GB de RAM",
    },
    {
      titulo: "Classifique os periféricos",
      descricao: "Diga se cada item é entrada, saída ou misto: fone de ouvido com microfone, scanner, projetor, joystick.",
      saida: "Misto, Entrada, Saída, Entrada",
    },
  ];

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16 min-h-screen">

      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-blue-500 flex items-center gap-1"><Cpu size={14} /> Arquitetura de Computadores</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> Aula 02</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          COMPONENTES<br />
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">Internos e Externos</span>
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Um computador é feito de várias peças que trabalham juntas. Nesta aula você vai conhecer cada uma delas e entender o que fica dentro e fora da máquina.
        </p>
      </header>

      <section className="w-full max-w-5xl">
        <div className="space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            <Play size={18} className="text-blue-500" /> Aula em Vídeo
          </h3>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-900 shadow-2xl">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoAulaId}?rel=0`} title="Componentes Internos e Externos" allowFullScreen />
          </div>
        </div>
      </section>

      <article className="max-w-5xl space-y-16">

        {/* COMPONENTES INTERNOS */}
        <div className="space-y-6 border-y border-zinc-900 py-12">
          <div className="flex items-center gap-3 text-blue-500">
            <Cpu size={18} />
            <span className="font-black uppercase text-xs tracking-widest">Componentes Internos — ficam dentro do gabinete</span>
          </div>
          <div className="space-y-3">
            {internos.map((item) => (
              <div key={item.nome} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/20">
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.cor.replace("text-", "bg-")}`} />
                <div>
                  <p className={`font-bold text-sm ${item.cor}`}>{item.nome}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{item.funcao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PERIFÉRICOS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-blue-500">
            <Monitor size={18} />
            <span className="font-black uppercase text-xs tracking-widest">Periféricos — ficam fora do gabinete</span>
          </div>
          <p className="text-zinc-500 text-sm">São os dispositivos que você conecta ao computador. Se dividem em 3 tipos:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {perifericos.map((p) => (
              <div key={p.tipo} className={`p-5 rounded-2xl border space-y-3 ${p.corBg}`}>
                <p className={`font-black text-xs uppercase tracking-widest ${p.cor}`}>{p.tipo}</p>
                <p className="text-zinc-500 text-[11px]">{p.desc}</p>
                <div className="space-y-1.5">
                  {p.exemplos.map((ex) => (
                    <div key={ex} className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full ${p.cor.replace("text-", "bg-")}`} />
                      <span className="text-zinc-300 text-xs">{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ANALOGIA */}
        <div className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 space-y-4">
          <div className="flex items-center gap-3 text-blue-500">
            <Lightbulb size={18} />
            <span className="font-black uppercase text-xs tracking-widest">Como lembrar fácil</span>
          </div>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Pense no computador como o <strong className="text-white">corpo humano</strong>.
          </p>
          <div className="space-y-2 text-sm text-zinc-500">
            <p>🧠 <strong className="text-zinc-300">CPU</strong> = cérebro — pensa e decide</p>
            <p>📋 <strong className="text-zinc-300">RAM</strong> = memória de curto prazo — o que você está fazendo agora</p>
            <p>📚 <strong className="text-zinc-300">HD/SSD</strong> = memória de longo prazo — o que você aprendeu na vida</p>
            <p>🦴 <strong className="text-zinc-300">Placa-Mãe</strong> = esqueleto — conecta tudo</p>
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
          <h3 className="text-white text-xl font-bold">Monte a ficha do seu computador</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Usando o Gerenciador de Tarefas (Ctrl + Shift + Esc), descubra e anote: processador, RAM, armazenamento. Depois liste todos os periféricos conectados e diga se são entrada, saída ou misto.
          </p>
          <div className="flex items-start gap-3 p-4 bg-zinc-900/40 border border-zinc-800/20 rounded-2xl">
            <Lightbulb size={14} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-zinc-200">Dica:</strong> No Windows, você também pode pesquisar <code className="text-blue-400">dxdiag</code> no menu Iniciar para ver todas as informações de uma vez só.
            </p>
          </div>
        </div>

      </article>

      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próxima Aula</p>
          <h4 className="text-white font-bold text-xl uppercase italic tracking-tight underline decoration-blue-500 underline-offset-8">Unidade Central de Processamento (CPU)</h4>
        </div>
        <button
          onClick={() => onNext?.("arq-aula-3")}
          className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-blue-500 hover:text-white transition-all active:scale-95"
        >
          Finalizar Aula 02
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
}