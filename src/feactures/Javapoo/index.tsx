'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface JavaPooPageProps {
  onNavigate: (slug: string) => void;
}

export default function JavaPooPage({ onNavigate }: JavaPooPageProps) {
  const aulas = [
    { 
  n: 1, 
  t: "O Início: De Algoritmos ao Java", 
  d: "Entenda a história do Java, o porquê do café e como os algoritmos moldam a base da POO.", 
  s: "concluido",
  id: "java-aula-1" 
},
    { 
      n: 2, 
      t: "Atributos e Métodos", 
      d: "Defina comportamentos e características para suas classes com métodos e variáveis.", 
      s: "pendente",
      id: "java-aula-2"
    },
    { 
      n: 3, 
      t: "Encapsulamento", 
      d: "Proteja seus dados usando modificadores de acesso como private, public e protected.", 
      s: "bloqueado",
      id: "java-aula-3"
    },
  ];

  return (
    /* REMOVIDO: max-w e mx-auto para ocupar a tela toda */
    <div className="w-full p-4 md:p-8 animate-in fade-in duration-500">
      
      {/* HEADER: Título + Parágrafo de descrição */}
      <header className="mb-10">
        <Title title="Java POO" />
        <p className="text-zinc-400 mt-2 text-sm md:text-base max-w-2xl">
          Explore os pilares da Programação Orientada a Objetos com Java, desde a criação de classes 
          até conceitos avançados de arquitetura de software.
        </p>
      </header>
      
      {/* GRID: Agora com 4 colunas em telas muito grandes (xl) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.id}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            color="orange" // Java é Laranja
            status={aula.s as any}
            onClick={() => onNavigate(aula.id)}
          />
        ))}
      </div>
    </div>
  );
}