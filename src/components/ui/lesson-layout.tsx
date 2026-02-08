'use client';

interface LessonLayoutProps {
  titulo: string;
  onBack: () => void;
  children: React.ReactNode;
}

export default function LessonLayout({ titulo, onBack, children }: LessonLayoutProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <button 
        onClick={onBack} 
        className="flex items-center gap-2 text-zinc-500 hover:text-blue-400 transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> 
        Voltar para a matéria
      </button>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">{titulo}</h1>
        <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full" />
      </header>

      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
}