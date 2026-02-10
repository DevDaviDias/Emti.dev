'use client';

import { CheckCircle2, Lock, PlayCircle } from "lucide-react";

interface LessonProps {
  numero: number;
  titulo: string;
  descricao: string;
  status: 'concluido' | 'pendente' | 'bloqueado';
  onClick: () => void;
  // Aqui definimos quais cores o sistema aceita
  color?: 'orange' | 'blue' | 'green' | 'yellow' | 'purple' | 'red';
}

export default function LessonCard({ numero, titulo, descricao, status, onClick, color = 'blue' }: LessonProps) {
  
  // Mapeamento de cores baseado na matéria
  const themes = {
    orange: { border: "group-hover:border-orange-500/50", text: "text-orange-500", bg: "bg-orange-500/10", shadow: "hover:shadow-orange-500/10", glow: "from-orange-500/[0.05]", title: "group-hover:text-orange-400" },
    blue:   { border: "group-hover:border-blue-500/50",   text: "text-blue-500",   bg: "bg-blue-500/10",   shadow: "hover:shadow-blue-500/10",   glow: "from-blue-500/[0.05]",   title: "group-hover:text-blue-400" },
    green:  { border: "group-hover:border-green-500/50",  text: "text-green-500",  bg: "bg-green-500/10",  shadow: "hover:shadow-green-500/10",  glow: "from-green-500/[0.05]",  title: "group-hover:text-green-400" },
    yellow: { border: "group-hover:border-yellow-500/50", text: "text-yellow-500", bg: "bg-yellow-500/10", shadow: "hover:shadow-yellow-500/10", glow: "from-yellow-500/[0.05]", title: "group-hover:text-yellow-400" },
    purple: { border: "group-hover:border-purple-500/50", text: "text-purple-500", bg: "bg-purple-500/10", shadow: "hover:shadow-purple-500/10", glow: "from-purple-500/[0.05]", title: "group-hover:text-purple-400" },
    red:    { border: "group-hover:border-red-500/50",    text: "text-red-500",    bg: "bg-red-500/10",    shadow: "hover:shadow-red-500/10",    glow: "from-red-500/[0.05]",    title: "group-hover:text-red-400" },
  };

  const theme = themes[color];

  // Configuração de estilos por status (misturando com a cor do tema)
  const styles = {
    concluido: {
      border: `border-zinc-800 ${theme.border}`,
      bg: "bg-zinc-900/20",
      icon: <CheckCircle2 className={theme.text} size={18} />,
      badge: `${theme.bg} ${theme.text}`
    },
    pendente: {
      border: `border-zinc-800 ${theme.border}`,
      bg: "bg-zinc-900/20",
      icon: <PlayCircle className={theme.text} size={18} />,
      badge: "bg-zinc-800 text-zinc-400"
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
      className={`group relative p-6 border rounded-2xl transition-all duration-300 text-left w-full backdrop-blur-sm 
        ${current.border} ${current.bg} 
        ${status !== 'bloqueado' ? `hover:-translate-y-1 hover:shadow-2xl ${theme.shadow}` : 'cursor-not-allowed opacity-60'}`}
    >
      <div className="flex justify-between items-start mb-6">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${current.badge}`}>
          Aula {numero}
        </span>
        {current.icon}
      </div>

      <h3 className={`text-lg font-bold text-zinc-100 mb-2 transition-colors ${status !== 'bloqueado' ? theme.title : ''}`}>
        {titulo}
      </h3>
      
      <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed italic">
        {descricao}
      </p>

      {status !== 'bloqueado' && (
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      )}
    </button>
  );
}