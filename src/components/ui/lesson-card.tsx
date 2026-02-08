'use client';

import { CheckCircle2, Lock, PlayCircle } from "lucide-react";

interface LessonProps {
  numero: number;
  titulo: string;
  descricao: string;
  status: 'concluido' | 'pendente' | 'bloqueado';
  onClick: () => void; // A função que vai trocar a aula no Template
}

export default function LessonCard({ numero, titulo, descricao, status, onClick }: LessonProps) {
  
  // Configuração de estilos por status
  const styles = {
    concluido: {
      border: "border-green-500/20 hover:border-green-500/40",
      bg: "bg-green-500/[0.02]",
      icon: <CheckCircle2 className="text-green-500" size={18} />,
      badge: "bg-green-500/10 text-green-500"
    },
    pendente: {
      border: "border-blue-500/20 hover:border-blue-500/40",
      bg: "bg-blue-500/[0.02]",
      icon: <PlayCircle className="text-blue-500" size={18} />,
      badge: "bg-blue-500/10 text-blue-500"
    },
    bloqueado: {
      border: "border-zinc-800/50",
      bg: "bg-zinc-900/10",
      icon: <Lock className="text-zinc-600" size={18} />,
      badge: "bg-zinc-800 text-zinc-500"
    }
  };

  const current = styles[status];

  return (
    <button 
      disabled={status === 'bloqueado'}
      onClick={onClick}
      className={`group relative p-6 border rounded-2xl transition-all duration-300 text-left w-full backdrop-blur-sm ${current.border} ${current.bg} ${status !== 'bloqueado' ? 'hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5' : 'cursor-not-allowed opacity-60'}`}
    >
      <div className="flex justify-between items-start mb-6">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${current.badge}`}>
          Aula {numero}
        </span>
        {current.icon}
      </div>

      <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors">
        {titulo}
      </h3>
      
      <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
        {descricao}
      </p>

      {/* Detalhe visual de brilho no hover (apenas se não estiver bloqueado) */}
      {status !== 'bloqueado' && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
}