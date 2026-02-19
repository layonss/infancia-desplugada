import { praticas } from "@/data/praticas";
import Container from "@/components/Container";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";

// Tipagem para Next.js 15+
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return praticas.map((pratica) => ({
    slug: pratica.slug,
  }));
}

export default async function PraticaDetalhe({ params }: PageProps) {
  const { slug } = await params;
  const pratica = praticas.find((p) => p.slug === slug);

  if (!pratica) {
    notFound();
  }

  const anosFormatados = pratica.anos.length === 1
    ? `${pratica.anos[0]}º ano`
    : `${Math.min(...pratica.anos)}º ao ${Math.max(...pratica.anos)}º ano`;

  return (
    // AJUSTE: Fundo agora muda no Dark Mode
    <section className="min-h-screen py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      <Container>

        {/* Botão Voltar */}
        <FadeIn direction="down">
          <div className="mb-8">
            <Link
              href="/praticas-desplugadas"
              className="inline-flex items-center text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              VOLTAR PARA AS PRÁTICAS
            </Link>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* --- COLUNA PRINCIPAL --- */}
          <div className="lg:col-span-2 space-y-8">

            {/* Cabeçalho */}
            <FadeIn>
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                  {anosFormatados}
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
                  {pratica.titulo}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pratica.descricaoCurta}
                </p>
              </div>
            </FadeIn>

            {/* Bloco: Como Funciona */}
            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                <h2 className="flex items-center text-xl font-bold text-slate-800 dark:text-white mb-6">
                  <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Como aplicar a atividade
                </h2>

                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  <p className="whitespace-pre-line">
                    {pratica.comoFunciona}
                  </p>
                </div>

                {/* Dica Pedagógica */}
                <ScaleIn delay={0.4}>
                  <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30 rounded-2xl flex items-start gap-4">
                    <svg className="w-6 h-6 text-amber-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div>
                      <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200 mb-1 uppercase tracking-wider">Dica do Professor</h4>
                      <p className="text-sm text-amber-800/80 dark:text-amber-400/80">
                        Incentive os alunos a explicarem o raciocínio em voz alta. O erro faz parte do processo de depuração!
                      </p>
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </FadeIn>

          </div>

          {/* --- SIDEBAR --- */}
          <aside className="space-y-6 lg:sticky lg:top-28">

            {/* Card 1: Objetivos */}
            <FadeIn delay={0.3} direction="left">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
                  Objetivos Pedagógicos
                </h3>
                <ul className="space-y-3">
                  {pratica.objetivos.map((obj, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-emerald-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Card 2: Materiais */}
            <FadeIn delay={0.4} direction="left">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
                  Materiais Necessários
                </h3>
                <ul className="space-y-3">
                  {pratica.materiais.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3 mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Card 3: Download */}
            <FadeIn delay={0.5} direction="left">
              <div className="bg-indigo-600 dark:bg-indigo-900/40 rounded-2xl p-6 text-white text-center shadow-lg shadow-indigo-500/20">
                <h3 className="font-bold mb-2">Plano de Aula em PDF</h3>
                <p className="text-indigo-100 dark:text-indigo-300 text-xs mb-4">
                  Baixe o roteiro completo para imprimir e levar para sala de aula.
                </p>
                <button className="w-full py-3 bg-white dark:bg-indigo-500 text-indigo-600 dark:text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-400 transition-all flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Baixar Material
                </button>
              </div>
            </FadeIn>

          </aside>

        </div>
      </Container>
    </section>
  );
}