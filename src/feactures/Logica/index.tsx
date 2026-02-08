'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface LogicaPageProps {
  onNavigate: (sessao: string) => void;
}

export default function LogicaPage({ onNavigate }: LogicaPageProps) {
  // Gerando as 10 aulas dinamicamente para poupar código
  const aulas = [
    { n: 1, t: "Algoritmos e Fluxogramas", d: "A base de tudo: como estruturar o pensamento lógico.", s: "concluido", id: "logica-aula-1" },
    { n: 2, t: "Variáveis e Operadores", d: "Aprenda a manipular dados e realizar cálculos.", s: "concluido", id: "logica-aula-2" },
    { n: 3, t: "Estruturas de Decisão", d: "O poder do IF e ELSE no controle de fluxo.", s: "pendente", id: "logica-aula-3" },
    { n: 4, t: "Estruturas de Repetição", d: "Dominando loops: While e For.", s: "bloqueado", id: "logica-aula-4" },
    { n: 5, t: "Vetores e Arrays", d: "Como trabalhar com listas de dados organizadas.", s: "bloqueado", id: "logica-aula-5" },
    { n: 6, t: "Matrizes", d: "Explorando dados em múltiplas dimensões.", s: "bloqueado", id: "logica-aula-6" },
    { n: 7, t: "Funções e Procedimentos", d: "Modularizando seu código para reutilização.", s: "bloqueado", id: "logica-aula-7" },
    { n: 8, t: "Escopo de Variáveis", d: "Entenda a diferença entre global e local.", s: "bloqueado", id: "logica-aula-8" },
    { n: 9, t: "Recursividade", d: "O conceito de funções que chamam a si mesmas.", s: "bloqueado", id: "logica-aula-9" },
    { n: 10, t: "Desafio Final", d: "Aplique tudo o que aprendeu em um projeto real.", s: "bloqueado", id: "logica-aula-10" },
  ];

  return (
    // Aumentamos para max-w-[1600px] para a tela ficar cheia
    <div className="max-w-[1600px] mx-auto md:p-8 p-4">
      <Title title="Lógica de Programação" />
      
      {/* Ajuste do Grid:
          - grid-cols-1: Celular
          - sm:grid-cols-2: Tablet pequeno
          - md:grid-cols-3: Tablet grande
          - lg:grid-cols-4: Monitor comum
          - xl:grid-cols-5: Monitores largos (sua fileira de 5)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.n}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            status={aula.s as any}
            onClick={() => onNavigate(aula.id)}
          />
        ))}
      </div>
    </div>
  );
}