// src/feactures/aulas/index.ts
import JavaAula1 from "@/src/feactures/modulos/java-poo/Aula1";

import AulaHtml1 from "@/src/feactures/modulos/HtmlEcss/Aula1";



export const COMPONENTES_AULA: Record<string, React.ComponentType> = {
  "java-aula-1": JavaAula1,
  "html-aula-1": AulaHtml1
  
};