import Template from "@/app/Template/pages";

export default function Home() {
  return (
    <Template>
      {/* w-full garante que a div tente ocupar 100% do espaço que o Template der a ela */}
      <div className="w-full flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
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