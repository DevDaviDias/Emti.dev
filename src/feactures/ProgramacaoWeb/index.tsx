'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface WebPageProps {
  onNavigate: (sessao: string) => void;
}

export default function ProgramacaoWebPage({ onNavigate }: WebPageProps) {
  const aulas = [
    { 
      n: 1, 
      t: "Fundamentos de JavaScript", 
      d: "Manipulação do DOM, eventos e a lógica por trás das interações na web.", 
      s: "concluido",
      id: "web-aula-1" 
    },
    { 
      n: 2, 
      t: "React e Componentização", 
      d: "Aprenda a criar interfaces modernas e reutilizáveis usando a biblioteca mais popular do mercado.", 
      s: "pendente",
      id: "web-aula-2"
    },
    { 
      n: 3, 
      t: "Consumo de APIs", 
      d: "Conecte seu front-end ao mundo real buscando dados de servidores externos com Fetch e Async/Await.", 
      s: "bloqueado",
      id: "web-aula-3"
    },
  ];

  return (
    <div className="max-w-5xl mx-auto md:p-8 p-4">
      {/* Título da matéria de Programação Web */}
      <Title title="Programação Web" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.n}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            status={aula.s as any}
            // Navegação para o conteúdo específico da aula no Template
            onClick={() => onNavigate(aula.id)}
          />
        ))}
      </div>
    </div>
  );
}