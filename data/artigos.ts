export interface Artigo {
  slug: string;
  titulo: string;
  resumo: string;
  conteudo: string; // Futuramente isso pode ser HTML ou Markdown
  dataPublicacao: string;
  tempoLeitura: string;
  tags: string[];
  autor: string;
}

export const artigos: Artigo[] = [
  {
    slug: "o-que-e-pensamento-computacional",
    titulo: "O que é Pensamento Computacional e por que ensinar?",
    resumo:
      "Entenda os quatro pilares fundamentais do pensamento computacional e como eles ajudam no desenvolvimento cognitivo de crianças e adolescentes.",
    conteudo: "Conteúdo completo virá aqui...",
    dataPublicacao: "12 Fev 2026",
    tempoLeitura: "5 min",
    tags: ["Teoria", "Fundamentos"],
    autor: "Equipe Desplugada",
  },
  {
    slug: "beneficios-atividades-desplugadas",
    titulo: "5 Benefícios das Atividades Desplugadas",
    resumo:
      "A tecnologia não precisa de telas. Descubra como atividades analógicas podem ensinar lógica de programação de forma inclusiva e eficiente.",
    conteudo: "Conteúdo completo virá aqui...",
    dataPublicacao: "10 Fev 2026",
    tempoLeitura: "4 min",
    tags: ["Prática", "Metodologia"],
    autor: "Equipe Desplugada",
  },
  {
    slug: "papel-do-erro-na-aprendizagem",
    titulo: "O Papel do Erro no Processo de Aprendizagem",
    resumo:
      "Na programação, errar é parte do processo. Veja como transformar o 'bug' em uma oportunidade pedagógica valiosa para seus alunos.",
    conteudo: "Conteúdo completo virá aqui...",
    dataPublicacao: "05 Fev 2026",
    tempoLeitura: "6 min",
    tags: ["Pedagogia", "Reflexão"],
    autor: "Equipe Desplugada",
  },
];