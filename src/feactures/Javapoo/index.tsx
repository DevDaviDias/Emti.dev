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
      t: "Classes e Objetos", 
      d: "A base da POO: Aprenda a criar seus próprios tipos de dados e instanciar objetos.", 
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
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      {/* Título da matéria */}
      <Title title="Java POO" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.n}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            status={aula.s as any}
            // Envia o ID para o estado 'sessao' do Template
            onClick={() => onNavigate(aula.id)}
          />
        ))}
      </div>
    </div>
  );
}