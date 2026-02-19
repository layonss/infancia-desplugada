"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ScaleIn from "@/components/ScaleIn";
import { praticas } from "@/data/praticas";
import { recursos } from "@/data/curadoria";
import { motion } from "framer-motion";

// --- COMPONENTE DO FORMULÁRIO DE FEEDBACK ---
function FormularioFeedback() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [tipo, setTipo] = useState("sugestao"); // sugestao, critica, elogio

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // SIMULAÇÃO DE ENVIO (Substitua pelo fetch real do Formspree se desejar)
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Mensagem Enviada!</h4>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Obrigado por contribuir com o nosso projeto.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-indigo-600 font-bold text-sm hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Seleção do Tipo */}
      <div className="flex gap-2 mb-2">
        {['sugestao', 'elogio', 'critica'].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTipo(t)}
            className={`flex-1 py-2 px-1 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all ${tipo === t
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-indigo-300 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400'
              }`}
          >
            {t === 'sugestao' ? 'Sugestão' : t === 'elogio' ? 'Elogio' : 'Crítica'}
          </button>
        ))}
      </div>

      <div className="space-y-1">
        <label htmlFor="nome" className="text-xs font-bold text-slate-500 uppercase">Nome</label>
        <input
          required
          id="nome"
          type="text"
          placeholder="Seu nome"
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="mensagem" className="text-xs font-bold text-slate-500 uppercase">Mensagem</label>
        <textarea
          required
          id="mensagem"
          rows={4}
          placeholder="Escreva sua mensagem aqui..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Enviando...
          </>
        ) : (
          "Enviar Mensagem"
        )}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* --- HERO SECTION --- */}
      <section
        className="relative flex flex-col justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/imagens/abacoplay.png')",
        }}
      >
        {/* Overlay único mais estável */}
        <div className="absolute inset-0 bg-slate-900/75 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-40 text-center md:text-left">
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

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
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
      <section className="relative z-20 px-6 -mt-32 mb-24">
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

      {/* --- SEÇÃO: METODOLOGIA (POR QUE DESPLUGADO?) --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">
                Nossa Metodologia
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Por que ensinar sem computadores?
              </h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Benefício 1 */}
            <FadeIn delay={0.1} direction="up">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 shadow-sm rotate-3 hover:rotate-6 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Inclusão Real</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Não depende de laboratórios de informática ou internet rápida. As atividades utilizam materiais simples como papel, lápis e jogos físicos, democratizando o ensino.
                </p>
              </div>
            </FadeIn>

            {/* Benefício 2 */}
            <FadeIn delay={0.2} direction="up">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 shadow-sm -rotate-2 hover:-rotate-6 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.258 50.55 50.55 0 00-2.658.813m-15.482 0A50.55 50.55 0 0112 13.489a50.55 50.55 0 016.744-3.342M12 13.489V14.25m0 0V19.95m0-5.7l-3.21-1.92m3.21 1.92l3.21-1.92" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Foco na Lógica</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ao remover a barreira da sintaxe de programação, o aluno foca puramente no desenvolvimento do raciocínio lógico, algoritmos e resolução de problemas.
                </p>
              </div>
            </FadeIn>

            {/* Benefício 3 */}
            <FadeIn delay={0.3} direction="up">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-6 shadow-sm rotate-1 hover:rotate-3 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Aprendizagem Ativa</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  As práticas envolvem movimento corporal, trabalhos em grupo e manipulação de objetos, tornando o aprendizado mais lúdico, memorável e tangível.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO: COMO FUNCIONA (ROTEIRO) --- */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-20">
              Como aplicar em sala?
            </h2>
          </FadeIn>

          <div className="relative">
            {/* --- A LINHA PONTILHADA ANIMADA --- */}
            {/* Ela fica absoluta atrás do grid. Só aparece em telas médias (md) para cima */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-1 z-0">
              {/* Container da animação de "máscara" */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }} // Garante que anima só uma vez
                transition={{ duration: 2.5, ease: "easeInOut" }} // Duração de 2.5s
                className="h-full overflow-hidden" // Esconde o que excede a largura atual
              >
                {/* A linha real (com largura fixa grande para não distorcer o pontilhado) */}
                <div className="w-[1152px] h-full border-t-2 border-dashed border-indigo-200 dark:border-indigo-800/50 relative top-1/2"></div>
              </motion.div>
            </div>

            {/* --- OS PASSOS --- */}
            <div className="grid md:grid-cols-4 gap-10 relative z-10">
              {[
                { title: "Escolha uma prática", icon: "01" },
                { title: "Separe materiais simples", icon: "02" },
                { title: "Siga o roteiro estruturado", icon: "03" },
                { title: "Promova reflexão coletiva", icon: "04" }
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.3}> {/* Delay cascata para acompanhar a linha */}
                  <div className="group space-y-4 flex flex-col items-center">

                    {/* O NÚMERO */}
                    <div className="relative select-none cursor-default">
                      <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-950 border-2 border-indigo-100 dark:border-slate-800 rounded-full text-xl font-extrabold text-indigo-500 shadow-sm group-hover:scale-110 group-hover:border-indigo-500 transition-all duration-300 z-10 relative">
                        {item.icon}
                      </div>

                      {/* Efeito de "Pulse" atrás do número (Agora só no HOVER) */}
                      <div className="absolute inset-0 rounded-full bg-indigo-500/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 font-medium text-lg leading-tight max-w-[200px]">
                      {item.title}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DE NÚMEROS (Hybrid Premium SaaS) --- */}
      <section className="relative py-32 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden border-t border-slate-100 dark:border-slate-800">

        {/* Glow radial sutil */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.06),_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.12),_transparent_75%)]" />

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div className="
              group
              rounded-2xl
              bg-slate-50/80 dark:bg-slate-900/80
              backdrop-blur-sm
              border border-slate-200 dark:border-slate-800
              p-10
              text-center
              shadow-sm dark:shadow-black/30
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-indigo-400/40
              select-none cursor-default
            ">
              <ScaleIn delay={0.1}>
                <p className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-3 transition-transform duration-300 group-hover:scale-105">
                  +{praticas.length}
                </p>
              </ScaleIn>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Práticas Criadas
              </p>
            </div>

            {/* CARD 2 */}
            <div className="
              group
              rounded-2xl
              bg-slate-50/80 dark:bg-slate-900/80
              backdrop-blur-sm
              border border-slate-200 dark:border-slate-800
              p-10
              text-center
              shadow-sm dark:shadow-black/30
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-purple-400/40
              select-none cursor-default
            ">
              <ScaleIn delay={0.2}>
                <p className="text-4xl md:text-5xl font-extrabold text-purple-600 dark:text-purple-400 mb-3 transition-transform duration-300 group-hover:scale-105">
                  +{recursos.length}
                </p>
              </ScaleIn>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Recursos Curados
              </p>
            </div>

            {/* CARD 3 */}
            <div className="
              group
              rounded-2xl
              bg-slate-50/80 dark:bg-slate-900/80
              backdrop-blur-sm
              border border-slate-200 dark:border-slate-800
              p-10
              text-center
              shadow-sm dark:shadow-black/30
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-blue-400/40
              select-none cursor-default
            ">
              <ScaleIn delay={0.3}>
                <p className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-3 transition-transform duration-300 group-hover:scale-105">
                  100%
                </p>
              </ScaleIn>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Gratuito
              </p>
            </div>

            {/* CARD 4 */}
            <div className="
              group
              rounded-2xl
              bg-slate-50/80 dark:bg-slate-900/80
              backdrop-blur-sm
              border border-slate-200 dark:border-slate-800
              p-10
              text-center
              shadow-sm dark:shadow-black/30
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-emerald-400/40
              select-none cursor-default
            ">
              <ScaleIn delay={0.4}>
                <p className="text-4xl md:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-3 transition-transform duration-300 group-hover:scale-105">
                  IC
                </p>
              </ScaleIn>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Projeto Acadêmico
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* --- SEÇÃO DE FEEDBACK / CONTATO --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-800">

              {/* Lado Esquerdo: Texto e Convite */}
              <div className="p-10 md:p-12 md:w-5/12 bg-indigo-600 text-white flex flex-col justify-between relative overflow-hidden">
                {/* Decorativo */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Sua opinião importa!</h3>
                  <p className="text-indigo-100 mb-6 leading-relaxed text-sm">
                    O <strong>Infância Desplugada</strong> é construído coletivamente. Tem alguma sugestão de prática, encontrou um erro ou quer deixar um elogio?
                  </p>
                  <p className="text-indigo-100 text-sm font-medium">
                    Preencha o formulário ao lado e nos ajude a melhorar a educação básica.
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-indigo-200">
                  <span className="w-8 h-[1px] bg-indigo-400"></span>
                  Fale Conosco
                </div>
              </div>

              {/* Lado Direito: Formulário */}
              <div className="p-10 md:p-12 md:w-7/12 bg-white dark:bg-slate-950 relative">
                <FormularioFeedback />
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- CTA PARA A EQUIPE --- */}
      <section className="py-24 bg-indigo-900 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ciência feita por pessoas.
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              O projeto Infância Desplugada é fruto do trabalho de pesquisadores, professores e alunos dedicados à democratização do ensino.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 duration-300"
            >
              Conheça nossos Pesquisadores
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}