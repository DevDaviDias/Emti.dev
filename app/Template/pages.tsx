'use client';
import { useState } from 'react';
import HamburgerMenu from "@/src/layout/HamburgerMenu";
import LessonLayout from "@/src/components/ui/lesson-layout";

// Imports das Matérias
import HtmlCss from "@/src/feactures/HtmleCss";
import Arquitetura from "@/src/feactures/Arquitetura";
import ProgramacaoWeb from "@/src/feactures/ProgramacaoWeb";
import Logica from "@/src/feactures/Logica";
import SistemasOperacionais from "@/src/feactures/SistemasOperacionais";
import Javapoo from "@/src/feactures/Javapoo";

export default function Template({ children }: { children: React.ReactNode }) {
  const [sessao, setSessao] = useState("logica");

  // Mapeamento de Títulos para o Botão Voltar (IDs -> Slugs das matérias)
  const voltarPara: Record<string, { nome: string, slug: string }> = {
    'html': { nome: 'HTML & CSS', slug: 'html-css' },
    'hw': { nome: 'Hardware', slug: 'hardware' },
    'logica': { nome: 'Lógica', slug: 'logica' },
    'java': { nome: 'Java POO', slug: 'java' },
    'web': { nome: 'Web', slug: 'web' },
    'so': { nome: 'Sistemas Op.', slug: 'so' },
  };

  // Função para identificar se a sessão atual é uma aula
  const renderAula = () => {
    if (!sessao.includes('-aula-')) return null;

    const [prefixo, , numero] = sessao.split('-');
    const config = voltarPara[prefixo];

    return (
      <LessonLayout 
        titulo={`Aula ${numero} - ${config.nome}`} 
        onBack={() => setSessao(config.slug)}
      >
        <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl backdrop-blur-sm">
          <div className="aspect-video bg-zinc-950 rounded-xl mb-6 flex items-center justify-center border border-zinc-800 shadow-2xl">
            <p className="text-zinc-600 font-medium">Videoaula {numero} indisponível no momento</p>
          </div>
          <h2 className="text-xl font-semibold mb-4 text-blue-400">Objetivos da aula:</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>Introdução aos conceitos fundamentais do módulo {numero}</li>
            <li>Prática guiada e exemplos de aplicação</li>
            <li>Material de apoio para download</li>
          </ul>
        </div>
      </LessonLayout>
    );
  };

  return (
    <HamburgerMenu onChangeSessao={(s) => setSessao(s)} sessaoAtiva={sessao}>
      
      {/* PÁGINAS DE MATÉRIAS (Cards das 10 aulas) */}
      {sessao === "html-css" && <HtmlCss onNavigate={setSessao} />}
      {sessao === "hardware" && <Arquitetura onNavigate={setSessao} />}
      {sessao === "web" && <ProgramacaoWeb onNavigate={setSessao} />}
      {sessao === "logica" && <Logica onNavigate={setSessao} />}
      {sessao === "so" && <SistemasOperacionais onNavigate={setSessao} />}
      {sessao === "java" && <Javapoo onNavigate={setSessao} />}

      {/* RENDERIZAÇÃO AUTOMÁTICA DE QUALQUER AULA */}
      {renderAula()}

      {/* HOME */}
      {sessao === "home" && children}

    </HamburgerMenu>
  );
}