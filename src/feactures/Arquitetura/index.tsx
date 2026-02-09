'use client';
import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

export default function Arquitetura({ onNavigate }: { onNavigate: (s: string) => void }) {
  const aulas = [
    { n: 1, t: "Processadores", d: "Como funciona a CPU.", id: "hw-aula-1" },
    { n: 2, t: "Memória RAM", d: "Armazenamento volátil.", id: "hw-aula-2" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <Title title="Hardware e Arquitetura" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.id}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            status="pendente"
            onClick={() => onNavigate(aula.id)} 
          />
        ))}
      </div>
    </div>
  );
}