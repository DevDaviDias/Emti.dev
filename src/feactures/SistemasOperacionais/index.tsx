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
      t: "Introdução e Kernel", 
      d: "Entenda o que é um SO e como o Kernel faz a ponte entre o hardware e o software.", 
      s: "concluido",
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
    <div className="max-w-5xl mx-auto md:p-8 p-4">
      <Title title="Sistemas Operacionais" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.n}
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