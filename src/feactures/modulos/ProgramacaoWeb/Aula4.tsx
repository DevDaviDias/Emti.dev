'use client';

import { Clock, ArrowRight, Server, Monitor, ArrowLeftRight, Wifi, Globe, CheckCircle2, Camera, Upload, Lightbulb, ChevronRight, AlertCircle } from "lucide-react";

interface AulaProps {
  onNext: (slug: string) => void;
}

export default function WebAula5({ onNext }: AulaProps) {
  const videoId = "L5BlpPU_muY";

  return (
    <div className="w-full mx-auto space-y-12 bg-zinc-950 text-zinc-300 p-6 md:p-16 font-sans">

      {/* HEADER */}
      <header className="space-y-4 border-b border-zinc-800 pb-10">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Aula 05</span>
          <span className="text-zinc-500 text-sm flex items-center gap-1"><Clock size={14} /> 50 min</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
          CLIENTE <span className="text-blue-500 font-serif italic">&</span> SERVIDOR
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed italic">
          "Entender isso é entender como a internet funciona de verdade."
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
            title="Cliente e Servidor"
            allowFullScreen
          />
        </div>
      </section>

      {/* A ANALOGIA DO RESTAURANTE */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-blue-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white">A analogia que vai fazer tudo fazer sentido</h2>
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-br from-zinc-900/60 to-transparent border border-zinc-800 rounded-[2rem] space-y-6">
          <div className="flex items-center gap-3 text-orange-400">
            <Lightbulb size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Pense num restaurante</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-3xl">🧑</div>
              <h4 className="text-white font-bold">Você = Cliente</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Senta à mesa, olha o cardápio e faz o pedido. Não precisa saber cozinhar.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto text-3xl">📋</div>
              <h4 className="text-white font-bold">Garçom = HTTP</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Leva o pedido até a cozinha e traz de volta o prato pronto. É o mensageiro.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto text-3xl">👨‍🍳</div>
              <h4 className="text-white font-bold">Cozinha = Servidor</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Processa o pedido, prepara e entrega. Você nunca entra lá.</p>
            </div>
          </div>

          <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-2xl text-center">
            <p className="text-blue-300 text-sm leading-relaxed">
              Na internet é igual: <strong>você é o cliente</strong> (navegador), o <strong>HTTP é o garçom</strong> (protocolo de comunicação) e o <strong>servidor é a cozinha</strong> (computador que guarda o site).
            </p>
          </div>
        </div>
      </section>

      {/* EXPLICAÇÃO TÉCNICA */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-blue-500 rounded-full" />
          <h2 className="text-2xl font-bold text-white">O que acontece quando você acessa um site</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              n: "01",
              titulo: "Você digita o endereço",
              desc: "Você escreve 'google.com' no navegador. Esse endereço se chama URL (o nome do lugar que você quer visitar).",
              detalhe: "O navegador é o cliente — ele é quem faz o pedido.",
              cor: "border-blue-500/40 bg-blue-950/20",
              icon: <Monitor size={18} className="text-blue-400" />,
            },
            {
              n: "02",
              titulo: "O navegador busca o endereço real",
              desc: "O computador consulta um DNS (como uma lista telefônica da internet) para descobrir o número IP real do servidor do Google.",
              detalhe: "DNS = Domain Name System. Transforma 'google.com' em '142.250.79.46'.",
              cor: "border-zinc-700/40 bg-zinc-900/30",
              icon: <Globe size={18} className="text-zinc-400" />,
            },
            {
              n: "03",
              titulo: "O pedido chega ao servidor",
              desc: "O navegador envia uma mensagem (chamada de requisição HTTP) dizendo: 'Ei servidor, me manda a página inicial do Google!'",
              detalhe: "Esse 'pedido' viaja pela internet em milissegundos.",
              cor: "border-zinc-700/40 bg-zinc-900/30",
              icon: <ArrowLeftRight size={18} className="text-zinc-400" />,
            },
            {
              n: "04",
              titulo: "O servidor responde",
              desc: "O servidor do Google processa o pedido e manda de volta os arquivos do site: HTML, CSS e JavaScript.",
              detalhe: "Isso se chama resposta HTTP. O servidor envia os 'ingredientes' do site.",
              cor: "border-green-500/40 bg-green-950/20",
              icon: <Server size={18} className="text-green-400" />,
            },
            {
              n: "05",
              titulo: "O navegador monta a página",
              desc: "Seu navegador recebe os arquivos e os 'monta' visualmente na sua tela — como montar um quebra-cabeça.",
              detalhe: "Isso acontece tão rápido que parece instantâneo.",
              cor: "border-blue-500/40 bg-blue-950/20",
              icon: <Monitor size={18} className="text-blue-400" />,
            },
          ].map((step) => (
            <div key={step.n} className={`flex items-start gap-5 p-6 rounded-2xl border ${step.cor}`}>
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] font-black text-orange-400">{step.n}</div>
                {step.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-bold text-sm">{step.titulo}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{step.desc}</p>
                <div className="flex items-start gap-1 pt-1">
                  <AlertCircle size={11} className="text-zinc-600 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-600 text-[11px] leading-relaxed italic">{step.detalhe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTE vs SERVIDOR */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 border border-blue-500/20 p-8 rounded-[2rem] space-y-4">
          <div className="flex items-center gap-3 text-blue-400 font-black text-xl">
            <Monitor size={28} /> CLIENTE
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            É quem <strong className="text-white">solicita</strong> as informações. Na web, o cliente é o seu <strong className="text-white">navegador</strong> (Chrome, Firefox, Safari). Ele faz o pedido e exibe o resultado.
          </p>
          <div className="space-y-2 pt-2">
            <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest">Exemplos de cliente</p>
            {["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Safari (iPhone/Mac)"].map((ex) => (
              <div key={ex} className="flex items-center gap-2 text-zinc-500 text-xs">
                <ChevronRight size={10} className="text-blue-500" />{ex}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 border border-green-500/20 p-8 rounded-[2rem] space-y-4">
          <div className="flex items-center gap-3 text-green-400 font-black text-xl">
            <Server size={28} /> SERVIDOR
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            É quem <strong className="text-white">responde</strong> os pedidos. É um computador ligado 24 horas por dia, guardando os arquivos do site e esperando alguém pedir.
          </p>
          <div className="space-y-2 pt-2">
            <p className="text-green-400 font-bold text-[10px] uppercase tracking-widest">O que o servidor guarda</p>
            {["Arquivos HTML, CSS e JS", "Imagens e vídeos do site", "Banco de dados (usuários, posts)", "Lógica do sistema (back-end)"].map((ex) => (
              <div key={ex} className="flex items-center gap-2 text-zinc-500 text-xs">
                <ChevronRight size={10} className="text-green-500" />{ex}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATIVIDADE PRÁTICA */}
      <section className="bg-white text-black p-10 rounded-[3rem] shadow-2xl space-y-8">
        <div className="space-y-2">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Atividade Prática</span>
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mt-3">Rastreando um Pedido</h2>
          <p className="text-lg font-medium text-zinc-600 italic">"Vamos ver a conversa entre o cliente e o servidor com seus próprios olhos."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">O que fazer:</h3>
            <div className="space-y-3">
              {[
                "Abra o Google Chrome e acesse qualquer site (ex: globo.com)",
                "Pressione F12 no teclado para abrir o Inspecionar Elemento",
                "Clique na aba 'Network' (ou 'Rede') no topo",
                "Recarregue a página (F5) e observe a lista de pedidos que aparece",
                "Clique em qualquer item da lista e veja as informações de 'Request' e 'Response'",
                "No caderno, desenhe um esquema mostrando o cliente fazendo um pedido e o servidor respondendo",
                "Tire foto e envie abaixo",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</div>
                  <p className="text-zinc-700 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-2xl flex items-start gap-3">
              <Lightbulb size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-800 text-xs leading-relaxed">
                <strong>Curiosidade:</strong> Quando você carrega o Instagram, seu navegador faz centenas de pedidos ao servidor em poucos segundos — cada imagem, cada curtida, cada texto é um pedido separado!
              </p>
            </div>
          </div>

          <div className="bg-zinc-100 rounded-3xl p-10 flex flex-col items-center justify-center border-4 border-dashed border-zinc-300 gap-4 group hover:border-blue-600 transition-all">
            <Camera size={48} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
            <div className="text-center">
              <p className="font-bold text-xl">Enviar desenho</p>
              <p className="text-sm text-zinc-500">O esquema de cliente → servidor no caderno</p>
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
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Fim da Aula 05</p>
          <p className="text-white font-medium">Agora você sabe como a internet realmente funciona. 🎉</p>
        </div>
        <button
          onClick={() => onNext("web-aula-6")}
          className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-blue-500/20"
        >
          PRÓXIMA AULA <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </footer>
    </div>
  );
}