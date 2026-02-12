'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface LogicaPageProps {
  onNavigate: (sessao: string) => void;
}

// Interface para garantir a segurança e consistência dos dados
interface AulaLogica {
  n: number;
  t: string;
  d: string;
  s: "concluido" | "pendente" | "bloqueado";
  id: string;
}

export default function LogicaPage({ onNavigate }: LogicaPageProps) {
  const aulas: AulaLogica[] = [
    // --- 1º SEMESTRE (Fundamentos e Algoritmos) ---
    { n: 1, t: "O que é Lógica e Algoritmo", d: "Entenda o conceito de pensar passo a passo para resolver problemas cotidianos.", s: "concluido", id: "logica-aula-1" },
    { n: 2, t: "Sequência Lógica", d: "A importância da ordem das instruções: por que o computador faz o que mandamos?", s: "pendente", id: "logica-aula-2" },
    { n: 3, t: "Construção de Algoritmos", d: "Do Portugol ao Fluxograma: formas de representar o raciocínio antes de codar.", s: "bloqueado", id: "logica-aula-3" },
    { n: 4, t: "Variáveis e Memória", d: "Como o algoritmo reserva espaços para guardar números, textos e valores lógicos.", s: "bloqueado", id: "logica-aula-4" },
    { n: 5, t: "Entrada e Saída de Dados", d: "Como o algoritmo recebe informações e exibe os resultados processados.", s: "bloqueado", id: "logica-aula-5" },
    { n: 6, t: "Operadores Lógicos e Matemáticos", d: "Trabalhando com cálculos e comparações (E, OU, NÃO) para validar condições.", s: "bloqueado", id: "logica-aula-6" },

    // --- 2º SEMESTRE (Estruturas Avançadas - Descomentado para estrutura) ---
    { n: 7, t: "Vetores: Conceito e Memória", d: "Introdução às variáveis indexadas: como guardar uma lista de dados.", s: "bloqueado", id: "logica-aula-7" },
    { n: 8, t: "Vetores e Laços de Repetição", d: "Automatizando a leitura de listas usando estruturas de repetição.", s: "bloqueado", id: "logica-aula-8" },
    { n: 9, t: "Matrizes: Duas Dimensões", d: "Entendendo tabelas de dados (linhas e colunas) e como percorrê-las.", s: "bloqueado", id: "logica-aula-9" },
  ];

  return (
    <div className="w-full p-4 md:p-8 animate-in fade-in duration-500">
      
      {/* HEADER: Borda temática em Verde (Emerald/Green) */}
      <header className="mb-10 border-l-4 border-green-500 pl-6">
        <Title title="Lógica de Programação" />
        <p className="text-zinc-400 mt-2 text-sm md:text-base max-w-2xl leading-relaxed">
          Aprenda a pensar como um programador. Domine algoritmos, estruturas de repetição 
          e organização de dados para construir qualquer software.
        </p>
      </header>
      
      {/* GRID: Expandido para até 5 colunas em telas ultra-wide */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.id}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            color="green" // Cor que representa fluxo e algoritmos
            status={aula.s}
            onClick={() => onNavigate(aula.id)}
          />
        ))}
      </div>

      {/* CALLOUT: Dica de Algoritmo */}
      <div className="mt-12 p-6 bg-green-500/5 border border-green-500/10 rounded-2xl">
        <h4 className="text-green-500 font-bold text-xs uppercase mb-2">Mentalidade Algorítmica</h4>
        <p className="text-zinc-500 text-sm italic">
          "Um algoritmo nada mais é do que uma receita finita de passos bem definidos. 
          Se você consegue explicar para um humano, você consegue explicar para a máquina."
        </p>
      </div>
    </div>
  );
}