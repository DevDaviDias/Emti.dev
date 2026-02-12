'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface HtmlCssPageProps {
  onNavigate: (slug: string) => void;
}

interface Aula {
  n: number;
  t: string;
  d: string;
  s: "concluido" | "pendente" | "bloqueado";
  id: string;
}

export default function HtmlCssPage({ onNavigate }: HtmlCssPageProps) {
  const aulas: Aula[] = [
    // --- 1º SEMESTRE (Estruturação e Estilo Básico) ---
    { n: 1, t: "O que é HTML", d: "Conheça a linguagem de marcação que serve como a fundação de toda a internet.", s: "concluido", id: "html-aula-1" },
    { n: 2, t: "Estrutura básica HTML", d: "As tags fundamentais: head, body, doctype e a anatomia de um documento.", s: "concluido", id: "html-aula-2" },
    { n: 3, t: "Tags Principais", d: "Trabalhando com títulos (H1-H6), parágrafos, listas e as tags de texto.", s: "bloqueado", id: "html-aula-3" },
    { n: 4, t: "Introdução ao CSS", d: "Entenda como separar o conteúdo da apresentação usando seletores.", s: "bloqueado", id: "html-aula-4" },
    { n: 5, t: "Cores e Fontes", d: "Dando vida ao site: sistemas de cores (RGB, Hex) e tipografia web.", s: "bloqueado", id: "html-aula-5" },
    { n: 6, t: "Alinhamento Básico", d: "Os primeiros passos para posicionar elementos na tela de forma organizada.", s: "bloqueado", id: "html-aula-6" },

    // --- 2º SEMESTRE (Exemplo) ---
    { n: 7, t: "Layout Moderno com Divs", d: "Aprenda a criar divisões estruturadas para montar cabeçalhos e seções.", s: "bloqueado", id: "html-aula-7" },
  ];

  return (
    <div className="w-full px-6 py-10 md:py-12 animate-in fade-in duration-500">
      
      {/* HEADER: Borda temática em Roxo/Purple */}
      <header className="mb-12 border-l-4 border-purple-500 pl-6">
        <Title title="HTML5 & CSS3" />
        <p className="text-zinc-400 mt-2 text-sm md:text-base max-w-2xl leading-relaxed">
          Domine a fundação do desenvolvimento front-end. Aprenda a estruturar páginas semânticas 
          com HTML5 e a criar estilos incríveis com CSS3 moderno.
        </p>
      </header>
      
      {/* GRID: 1 coluna mobile, 4 colunas em telas grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.id}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            color="purple" // Usando purple que já está no seu LessonCard
            status={aula.s}
            onClick={() => onNavigate(aula.id)}
          />
        ))}
      </div>

      {/* BOX INFORMATIVO */}
      <div className="mt-16 p-8 bg-purple-500/5 border border-purple-500/10 rounded-[2rem]">
         <h4 className="text-purple-400 font-bold text-sm mb-2 uppercase tracking-tighter">Dica de Front-end</h4>
         <p className="text-zinc-500 text-sm italic">
            "O HTML é o esqueleto, o CSS é a pele e as roupas. Sem uma boa estrutura (HTML), 
            o estilo (CSS) não tem onde se segurar."
         </p>
      </div>

      
      
    </div>
  );
}