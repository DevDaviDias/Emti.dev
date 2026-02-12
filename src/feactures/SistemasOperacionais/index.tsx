'use client';

import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

interface SoPageProps {
  onNavigate: (sessao: string) => void;
}

// Interface padronizada para as aulas
interface AulaSO {
  n: number;
  t: string;
  d: string;
  s: "concluido" | "pendente" | "bloqueado";
  id: string;
}

export default function SistemasOperacionaisPage({ onNavigate }: SoPageProps) {
  const aulas: AulaSO[] = [
    // Módulo: Sistemas Operacionais - 1º Bimestre
    { n: 1, t: "O que é Sistema Operacional", d: "Uma introdução ao software básico que gerencia todo o hardware e software do computador.", s: "concluido", id: "so-aula-1" },
    { n: 2, t: "Tipos de Sistemas Operacionais", d: "Análise das diferentes plataformas: Monotarefa vs Multitarefa, Monousuário vs Multiusuário.", s: "pendente", id: "so-aula-2" },
    { n: 3, t: "O Ecossistema Windows", d: "História, versões e funcionamento do sistema operacional mais utilizado no mundo.", s: "bloqueado", id: "so-aula-3" },
    { n: 4, t: "O Universo Linux", d: "Conceitos de Software Livre, distribuições (Kernel) e a filosofia do pinguim.", s: "bloqueado", id: "so-aula-4" },
    { n: 5, t: "Interface Gráfica (GUI)", d: "A evolução da interação humana: do texto puro às janelas, ícones e menus.", s: "bloqueado", id: "so-aula-5" },
    { n: 6, t: "Gerenciamento de Arquivos", d: "Como o SO organiza dados no disco: pastas, extensões e sistemas de arquivos.", s: "bloqueado", id: "so-aula-6" },
    { n: 7, t: "Instalação do S.O.", d: "Preparação de ambiente, BIOS/UEFI e o processo de instalação passo a passo.", s: "bloqueado", id: "so-aula-7" },
    { n: 8, t: "Particionamento de Disco", d: "Como dividir o HD/SSD para organizar dados ou instalar múltiplos sistemas.", s: "bloqueado", id: "so-aula-8" },
    { n: 9, t: "O Terminal (Linha de Comando)", d: "Interagindo com o sistema sem o mouse: conceitos de CLI (Command Line Interface).", s: "bloqueado", id: "so-aula-9" },
    { n: 10, t: "Comandos Básicos", d: "Prática de comandos fundamentais para navegação e manipulação via terminal.", s: "bloqueado", id: "so-aula-10" },
    { n: 11, t: "Gestão de Usuários", d: "Criação de contas, perfis de administrador e a importância da hierarquia.", s: "bloqueado", id: "so-aula-11" },
    { n: 12, t: "Permissões de Sistema", d: "Segurança de dados: quem pode ler, escrever ou executar arquivos e pastas.", s: "bloqueado", id: "so-aula-12" }
  ];

  return (
    <div className="w-full md:p-8 p-4 animate-in fade-in duration-500">

      {/* HEADER: Borda lateral Verde (Emerald/Green) para combinar com o Card */}
      <header className="mb-10 border-l-4 border-green-500 pl-6">
        <Title title="Sistemas Operacionais" />
        <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-2xl leading-relaxed">
          Desvende o software mais importante do computador. Aprenda como o SO gerencia
          recursos, processos e arquivos para manter tudo funcionando em harmonia.
        </p>
      </header>

      {/* Título da Seção do Bimestre */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
          Módulo 01: Fundamentos e Instalação
        </h2>
        <div className="h-[1px] bg-zinc-800 w-full" />
      </div>

      {/* GRID: 4 colunas em telas XL */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {aulas.map((aula) => (
          <LessonCard
            key={aula.id}
            numero={aula.n}
            titulo={aula.t}
            descricao={aula.d}
            color="green" 
            status={aula.s}
            onClick={() => onNavigate(aula.id)}
          />
        ))}
      </div>

      {/* INFOGRÁFICO CONCEITUAL */}
      

      <footer className="mt-12 p-6 bg-green-500/5 border border-green-500/10 rounded-2xl">
        <p className="text-xs text-zinc-500 italic">
          <strong className="text-green-500">Nota:</strong> O Sistema Operacional atua como o intermediário 
          essencial entre o hardware complexo e o usuário final. Sem ele, cada programa precisaria saber 
          exatamente como conversar com cada peça de hardware individualmente.
        </p>
      </footer>
    </div>
  );
}