// src/feactures/aulas/index.ts
import React from "react";

import JavaAula1 from "@/src/feactures/modulos/java-poo/Aula1";
import JavaAula2 from "@/src/feactures/modulos/java-poo/Aula2";
import AulaHtml1 from "@/src/feactures/modulos/HtmlEcss/Aula1";
import AulaSo1 from "@/src/feactures/modulos/So/Aula1";
import AulaProgramacaoWeb1 from "@/src/feactures/modulos/ProgramacaoWeb/Aula1";
import AulaProgramacaoWeb2 from "@/src/feactures/modulos/ProgramacaoWeb/Aula2";

// ADICIONE O "export" AQUI EMBAIXO:
export interface AulaProps {
  onNext?: (slug: string) => void; // O '?' torna opcional
  onBack?: () => void;   
}

export const COMPONENTES_AULA: Record<string, React.ComponentType<AulaProps>> = {
  "java-aula-1": JavaAula1 as React.ComponentType<AulaProps>,
  "java-aula-2": JavaAula2 as React.ComponentType<AulaProps>,

  "html-aula-1": AulaHtml1 as React.ComponentType<AulaProps>,

  "web-aula-1": AulaProgramacaoWeb1 as React.ComponentType<AulaProps>,
  "web-aula-2": AulaProgramacaoWeb2 as React.ComponentType<AulaProps>,
  
  "so-aula-1": AulaSo1 as React.ComponentType<AulaProps>,
};