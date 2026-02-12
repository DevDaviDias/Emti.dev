'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface WebPageProps {
  onNavigate: (sessao: string) => void;
}

// Interface para garantir a segurança dos dados
interface AulaWeb {
  n: number;
  t: string;
  d: string;
  s: "concluido" | "pendente" | "bloqueado";
  id: string;
}

export default function ProgramacaoWebPage({ onNavigate }: WebPageProps) {
  const aulas: AulaWeb[] = [
    // --- 1º SEMESTRE (Infraestrutura e Conceitos) ---
    { n: 1, t: "O que é Internet e como surgiu", d: "A história da rede mundial, desde a ARPANET até a web moderna.", s: "concluido", id: "web-aula-1" },
    { n: 2, t: "Como a Web funciona", d: "A visão geral de como os dados viajam entre o seu computador e o mundo.", s: "pendente", id: "web-aula-2" },
    { n: 3, t: "O que é um Site", d: "Diferenciando sites estáticos, dinâmicos e a evolução para PWAs.", s: "bloqueado", id: "web-aula-3" },
    { n: 4, t: "Sistemas Web", d: "Softwares que rodam inteiramente no navegador sem instalação local.", s: "bloqueado", id: "web-aula-4" },
    { n: 5, t: "Cliente e Servidor", d: "O modelo fundamental: quem solicita os dados e quem os entrega.", s: "bloqueado", id: "web-aula-5" },
    { n: 6, t: "Navegadores e Protocolos", d: "Como os browsers interpretam código e as regras de comunicação.", s: "bloqueado", id: "web-aula-6" },
    { n: 7, t: "HTTP e HTTPS", d: "A anatomia de uma requisição web e a importância da segurança SSL.", s: "bloqueado", id: "web-aula-7" },
    { n: 8, t: "Hospedagem e Servidores", d: "Onde os sites moram? O papel dos servidores e provedores de nuvem.", s: "bloqueado", id: "web-aula-8" },
    { n: 9, t: "Front-end, Back-end e Full Stack", d: "As camadas do desenvolvimento e o papel de cada profissional.", s: "bloqueado", id: "web-aula-9" },

    // --- 2º SEMESTRE (Exemplo de como ficaria a continuidade) ---
    { n: 10, t: "Introdução ao JavaScript", d: "A linguagem que dá vida à web: primeiros comandos e interatividade.", s: "bloqueado", id: "web-aula-10" },
  ];

  return (
    <div className="w-full md:p-8 p-4 animate-in fade-in duration-700">

      {/* HEADER: Com a borda temática Indigo */}
      <header className="mb-12 border-l-4 border-indigo-500 pl-6">
        <Title title="Programação Web" />
        <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-3xl leading-relaxed">
          Do protocolo HTTP ao desenvolvimento de interfaces dinâmicas. Domine as
          tecnologias que movem a internet moderna e aprenda a construir aplicações escaláveis.
        </p>
      </header>

      {/* SEÇÃO: Primeiro Semestre */}
      <div className="mb-8">
        <h2 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
          Infraestrutura e Redes
          <div className="h-[1px] bg-zinc-800 flex-1" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aulas.map((aula) => (
            <LessonCard
              key={aula.id}
              numero={aula.n}
              titulo={aula.t}
              descricao={aula.d}
              color="indigo"
              status={aula.s}
              onClick={() => onNavigate(aula.id)}
            />
          ))}
        </div>
      </div>

      {/* FOOTER DIDÁTICO */}
      <div className="mt-12 p-8 bg-indigo-500/5 border border-indigo-500/10 rounded-[2rem] flex flex-col md:flex-row items-center gap-6">
        <div className="space-y-1">
          <h4 className="text-indigo-400 font-bold text-sm uppercase tracking-wider">Conceito Chave</h4>
          <p className="text-zinc-500 text-xs italic max-w-xl">
            Entender a arquitetura <b>Cliente-Servidor</b> é o primeiro passo para qualquer desenvolvedor Web. 
            É a base para entender como o seu navegador pede uma página e como o servidor responde.
          </p>
        </div>
      </div>
      
      
      
    </div>
  );
}