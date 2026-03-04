'use client';

import { Clock, ArrowRight, Coffee, Play, Braces, Terminal, Lightbulb, ExternalLink, ChevronRight, Zap, FlaskConical, CheckCircle2 } from "lucide-react";
import { AulaProps } from "../../aulas/index";

export default function JavaAula5({ onNext }: AulaProps) {
  const videoAulaId = "eIbjgnFxaMs";

  const experimentos = [
    {
      titulo: "Troque o texto",
      descricao: 'Mude "Olá, Mundo!" para o seu nome. Ex: "Olá, eu sou a Ana!"',
      codigo: 'System.out.println("Olá, eu sou a Ana!");',
      saida: "Olá, eu sou a Ana!",
    },
    {
      titulo: "Duas linhas no console",
      descricao: "Adicione um segundo println logo abaixo do primeiro. Cada println pula uma linha.",
      codigo: 'System.out.println("Linha 1");\nSystem.out.println("Linha 2");',
      saida: "Linha 1\nLinha 2",
    },
    {
      titulo: "print vs println",
      descricao: "Troque println por print e veja o que muda. O print não pula linha!",
      codigo: 'System.out.print("Sem pular ");\nSystem.out.print("a linha!");',
      saida: "Sem pular a linha!",
    },
    {
      titulo: "Números no console",
      descricao: "Você também pode exibir números sem aspas. Tente exibir sua idade.",
      codigo: "System.out.println(19);",
      saida: "19",
    },
  ];

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16 min-h-screen">

      {/* 1. HEADER */}
      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-orange-500 flex items-center gap-1"><Coffee size={14} /> Java POO</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> Aula 05</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          OLÁ,<br />
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">Mundo!</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Chegou a hora de ver o código rodar de verdade. Vamos usar o JDoodle — um editor online que não precisa instalar nada — para executar, entender e experimentar seu primeiro programa Java.
        </p>
      </header>

      {/* 2. PLAYER */}
      <section className="w-full max-w-5xl">
        <div className="space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            <Play size={18} className="text-orange-500" /> Aula em Vídeo
          </h3>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-900 shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoAulaId}?rel=0`}
              title="Olá Mundo em Java"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <article className="max-w-5xl space-y-16">

        {/* BLOCO 1 — O JDOODLE */}
        <div className="p-8 md:p-12 rounded-[2.5rem] border border-orange-500/20 bg-gradient-to-br from-orange-950/20 to-zinc-950 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Terminal size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Ferramenta da Aula — JDoodle</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-white text-2xl font-bold">Programe direto no navegador</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                O JDoodle é um editor de código online gratuito. Você escreve o código, clica em executar e vê o resultado na hora — sem instalar o Java, sem configurar nada, funciona em qualquer computador ou celular.
              </p>
              <div className="space-y-2">
                {[
                  "Gratuito e sem cadastro",
                  "Funciona em qualquer navegador",
                  "Resultado aparece na hora",
                  "Suporta Java e várias outras linguagens",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-zinc-400 text-xs">
                    <CheckCircle2 size={12} className="text-orange-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="https://www.jdoodle.com/online-java-compiler"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all group shadow-lg shadow-orange-500/20"
              >
                Abrir o JDoodle
                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mini guia visual */}
            <div className="space-y-3">
              <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">Como usar</p>
              {[
                { n: "01", t: "Acesse o link acima", d: "O site já abre com um código Java pronto." },
                { n: "02", t: "Apague o código existente", d: "Seleciona tudo (Ctrl+A) e deleta para começar do zero." },
                { n: "03", t: "Digite seu código", d: "Escreva o programa manualmente — não copie e cole!" },
                { n: "04", t: 'Clique em "Execute"', d: "O botão azul no topo. O resultado aparece embaixo." },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/20">
                  <span className="text-orange-500 font-black text-xs flex-shrink-0 w-6">{step.n}</span>
                  <div>
                    <p className="text-zinc-200 font-bold text-xs">{step.t}</p>
                    <p className="text-zinc-600 text-[11px] mt-0.5">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCO 2 — O PROGRAMA */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Braces size={20} />
            <span className="font-black uppercase text-xs tracking-widest">O Programa — Digite Este Código</span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Abra o JDoodle e escreva o código abaixo <strong className="text-zinc-200">manualmente, linha por linha</strong>. Digitar com as próprias mãos ajuda o cérebro a memorizar a estrutura muito mais rápido do que copiar.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

            {/* Código */}
            <div className="bg-zinc-950 p-6 rounded-3xl border border-zinc-800 font-mono text-[13px] leading-8">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-zinc-600 text-[10px] ml-2 uppercase tracking-widest">JDoodle — Java</span>
              </div>
              <p><span className="text-blue-400">public class </span><span className="text-yellow-200">OlaMundo</span><span className="text-zinc-400"> {'{'}</span></p>
              <p className="pl-4"><span className="text-purple-400">public static void </span><span className="text-green-400">main</span><span className="text-zinc-400">(String[] args) {'{'}</span></p>
              <p className="pl-8"><span className="text-zinc-300">System.out.</span><span className="text-blue-300">println</span><span className="text-zinc-300">(</span><span className="text-orange-300">"Olá, Mundo!"</span><span className="text-zinc-300">);</span></p>
              <p className="pl-4 text-zinc-400">{'}'}</p>
              <p className="text-zinc-400">{'}'}</p>
            </div>

            {/* O que vai acontecer */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/30 space-y-3">
                <div className="flex items-center gap-2 text-green-400">
                  <Terminal size={14} />
                  <span className="font-bold text-xs uppercase tracking-widest">Resultado esperado</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-sm">
                  <p className="text-zinc-500 text-[10px] mb-2">Output:</p>
                  <p className="text-green-400">Olá, Mundo!</p>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Se aparecer exatamente isso no console, parabéns — seu primeiro programa Java rodou com sucesso!
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/30 space-y-3">
                <div className="flex items-center gap-2 text-orange-400">
                  <Lightbulb size={14} />
                  <span className="font-bold text-xs uppercase tracking-widest">O que acontece por baixo</span>
                </div>
                <div className="space-y-2 text-zinc-500 text-xs leading-relaxed">
                  <p>Quando você clica em Execute, o JDoodle faz duas coisas:</p>
                  <div className="flex items-start gap-2">
                    <ChevronRight size={10} className="text-orange-500 flex-shrink-0 mt-1" />
                    <p><strong className="text-zinc-300">Compila</strong> — transforma seu código em uma linguagem que o computador entende (bytecode).</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight size={10} className="text-orange-500 flex-shrink-0 mt-1" />
                    <p><strong className="text-zinc-300">Executa</strong> — roda esse bytecode na Máquina Virtual Java (JVM) e exibe o resultado.</p>
                  </div>
                  <p className="pt-1">No Eclipse, você faria isso manualmente clicando no botão ▶ verde. Aqui o JDoodle faz tudo de uma vez.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCO 3 — EXPERIMENTOS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <FlaskConical size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Hora de Experimentar</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Programar é experimentar. Faça cada modificação abaixo no JDoodle, execute e observe o resultado. Não tenha medo de errar — erro no console é aprendizado, não fracasso.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experimentos.map((exp, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                    <span className="text-orange-400 font-black text-[10px]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="text-white font-bold text-sm">{exp.titulo}</h4>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">{exp.descricao}</p>
                <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 font-mono text-[11px]">
                  <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">Código</p>
                  {exp.codigo.split("\n").map((line, j) => (
                    <p key={j} className="text-orange-300">{line}</p>
                  ))}
                </div>
                <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 font-mono text-[11px]">
                  <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">Saída esperada</p>
                  {exp.saida.split("\n").map((line, j) => (
                    <p key={j} className="text-green-400">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCO 4 — DESAFIO FINAL */}
        <div className="p-8 md:p-12 rounded-[2.5rem] border border-orange-500/20 bg-gradient-to-br from-orange-950/20 to-zinc-950 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Zap size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Desafio Final da Aula</span>
          </div>
          <h3 className="text-white text-2xl font-bold">Crie sua apresentação no console</h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Usando tudo que você aprendeu hoje, escreva um programa que exiba 4 linhas no console com suas informações. Use vários println, um para cada linha.
          </p>
          <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 font-mono text-sm space-y-1">
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-3">Saída esperada no console:</p>
            <p className="text-green-400">Nome: João da Silva</p>
            <p className="text-green-400">Idade: 19</p>
            <p className="text-green-400">Cidade: Belo Horizonte</p>
            <p className="text-green-400">Curso: Técnico em Informática</p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-zinc-900/40 border border-zinc-800/20 rounded-2xl">
            <Lightbulb size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-zinc-200">Dica:</strong> Para exibir o número da idade sem aspas, escreva <code className="text-orange-400">System.out.println(19)</code> — sem as aspas. Com aspas, seria um texto. Sem aspas, é um número. Essa diferença vai importar muito nas próximas aulas!
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
          
          className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-orange-500 hover:text-white transition-all active:scale-95"
        >
          Finalizar Aula 05
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
}