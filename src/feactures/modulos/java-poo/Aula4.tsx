'use client';

import { Clock, ArrowRight, Coffee, Play, Braces, Code2, BookOpen, AlertTriangle, CheckCircle2, ChevronRight, Lightbulb } from "lucide-react";
import { AulaProps } from "../../aulas/index";

export default function JavaAula4({ onNext }: AulaProps) {
  const videoAulaId = "3H5O1B0Bpds";

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16 min-h-screen">

      {/* 1. HEADER */}
      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-orange-500 flex items-center gap-1"><Coffee size={14} /> Java POO</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> Aula 04</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          ESTRUTURA<br />
          <span className="text-zinc-800 uppercase text-4xl md:text-6xl italic">de um Programa</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Todo programa Java segue uma estrutura obrigatória. Entender cada parte dela é o alicerce de tudo que você vai construir daqui pra frente.
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
              title="Estrutura de um Programa Java"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 3. CONTEÚDO */}
      <article className="max-w-5xl space-y-16">

        {/* BLOCO 1 — A ANALOGIA */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/60 to-transparent border border-zinc-900 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Lightbulb size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Antes de Codar — Entenda a Analogia</span>
          </div>

          <p className="text-zinc-300 text-lg font-light leading-relaxed max-w-3xl">
            Imagine que você vai montar um móvel da IKEA. A caixa é a <strong className="text-white">Classe</strong>. O manual de instruções dentro dela é o <strong className="text-white">Método main</strong>. E cada passo numerado do manual é uma <strong className="text-white">linha de código</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {[
              { emoji: "📦", titulo: "A Classe", desc: "É o arquivo principal. Tudo no Java vive dentro de uma Classe. Sem ela, não existe programa." },
              { emoji: "📋", titulo: "O Método main", desc: "É o ponto de partida. Quando você executa o programa, o Java procura o main e começa a ler dali." },
              { emoji: "📝", titulo: "As Instruções", desc: "São as linhas dentro do main. O Java lê de cima para baixo, uma por uma, em ordem." },
            ].map((item) => (
              <div key={item.titulo} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/30 space-y-2">
                <span className="text-2xl">{item.emoji}</span>
                <h4 className="text-white font-bold text-sm">{item.titulo}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCO 2 — O CÓDIGO COMPLETO EXPLICADO LINHA A LINHA */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Braces size={20} />
            <span className="font-black uppercase text-xs tracking-widest">O Código — Linha por Linha</span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Veja o programa mais simples possível em Java. Cada linha tem um papel e nenhuma delas está ali por acidente.
          </p>

          {/* Código + explicações */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

            {/* Bloco de código */}
            <div className="bg-zinc-950 p-6 rounded-3xl border border-zinc-800 font-mono text-[13px] leading-8 sticky top-6">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-zinc-600 text-[10px] ml-2 uppercase tracking-widest">MeuPrograma.java</span>
              </div>
              <p><span className="text-zinc-600 text-xs mr-3">1</span><span className="text-blue-400">public class </span><span className="text-yellow-200">MeuPrograma</span><span className="text-zinc-400"> {'{'}</span></p>
              <p><span className="text-zinc-600 text-xs mr-3">2</span></p>
              <p><span className="text-zinc-600 text-xs mr-3">3</span><span className="pl-4 text-purple-400">public static void </span><span className="text-green-400">main</span><span className="text-zinc-400">(String[] args) {'{'}</span></p>
              <p><span className="text-zinc-600 text-xs mr-3">4</span></p>
              <p><span className="text-zinc-600 text-xs mr-3">5</span><span className="pl-8 text-zinc-300">System.out.</span><span className="text-blue-300">println</span><span className="text-zinc-300">(</span><span className="text-orange-300">"Olá, mundo!"</span><span className="text-zinc-300">);</span></p>
              <p><span className="text-zinc-600 text-xs mr-3">6</span></p>
              <p><span className="text-zinc-600 text-xs mr-3">7</span><span className="pl-4 text-zinc-400">{'}'}</span></p>
              <p><span className="text-zinc-600 text-xs mr-3">8</span></p>
              <p><span className="text-zinc-600 text-xs mr-3">9</span><span className="text-zinc-400">{'}'}</span></p>
            </div>

            {/* Explicações linha a linha */}
            <div className="space-y-4">
              {[
                {
                  linha: "Linha 1",
                  codigo: "public class MeuPrograma {",
                  cor: "text-blue-400",
                  titulo: "Declaração da Classe",
                  desc: "Aqui você está criando uma Classe chamada MeuPrograma. A palavra public significa que ela pode ser acessada de qualquer lugar. A chave { abre o 'envelope' — tudo que estiver dentro dela faz parte desse programa.",
                  alerta: "O nome da Classe DEVE ser idêntico ao nome do arquivo. Se o arquivo se chama MeuPrograma.java, a classe tem que ser MeuPrograma. Com M maiúsculo e tudo.",
                },
                {
                  linha: "Linha 3",
                  codigo: "public static void main(String[] args) {",
                  cor: "text-purple-400",
                  titulo: "O Método main — A Porta de Entrada",
                  desc: "Essa linha parece assustadora, mas você vai decorar ela naturalmente. Por enquanto, entenda que é ela que diz para o Java: 'comece por aqui'. Toda vez que seu programa rodar, é essa linha que será chamada primeiro.",
                  alerta: "Nunca troque 'main' por outra coisa. O Java procura exatamente essa palavra para saber onde começar.",
                },
                {
                  linha: "Linha 5",
                  codigo: 'System.out.println("Olá, mundo!");',
                  cor: "text-zinc-300",
                  titulo: "Sua Primeira Instrução",
                  desc: "Essa é a linha que faz algo de verdade: ela exibe um texto na tela. System.out.println é o comando. O texto entre aspas é o que será exibido. O ponto e vírgula no final indica que a instrução acabou — como um ponto no final de uma frase.",
                  alerta: null,
                },
                {
                  linha: "Linhas 7 e 9",
                  codigo: "} e }",
                  cor: "text-zinc-400",
                  titulo: "Fechamento das Chaves",
                  desc: "Cada { que abre precisa de um } para fechar. A chave da linha 7 fecha o método main. A chave da linha 9 fecha a Classe. Esquecer de fechar uma chave é um dos erros mais comuns para quem está começando.",
                  alerta: null,
                },
              ].map((item) => (
                <div key={item.linha} className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/30 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{item.linha}</span>
                    <ChevronRight size={10} className="text-zinc-700" />
                    <code className={`text-[11px] ${item.cor}`}>{item.codigo}</code>
                  </div>
                  <h4 className="text-white font-bold text-sm">{item.titulo}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                  {item.alerta && (
                    <div className="flex items-start gap-2 p-3 bg-orange-950/30 border border-orange-500/20 rounded-xl">
                      <AlertTriangle size={12} className="text-orange-400 flex-shrink-0 mt-0.5" />
                      <p className="text-orange-300 text-[11px] leading-relaxed">{item.alerta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCO 3 — ERROS COMUNS */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-900 space-y-6">
          <div className="flex items-center gap-3 text-red-400">
            <AlertTriangle size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Erros Clássicos de Iniciante</span>
          </div>
          <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Todo programador comete esses erros. Saber reconhecê-los vai te economizar horas de dor de cabeça.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                errado: 'system.out.println("Oi");',
                certo: 'System.out.println("Oi");',
                motivo: "Java é case sensitive. 'system' com s minúsculo não existe. Tem que ser 'System' com S maiúsculo."
              },
              {
                errado: 'System.out.println("Oi")',
                certo: 'System.out.println("Oi");',
                motivo: "Esqueceu o ponto e vírgula no final. Toda instrução precisa terminar com ;"
              },
              {
                errado: 'public class meuPrograma {',
                certo: 'public class MeuPrograma {',
                motivo: "O nome da classe tem que ser igual ao nome do arquivo. Convenção: sempre com a primeira letra maiúscula."
              },
              {
                errado: "Fechar só uma chave no final",
                certo: "Uma } para o main, outra } para a classe",
                motivo: "Cada bloco que abre com { precisa fechar com }. São dois blocos, então são duas chaves de fechamento."
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/40 space-y-3">
                <div className="space-y-1">
                  <p className="text-[10px] text-red-400 uppercase font-bold tracking-widest">❌ Errado</p>
                  <code className="text-red-300/70 text-xs font-mono">{item.errado}</code>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-green-400 uppercase font-bold tracking-widest">✅ Certo</p>
                  <code className="text-green-300 text-xs font-mono">{item.certo}</code>
                </div>
                <p className="text-zinc-600 text-[11px] leading-relaxed border-t border-zinc-800 pt-2">{item.motivo}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCO 4 — LEITURA COMPLEMENTAR */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-900 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <BookOpen size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Leitura Complementar</span>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl text-white font-bold">Por que Java exige essa estrutura toda?</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
              Java foi criado para ser robusto e previsível. Essa estrutura rígida de Classes e métodos é o que garante que qualquer programa Java funcione da mesma forma em qualquer computador — seja Windows, Mac ou Linux. É burocrático no começo, mas você vai entender o valor disso quando começar a criar sistemas maiores.
            </p>
            <a
              href="https://www.w3schools.com/java/java_syntax.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium text-sm transition-colors group"
            >
              Java Syntax — W3Schools (em inglês, mas muito visual)
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* BLOCO 5 — MISSÃO */}
        <div className="p-8 md:p-12 rounded-[2.5rem] border border-orange-500/20 bg-gradient-to-br from-orange-950/20 to-zinc-950 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <Code2 size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Missão da Aula</span>
          </div>
          <h3 className="text-white text-2xl font-bold">Escreva seu próprio programa do zero</h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Sem copiar e colar. Abra o Eclipse, crie um novo projeto e escreva cada linha manualmente. Errar faz parte — o objetivo é começar a entender o que cada parte faz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {[
              "Criar um novo Java Project chamado 'Aula04'",
              "Criar uma Classe chamada 'MeuPrograma'",
              "Escrever o método main corretamente",
              "Exibir seu nome completo no console",
              "Exibir sua cidade no console (segunda linha)",
              "Executar e ver as duas linhas aparecerem",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/20">
                <CheckCircle2 size={14} className="text-orange-500 flex-shrink-0" />
                <span className="text-zinc-400 text-xs">{step}</span>
              </div>
            ))}
          </div>
          <div className="p-5 bg-zinc-950 rounded-2xl border border-zinc-800 font-mono text-xs space-y-1 mt-2">
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-3">Resultado esperado no console:</p>
            <p className="text-green-400">{'>'} João da Silva</p>
            <p className="text-green-400">{'>'} Belo Horizonte</p>
          </div>
        </div>

      </article>

      {/* 4. FOOTER */}
      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próxima Aula</p>
          <h4 className="text-white font-bold text-xl uppercase italic tracking-tight underline decoration-orange-500 underline-offset-8">Variáveis e Tipos de Dados</h4>
        </div>

        <button
         
          className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-orange-500 hover:text-white transition-all active:scale-95"
        >
          Finalizar Aula 04
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
}