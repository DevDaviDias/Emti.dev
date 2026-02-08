import Template from "@/src/app/Template/pages"; // Verifique se o caminho do import está correto

export default function Home() {
  return (
    <Template>
      {/* O que você colocar aqui aparecerá quando a 'sessao' for 'home' */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Bem-vindo ao <span className="text-blue-500">emti.dev</span>
        </h2>
        <p className="text-zinc-400 max-w-md">
          Selecione uma matéria no menu lateral para começar a sua jornada de aprendizado.
        </p>
      </div>
    </Template>
  );
}