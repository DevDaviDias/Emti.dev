'use client';

import { Clock, ArrowRight, Globe, Zap, Smartphone, CheckCircle2, ExternalLink, Upload, Camera, Wifi, WifiOff } from "lucide-react";

interface AulaProps {
  onNext: (slug: string) => void;
}

export default function WebAula3({ onNext }: AulaProps) {
  const videoId = "kMBFDGl3-mk";

  return (
    <div className="w-full mx-auto space-y-12 bg-zinc-950 text-zinc-300 p-6 md:p-16 font-sans">

      {/* HEADER */}
      <header className="space-y-4 border-b border-zinc-800 pb-10">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Aula 03</span>
          <span className="text-zinc-500 text-sm flex items-center gap-1"><Clock size={14} /> 50 min</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
          O QUE É UM <span className="text-blue-500 font-serif italic">SITE?</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed italic">
          "Nem todo site é igual — e entender a diferença muda tudo."
        </p>
      </header>

      {/* VÍDEO */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-blue-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white">Assistir primeiro 🎥</h2>
        </div>
        <div className="aspect-video bg-black rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl max-w-4xl">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Sites estáticos, dinâmicos e PWA"
            allowFullScreen
          />
        </div>
      </section>

      {/* CONTEÚDO: OS 3 TIPOS */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-blue-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white">Os 3 tipos de site que existem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Estático */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] space-y-4 hover:border-blue-500 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <WifiOff size={18} className="text-blue-400" />
              </div>
              <h3 className="text-white font-black text-lg">Estático</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              É como um <strong className="text-white">folder de papel</strong>. O conteúdo não muda. Todo mundo que abre vê a mesma coisa. Feito só com HTML e CSS.
            </p>
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-xs text-zinc-500 space-y-1">
              <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-2">Exemplos reais</p>
              <p>📄 Página de currículo online</p>
              <p>📄 Site de portfólio pessoal</p>
              <p>📄 Convite de casamento digital</p>
            </div>
          </div>

          {/* Dinâmico */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] space-y-4 hover:border-green-500 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <Wifi size={18} className="text-green-400" />
              </div>
              <h3 className="text-white font-black text-lg">Dinâmico</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              É como um <strong className="text-white">jornal que se atualiza sozinho</strong>. O conteúdo muda conforme quem está acessando. Usa banco de dados por trás.
            </p>
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-xs text-zinc-500 space-y-1">
              <p className="text-green-400 font-bold text-[10px] uppercase tracking-widest mb-2">Exemplos reais</p>
              <p>🔄 Instagram (feed diferente pra cada um)</p>
              <p>🔄 Mercado Livre (produtos mudam)</p>
              <p>🔄 Qualquer site com login</p>
            </div>
          </div>

          {/* PWA */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] space-y-4 hover:border-purple-500 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Smartphone size={18} className="text-purple-400" />
              </div>
              <h3 className="text-white font-black text-lg">PWA</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              É um site que <strong className="text-white">finge ser um aplicativo</strong>. Você instala no celular pela tela inicial, funciona offline e manda notificações — mas é feito com tecnologia web.
            </p>
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-xs text-zinc-500 space-y-1">
              <p className="text-purple-400 font-bold text-[10px] uppercase tracking-widest mb-2">Exemplos reais</p>
              <p>📱 Twitter Lite</p>
              <p>📱 Uber (versão web)</p>
              <p>📱 Pinterest</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO VISUAL */}
      <section className="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-8 md:p-10 space-y-6">
        <h3 className="text-white font-bold text-xl">Resumo rápido — as diferenças</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-3 pr-6 text-zinc-500 font-bold text-xs uppercase tracking-widest">Característica</th>
                <th className="text-center py-3 px-4 text-blue-400 font-bold text-xs uppercase tracking-widest">Estático</th>
                <th className="text-center py-3 px-4 text-green-400 font-bold text-xs uppercase tracking-widest">Dinâmico</th>
                <th className="text-center py-3 px-4 text-purple-400 font-bold text-xs uppercase tracking-widest">PWA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {[
                { item: "Conteúdo muda sozinho", est: "❌", din: "✅", pwa: "✅" },
                { item: "Precisa de banco de dados", est: "❌", din: "✅", pwa: "Às vezes" },
                { item: "Funciona offline", est: "❌", din: "❌", pwa: "✅" },
                { item: "Instala no celular", est: "❌", din: "❌", pwa: "✅" },
                { item: "Mais fácil de criar", est: "✅", din: "❌", pwa: "❌" },
              ].map((row) => (
                <tr key={row.item}>
                  <td className="py-3 pr-6 text-zinc-400 text-xs">{row.item}</td>
                  <td className="py-3 px-4 text-center text-xs">{row.est}</td>
                  <td className="py-3 px-4 text-center text-xs">{row.din}</td>
                  <td className="py-3 px-4 text-center text-xs text-zinc-400">{row.pwa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ATIVIDADE PRÁTICA */}
      <section className="bg-white text-black p-10 rounded-[3rem] shadow-2xl space-y-8">
        <div className="space-y-2">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Atividade Prática</span>
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mt-3">Caçada de Sites</h2>
          <p className="text-lg font-medium text-zinc-600 italic">"Aprende muito mais quem observa do que quem só lê."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">O que fazer:</h3>
            <div className="space-y-3">
              {[
                "Abra 3 sites diferentes no celular ou computador",
                "Para cada site, tente descobrir: ele é estático, dinâmico ou PWA?",
                "Dica: tem login? Provavelmente dinâmico. Pode instalar? PWA. Só leitura? Estático.",
                "Anote no caderno o nome do site e o tipo que você acha que ele é",
                "Tire foto das suas anotações e envie abaixo",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</div>
                  <p className="text-zinc-700 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-100 rounded-3xl p-10 flex flex-col items-center justify-center border-4 border-dashed border-zinc-300 gap-4 group hover:border-blue-600 transition-all">
            <Camera size={48} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
            <div className="text-center">
              <p className="font-bold text-xl">Enviar anotações</p>
              <p className="text-sm text-zinc-500">Foto do caderno com os 3 sites identificados</p>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <Upload size={18} /> ENVIAR FOTO
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-zinc-900">
        <div className="text-center md:text-left">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Fim da Aula 03</p>
          <p className="text-white font-medium">Na próxima, você vai ver sites que substituem programas inteiros!</p>
        </div>
        <button
          onClick={() => onNext("web-aula-4")}
          className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-blue-500/20"
        >
          PRÓXIMA AULA: SISTEMAS WEB <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </footer>
    </div>
  );
}