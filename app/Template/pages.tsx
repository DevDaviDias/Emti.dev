'use client';
import { useState } from 'react';
import HamburgerMenu from "@/src/layout/HamburgerMenu";
import LessonLayout from "@/src/components/ui/lesson-layout";

// Imports das Matérias (Listas de Cards)
import HtmlCss from "@/src/feactures/HtmleCss";
import Arquitetura from "@/src/feactures/Arquitetura";
import ProgramacaoWeb from "@/src/feactures/ProgramacaoWeb";
import Logica from "@/src/feactures/Logica";
import SistemasOperacionais from "@/src/feactures/SistemasOperacionais";
import Javapoo from "@/src/feactures/Javapoo";

// Import do nosso dicionário de aulas
import { COMPONENTES_AULA } from "@/src/feactures/aulas";

export default function Template({ children }: { children: React.ReactNode }) {
  const [sessao, setSessao] = useState("home");

  const voltarPara: Record<string, { nome: string, slug: string }> = {
    'html':   { nome: 'HTML & CSS', slug: 'html-css' },
    'hw':     { nome: 'Hardware',    slug: 'hardware' },
    'logica': { nome: 'Lógica',      slug: 'logica' },
    'java':   { nome: 'Java POO',    slug: 'java' },
    'web':    { nome: 'Web',         slug: 'web' },
    'so':     { nome: 'Sistemas Op.', slug: 'so' },
  };

  const renderAula = () => {
    // Se a sessão atual não for uma aula cadastrada, não renderiza nada aqui
    const ConteudoAula = COMPONENTES_AULA[sessao];
    if (!ConteudoAula) return null;

    const partes = sessao.split('-');
    const prefixo = partes[0]; 
    const numero = partes[partes.length - 1];
    const config = voltarPara[prefixo];

    return (
      <LessonLayout 
        titulo={`Aula ${numero} - ${config?.nome || "Conteúdo"}`} 
        onBack={() => setSessao(config?.slug || 'home')}
      >
        <div className="p-4 md:p-8 bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] backdrop-blur-sm text-white">
          {/* Renderiza o componente específico daquela aula */}
          <ConteudoAula />
        </div>
      </LessonLayout>
    );
  };

  return (
    <HamburgerMenu onChangeSessao={(s) => setSessao(s)} sessaoAtiva={sessao}>
      
      {/* 1. SEÇÕES DE LISTAGEM (MATÉRIAS) */}
      {sessao === "html-css" && <HtmlCss onNavigate={setSessao} />}
      {sessao === "hardware" && <Arquitetura onNavigate={setSessao} />}
      {sessao === "web"      && <ProgramacaoWeb onNavigate={setSessao} />}
      {sessao === "logica"   && <Logica onNavigate={setSessao} />}
      {sessao === "so"       && <SistemasOperacionais onNavigate={setSessao} />}
      {sessao === "java"     && <Javapoo onNavigate={setSessao} />}

      {/* 2. CONTEÚDO ESPECÍFICO DA AULA */}
      {renderAula()}

      {/* 3. HOME */}
      {sessao === "home" && children}
    </HamburgerMenu>
  );
}