"use client";

import { use } from "react"; // Import necessário para tratar params no Next 15 client-side
import { artigos } from "@/data/artigos";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ArtigoDetalhe({ params }: PageProps) {
  // No Next 15, em componentes "use client", desestruturamos o params assim:
  const { slug } = use(params);
  const artigo = artigos.find((p) => p.slug === slug);

  if (!artigo) notFound();

  return (
    <article className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 pt-32 pb-24">
      <Container>

        {/* Botão Voltar */}
        <FadeIn direction="down">
          <Link
            href="/artigos"
            className="inline-flex items-center text-xs font-black tracking-widest text-slate-400 hover:text-indigo-600 transition-colors group mb-12 uppercase"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            VOLTAR PARA ARTIGOS
          </Link>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-16 items-start">

          {/* --- CONTEÚDO PRINCIPAL --- */}
          <div className="lg:col-span-2">
            <FadeIn>
              <header className="mb-12">
                <div className="flex gap-2 mb-6">
                  {artigo.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                  {artigo.titulo}
                </h1>

                <div className="flex items-center gap-6 text-xs font-bold text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-8 uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {artigo.dataPublicacao}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {artigo.tempoLeitura} DE LEITURA
                  </span>
                </div>
              </header>

              {/* CORREÇÃO DE VISIBILIDADE AQUI */}
              <div className="bg-slate-50/50 dark:bg-slate-900/40 
      p-8 md:p-12 
      rounded-[2.5rem] 
      border-2 border-slate-300 dark:border-slate-700 
      shadow-xl shadow-slate-200/60 dark:shadow-none 
      transition-all duration-300">
                <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-medium">
                  {artigo.conteudo}
                </p>

                {/* Texto de preenchimento com cor corrigida */}
                <div className="mt-8 space-y-6 text-slate-500 dark:text-slate-400 italic">
                  <p>
                    O desenvolvimento deste artigo faz parte da investigação pedagógica sobre o uso de materiais tangíveis
                    no ensino da lógica, visando uma educação democrática e acessível.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* --- SIDEBAR --- */}
          <aside className="lg:sticky lg:top-32 space-y-8">
            <FadeIn delay={0.2} direction="left">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Autor do Artigo</h3>

                <div className="flex items-center space-x-4 mb-6">
                  <ScaleIn>
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-500/30">
                      {artigo.autor.charAt(0)}
                    </div>
                  </ScaleIn>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white uppercase text-sm tracking-tight">{artigo.autor}</p>
                    <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Pesquisador IC</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                  Pesquisador focado em metodologias ativas e tecnologia desplugada na educação básica.
                </p>

                <Link
                  href="/sobre"
                  className="block w-full text-center py-4 bg-slate-900 dark:bg-indigo-600 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-indigo-700 transition-all"
                >
                  CONHECER A EQUIPE
                </Link>
              </div>
            </FadeIn>
          </aside>

        </div>
      </Container>
    </article>
  );
}