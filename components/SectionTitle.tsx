interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean; // Para quando o fundo for fixo escuro (como o Hero da Home)
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : "text-left"}`}>
      <h2
        className={`text-3xl md:text-5xl font-black tracking-tight transition-colors duration-300 ${
          light 
            ? "text-white" 
            : "text-slate-900 dark:text-white" // <-- A mágica acontece aqui
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`max-w-2xl ${centered ? "mx-auto" : ""} text-base md:text-lg leading-relaxed transition-colors duration-300 ${
            light 
              ? "text-indigo-100/90" 
              : "text-slate-600 dark:text-slate-400" // <-- Cinza suave no modo dark
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}