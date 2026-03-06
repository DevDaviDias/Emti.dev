'use client';

import { ArrowRight, BookOpen, ExternalLink, Monitor, HardDrive, Settings, Cpu, ArrowDownToLine, CheckCircle2, AlertCircle, Layers, Shield } from "lucide-react";

interface AulaProps {
  onNext: (slug: string) => void;
}

export default function AulaInstalacaoSO({ onNext }: AulaProps) {
  const videoId = "SUBSTITUA_PELO_ID_DO_VIDEO";
  const proximaAulaSlug = "so-aula-8";

  const etapasInstalacao = [
    {
      fase: "⚙️ Pré-instalação",
      etapas: [
        "Verificar requisitos mínimos de hardware",
        "Fazer backup de dados importantes",
        "Baixar a ISO oficial do sistema operacional",
        "Criar o pendrive bootável (Rufus / balenaEtcher)",
      ],
    },
    {
      fase: "🖥️ BIOS/UEFI",
      etapas: [
        "Acessar a BIOS (Del, F2, F10 — depende da placa)",
        "Verificar modo de boot: UEFI ou Legacy (MBR)",
        "Configurar a ordem de boot para o pendrive",
        "Desativar Secure Boot se necessário (Linux)",
      ],
    },
    {
      fase: "🗂️ Particionamento",
      etapas: [
        "Escolher entre instalação limpa ou dual boot",
        "Criar partição de sistema (C:/ no Windows)",
        "Definir partição de swap (Linux)",
        "Formatar as partições no sistema de arquivos correto",
      ],
    },
    {
      fase: "✅ Pós-instalação",
      etapas: [
        "Instalar os drivers essenciais (placa de vídeo, rede)",
        "Atualizar o sistema operacional completamente",
        "Configurar usuário, fuso horário e idioma",
        "Instalar programas essenciais do dia a dia",
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
          <span className="text-zinc-500">Sistemas Operacionais · Aula 07</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
          INSTALAÇÃO<br />
          <span className="text-orange-600 uppercase text-4xl md:text-6xl italic font-light">do Sistema Operacional</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          BIOS, UEFI, partições e o processo passo a passo — aprenda a instalar qualquer sistema operacional do zero, com confiança e sem medo de errar.
        </p>
      </header>

      {/* PRÉ-REQUISITO */}
      <div className="max-w-5xl flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/40 border border-yellow-500/20">
        <span className="text-yellow-400 text-lg flex-shrink-0">⚠️</span>
        <div className="space-y-1">
          <p className="text-yellow-400 font-black text-xs uppercase tracking-widest">Pré-requisito — Antes de começar</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Para a atividade prática, você vai precisar do <strong className="text-zinc-200">Rufus</strong> instalado no computador.
            Ele é gratuito, leve e serve para criar pendrives bootáveis no Windows.
          </p>
          <a
            href="https://rufus.ie/pt_BR/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold text-xs transition-colors group mt-1"
          >
            Baixar Rufus gratuitamente → rufus.ie
          </a>
        </div>
      </div>

      {/* 2. PLAYER DE VÍDEO */}
      <section className="w-full max-w-5xl group">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 shadow-2xl transition-all duration-700 group-hover:shadow-orange-500/5 border border-zinc-900">
          <iframe
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="Instalação do Sistema Operacional"
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
              <Monitor size={16} /> Do Zero ao Sistema
            </h3>
            <p className="text-zinc-300 text-2xl font-light leading-snug">
              "Instalar um sistema operacional é como construir a fundação de uma casa — se errar aqui, tudo que vem depois fica comprometido."
            </p>
          </div>
          <div className="p-8 bg-zinc-900/20 rounded-3xl border border-zinc-900 text-zinc-500 text-sm leading-relaxed">
            O processo de instalação começa muito antes de apertar o primeiro botão. Preparar o ambiente, entender a <strong className="text-zinc-300">BIOS/UEFI</strong> e saber criar partições corretamente são habilidades que separam um técnico iniciante de um profissional confiável.
          </div>
        </div>

        {/* Cards de conceitos */}
        <div className="space-y-8">
          <h2 className="text-white font-bold text-xl tracking-tight">Conceitos Essenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 space-y-2">
              <Cpu className="text-orange-500" size={20} />
              <h4 className="text-zinc-200 font-bold text-sm">BIOS e UEFI</h4>
              <p className="text-zinc-500 text-xs">
                O firmware que inicializa o hardware antes do sistema operacional. UEFI é o sucessor moderno da BIOS, com suporte a discos maiores e boot mais rápido.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-800/30 bg-zinc-900/10 space-y-2">
              <HardDrive className="text-orange-500" size={20} />
              <h4 className="text-zinc-200 font-bold text-sm">Particionamento</h4>
              <p className="text-zinc-500 text-xs">
                Dividir o disco em regiões lógicas independentes. Permite isolar o sistema dos seus dados pessoais e até rodar dois sistemas no mesmo HD.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-800/30 bg-zinc-900/10 space-y-2">
              <Layers className="text-orange-500" size={20} />
              <h4 className="text-zinc-200 font-bold text-sm">Boot e ISO</h4>
              <p className="text-zinc-500 text-xs">
                A imagem ISO contém todo o instalador do sistema. O pendrive bootável é o meio pelo qual o computador carrega esse instalador antes do sistema atual.
              </p>
            </div>
          </div>
        </div>

        {/* BIOS vs UEFI destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/30 space-y-4">
            <div className="flex items-center gap-2">
              <Settings className="text-zinc-500" size={18} />
              <h4 className="text-zinc-400 font-black text-xs uppercase tracking-widest">BIOS (Legacy)</h4>
            </div>
            <ul className="space-y-2">
              {[
                "Interface simples, teclado apenas",
                "Suporte a discos de até 2 TB (MBR)",
                "Presente em máquinas mais antigas",
                "Boot mais lento",
              ].map((item) => (
                <li key={item} className="text-zinc-500 text-xs flex items-center gap-2">
                  <span className="text-zinc-700">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-orange-950/20 border border-orange-500/10 space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="text-orange-500" size={18} />
              <h4 className="text-orange-400 font-black text-xs uppercase tracking-widest">UEFI (Moderno)</h4>
            </div>
            <ul className="space-y-2">
              {[
                "Interface gráfica, suporte a mouse",
                "Suporte a discos acima de 2 TB (GPT)",
                "Secure Boot para proteção contra malware",
                "Boot ultrarrápido com Fast Boot",
              ].map((item) => (
                <li key={item} className="text-zinc-300 text-xs flex items-center gap-2">
                  <span className="text-orange-600">→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Leitura complementar */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-900 space-y-6">
          <div className="flex items-center gap-3 text-orange-500">
            <BookOpen size={20} />
            <span className="font-black uppercase text-xs tracking-widest">Leitura Complementar</span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl text-white font-bold">BIOS vs. UEFI: Qual a diferença?</h3>
            <p className="text-zinc-400 leading-relaxed max-w-3xl">
              Entender a diferença entre BIOS e UEFI é fundamental para qualquer técnico de hardware ou suporte. O artigo explica como cada um funciona, por que o UEFI substituiu a BIOS e o que muda na prática na hora de instalar um sistema operacional.
            </p>
            <a
              href="https://www.techtudo.com.br/noticias/2019/07/bios-ou-uefi-entenda-as-diferencas-entre-os-firmwares-de-inicializacao.ghtml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors group"
            >
              BIOS ou UEFI? — TechTudo
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
              <h2 className="text-white text-3xl font-black tracking-tight">Crie um Pendrive Bootável</h2>
              <p className="text-zinc-500 text-sm max-w-lg leading-relaxed">
                Você vai baixar a ISO oficial do Windows 11 e usar o Rufus para criar um pendrive de instalação pronto para uso. Nenhum computador será formatado — é só a preparação do ambiente.
              </p>
            </div>

            <a
              href="https://www.microsoft.com/pt-br/software-download/windows11"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-orange-500 transition-all duration-300 shadow-xl shadow-orange-500/20"
            >
              <ArrowDownToLine size={16} className="group-hover:translate-y-1 transition-transform" />
              Baixar ISO do Windows 11
            </a>
          </div>

          {/* Corpo da atividade */}
          <div className="px-8 md:px-12 py-10 space-y-10">

            {/* Passo a passo */}
            <div className="space-y-4">
              <h3 className="text-zinc-300 font-bold text-sm uppercase tracking-widest">Como Fazer</h3>
              <div className="space-y-3">
                {[
                  { n: "01", t: "Baixe a ISO oficial", d: "Acesse o link acima, escolha a opção de baixar o arquivo ISO do Windows 11 diretamente." },
                  { n: "02", t: "Conecte o pendrive", d: "Use um pendrive de pelo menos 8 GB. Atenção: todo o conteúdo do pendrive será apagado pelo Rufus." },
                  { n: "03", t: "Abra o Rufus", d: "Com o pendrive conectado, abra o Rufus. Ele vai detectar automaticamente o dispositivo." },
                  { n: "04", t: "Selecione a ISO", d: 'Clique em "Selecionar" e escolha o arquivo .iso que você baixou. O Rufus preenche as configurações recomendadas.' },
                  { n: "05", t: "Configure e inicie", d: 'Verifique se o esquema de partição está como GPT (para UEFI). Clique em "Iniciar" e aguarde a gravação terminar.' },
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

            {/* Gabarito / Etapas da instalação completa */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-500" />
                <h3 className="text-zinc-300 font-bold text-sm uppercase tracking-widest">Visão Geral — Etapas da Instalação Completa</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {etapasInstalacao.map((bloco) => (
                  <div key={bloco.fase} className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/30 space-y-2">
                    <p className="text-orange-400 font-bold text-sm">{bloco.fase}</p>
                    <ul className="space-y-1">
                      {bloco.etapas.map((e) => (
                        <li key={e} className="text-zinc-500 text-xs flex items-center gap-2">
                          <span className="text-zinc-700">└─</span> {e}
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
                Pesquise como configurar um <strong className="text-zinc-200">dual boot</strong> com Windows e Linux no mesmo computador. Quais são os riscos? O que deve ser feito primeiro? Anote suas descobertas.
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* 4. FOOTER */}
      <footer className="max-w-5xl pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2 text-left">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Próximo Passo</p>
          <h4 className="text-white font-bold text-xl tracking-tight uppercase">Segurança e Proteção do Sistema</h4>
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