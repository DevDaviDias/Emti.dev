// @/src/feactures/Logica.tsx
'use client';
import Title from "@/src/components/ui/title";
import LessonCard from "@/src/components/ui/lesson-card";

export default function Logica({ onNavigate }: { onNavigate: (s: string) => void }) {
  // Gerando 10 aulas dinamicamente para o exemplo
  const aulas = Array.from({ length: 10 }, (_, i) => ({
    n: i + 1,
    t: `Tópico Avançado ${i + 1}`,
    d: `Descrição detalhada do conteúdo da aula número ${i + 1} para aprendizado profundo.`,
    s: i < 3 ? 'concluido' : i === 3 ? 'pendente' : 'bloqueado', // Simulação de progresso
    id: `logica-aula-${i + 1}`
  }));

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <Title title="Lógica de Programação" />
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