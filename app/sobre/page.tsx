"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";
import { equipe } from "@/data/equipe";

export default function Sobre() {
  const coordenacao = equipe.filter((m) => m.destaque);
  const pesquisadores = equipe.filter((m) => !m.destaque);

  return (
    <section className="py-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      <Container>
        {/* --- 1. MANIFESTO DO PROJETO --- */}
        <FadeIn direction="down">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-8">
            <SectionTitle
              title="Sobre o Infância Desplugada"
              subtitle="Projeto de Iniciação Científica focado no ensino de lógica sem telas."
            />
            
            <div className="prose prose-lg prose-slate dark:prose-invert mx-auto text-slate-600 dark:text-slate-400 leading-relaxed text-justify md:text-center">
              <p>
                O <strong>Infância Desplugada</strong> nasce como um projeto de Iniciação Científica dedicado a explorar como o pensamento computacional pode ser introduzido na educação básica de forma acessível e inclusiva.
              </p>
              <p>
                Nossa missão é realizar a curadoria, desenvolvimento e divulgação de práticas de <em>Computação Desplugada</em> (CS Unplugged).
              </p>
            </div>
          </div>
        </FadeIn>

        {/* --- 2. A COORDENAÇÃO --- */}
        <div className="mb-24">
          <FadeIn>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-12">Coordenação do Projeto</h2>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto">
            {coordenacao.map((prof) => (
              <FadeIn key={prof.id} direction="up" delay={0.2}>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <ScaleIn delay={0.4}>
                    <div className="shrink-0">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-4xl font-bold border-4 border-white dark:border-slate-800 shadow-md">
                        {prof.nome.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </div>
                    </div>
                  </ScaleIn>

                  <div className="text-center md:text-left space-y-3 flex-1">
                    <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider rounded-full">
                      {prof.funcao}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {prof.nome}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {prof.bio}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* --- 3. EQUIPE DE PESQUISADORES --- */}
        <div>
          <FadeIn>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-12">Equipe de Pesquisa</h2>
          </FadeIn>
           
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pesquisadores.map((membro, index) => (
              <FadeIn key={membro.id} delay={index * 0.1} direction="up">
                <div className="h-full bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 text-center group">
                  <ScaleIn delay={index * 0.1 + 0.2}>
                    <div className="w-20 h-20 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-xl font-bold mb-4 transition-colors">
                      {membro.nome.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                  </ScaleIn>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{membro.nome}</h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-3">{membro.funcao}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{membro.bio}</p>

                  <div className="flex justify-center gap-4 text-sm font-medium">
                    {membro.lattes && <a href={membro.lattes} target="_blank" className="text-slate-400 hover:text-indigo-600 transition-colors">Lattes</a>}
                    {membro.linkedin && <a href={membro.linkedin} target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}