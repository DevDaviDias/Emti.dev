'use client';

import { ArrowRight, BookOpen, ExternalLink, FolderOpen, FileText, CheckCircle2, AlertCircle, FolderTree, HardDrive, ArrowDownToLine } from "lucide-react";

interface AulaProps {
  onNext: (slug: string) => void;
}

export default function AulaGerenciamentoArquivos({ onNext }: AulaProps) {
  const videoId = "4_TReRB1WTg";
  const proximaAulaSlug = "so-aula-7";

  const estruturaOrganizada = [
    {
      pasta: "📁 videos/",
      filhos: [
        "854541-hd_1280_720_25fps",
        "854541-hd_1280_720_60fps",
        "1722882-uhd_3840_2160_25fps",
        "5615176-uhd_4096_2160_30fps",
        "5871756-hd_1080_1920_30fps",
        "6853337-uhd_2160_4096_25fps",
        "6976215-uhd_2160_2880_25fps",
        "7956444-uhd_2160_3840_24fps",
        "11922053_2160_3840_24fps",
      ],
    },
    {
      pasta: "📁 imagens/",
      filhos: [
        "pexels-danfigliuolo-19428746",
        "pexels-eberhardgross-2088205",
        "pexels-flowerstofox-3333538",
        "pexels-javierdiazg-89625",
        "pexels-joshsorenson-1714208",
        "pexels-pixabay-261986",
        "pexels-pixabay-267507",
        "pexels-shottrotter-574919",
        "pexels-vladalex94-1402787",
        "pexels-zachtheshoota-2568539",
        "_image",
        "i598772",
        "images (1)",
        "images",
        "maca-capa-001",
      ],
    },
    {
      pasta: "📁 documentos/",
      filhos: [
        "14 Hábitos de desenvolvedores altamente produtivos (Zeno Rocha) (Z-Library)",
        "Código Limpo PDF",
        "codigo-limpo-completo-pt_text",
        "Domain Driven Design Rapido - Autor (Eric Evans)",
        "GuiaLeitura_PequenoPrincipe",
        "O relógio que perdeu a hora (1)",
        "Relatório Simples",
        "Texto Aleatório",
        "Texto Estilo Lorem Ipsum",
        "Texto Narrativo",
        "Texto Técnico",
        "Lista de Tarefas.txt",
      ],
    },
    {
      pasta: "📁 programas/",
      filhos: ["programa1", "programa2", "programa3", "programa4", "FATXplorerBeta64"],
    },
    {
      pasta: "📁 capturas/",
      filhos: [
        "Captura de tela 2026-02-08 173652",
        "Captura de tela 2026-02-10 123053",
        "Captura de tela 2026-02-10 123404",
        "Captura de tela 2026-02-10 124445",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-16 animate-in fade-in duration-1000 bg-zinc-950 p-6 md:p-16">

      {/* 1. HEADER */}
      <header className="max-w-4xl space-y-6 text-left">
        <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="text-orange-500">Módulo 01</span>
          <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span className="text-zinc-500">Sistemas Operacionais · Aula 06</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          GERENCIAMENTO<br />
          <span className="text-orange-600 uppercase text-4xl md:text-6xl italic font-light">de Arquivos</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Pastas, extensões, sistemas de arquivos — entenda como qualquer sistema operacional organiza seus dados e nunca perca um arquivo de novo.
        </p>
      </header>

      {/* PRÉ-REQUISITO */}
      <div className="max-w-5xl flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/40 border border-yellow-500/20">
        <span className="text-yellow-400 text-lg flex-shrink-0">⚠️</span>
        <div className="space-y-1">
          <p className="text-yellow-400 font-black text-xs uppercase tracking-widest">Pré-requisito — Antes de começar</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Para extrair o arquivo ZIP da atividade, você vai precisar do <strong className="text-zinc-200">WinRAR</strong> instalado no computador.
            Ele é gratuito e leva menos de 1 minuto para instalar.
          </p>
          <a
            href="https://www.win-rar.com/download.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold text-xs transition-colors group mt-1"
          >
            Baixar WinRAR gratuitamente → win-rar.com
          </a>
        </div>
      </div>

      {/* 2. PLAYER DE VÍDEO */}
      <section className="w-full max-w-5xl group">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 shadow-2xl transition-all duration-700 group-hover:shadow-orange-500/5 border border-zinc-900">
          <iframe
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="Gerenciamento de Arquivos"
            allowFullScreen
          />
        </div>
      </section>

      {/* 3. CONTEÚDO PRINCIPAL */}
      <article className="max-w-5xl space-y-12">

        {/* Conceito central */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-y border-zinc-900 py-12">
          <div className="space-y-4">
            <h3 className="text-orange-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <FolderTree size={16} /> Organização é Tudo
            </h3>
            <p className="text-zinc-300 text-2xl font-light leading-snug">
              "Um arquivo no lugar certo vale mais do que dez espalhados pela área de trabalho."
            </p>
          </div>
          <div className="p-8 bg-zinc-900/20 rounded-3xl border border-zinc-900 text-zinc-500 text-sm leading-relaxed">
            Todo sistema operacional organiza dados em uma estrutura de <strong className="text-zinc-300">pastas e subpastas</strong>. Entender essa hierarquia — e adotar boas práticas de nomenclatura — é uma habilidade essencial para qualquer profissional de TI.
          </div>
        </div>

        {/* Cards de conceitos */}
        <div className="space-y-8">
          <h2 className="text-white font-bold text-xl tracking-tight">Conceitos Essenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 space-y-2">
              <FileText className="text-orange-500" size={20} />
              <h4 className="text-zinc-200 font-bold text-sm">Extensões de Arquivo</h4>
              <p className="text-zinc-500 text-xs">
                .pdf, .mp4, .jpg, .exe, .txt — a extensão diz ao sistema qual programa deve abrir o arquivo e como tratá-lo.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-800/30 bg-zinc-900/10 space-y-2">
              <FolderOpen className="text-orange-500" size={20} />
              <h4 className="text-zinc-200 font-bold text-sm">Estrutura de Pastas</h4>
              <p className="text-zinc-500 text-xs">
                Organizar arquivos por categoria, projeto ou data é uma habilidade profissional que economiza horas de trabalho.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-800/30 bg-zinc-900/10 space-y-2">
              <HardDrive className="text-orange-500" size={20} />
              <h4 className="text-zinc-200 font-bold text-sm">Sistemas de Arquivos</h4>
              <p className="text-zinc-500 text-xs">
                NTFS (Windows), ext4 (Linux), FAT32 (pen drives) — cada formato tem regras próprias de como os dados são gravados no disco.
              </p>
            </div>
          </div>
        </div>

        {/* Leitura complementar */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-900 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <BookOpen size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Leitura Complementar</span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl text-white font-bold">Como os Sistemas de Arquivos Funcionam</h3>
            <p className="text-zinc-400 leading-relaxed max-w-3xl">
              Por baixo de toda pasta e arquivo existe um sistema de arquivos controlando onde cada byte está gravado no disco. Entender isso ajuda a tomar decisões melhores sobre formatação, compatibilidade entre sistemas e recuperação de dados.
            </p>
            <a
              href="https://www.techtudo.com.br/noticias/2012/06/o-que-e-sistema-de-arquivos.ghtml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors group"
            >
              O que é sistema de arquivos? — TechTudo
              <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* SEÇÃO DA ATIVIDADE PRÁTICA */}
        <div className="rounded-[2.5rem] border border-orange-500/20 bg-gradient-to-br from-orange-950/20 to-zinc-950 overflow-hidden">

          {/* Header da atividade */}
          <div className="px-8 md:px-12 pt-10 pb-8 border-b border-orange-500/10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-orange-500">
                <AlertCircle size={16} />
                <span className="font-black uppercase text-xs tracking-widest">Atividade Prática</span>
              </div>
              <h2 className="text-white text-3xl font-black tracking-tight">O Arquivo Bagunçado</h2>
              <p className="text-zinc-500 text-sm max-w-lg leading-relaxed">
                Você recebeu um ZIP com 45 arquivos de tipos variados, todos misturados sem nenhuma organização. Sua missão: extrair e organizar tudo nas pastas corretas.
              </p>
            </div>

            <a
              href="https://www.mediafire.com/file/5a219mhdltu80cj/atividade_gerenciamento_arquivos.zip.zip/file"
              className="group flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-orange-500 transition-all duration-300 shadow-xl shadow-orange-500/20"
            >
              <ArrowDownToLine size={16} className="group-hover:translate-y-1 transition-transform" />
              Baixar arquivo .zip
            </a>
          </div>

          {/* Corpo da atividade */}
          <div className="px-8 md:px-12 py-10 space-y-10">

            {/* Passo a passo */}
            <div className="space-y-4">
              <h3 className="text-zinc-300 font-bold text-sm uppercase tracking-widest">Como Fazer</h3>
              <div className="space-y-3">
                {[
                  { n: "01", t: "Baixe o arquivo ZIP", d: "Clique no botão acima para baixar o arquivo da atividade para o seu computador." },
                  { n: "02", t: "Extraia o conteúdo", d: 'Clique com botão direito no ZIP → "Extrair tudo" (Windows) ou "Extrair aqui" (outros gerenciadores).' },
                  { n: "03", t: "Analise os arquivos", d: "Olhe o nome e a extensão de cada arquivo para identificar a que categoria ele pertence." },
                  { n: "04", t: "Crie a estrutura de pastas", d: "Dentro da pasta extraída, crie 5 pastas: videos/, imagens/, documentos/, programas/ e capturas/." },
                  { n: "05", t: "Organize tudo", d: "Mova cada arquivo para a pasta correta. Use o gabarito abaixo para conferir se acertou." },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/20">
                    <span className="text-orange-500 font-black text-xs mt-0.5 w-6 flex-shrink-0">{step.n}</span>
                    <div>
                      <span className="text-zinc-200 font-bold text-sm">{step.t}</span>
                      <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gabarito */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-500" />
                <h3 className="text-zinc-300 font-bold text-sm uppercase tracking-widest">Gabarito — Estrutura Esperada</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {estruturaOrganizada.map((item) => (
                  <div key={item.pasta} className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/30 space-y-2">
                    <p className="text-orange-400 font-bold text-sm">{item.pasta}</p>
                    <ul className="space-y-1">
                      {item.filhos.map((f) => (
                        <li key={f} className="text-zinc-500 text-xs flex items-center gap-2">
                          <span className="text-zinc-700">└─</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Desafio bônus */}
            <div className="p-6 rounded-2xl bg-zinc-900/20 border border-dashed border-zinc-700 space-y-2">
              <p className="text-orange-500 font-black text-xs uppercase tracking-widest">⚡ Desafio Bônus</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Consegue identificar o tipo de cada arquivo <strong className="text-zinc-200">sem abri-lo</strong>, usando apenas o nome e a extensão? Anote suas respostas antes de olhar o gabarito e veja quantos você acerta!
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* 4. FOOTER */}
      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2 text-left">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próximo Passo</p>
          <h4 className="text-white font-bold text-xl tracking-tight uppercase">Permissões e Controle de Acesso</h4>
        </div>

        <button
          onClick={() => onNext(proximaAulaSlug)}
          className="group flex items-center gap-4 px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-orange-600 hover:text-white transition-all duration-500 shadow-xl shadow-white/5"
        >
          Continuar <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </footer>
    </div>
  );
}