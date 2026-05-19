"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";

// Array com os dados dos documentos para facilitar a manutenção
const documentosOficiais = [
  {
    id: "bncc-geral",
    titulo: "Base Nacional Comum Curricular (BNCC)",
    descricao:
      "O documento normativo que define o conjunto orgânico e progressivo de aprendizagens essenciais que todos os alunos devem desenvolver ao longo das etapas e modalidades da Educação Básica.",
    tipo: "Diretriz Nacional",
    icone: "📚",
    cor: "blue",
    // Substitua pelo nome exato do seu arquivo PDF dentro da pasta public/docs
    linkArquivo: "/docs/bncc-oficial.pdf", 
  },
  {
    id: "bncc-computacao",
    titulo: "Normas sobre Computação na Educação Básica",
    descricao:
      "Complemento à BNCC que estrutura a computação em três eixos: Pensamento Computacional, Mundo Digital e Cultura Digital, orientando o ensino de tecnologia de forma crítica e cidadã.",
    tipo: "Complemento Curricular",
    icone: "💻",
    cor: "indigo",
    linkArquivo: "/docs/bncc-computacao.pdf",
  },
  {
    id: "ia-educacao",
    titulo: "Inteligência Artificial na Educação Básica",
    descricao:
      "Reflexões e diretrizes sobre a integração ética, pedagógica e segura de sistemas de Inteligência Artificial no contexto escolar, preparando educadores para as novas demandas tecnológicas.",
    tipo: "Guia Estratégico",
    icone: "🤖",
    cor: "emerald",
    linkArquivo: "/docs/ia-educacao-basica.pdf",
  },
];

export default function Documentos() {
  return (
    <section className="py-24 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      <Container>
        
        {/* Cabeçalho da Página */}
        <FadeIn direction="down">
          <div className="max-w-3xl mx-auto space-y-6 mb-16 text-center">
            <SectionTitle
              title="Documentos Oficiais"
              subtitle="Acesse os principais referenciais teóricos e normativos que fundamentam a integração da tecnologia e do pensamento computacional na educação brasileira."
            />
          </div>
        </FadeIn>

        {/* Grid de Documentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {documentosOficiais.map((doc, index) => (
            <FadeIn key={doc.id} delay={index * 0.1} direction="up">
              <div className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] dark:hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)] hover:border-emerald-400 dark:hover:border-indigo-500/30 relative z-10">
                
                {/* Efeito visual de fundo no card */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${doc.cor}-500/5 dark:bg-${doc.cor}-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110`}></div>

                {/* Ícone e Tag */}
                <div className="flex justify-between items-start mb-6">
                  <ScaleIn delay={index * 0.1 + 0.2}>
                    <div className="text-4xl shadow-sm bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl">
                      {doc.icone}
                    </div>
                  </ScaleIn>
                  <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-${doc.cor}-50 dark:bg-${doc.cor}-900/30 text-${doc.cor}-600 dark:text-${doc.cor}-400 ring-1 ring-${doc.cor}-500/20`}>
                    {doc.tipo}
                  </span>
                </div>

                {/* Título e Descrição */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {doc.titulo}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {doc.descricao}
                </p>

                {/* Botão de Download */}
                <a
                  href={doc.linkArquivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all flex items-center justify-center gap-2 group-hover:ring-2 ring-blue-500/50"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Visualizar PDF
                </a>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Call to Action Final - Design Premium */}
        <FadeIn delay={0.4}>
          <div className="mt-20 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-[1px] shadow-2xl shadow-blue-500/10">
            
            {/* Fundo interno que cria o efeito de borda brilhante */}
            <div className="relative h-full w-full bg-white dark:bg-slate-950 rounded-[calc(2rem-1px)] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              
              {/* Ícone com brilho sutil (Glow Effect) */}
              <div className="shrink-0 relative">
                {/* O Efeito de Luz: Esmeralda no Light, Azul no Dark */}
                <div className="absolute inset-0 bg-emerald-400 dark:bg-blue-500 blur-xl opacity-40 dark:opacity-40 rounded-full"></div>
                
                {/* A Caixinha do Ícone: Borda esmeralda e sombra mais forte no Light */}
                <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-900 rounded-2xl border border-emerald-200 dark:border-slate-800 shadow-md shadow-emerald-500/10 dark:shadow-inner transition-colors">
                  <svg className="w-8 h-8 text-emerald-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              {/* Texto */}
              <div className="text-center md:text-left flex-grow">
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Por que esses documentos são importantes?
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  Todas as práticas disponíveis no <strong className="text-indigo-600 dark:text-indigo-400 font-bold">Infância (Des)plugada</strong> foram mapeadas e alinhadas rigorosamente às competências e habilidades descritas nestas diretrizes nacionais, garantindo intencionalidade pedagógica para a sua sala de aula.
                </p>
              </div>

            </div>
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}