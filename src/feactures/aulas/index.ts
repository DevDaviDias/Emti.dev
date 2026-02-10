// src/feactures/aulas/index.ts
import JavaAula1 from "@/src/feactures/modulos/java-poo/Aula1";
import AulaHtml1 from "@/src/feactures/modulos/HtmlEcss/Aula1";

import AulaSo1 from "@/src/feactures/modulos/So/Aula1";

import AulaProgramacaoWeb1 from "@/src/feactures/modulos/ProgramacaoWeb/Aula1";
import AulaProgramacaoWeb2 from "@/src/feactures/modulos/ProgramacaoWeb/Aula2";

export const COMPONENTES_AULA: Record<string, React.ComponentType> = {
  "java-aula-1": JavaAula1,

  "html-aula-1": AulaHtml1,

  "web-aula-1": AulaProgramacaoWeb1,
  "web-aula-2": AulaProgramacaoWeb2,
  
   "so-aula-1": AulaSo1,
};