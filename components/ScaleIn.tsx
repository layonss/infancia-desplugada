"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  once?: boolean; // Adicionado
}

export default function ScaleIn({ children, delay = 0, once = true }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: once, margin: "-50px" }} // Usa a variável once
      transition={{ 
        duration: 0.5, 
        delay: delay,
        type: "spring", 
        stiffness: 200,
        damping: 15 
      }}
    >
      {children}
    </motion.div>
  );
}