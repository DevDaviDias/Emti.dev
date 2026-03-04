// src/feactures/aulas/index.ts
import React from "react";

import JavaAula1 from "@/src/feactures/modulos/java-poo/Aula1";
import JavaAula2 from "@/src/feactures/modulos/java-poo/Aula2";
import JavaAula4 from "@/src/feactures/modulos/java-poo/Aula4";
import JavaAula5 from "@/src/feactures/modulos/java-poo/Aula5";


import AulaHtml1 from "@/src/feactures/modulos/HtmlEcss/Aula1";
import AulaSo1 from "@/src/feactures/modulos/So/Aula1";
import AulaSo6 from "@/src/feactures/modulos/So/Aula6"; 


import AulaProgramacaoWeb1 from "@/src/feactures/modulos/ProgramacaoWeb/Aula1";
import AulaProgramacaoWeb2 from "@/src/feactures/modulos/ProgramacaoWeb/Aula2";
import AulaProgramacaoWeb3 from "@/src/feactures/modulos/ProgramacaoWeb/Aula3";
import AulaProgramacaoWeb4 from "@/src/feactures/modulos/ProgramacaoWeb/Aula4";
import AulaProgramacaoWeb5 from "@/src/feactures/modulos/ProgramacaoWeb/Aula5";



// ADICIONE O "export" AQUI EMBAIXO:
export interface AulaProps {
  onNext?: (slug: string) => void; // O '?' torna opcional
  onBack?: () => void;   
}

export const COMPONENTES_AULA: Record<string, React.ComponentType<AulaProps>> = {
  "java-aula-1": JavaAula1 as React.ComponentType<AulaProps>,
  "java-aula-2": JavaAula2 as React.ComponentType<AulaProps>,
  "java-aula-4": JavaAula4 as React.ComponentType<AulaProps>,
  "java-aula-5": JavaAula5 as React.ComponentType<AulaProps>,

  "html-aula-1": AulaHtml1 as React.ComponentType<AulaProps>,

  "web-aula-1": AulaProgramacaoWeb1 as React.ComponentType<AulaProps>,
  "web-aula-2": AulaProgramacaoWeb2 as React.ComponentType<AulaProps>,
  "web-aula-3": AulaProgramacaoWeb3 as React.ComponentType<AulaProps>,
  "web-aula-4": AulaProgramacaoWeb4 as React.ComponentType<AulaProps>,
  "web-aula-5": AulaProgramacaoWeb5 as React.ComponentType<AulaProps>,
  
  "so-aula-1": AulaSo1 as React.ComponentType<AulaProps>,
  "so-aula-6": AulaSo6 as React.ComponentType<AulaProps>,
};