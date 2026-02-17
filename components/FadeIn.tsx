"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  className?: string;
  once?: boolean; // Nova propriedade
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up",
  fullWidth = false,
  className = "",
  once = true // Padrão agora é TRUE (anima só uma vez)
}: Props) {
  
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: once, margin: "-50px" }} // Usa a variável once
      transition={{ 
        duration: 0.7, 
        delay: delay, 
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  );
}