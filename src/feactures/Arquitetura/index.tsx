'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface ArquiteturaProps {
  onNavigate: (s: string) => void;
}

interface Aula {
  n: number;
  t: string;
  d: string;
  s: "concluido" | "pendente" | "bloqueado";
  id: string;
}

export default function Arquitetura({ onNavigate }: ArquiteturaProps) {
  const aulas: Aula[] = [
    // --- 1º SEMESTRE (Fundamentos e Hardware) ---
    { n: 1, t: "Conceitos de Hardware", d: "Apresentação da disciplina e a diferença fundamental entre hardware e software.", s: "concluido", id: "arq-aula-1" },
    { n: 2, t: "Componentes Internos e Externos", d: "Identificação das peças que compõem o computador e seus periféricos.", s: "pendente", id: "arq-aula-2" },
    { n: 3, t: "Unidade Central de Processamento (CPU)", d: "O cérebro do computador: como o processador executa instruções.", s: "bloqueado", id: "arq-aula-3" },
    { n: 4, t: "Memórias e Armazenamento", d: "Diferenças cruciais entre Memória RAM, HD e SSD (Velocidade vs Persistência).", s: "bloqueado", id: "arq-aula-4" },
    { n: 5, t: "Placa-Mãe (Motherboard)", d: "A estrada principal: conhecendo os barramentos e conexões da placa principal.", s: "bloqueado", id: "arq-aula-5" },
    { n: 6, t: "Fonte de Alimentação", d: "Energia e potência: como alimentar os componentes de forma segura.", s: "bloqueado", id: "arq-aula-6" },
    { n: 7, t: "Fluxo de Inicialização (Boot)", d: "O que acontece do momento que você aperta o botão power até o SO carregar.", s: "bloqueado", id: "arq-aula-7" },
    { n: 8, t: "Ciclo de Processamento", d: "Entrada, processamento e saída: o caminho do dado dentro da máquina.", s: "bloqueado", id: "arq-aula-8" },
    { n: 9, t: "Eletricidade Estática e Segurança", d: "Proteção do hardware e do técnico: cuidados essenciais antes de abrir a máquina.", s: "bloqueado", id: "arq-aula-9" },
    { n: 10, t: "Ferramentas e Organização", d: "O kit do técnico e como organizar o gabinete e os parafusos na montagem.", s: "bloqueado", id: "arq-aula-10" },

    // --- 2º SEMESTRE (Manutenção Prática) ---
    /*{ n: 11, t: "Manutenção Preventiva", d: "Como evitar problemas: checklists, limpeza e troca de pasta térmica.", s: "bloqueado", id: "arq-aula-11" },
    { n: 12, t: "Limpeza Interna e Identificação", d: "Prática de desmontagem e limpeza de contatos e componentes.", s: "bloqueado", id: "arq-aula-12" },
    { n: 13, t: "Upgrade: Memória e Armazenamento", d: "Como substituir e expandir a RAM e os discos de armazenamento.", s: "bloqueado", id: "arq-aula-13" },
    { n: 14, t: "Diagnóstico de Falhas", d: "Identificando bipes da BIOS e telas azuis: o que o hardware está dizendo?", s: "bloqueado", id: "arq-aula-14" },
    { n: 15, t: "Manutenção Corretiva", d: "Resolução de problemas reais e substituição de peças defeituosas.", s: "bloqueado", id: "arq-aula-15" }*/
  ];

  return (
    <div className="w-full p-4 md:p-8 animate-in fade-in duration-500">
      
      {/* HEADER: Borda temática em Amarelo/Dourado (Energia/Hardware) */}
      <header className="mb-10 border-l-4 border-yellow-500 pl-6">
        <Title title="Hardware e Arquitetura" />
        <p className="text-zinc-400 mt-2 text-sm md:text-base max-w-2xl leading-relaxed">
          Entenda o funcionamento dos componentes físicos do computador e como a 
          arquitetura de hardware sustenta a execução de qualquer software.
        </p>
      </header>

      {/* GRID: 4 colunas em telas XL */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {aulas.map((aula) => (
          <LessonCard 
            key={aula.id}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            color="yellow" // Cor amarela para remeter a componentes elétricos/hardware
            status={aula.s} // Corrigido para pegar o status dinâmico do objeto
            onClick={() => onNavigate(aula.id)} 
          />
        ))}
      </div>

      {/* FOOTER INFORMATIVO SOBRE O CICLO DE DADOS */}
      <div className="mt-12 p-6 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl flex items-center gap-6">
        <p className="text-sm text-zinc-500 italic">
          <strong className="text-yellow-500">Conceito fundamental:</strong> O Ciclo de Processamento consiste em 
          <b> Entrada</b> (Teclado/Mouse), <b>Processamento</b> (CPU), <b>Armazenamento</b> (RAM/SSD) e <b>Saída</b> (Monitor).
        </p>
      </div>

      
    </div>
  );
}