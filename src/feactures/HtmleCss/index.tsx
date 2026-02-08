'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

// Recebemos o onNavigate que veio lá do Template
export default function HtmlCssPage({ onNavigate }: { onNavigate: (s: string) => void }) {
  
  const aulas = [
    { n: 1, t: "Introdução ao HTML", d: "Entenda as tags básicas e a estrutura de um documento.", s: "concluido", slug: "aula-html-1" },
    { n: 2, t: "Estilizando com CSS", d: "Cores, fontes e seletores básicos para dar vida ao site.", s: "pendente", slug: "aula-html-2" },
    { n: 3, t: "Box Model", d: "O conceito mais importante do CSS: margens, bordas e preenchimento.", s: "bloqueado", slug: "aula-html-3" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <Title title="HTML & CSS" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.n}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            status={aula.s as any}
            // A mágica: quando clica, avisa o Template qual aula abrir
            onClick={() => onNavigate(aula.slug)} 
          />
        ))}
      </div>
    </div>
  );
}