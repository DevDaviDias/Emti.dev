'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface ArquiteturaPageProps {
  onNavigate: (sessao: string) => void;
}

export default function ArquiteturaPage({ onNavigate }: ArquiteturaPageProps) {
  const aulas = [
    { 
      n: 1, 
      t: "Componentes do PC", 
      d: "Conheça as peças fundamentais: Processador, Memória RAM e Placa-mãe.", 
      s: "concluido",
      id: "aula-hw-1" 
    },
    { 
      n: 2, 
      t: "Montagem Passo a Passo", 
      d: "Aprenda a ordem correta de montagem e as ferramentas necessárias.", 
      s: "pendente",
      id: "aula-hw-2"
    },
    { 
      n: 3, 
      t: "Manutenção Preventiva", 
      d: "Limpeza técnica, troca de pasta térmica e diagnóstico de defeitos.", 
      s: "bloqueado",
      id: "aula-hw-3"
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      {/* Título específico da matéria */}
      <Title title="Arquitetura e Manutenção" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.n}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            status={aula.s as any}
            // Envia o ID da aula de hardware para o Template
            onClick={() => onNavigate(aula.id)}
          />
        ))}
      </div>
    </div>
  );
}