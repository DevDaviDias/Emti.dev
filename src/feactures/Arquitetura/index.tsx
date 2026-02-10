'use client';
import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

export default function Arquitetura({ onNavigate }: { onNavigate: (s: string) => void }) {
  const aulas = [
    { n: 1, t: "Processadores", d: "Como funciona a CPU.", id: "hw-aula-1" },
    { n: 2, t: "Memória RAM", d: "Armazenamento volátil.", id: "hw-aula-2" },
  ];

  return (
    /* AJUSTE FINAL:
       - Trocamos 'max-w-5xl mx-auto' por 'w-full'.
       - Adicionamos 'animate-in' para manter a suavidade na troca de tela.
    */
    <div className="w-full p-4 md:p-8 animate-in fade-in duration-500">
      
      {/* HEADER PADRONIZADO: Título + Descrição */}
      <header className="mb-10">
        <Title title="Hardware e Arquitetura" />
        <p className="text-zinc-400 mt-2 text-sm md:text-base max-w-2xl">
          Entenda o funcionamento dos componentes físicos do computador e como a 
          arquitetura de hardware sustenta a execução de qualquer software.
        </p>
      </header>

      {/* GRID: Agora alinhado perfeitamente à esquerda respeitando o padding lateral */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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