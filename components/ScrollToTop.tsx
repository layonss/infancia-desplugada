"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion"; // Vamos usar o motor de animação direto

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Pegamos a posição atual
    const currentScroll = window.scrollY;

    // Animamos do valor atual até 0
    animate(currentScroll, 0, {
      type: "spring",
      stiffness: 100, // Rigidez da mola (mais alto = mais rápido)
      damping: 20,    // Amortecimento (evita que balance demais)
      onUpdate: (latest) => window.scrollTo(0, latest), // Atualiza o scroll a cada frame
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 border border-indigo-400/20 transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      aria-label="Voltar ao topo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}