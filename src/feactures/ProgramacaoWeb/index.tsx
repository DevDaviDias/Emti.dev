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
      t: "A Origem e o Funcionamento da Web", 
      d: "A história da internet desde as cavernas até os protocolos TCP/IP e HTML.", 
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
    /* 🚀 TELA CHEIA: Removido max-w-5xl e mx-auto para alinhar perfeitamente ao menu */
    <div className="w-full md:p-8 p-4 animate-in fade-in duration-500">
      
      {/* HEADER: Título + Descrição padronizada */}
      <header className="mb-10">
        <Title title="Programação Web" />
        <p className="text-zinc-400 mt-2 text-sm md:text-base max-w-2xl">
          Do protocolo HTTP ao desenvolvimento de interfaces dinâmicas. Domine as 
          tecnologias que movem a internet moderna e aprenda a construir aplicações escaláveis.
        </p>
      </header>
      
      {/* GRID: Expandido para até 4 colunas para aproveitar o espaço lateral */}
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