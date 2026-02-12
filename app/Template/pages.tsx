'use client';
import { useState } from 'react';
import HamburgerMenu from "@/src/layout/HamburgerMenu";
import LessonLayout from "@/src/components/ui/lesson-layout";
import HtmlCss from "@/src/feactures/HtmleCss";
import Arquitetura from "@/src/feactures/Arquitetura";
import ProgramacaoWeb from "@/src/feactures/ProgramacaoWeb";
import Logica from "@/src/feactures/Logica/Logica";
import SistemasOperacionais from "@/src/feactures/SistemasOperacionais";
import Javapoo from "@/src/feactures/Javapoo";

// Import do dicionário de aulas
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
    const ConteudoAula = COMPONENTES_AULA[sessao];
    if (!ConteudoAula) return null;

    const partes = sessao.split('-');
    const prefixo = partes[0]; 
    const numero = partes[partes.length - 1];
    const config = voltarPara[prefixo];

    // Criamos uma função simples para avançar para a próxima aula
    // Ex: se sessao é "java-1", vira "java-2"
    const handleProximaAula = () => {
      const proximoNumero = parseInt(numero) + 1;
      const novaSessao = `${prefixo}-${proximoNumero}`;
      
      // Só navega se a próxima aula existir no dicionário
      if (COMPONENTES_AULA[novaSessao]) {
        setSessao(novaSessao);
      } else {
        // Se não houver próxima, volta para a listagem da matéria
        setSessao(config?.slug || 'home');
      }
    };

    return (
      <LessonLayout 
        titulo={`Aula ${numero} - ${config?.nome || "Conteúdo"}`} 
        onBack={() => setSessao(config?.slug || 'home')}
      >
        <div className="w-full flex flex-col items-start">
          <div className="p-4 w-full"> 
            {/* CORREÇÃO AQUI: Passando as props obrigatórias para o componente */}
            <ConteudoAula 
              onNext={handleProximaAula} 
              onBack={() => setSessao(config?.slug || 'home')} 
            />
          </div>
        </div>
      </LessonLayout>
    );
  };

  return (
    <HamburgerMenu onChangeSessao={(s) => setSessao(s)} sessaoAtiva={sessao}>
      
      {/* Garantimos que o container principal tenha w-full e flex-1 
          para empurrar o conteúdo contra as bordas.
      */}
      <main className="flex-1 w-full flex flex-col items-center justify-start">
        
        <div className="w-full ">
          {sessao === "html-css" && <HtmlCss onNavigate={setSessao} />}
          {sessao === "hardware" && <Arquitetura onNavigate={setSessao} />}
          {sessao === "web"      && <ProgramacaoWeb onNavigate={setSessao} />}
          {sessao === "logica"   && <Logica onNavigate={setSessao} />}
          {sessao === "so"       && <SistemasOperacionais onNavigate={setSessao} />}
          {sessao === "java"     && <Javapoo onNavigate={setSessao} />}
        </div>

        {renderAula()}

        {sessao === "home" && (
          <div className="w-full">
            {children}
          </div>
        )}
      </main>
    </HamburgerMenu>
  );
}