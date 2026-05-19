"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";
import { praticas } from "@/data/praticas";

export default function Praticas() {
  // Alterado para aceitar strings, já que agora temos "Pré 1", "Pré 2", etc.
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Categorias de filtros
  const niveisInfantil = ["Pré 1", "Pré 2"];
  const niveisFundamental1 = ["1", "2", "3", "4", "5"];
  // const niveisFundamental2 = ["6", "7", "8", "9"];
  
  // Array unificado e escalável para renderizar os botões
  const niveisAtivos = [...niveisInfantil, ...niveisFundamental1 /*, ...niveisFundamental2*/];
  
  // Níveis em descanso (Ensino Fundamental II)
  // const niveisFundamental2 = ["6", "7", "8", "9"];

  const filteredPraticas = praticas.filter((p) => {
    // Agora verifica a string exata no array de anos/níveis da prática
    const matchLevel = selectedLevel ? p.anos.includes(selectedLevel) : true;
    
    const searchLower = searchQuery.toLowerCase();
    const matchText =
      p.titulo.toLowerCase().includes(searchLower) ||
      p.descricaoCurta.toLowerCase().includes(searchLower) ||
      p.objetivos.some((obj) => obj.toLowerCase().includes(searchLower)) ||
      // Permite que o usuário busque digitando o código exato da BNCC (ex: EI03CG05)
      (p.codigoBNCC && p.codigoBNCC.toLowerCase().includes(searchLower));

    return matchLevel && matchText;
  });

  return (
    <section className="py-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      <Container>
        {/* Cabeçalho */}
        <FadeIn direction="down">
          <div className="max-w-3xl mx-auto space-y-6 mb-12 text-center">
            <SectionTitle
              title="Banco de Práticas"
              subtitle="Explore nossa coleção de atividades pedagógicas focadas no pensamento computacional tangível e sem telas."
            />
          </div>
        </FadeIn>

        {/* --- ÁREA DE CONTROLE --- */}
        <div className="max-w-4xl mx-auto mb-16">

          {/* 1. Barra de Busca */}
          <FadeIn delay={0.1}>
            <div className="relative max-w-lg mx-auto mb-8 group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Busque por título, código BNCC ou tema..."
                className="w-full pl-12 pr-6 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </FadeIn>

          {/* 2. Filtros de Ano e Etapas */}
          <FadeIn delay={0.2} direction="up">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              
              {/* Botão TODOS */}
              <button
                onClick={() => setSelectedLevel(null)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  selectedLevel === null
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/30 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                Todos
              </button>

              {/* Botões Escaláveis Mapeados */}
              {niveisAtivos.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                    selectedLevel === level
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/30 scale-105"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  {level.includes("Pré") ? level : `${level}º Ano`}
                </button>
              ))}

            </div>
          </FadeIn>

          {/* 3. Contador */}
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-400 dark:text-slate-500">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
              <span className="font-bold tracking-widest uppercase text-[10px]">
                {filteredPraticas.length} {filteredPraticas.length === 1 ? 'Prática Disponível' : 'Práticas Disponíveis'}
              </span>
            </div>
          </FadeIn>
        </div>

        {/* --- GRID DE RESULTADOS --- */}
        {filteredPraticas.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPraticas.map((pratica, index) => (
              <FadeIn key={pratica.slug} delay={index * 0.05} direction="up">
                <Link
                  href={`/praticas-desplugadas/${pratica.slug}`}
                  // O AJUSTE DEFINITIVO: Sombra esmeralda mais densa (0.6 de opacidade), espalhada e com borda mais forte (emerald-400)
                  className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] dark:hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)] hover:border-emerald-400 dark:hover:border-indigo-500/30 relative z-10"
                >
                  <div className="flex flex-wrap gap-2 mb-6">
                    <ScaleIn delay={index * 0.05 + 0.2}>
                      <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/20">
                        {pratica.anos.map(a => a.startsWith('Pré') ? a : `${a}º ANO`).join(' - ')}
                      </span>
                    </ScaleIn>
                    
                    {pratica.codigoBNCC && (
                      <ScaleIn delay={index * 0.05 + 0.3}>
                        <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20">
                          {pratica.codigoBNCC}
                        </span>
                      </ScaleIn>
                    )}
                  </div>

                 {/* Título: Voltou para o Indigo clássico no Light Mode */}
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {pratica.titulo}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {pratica.descricaoCurta}
                  </p>

                  {/* Link "Ver Detalhes": Voltou para o Indigo no Light Mode */}
                  <div className="flex items-center font-bold text-xs tracking-widest pt-6 border-t border-slate-100 dark:border-slate-800 uppercase text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    <span className="group-hover:mr-3 transition-all">Ver Detalhes</span>
                    <svg
                      className="w-4 h-4 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          /* Empty State */
          <FadeIn>
            <div className="text-center py-20 bg-white/50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
              <ScaleIn>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
                  <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Nenhuma prática encontrada
              </h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-8">
                Não encontramos atividades para sua busca. Que tal tentar outro termo ou remover os filtros?
              </p>
              <button
                onClick={() => { setSelectedLevel(null); setSearchQuery("") }}
                className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
              >
                Limpar Filtros
              </button>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}