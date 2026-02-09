'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

export default function HtmlCssPage({ onNavigate }: { onNavigate: (slug: string) => void }) {
  const aulas = [
    { 
      n: 1, 
      t: "Estrutura HTML5", 
      d: "Aprenda a semântica correta e a estrutura base de um documento web moderno.", 
      s: "concluido",
      id: "html-aula-1" 
    },
    { 
      n: 2, 
      t: "CSS Flexbox", 
      d: "Domine o sistema de alinhamento mais utilizado para criar layouts responsivos.", 
      s: "pendente",
      id: "html-aula-2"
    },
    { 
      n: 3, 
      t: "Grid Layout", 
      d: "Trabalhe com layouts complexos de duas dimensões de forma simples e direta.", 
      s: "bloqueado",
      id: "html-aula-3"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 animate-in fade-in duration-500">
      <header className="mb-12">
        <Title title="HTML5 & CSS3" />
        <p className="text-zinc-400 mt-2">Fundamentos do desenvolvimento front-end moderno.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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