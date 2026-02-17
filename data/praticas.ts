export interface Pratica {
  slug: string;
  titulo: string;
  descricaoCurta: string;
  anos: number[];
  objetivos: string[];
  materiais: string[];
  comoFunciona: string;
}

export const praticas: Pratica[] = [
  {
    slug: "sequencia-de-comandos",
    titulo: "Sequência de Comandos com Cartas",
    descricaoCurta:
      "Atividade que trabalha lógica e noções de algoritmo por meio de cartas com comandos simples.",
    anos: [6,7],
    objetivos: [
      "Desenvolver raciocínio lógico",
      "Compreender o conceito de algoritmo",
      "Estimular trabalho em grupo",
    ],
    materiais: [
      "Cartas com comandos (frente, trás, virar à direita, virar à esquerda)",
      "Fita adesiva para marcar percurso no chão",
    ],
    comoFunciona:
      "Os estudantes organizam uma sequência de cartas com comandos para que um colega percorra um caminho previamente definido. Ao final, discutem erros, ajustes e melhorias na sequência criada.",
  },

  {
    slug: "robos-humanos",
    titulo: "Robôs Humanos",
    descricaoCurta:
      "Estudantes criam sequências de instruções para guiar um colega como se fosse um robô.",
    anos:[5,6,7,8],
    objetivos: [
      "Desenvolver pensamento sequencial",
      "Trabalhar precisão nas instruções",
      "Estimular comunicação clara",
    ],
    materiais: [
      "Espaço livre na sala",
      "Objetos para criar obstáculos",
    ],
    comoFunciona:
      "Um estudante assume o papel de robô e só pode executar comandos exatos dados pelos colegas. O grupo precisa elaborar instruções claras para atingir um objetivo específico.",
  },

  {
    slug: "algoritmo-com-cartoes",
    titulo: "Algoritmo com Cartões",
    descricaoCurta:
      "Construção de algoritmos físicos utilizando cartões organizados em sequência lógica.",
    anos:[6,7,8,9],
    objetivos: [
      "Compreender estrutura de algoritmos",
      "Identificar erros e inconsistências em sequências",
      "Estimular organização lógica",
    ],
    materiais: [
      "Cartões em branco",
      "Canetas",
      "Quadro ou mesa para organização",
    ],
    comoFunciona:
      "Os estudantes escrevem etapas de uma tarefa simples (como fazer um sanduíche) em cartões separados. Em grupo, organizam os cartões na ordem correta e testam a clareza das instruções.",
  },

  {
    slug: "programando-o-colega",
    titulo: "Programando o Colega",
    descricaoCurta:
      "Simulação prática onde estudantes criam comandos detalhados para orientar ações específicas.",
    anos:[7,8,9],
    objetivos: [
      "Desenvolver pensamento computacional",
      "Exercitar clareza e objetividade",
      "Trabalhar depuração de erros",
    ],
    materiais: [
      "Espaço livre",
      "Objetos simples da sala",
    ],
    comoFunciona:
      "Um aluno recebe um objetivo (ex: pegar um objeto e colocá-lo sobre a mesa). Os colegas devem criar instruções extremamente detalhadas. Caso haja erro, revisam o 'código' e testam novamente.",
  },

  {
    slug: "mapa-de-decisoes",
    titulo: "Mapa de Decisões",
    descricaoCurta:
      "Atividade que introduz estruturas condicionais por meio de fluxogramas físicos.",
    anos:[8,9],
    objetivos: [
      "Compreender estruturas condicionais (se/então)",
      "Desenvolver raciocínio lógico estruturado",
      "Visualizar fluxos de decisão",
    ],
    materiais: [
      "Cartolina ou papel A3",
      "Canetas coloridas",
      "Post-its",
    ],
    comoFunciona:
      "Os estudantes criam um fluxograma físico para representar decisões do cotidiano (ex: 'Se estiver chovendo, então levo guarda-chuva'). Depois analisam caminhos alternativos e possíveis melhorias.",
  },

  {
  slug: "depuracao-coletiva",
  titulo: "Depuração Coletiva",
  descricaoCurta:
    "Atividade que trabalha identificação e correção de erros em sequências de instruções.",
  anos:[7,8,9],
  objetivos: [
    "Desenvolver capacidade de identificar erros lógicos",
    "Compreender o conceito de depuração (debugging)",
    "Estimular pensamento crítico e revisão colaborativa",
  ],
  materiais: [
    "Sequências de instruções previamente preparadas com erros",
    "Quadro ou cartolina",
    "Canetas coloridas",
  ],
  comoFunciona:
    "O professor apresenta uma sequência de instruções com erros intencionais. Em grupos, os estudantes analisam, identificam os problemas e propõem correções. Ao final, discutem como a depuração faz parte do processo de construção de algoritmos.",
},
];