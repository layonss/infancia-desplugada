"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";
import { recursos } from "@/data/curadoria";

export default function Curadoria() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const availableCategories = Array.from(
    new Set(recursos.map((r) => r.categoria))
  ).sort();

  const filteredRecursos = recursos.filter((r) => {
    const matchCategory = selectedCategory ? r.categoria === selectedCategory : true;
    const searchLower = searchQuery.toLowerCase();
    const matchText =
      r.titulo.toLowerCase().includes(searchLower) ||
      r.descricao.toLowerCase().includes(searchLower) ||
      r.autor.toLowerCase().includes(searchLower);

    return matchCategory && matchText;
  });

  const getCategoryIcon = (categoria: string) => {
    const icons: Record<string, React.ReactNode> = {
      "Livro": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 14.754 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
      "Vídeo": <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></>,
      "Canal": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      "Podcast": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
      "Perfil": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />,
      "Jogo": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    };

    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {icons[categoria] || <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />}
      </svg>
    );
  };

  return (
    <section className="py-24 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <Container>
        <FadeIn direction="down">
          <div className="max-w-3xl mx-auto space-y-6 mb-12 text-center">
            <SectionTitle
              title="Curadoria de Recursos"
              subtitle="Uma seleção de livros, vídeos, canais e ferramentas para apoiar suas aulas e estudos."
            />
          </div>
        </FadeIn>

        {/* CONTROLES */}
        <div className="max-w-4xl mx-auto mb-16">
          <FadeIn delay={0.1}>
            <div className="relative max-w-lg mx-auto mb-8 group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Busque por título, autor ou tema..."
                className="w-full pl-12 pr-6 py-4 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-slate-700 dark:text-slate-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${selectedCategory === null
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
              >
                Todos
              </button>

              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${selectedCategory === cat
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20 scale-105"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="font-bold tracking-widest uppercase text-[10px]">
                {filteredRecursos.length} {filteredRecursos.length === 1 ? 'Recurso Encontrado' : 'Recursos Encontrados'}
              </span>
            </div>
          </FadeIn>
        </div>

        {/* GRID */}
        {filteredRecursos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecursos.map((recurso, index) => (
              <FadeIn key={recurso.id} delay={index * 0.05} direction="up">
                <a
                  href={recurso.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Linha de Gradiente Superior no Hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  <div className="flex justify-between items-start mb-6">
                    <ScaleIn delay={index * 0.05 + 0.2}>
                      <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        {getCategoryIcon(recurso.categoria)}
                      </div>
                    </ScaleIn>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      {recurso.categoria}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {recurso.titulo}
                  </h3>

                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-tight">
                    {recurso.autor}
                  </p>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {recurso.descricao}
                  </p>

                  <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-black text-[10px] tracking-widest pt-6 border-t border-slate-50 dark:border-slate-800 uppercase">
                    <span className="group-hover:mr-2 transition-all">Acessar Recurso</span>
                    <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        ) : (
          /* Empty State */
          <FadeIn>
            <div className="text-center py-20 bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400 font-medium">Nenhum recurso encontrado.</p>
              <button
                onClick={() => { setSelectedCategory(null); setSearchQuery("") }}
                className="mt-4 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
              >
                Limpar todos os filtros
              </button>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}