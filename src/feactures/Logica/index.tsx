'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface ArquiteturaPageProps {
  onNavigate: (slug: string) => void;
}

export default function ArquiteturaPage({ onNavigate }: ArquiteturaPageProps) {
  const aulas = [
    { 
      n: 1, 
      t: "Processadores", 
      d: "Entenda a arquitetura Von Neumann, ciclos de instrução e como a CPU processa dados.", 
      s: "concluido",
      id: "hw-aula-1" 
    },
    { 
      n: 2, 
      t: "Memória RAM e Cache", 
      d: "A hierarquia de memória: entenda a diferença entre armazenamento volátil e latência.", 
      s: "pendente",
      id: "hw-aula-2"
    },
    { 
      n: 3, 
      t: "Placa-mãe e Barramentos", 
      d: "O sistema nervoso do PC: como os componentes se comunicam via barramentos e Chipsets.", 
      s: "bloqueado",
      id: "hw-aula-3"
    },
    { 
      n: 4, 
      t: "Armazenamento (SSD vs HDD)", 
      d: "A evolução dos dados: de discos magnéticos à tecnologia NVMe de alta velocidade.", 
      s: "bloqueado",
      id: "hw-aula-4"
    },
  ];

  return (
    /* O container agora ocupa todo o espaço disponível à direita da sidebar */
    <div className="w-full p-4 md:p-8 animate-in fade-in duration-500">
      
      <header className="mb-10">
        <Title title="Arquitetura e Hardware" />
        <p className="text-zinc-400 mt-2 text-sm md:text-base max-w-2xl">
          Abra o "capô" da computação. Aprenda como os componentes físicos trabalham 
          em conjunto para transformar eletricidade em informação.
        </p>
      </header>
      
      {/* Grid responsivo que aproveita a largura total */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.id}
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