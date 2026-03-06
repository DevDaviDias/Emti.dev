'use client';

import { Clock, ArrowRight, Coffee, Play, Braces, Terminal, Lightbulb, Zap, Database, FlaskConical } from "lucide-react";
import { AulaProps } from "../../aulas/index";

export default function JavaAula7({ onNext }: AulaProps) {
  const videoAulaId = "SEU_VIDEO_ID_AQUI";

  const tiposPrimitivos = [
    { tipo: "int", exemplo: "int idade = 19;", saida: "19", descricao: "Números inteiros. O mais usado no dia a dia.", range: "-2.147.483.648 até 2.147.483.647", cor: "text-blue-400" },
    { tipo: "double", exemplo: "double altura = 1.75;", saida: "1.75", descricao: "Números com casas decimais (ponto, não vírgula).", range: "Até 15 dígitos decimais", cor: "text-purple-400" },
    { tipo: "boolean", exemplo: "boolean ativo = true;", saida: "true", descricao: "Verdadeiro ou falso. Só dois valores possíveis.", range: "true ou false", cor: "text-green-400" },
    { tipo: "char", exemplo: "char letra = 'A';", saida: "A", descricao: "Um único caractere. Usa aspas simples.", range: "Um único caractere", cor: "text-yellow-400" },
    { tipo: "String", exemplo: 'String nome = "João";', saida: "João", descricao: "Texto. Tecnicamente não é primitivo, mas é essencial.", range: "Qualquer texto", cor: "text-orange-400" },
  ];

  const experimentos = [
    {
      titulo: "Declare suas variáveis",
      descricao: "Crie uma variável de cada tipo com seus próprios dados e exiba todas com println.",
      codigo: 'int idade = 19;\nString nome = "Ana";\ndouble altura = 1.68;\nboolean estudando = true;\nSystem.out.println(nome);\nSystem.out.println(idade);\nSystem.out.println(altura);\nSystem.out.println(estudando);',
      saida: "Ana\n19\n1.68\ntrue",
    },
    {
      titulo: "Soma de inteiros",
      descricao: "Declare dois números inteiros e exiba a soma deles. Java faz o cálculo automaticamente.",
      codigo: "int a = 10;\nint b = 5;\nSystem.out.println(a + b);",
      saida: "15",
    },
    {
      titulo: "Texto + número",
      descricao: "Você pode juntar texto e variável com o operador +. Experimenta exibir uma frase completa.",
      codigo: 'String nome = "Carlos";\nint idade = 22;\nSystem.out.println("Nome: " + nome);\nSystem.out.println("Idade: " + idade);',
      saida: "Nome: Carlos\nIdade: 22",
    },
    {
      titulo: "Mude o valor da variável",
      descricao: "Depois de declarar, você pode trocar o valor. Declare uma variável e depois mude o valor dela.",
      codigo: "int pontos = 0;\nSystem.out.println(pontos);\npontos = 100;\nSystem.out.println(pontos);",
      saida: "0\n100",
    },
  ];

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16 min-h-screen">

      {/* HEADER */}
      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-orange-500 flex items-center gap-1"><Coffee size={14} /> Java POO</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> Aula 07</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          VARIÁVEIS<br />
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">e Tipos de Dados</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Todo programa precisa guardar informações. Variáveis são as caixinhas onde esses dados ficam. Aprenda a criar, nomear e usar variáveis em Java — e entenda por que o tipo de dado importa.
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
              title="Variáveis e Tipos de Dados em Java"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <article className="max-w-5xl space-y-16">

        {/* BLOCO 1 — O QUE É UMA VARIÁVEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-y border-zinc-900 py-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-orange-500">
              <Database size={20} />
              <span className="font-black uppercase text-xs tracking-widest">O que é uma Variável?</span>
            </div>
            <h3 className="text-zinc-300 text-2xl font-light leading-snug">
              "Uma variável é uma caixinha com nome que guarda um valor na memória do computador."
            </h3>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-zinc-900/20 rounded-3xl border border-zinc-900 font-mono text-sm space-y-3">
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-2">Anatomia de uma variável</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">int</span>
                <span className="text-zinc-600 text-xs">tipo</span>
                <span className="px-2 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs">idade</span>
                <span className="text-zinc-600 text-xs">nome</span>
                <span className="text-zinc-400 text-xs">=</span>
                <span className="px-2 py-1 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs">19</span>
                <span className="text-zinc-600 text-xs">valor</span>
                <span className="text-zinc-400 text-xs">;</span>
              </div>
            </div>
            <div className="p-5 bg-zinc-900/20 rounded-3xl border border-zinc-900 text-zinc-500 text-xs leading-relaxed space-y-2">
              <p><strong className="text-blue-400">Tipo</strong> — define o que pode ser guardado (número, texto, verdadeiro/falso).</p>
              <p><strong className="text-orange-400">Nome</strong> — como você vai chamar essa caixinha no código. Escolha nomes descritivos.</p>
              <p><strong className="text-green-400">Valor</strong> — o dado que está sendo guardado agora.</p>
            </div>
          </div>
        </div>

        {/* BLOCO 2 — TIPOS PRIMITIVOS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Braces size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Tipos de Dados em Java</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Java é uma linguagem <strong className="text-zinc-200">fortemente tipada</strong> — você sempre precisa dizer qual tipo de dado a variável vai guardar. Os principais tipos que você vai usar são:
          </p>

          <div className="space-y-3">
            {tiposPrimitivos.map((item) => (
              <div key={item.tipo} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/20 items-center">
                <div className="flex items-center gap-3">
                  <code className={`font-mono font-black text-sm ${item.cor}`}>{item.tipo}</code>
                </div>
                <div className="md:col-span-2">
                  <p className="text-zinc-300 text-xs leading-relaxed">{item.descricao}</p>
                  <p className="text-zinc-600 text-[10px] mt-1">{item.range}</p>
                </div>
                <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 font-mono text-[11px]">
                  <p className={item.cor}>{item.exemplo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCO 3 — REGRAS DE NOMENCLATURA */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-900 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Lightbulb size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Boas Práticas — Como Nomear Variáveis</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-green-400 font-bold text-xs uppercase tracking-widest">✅ Faça isso</p>
              {[
                { ex: "int idadeDoAluno = 19;", desc: "camelCase — primeira palavra minúscula" },
                { ex: "String nomeCompleto;", desc: "nomes descritivos e claros" },
                { ex: "double salarioMensal;", desc: "use o tipo correto para o dado" },
              ].map((item) => (
                <div key={item.ex} className="p-3 rounded-xl bg-green-950/20 border border-green-500/10">
                  <code className="text-green-400 text-xs block">{item.ex}</code>
                  <p className="text-zinc-500 text-[11px] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-red-400 font-bold text-xs uppercase tracking-widest">❌ Evite isso</p>
              {[
                { ex: "int x = 19;", desc: "nome sem significado — o que é 'x'?" },
                { ex: "String Nome;", desc: "não comece com maiúscula (isso é para classes)" },
                { ex: "int idade do aluno;", desc: "espaço não é permitido no nome" },
              ].map((item) => (
                <div key={item.ex} className="p-3 rounded-xl bg-red-950/20 border border-red-500/10">
                  <code className="text-red-400 text-xs block">{item.ex}</code>
                  <p className="text-zinc-500 text-[11px] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCO 4 — EXPERIMENTOS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <FlaskConical size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Hora de Experimentar</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Abra o JDoodle e teste cada experimento abaixo dentro do método main. Digite manualmente — não copie e cole.
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

        {/* DESAFIO FINAL */}
        <div className="p-8 md:p-12 rounded-[2.5rem] border border-orange-500/20 bg-gradient-to-br from-orange-950/20 to-zinc-950 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Zap size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Desafio Final da Aula</span>
          </div>
          <h3 className="text-white text-2xl font-bold">Ficha de cadastro no console</h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Crie um programa que use pelo menos um de cada tipo de dado (int, double, boolean, String) e exiba uma ficha de cadastro formatada no console.
          </p>
          <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 font-mono text-sm space-y-1">
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-3">Saída esperada no console:</p>
            <p className="text-green-400">===== FICHA DE CADASTRO =====</p>
            <p className="text-green-400">Nome: Maria Souza</p>
            <p className="text-green-400">Idade: 20</p>
            <p className="text-green-400">Altura: 1.65</p>
            <p className="text-green-400">Matriculada: true</p>
            <p className="text-green-400">=============================</p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-zinc-900/40 border border-zinc-800/20 rounded-2xl">
            <Lightbulb size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-zinc-200">Dica:</strong> Para exibir a linha separadora, use <code className="text-orange-400">System.out.println("=====");</code> — é só uma String normal. Use <code className="text-orange-400">"Altura: " + altura</code> para juntar texto com variável.
            </p>
          </div>
        </div>

      </article>

      {/* FOOTER */}
      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próxima Aula</p>
          <h4 className="text-white font-bold text-xl uppercase italic tracking-tight underline decoration-orange-500 underline-offset-8">Operadores e Expressões</h4>
        </div>

        <button
          onClick={() => onNext?.("java-aula-8")}
          className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-orange-500 hover:text-white transition-all active:scale-95"
        >
          Finalizar Aula 07
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
}