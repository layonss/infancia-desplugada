import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";
import { praticas } from "@/data/praticas";
import { recursos } from "@/data/curadoria";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex-1 flex flex-col justify-center min-h-[85vh]">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/imagens/abacoplay.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-25 pb-56 text-center md:text-left">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Iniciação Científica
            </div>

            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm md:text-base mb-2">
              Projeto Infância (Des)plugada
            </h2>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
  Desenvolvendo o <br className="hidden md:block" />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
    Pensamento <br /> Computacional
  </span>
  <br />
  sem telas.
</h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed md:leading-relaxed">
              Curadoria e desenvolvimento de práticas pedagógicas desplugadas para uma educação básica mais inclusiva e tangível.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/praticas-desplugadas"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
              >
                Explorar Práticas
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <Link 
                href="/sobre"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-md border border-white/20 transition-all flex items-center justify-center"
              >
                Conhecer a Equipe
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- CARDS DE ACESSO RÁPIDO --- */}
      <section className="relative z-20 px-6 -mt-24 mb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          
          <FadeIn delay={0.1} direction="left">
            <Link href="/praticas-desplugadas" className="group block h-full bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300">
              <ScaleIn delay={0.2}>
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Banco de Práticas</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Atividades prontas para aplicar em sala de aula, com roteiros passo a passo.
              </p>
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <Link href="/curadoria" className="group block h-full bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300">
              <ScaleIn delay={0.3}>
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Curadoria</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Seleção de livros, vídeos e jogos para expandir o conhecimento.
              </p>
            </Link>
          </FadeIn>

          <FadeIn delay={0.3} direction="right">
            <Link href="/artigos" className="group block h-full bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300">
              <ScaleIn delay={0.4}>
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Artigos Científicos</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Embasamento teórico sobre o impacto da tecnologia na infância.
              </p>
            </Link>
          </FadeIn>

        </div>
      </section>

      {/* --- SEÇÃO DE NÚMEROS --- */}
      <section className="pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-slate-100 dark:border-slate-800">
            
            <div className="text-center">
              <ScaleIn delay={0.1}>
                <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">+{praticas.length}</p>
              </ScaleIn>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Práticas Criadas</p>
            </div>
            
            <div className="text-center">
              <ScaleIn delay={0.2}>
                <p className="text-4xl font-extrabold text-purple-600 dark:text-purple-400 mb-1">+{recursos.length}</p>
              </ScaleIn>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Recursos Curados</p>
            </div>

            <div className="text-center">
              <ScaleIn delay={0.3}>
                <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">100%</p>
              </ScaleIn>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Gratuito</p>
            </div>

            <div className="text-center">
              <ScaleIn delay={0.4}>
                <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1">IC</p>
              </ScaleIn>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Projeto Acadêmico</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}