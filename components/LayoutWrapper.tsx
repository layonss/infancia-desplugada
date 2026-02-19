"use client";

import { usePathname } from "next/navigation";
import { Providers } from "@/components/Providers";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import { useState, useEffect } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path || (path !== "/" && pathname.startsWith(path));
  };

  return (
    <Providers>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">

        {/* NAVBAR */}
        <header
          className={`w-full transition-all duration-300 z-50 ${isHome
            ? `fixed top-0 left-0 ${scrolled
              ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-sm"
              : "bg-transparent backdrop-blur-sm border-b border-white/10 text-white"
            }`
            : "sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-200 shadow-sm"
            }`}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold tracking-tight">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity text-current">
                <Image src="/icon.png" alt="Logo" width={32} height={32} className="rounded-lg shadow-sm" />
                <span className="hidden sm:inline-block">Infância (Des)plugada</span>
              </Link>
            </h1>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <div className="flex gap-6">
                {[
                  { name: "Artigos", path: "/artigos" },
                  { name: "Práticas", path: "/praticas-desplugadas" },
                  { name: "Curadoria", path: "/curadoria" },
                  { name: "Sobre", path: "/sobre" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    // Adicione 'group relative' aqui 👇
                    className={`group relative transition-colors duration-200 ${isHome && !scrolled
                        ? "text-white/90 hover:text-white"
                        : isActive(link.path)
                          ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                          : "text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                      }`}
                  >
                    {link.name}

                    {/* ADICIONE ESTE SPAN PARA O EFEITO DE LINHA 👇 */}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-300 ease-out w-0 group-hover:w-full ${isActive(link.path) ? "w-full" : "w-0"}`} />
                  </Link>
                ))}
              </div>

              <div
                className={`pl-6 border-l transition-colors duration-300 ${isHome && !scrolled
                  ? "border-white/20"
                  : "border-slate-200 dark:border-slate-700"
                  }`}
              >
                <ThemeToggle />
              </div>
            </nav>

            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <span className="text-sm font-bold">Menu</span>
            </div>
          </div>
        </header>

        {/* CONTEÚDO */}
        <main className="flex-1 w-full relative">{children}</main>

        {/* FOOTER COMPLETO */}
        <footer className="w-full border-t bg-slate-900 dark:bg-slate-950 text-slate-300 border-slate-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-12">

              <div className="md:col-span-1 space-y-4">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Infância (Des)plugada
                </h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Projeto de práticas pedagógicas focado no pensamento computacional sem o uso de telas.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider opacity-60">
                  Explorar
                </h3>
                <nav className="flex flex-col space-y-3 text-sm">
                  {[
                    { name: "Banco de Práticas", path: "/praticas-desplugadas" },
                    { name: "Curadoria", path: "/curadoria" },
                    { name: "Artigos", path: "/artigos" },
                    { name: "Equipe", path: "/sobre" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="group flex items-center text-slate-400 hover:text-indigo-400 transition-all duration-300"
                    >
                      <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2">
                        →
                      </span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider opacity-60">
                  Coordenação
                </h3>
                <div className="text-sm space-y-2 opacity-80">
                  <p>Iniciação Científica</p>
                  <p>Sistemas de Informação</p>
                  <p className="pt-2 text-xs">
                    <span className="opacity-50 block mb-1">Orientação:</span>
                    Prof. Dra. Jéssica Zacarias
                  </p>
                </div>
              </div>

              {/* REALIZAÇÃO & APOIO RESTAURADO */}
              <div className="md:col-span-1 space-y-4">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider opacity-60">
                  Realização & Apoio
                </h3>
                <div className="grid grid-cols-2 gap-4 items-center">

                  {/* Estácio */}
                  <div className="group h-12 rounded-lg flex items-center justify-center
                      bg-white/5 dark:bg-slate-800
                      border border-white/10 dark:border-slate-700
                      transition-all duration-300
                      hover:bg-white/10 dark:hover:bg-slate-700">

                    <Image src="/logos/estacio.png" alt="Estácio" width={80} height={40} className="object-contain max-h-8 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
                  </div>

                  {/* CNPq */}
                  <div className="group h-12 bg-white/5 rounded flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <Image src="/logos/cnpq.png" alt="CNPq" width={80} height={40} className="object-contain max-h-8 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
                  </div>

                  {/* LAB - redondo */}
                  <div className="group h-16 w-16 mx-auto bg-white/5 rounded-full flex items-center justify-center border border-white/10 overflow-hidden relative hover:bg-white/10 transition-all duration-300">
                    <Image src="/logos/lab.jpeg" alt="Lab Pedagogia" fill className="object-cover opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
                  </div>

                  {/* GETEC - redondo */}
                  <div className="group h-16 w-16 mx-auto bg-white/5 rounded-full flex items-center justify-center border border-white/10 overflow-hidden relative hover:bg-white/10 transition-all duration-300">
                    <Image src="/logos/getec.jpeg" alt="GETEC" fill className="object-cover opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
                  </div>

                </div>
              </div>

            </div>

            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
              <p>© {new Date().getFullYear()} Infância (Des)plugada.</p>
              <p>
                Desenvolvido por <span className="font-bold text-white">Layon Silva</span>
              </p>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </Providers>
  );
}
