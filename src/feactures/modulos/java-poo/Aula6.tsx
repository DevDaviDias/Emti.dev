'use client';

import { Clock, ArrowRight, Coffee, Play, Braces, Terminal, Lightbulb, ChevronRight, Zap, CheckCircle2, Package } from "lucide-react";
import { AulaProps } from "../../aulas/index";

export default function JavaAula6({ onNext }: AulaProps) {
  const videoAulaId = "SEU_VIDEO_ID_AQUI";

  const etapas = [
    {
      icone: "📝",
      titulo: "Você escreve o código",
      descricao: "O arquivo .java — é o código fonte, escrito em linguagem humana.",
      exemplo: "OlaMundo.java",
      cor: "text-zinc-300",
    },
    {
      icone: "⚙️",
      titulo: "Compilador (javac) entra em ação",
      descricao: "O javac lê o .java e transforma em bytecode — uma linguagem intermediária.",
      exemplo: "javac OlaMundo.java",
      cor: "text-orange-400",
    },
    {
      icone: "📦",
      titulo: "Gera o arquivo .class",
      descricao: "O bytecode é salvo em um arquivo .class. Não é executável diretamente pelo computador.",
      exemplo: "OlaMundo.class",
      cor: "text-blue-400",
    },
    {
      icone: "🚀",
      titulo: "JVM executa o bytecode",
      descricao: "A Máquina Virtual Java (JVM) lê o .class e roda o programa no seu sistema.",
      exemplo: "java OlaMundo",
      cor: "text-green-400",
    },
  ];

  const errosComuns = [
    {
      erro: "cannot find symbol",
      causa: "Você digitou o nome de um método ou variável errado. Java é case-sensitive.",
      exemplo: 'system.out.println → System.out.println',
    },
    {
      erro: "reached end of file while parsing",
      causa: "Faltou fechar alguma chave { }. Verifique se abre e fecha corretamente.",
      exemplo: "public class X {  ← faltou fechar com }",
    },
    {
      erro: "class X is public, should be declared in a file named X.java",
      causa: "O nome da classe e o nome do arquivo devem ser idênticos.",
      exemplo: "class OlaMundo → arquivo deve ser OlaMundo.java",
    },
  ];

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16 min-h-screen">

      {/* HEADER */}
      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-orange-500 flex items-center gap-1"><Coffee size={14} /> Java POO</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> Aula 06</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          COMPILAÇÃO<br />
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">e Execução</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          O que acontece entre você escrever o código e o programa rodar? Nessa aula você vai entender o caminho do código fonte até o bytecode — e por que Java funciona em qualquer computador.
        </p>
      </header>

      {/* PLAYER */}
      <section className="w-full max-w-5xl">
        <div className="space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            <Play size={18} className="text-orange-500" /> Aula em Vídeo
          </h3>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-900 shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoAulaId}?rel=0`}
              title="Compilação e Execução em Java"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <article className="max-w-5xl space-y-16">

        {/* BLOCO 1 — O FLUXO */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Package size={20} />
            <span className="font-black uppercase text-xs tracking-widest">O Fluxo — Do Código ao Programa</span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Em linguagens como Python, você escreve e roda direto. Em Java, existe uma etapa a mais chamada <strong className="text-zinc-200">compilação</strong>. Entender esse processo é fundamental para saber o que fazer quando algo dá errado.
          </p>

          <div className="flex flex-col gap-3">
            {etapas.map((etapa, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg flex-shrink-0">
                    {etapa.icone}
                  </div>
                  {i < etapas.length - 1 && <div className="w-px h-6 bg-zinc-800" />}
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/20 space-y-2 mt-0.5">
                  <h4 className={`font-bold text-sm ${etapa.cor}`}>{etapa.titulo}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{etapa.descricao}</p>
                  <code className="text-[11px] text-zinc-600 bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-800 inline-block">{etapa.exemplo}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCO 2 — POR QUE BYTECODE? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start border-y border-zinc-900 py-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-orange-500">
              <Lightbulb size={20} />
              <span className="font-black uppercase text-xs tracking-widest">Por que Bytecode?</span>
            </div>
            <h3 className="text-white text-2xl font-bold leading-snug">"Write once, run anywhere."</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              O slogan histórico do Java. O bytecode não é código de máquina específico — é uma linguagem intermediária que a JVM sabe executar em qualquer sistema operacional.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { os: "Windows", icone: "🪟", desc: "JVM para Windows lê o .class e executa" },
              { os: "Linux", icone: "🐧", desc: "JVM para Linux lê o mesmo .class e executa" },
              { os: "macOS", icone: "🍎", desc: "JVM para macOS lê o mesmo .class e executa" },
            ].map((item) => (
              <div key={item.os} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/20">
                <span className="text-2xl">{item.icone}</span>
                <div>
                  <p className="text-zinc-200 font-bold text-sm">{item.os}</p>
                  <p className="text-zinc-500 text-xs">{item.desc}</p>
                </div>
                <CheckCircle2 size={14} className="text-green-500 ml-auto flex-shrink-0" />
              </div>
            ))}
            <p className="text-zinc-600 text-xs text-center pt-1">Um único arquivo .class roda em todos os três.</p>
          </div>
        </div>

        {/* BLOCO 3 — CÓDIGO NA PRÁTICA */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Braces size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Na Prática — Vendo o Processo no Eclipse</span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            No Eclipse, tudo isso acontece automaticamente quando você clica em ▶. Mas veja o que o Eclipse faz por baixo dos panos:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-zinc-950 p-6 rounded-3xl border border-zinc-800 font-mono text-[13px] leading-8">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-zinc-600 text-[10px] ml-2 uppercase tracking-widest">Terminal — linha de comando</span>
              </div>
              <p className="text-zinc-500 text-[11px] mb-2"># 1. Compilar</p>
              <p><span className="text-green-400">$</span> <span className="text-zinc-300">javac OlaMundo.java</span></p>
              <p className="text-zinc-700 text-[11px] mt-1 mb-4">→ gera OlaMundo.class</p>
              <p className="text-zinc-500 text-[11px] mb-2"># 2. Executar</p>
              <p><span className="text-green-400">$</span> <span className="text-zinc-300">java OlaMundo</span></p>
              <p className="text-orange-300 mt-1">Olá, Mundo!</p>
            </div>

            <div className="space-y-3">
              <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">O que cada comando faz</p>
              {[
                { cmd: "javac", desc: "O compilador do Java. Transforma .java em .class.", cor: "text-orange-400" },
                { cmd: "java", desc: "Inicia a JVM e executa o bytecode do arquivo .class.", cor: "text-blue-400" },
                { cmd: "OlaMundo", desc: "O nome da classe — sem extensão. Java diferencia maiúsculas de minúsculas.", cor: "text-green-400" },
              ].map((item) => (
                <div key={item.cmd} className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/20 flex items-start gap-3">
                  <code className={`font-mono font-bold text-xs flex-shrink-0 w-16 ${item.cor}`}>{item.cmd}</code>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCO 4 — ERROS COMUNS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Terminal size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Erros de Compilação — Aprenda a Ler</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Quando o compilador encontra um problema, ele para e exibe uma mensagem de erro. Isso não é o programa quebrando — é o compilador te protegendo. Aprenda a ler esses erros:
          </p>
          <div className="space-y-3">
            {errosComuns.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/20 space-y-2">
                <code className="text-red-400 font-mono text-xs font-bold">{item.erro}</code>
                <div className="flex items-start gap-2">
                  <ChevronRight size={10} className="text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.causa}</p>
                </div>
                <code className="text-zinc-600 text-[11px] bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-800 inline-block">{item.exemplo}</code>
              </div>
            ))}
          </div>
        </div>

        {/* DESAFIO FINAL */}
        <div className="p-8 md:p-12 rounded-[2.5rem] border border-orange-500/20 bg-gradient-to-br from-orange-950/20 to-zinc-950 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Zap size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Desafio Final da Aula</span>
          </div>
          <h3 className="text-white text-2xl font-bold">Provoque um erro de compilação</h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            No JDoodle, abra o programa OlaMundo e faça cada modificação abaixo de propósito. Execute e leia a mensagem de erro que aparece. O objetivo é aprender a identificar e corrigir problemas.
          </p>
          <div className="space-y-3">
            {[
              'Troque System por system (letra minúscula)',
              'Apague o ponto e vírgula no final do println',
              'Apague a chave } do final do programa',
              'Mude o nome da classe para outra coisa e veja o aviso',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/20">
                <span className="text-orange-500 font-black text-xs w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-zinc-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 p-4 bg-zinc-900/40 border border-zinc-800/20 rounded-2xl">
            <Lightbulb size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-zinc-200">Por que fazer isso?</strong> Programadores experientes reconhecem erros de compilação instantaneamente porque já os viram centenas de vezes. Quanto antes você se familiarizar com essas mensagens, mais rápido vai resolver problemas no futuro.
            </p>
          </div>
        </div>

      </article>

      {/* FOOTER */}
      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próxima Aula</p>
          <h4 className="text-white font-bold text-xl uppercase italic tracking-tight underline decoration-orange-500 underline-offset-8">Variáveis e Tipos de Dados</h4>
        </div>

        <button
          onClick={() => onNext?.("java-aula-7")}
          className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-orange-500 hover:text-white transition-all active:scale-95"
        >
          Finalizar Aula 06
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
}