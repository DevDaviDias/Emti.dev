'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface SoPageProps {
  onNavigate: (sessao: string) => void;
}

export default function SistemasOperacionaisPage({ onNavigate }: SoPageProps) {
  const aulas = [
    {
      n: 1,
      t: "O Cérebro da Máquina",
      d: "Descubra como o Sistema Operacional gerencia o hardware e permite que você use o computador.",
      s: "pendente",
      id: "so-aula-1"
    },
    {
      n: 2,
      t: "Gerenciamento de Processos",
      d: "Como o sistema lida com múltiplos programas abertos ao mesmo tempo usando o Escalonador.",
      s: "pendente",
      id: "so-aula-2"
    },
    {
      n: 3,
      t: "Sistemas de Arquivos",
      d: "Aprenda como os dados são organizados no disco: NTFS, FAT32 e EXT4.",
      s: "bloqueado",
      id: "so-aula-3"
    },
  ];

  return (
    <div className="w-full md:p-8 p-4 animate-in fade-in duration-500">

      <header className="mb-10">
        <Title title="Sistemas Operacionais" />
        {/* Linha minimalista para dar a cor da matéria */}
        <div className="h-1 w-12 bg-emerald-500 mt-2 rounded-full" />
        
        <p className="text-zinc-400 mt-4 text-sm md:text-base max-w-2xl">
          Desvende o software mais importante do computador. Aprenda como o SO gerencia
          recursos, processos e arquivos para manter tudo funcionando em harmonia.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {aulas.map((aula) => (
          <LessonCard
            key={aula.id}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            // MUDANÇA AQUI: Cor verde para Sistemas Operacionais
            color="green" 
            status={aula.s as any}
            onClick={() => onNavigate(aula.id)}
          />
        ))}
      </div>
    </div>
  );
}