'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface JavaPooPageProps {
  onNavigate: (slug: string) => void;
}

// Tipagem para garantir consistência nos dados
interface Aula {
  n: number;
  t: string;
  d: string;
  s: "concluido" | "pendente" | "bloqueado";
  id: string;
}

export default function JavaPooPage({ onNavigate }: JavaPooPageProps) {
  const aulas: Aula[] = [
    // --- 1º SEMESTRE (Fundamentos) ---
    { n: 1, t: "Apresentação da Programação", d: "O que é Java e o mercado de trabalho.", s: "concluido", id: "java-aula-1" },
    { n: 2, t: "Instalação do Java e IDE", d: "Configurando o JDK e o Eclipse.", s: "pendente", id: "java-aula-2" },
    { n: 3, t: "Primeiro contato com código", d: "Sintaxe básica e criação do primeiro arquivo.", s: "bloqueado", id: "java-aula-3" },
    { n: 4, t: "Estrutura de um programa", d: "Entendendo classes e o método main.", s: "bloqueado", id: "java-aula-4" },
    { n: 5, t: "Olá Mundo", d: "Execução do primeiro programa no console.", s: "bloqueado", id: "java-aula-5" },
    { n: 6, t: "Compilação e execução", d: "O fluxo do código fonte ao Bytecode.", s: "bloqueado", id: "java-aula-6" },
    { n: 7, t: "Variáveis e Tipos de Dados", d: "Armazenamento de dados e tipos primitivos.", s: "bloqueado", id: "java-aula-7" },
    { n: 8, t: "Operadores", d: "Cálculos matemáticos e lógicos em Java.", s: "bloqueado", id: "java-aula-8" },
    { n: 9, t: "Entrada de dados", d: "Interação com o usuário via Scanner.", s: "bloqueado", id: "java-aula-9" },
    { n: 10, t: "Saída de dados", d: "Formatação de resultados no console.", s: "bloqueado", id: "java-aula-10" },
    { n: 11, t: "Estruturas Condicionais", d: "Uso de If, Else e tomada de decisão.", s: "bloqueado", id: "java-aula-11" },
    { n: 12, t: "Laços de Repetição", d: "Automatização com For e While.", s: "bloqueado", id: "java-aula-12" },

    /*--- 2º SEMESTRE (Orientação a Objetos) ---
    { n: 13, t: "Classes e Objetos", d: "A base da POO: transformando o mundo real em código.", s: "bloqueado", id: "java-aula-13" },
    { n: 14, t: "Atributos e Métodos", d: "Definindo características e comportamentos dos objetos.", s: "bloqueado", id: "java-aula-14" },
    { n: 15, t: "Encapsulamento", d: "Proteção de dados com Getters e Setters.", s: "bloqueado", id: "java-aula-15" },
    { n: 16, t: "Múltiplas Classes", d: "Como organizar um projeto com vários arquivos.", s: "bloqueado", id: "java-aula-16" },
    { n: 17, t: "Relacionamento de Objetos", d: "Associação e interação entre diferentes classes.", s: "bloqueado", id: "java-aula-17" },
    { n: 18, t: "Projeto Console", d: "Desenvolvimento de um sistema funcional via terminal.", s: "bloqueado", id: "java-aula-18" },*/ 
  ];

  return (
    <div className="w-full p-4 md:p-8 animate-in fade-in duration-700">

      {/* HEADER */}
      <header className="mb-12 border-l-4 border-orange-500 pl-6">
        <Title title="Java POO" />
        <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-3xl leading-relaxed">
          Domine a linguagem Java através da <b>Programação Orientada a Objetos</b>. 
          Nesta trilha, você aprenderá desde os fundamentos da sintaxe até a criação 
          de sistemas modulares e escaláveis.
        </p>
      </header>

      {/* SEÇÃO: Fundamentos (1º Semestre) */}
      <div className="mb-8">
        <h2 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
          Primeiro Semestre: Fundamentos
          <div className="h-[1px] bg-zinc-800 flex-1" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aulas.map((aula) => (
            <LessonCard
              key={aula.id}
              numero={aula.n}
              titulo={aula.t}
              descricao={aula.d}
              color="orange"
              status={aula.s}
              onClick={() => onNavigate(aula.id)}
            />
          ))}
        </div>
      </div>
      
      {/* NOTA DIDÁTICA SOBRE O JDK */}
     
    </div>
  );
}