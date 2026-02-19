"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";
import { equipe } from "@/data/equipe";

// Ícone simples de documento/currículo para o Lattes
const LattesIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
  </svg>
);

// Ícone do LinkedIn
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

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
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {prof.bio}
                    </p>

                    {/* Adicionei os links na coordenação também para consistência */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                        {prof.lattes && (
                          <a 
                            href={prof.lattes} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-indigo-600"
                          >
                            <LattesIcon className="w-4 h-4" />
                            <span>Currículo Lattes</span>
                          </a>
                        )}
                        {prof.linkedin && (
                          <a 
                            href={prof.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-[#0077b5] hover:text-white transition-all duration-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-[#0077b5]"
                          >
                            <LinkedinIcon className="w-4 h-4" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                    </div>
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
                <div className="h-full bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 text-center group flex flex-col">
                  
                  <ScaleIn delay={index * 0.1 + 0.2}>
                    <div className="w-20 h-20 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-xl font-bold mb-4 transition-colors">
                      {membro.nome.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                  </ScaleIn>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{membro.nome}</h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-3">{membro.funcao}</p>
                  
                  {/* flex-1 empurra os botões para baixo, alinhando-os se os cards tiverem alturas diferentes */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                    {membro.bio}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {membro.lattes && (
                      <a 
                        href={membro.lattes} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wide text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-900/50 dark:hover:bg-indigo-600 dark:hover:text-white"
                      >
                         <LattesIcon className="w-4 h-4" />
                         Lattes
                      </a>
                    )}
                    
                    {membro.linkedin && (
                      <a 
                        href={membro.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 dark:hover:bg-[#0077b5]"
                      >
                         <LinkedinIcon className="w-4 h-4" />
                         LinkedIn
                      </a>
                    )}
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