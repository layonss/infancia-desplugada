"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";
import Link from "next/link";
import { artigos } from "@/data/artigos";

export default function Artigos() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const availableTags = Array.from(
    new Set(artigos.flatMap((artigo) => artigo.tags))
  ).sort();

  const filteredArtigos = artigos.filter((artigo) => {
    const matchTag = selectedTag ? artigo.tags.includes(selectedTag) : true;
    const searchLower = searchQuery.toLowerCase();
    const matchText =
      artigo.titulo.toLowerCase().includes(searchLower) ||
      artigo.resumo.toLowerCase().includes(searchLower);

    return matchTag && matchText;
  });

  return (
    <section className="py-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      <Container>
        <FadeIn direction="down">
          <div className="max-w-3xl mx-auto space-y-6 mb-12 text-center">
            <SectionTitle
              title="Artigos e Reflexões"
              subtitle="Conteúdos para aprofundar seu conhecimento sobre educação tecnológica e pensamento computacional."
            />
          </div>
        </FadeIn>

        {/* --- ÁREA DE CONTROLE --- */}
        <div className="max-w-4xl mx-auto mb-16">
          <FadeIn delay={0.1}>
            <div className="relative max-w-lg mx-auto mb-8 group">
              <input
                type="text"
                placeholder="Pesquisar artigo..."
                className="w-full pl-12 pr-6 py-4 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-slate-700 dark:text-slate-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-5 top-4 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                  selectedTag === null
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-500"
                }`}
              >
                Todos
              </button>
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                    selectedTag === tag
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20 scale-105"
                      : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-500"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="font-bold tracking-widest uppercase text-[10px]">
                {filteredArtigos.length} Artigos Publicados
              </span>
            </div>
          </FadeIn>
        </div>

        {/* --- GRID DE RESULTADOS --- */}
        {filteredArtigos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtigos.map((artigo, index) => (
              <FadeIn key={artigo.slug} delay={index * 0.05} direction="up">
                <Link
                  href={`/artigos/${artigo.slug}`}
                  className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span>{artigo.dataPublicacao}</span>
                    <span>•</span>
                    <span>{artigo.tempoLeitura}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {artigo.titulo}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {artigo.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] uppercase tracking-wider font-black rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {artigo.resumo}
                  </p>

                  <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-black text-[10px] tracking-widest pt-6 border-t border-slate-100 dark:border-slate-800 uppercase">
                    <span className="group-hover:mr-3 transition-all">LER ARTIGO COMPLETO</span>
                    <svg className="w-4 h-4 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="text-center py-20 bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-slate-500">
              Nenhum artigo encontrado para sua busca.
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}