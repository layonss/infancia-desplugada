export interface Pratica {
  slug: string;
  titulo: string;
  descricaoCurta: string;
  // 1. Mudamos de number[] para string[] para aceitar "Pré 1", "Pré 2", "1", "2", etc.
  anos: string[];
  // 2. Adicionamos a propriedade opcional do código da BNCC
  codigoBNCC?: string; 
  objetivos: string[];
  materiais: string[];
  comoFunciona: string;
}

export const praticas: Pratica[] = [
  /*{
    slug: "sequencia-de-comandos",
    titulo: "Sequência de Comandos com Cartas",
    descricaoCurta:
      "Atividade que trabalha lógica e noções de algoritmo por meio de cartas com comandos simples.",
    // Todos os anos agora estão entre aspas (são strings)
    anos: ["6", "7"],
    // Exemplo de como você vai inserir a BNCC (pode colocar o código real depois)
    codigoBNCC: "EF06MA01", 
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
  },*/
  {
    slug: "robos-humanos",
    titulo: "Robôs Humanos",
    descricaoCurta:
      "Estudantes criam sequências de instruções para guiar um colega como se fosse um robô.",
    anos: ["5", /*"6", "7", "8"*/],
    codigoBNCC: "EF05MA15",
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
  /*{
    slug: "algoritmo-com-cartoes",
    titulo: "Algoritmo com Cartões",
    descricaoCurta:
      "Construção de algoritmos físicos utilizando cartões organizados em sequência lógica.",
    anos: ["6", "7", "8", "9"],
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
    anos: ["7", "8", "9"],
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
    anos: ["8", "9"],
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
    anos: ["7", "8", "9"],
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
  },*/
  {
    slug: "padroes-com-objetos",
    titulo: "Construindo Padrões com Objetos",
    descricaoCurta:
      "Atividade que desenvolve reconhecimento de padrões utilizando objetos do cotidiano.",
    anos: ["4", "5", /*"6"*/],
    codigoBNCC: "EF04MA14",
    objetivos: [
      "Identificar e criar padrões",
      "Desenvolver pensamento lógico",
      "Estimular observação e comparação",
    ],
    materiais: [
      "Tampinhas coloridas ou blocos de montar",
      "Objetos variados (formas, cores ou tamanhos diferentes)",
    ],
    comoFunciona:
      "O professor inicia uma sequência (ex: vermelho, azul, vermelho, azul) e as crianças devem continuar o padrão. Depois, criam seus próprios padrões para os colegas identificarem e completarem.",
  },
  {
    slug: "algoritmo-do-dia",
    titulo: "Algoritmo da Rotina Diária",
    descricaoCurta:
      "Atividade que trabalha a construção de algoritmos a partir da sequência de ações do cotidiano.",
    anos: ["5", /*"6", "7"*/],
    codigoBNCC: "EF05LP12",
    objetivos: [
      "Compreender o conceito de algoritmo",
      "Organizar ações em sequência lógica",
      "Desenvolver noção de ordem e temporalidade",
    ],
    materiais: [
      "Cartões com ações do dia (acordar, escovar dentes, tomar café, ir à escola)",
      "Cartolina ou quadro",
    ],
    comoFunciona:
      "As crianças organizam cartões representando a rotina diária em ordem correta. Depois discutem o que acontece se a ordem for alterada, refletindo sobre a importância da sequência nos algoritmos.",
  },
  {
    slug: "caminho-com-desafios",
    titulo: "Desafio do Caminho no Chão",
    descricaoCurta:
      "Atividade corporal para criação e teste de algoritmos com movimentos.",
    anos: ["4", "5", /*"6"*/],
    codigoBNCC: "EF04MA16",
    objetivos: [
      "Criar e testar algoritmos com o corpo",
      "Desenvolver noção espacial",
      "Estimular trabalho em grupo",
    ],
    materiais: [
      "Fita adesiva para marcar percurso",
      "Cartões com comandos (andar, pular, girar, parar)",
    ],
    comoFunciona:
      "As crianças criam uma sequência de comandos para que um colega percorra um caminho marcado no chão. Após testar, avaliam erros e ajustam o algoritmo.",
  },
  /*{
    slug: "quebrando-o-problema",
    titulo: "Quebrando o Problema em Partes",
    descricaoCurta:
      "Atividade que desenvolve decomposição de problemas por meio de tarefas simples.",
    anos: ["6", "7"],
    objetivos: [
      "Compreender a decomposição de problemas",
      "Identificar etapas de uma tarefa",
      "Organizar processos passo a passo",
    ],
    materiais: [
      "Imagens de tarefas (plantar uma flor, fazer um sanduíche, montar um brinquedo)",
      "Cartolina",
    ],
    comoFunciona:
      "O grupo recebe uma tarefa e precisa dividir em pequenas etapas organizadas em ordem lógica. Em seguida, explicam para os colegas como resolveram o problema.",
  },*/
  {
    slug: "loop-das-palmas",
    titulo: "Loop das Palmas e Movimentos",
    descricaoCurta:
      "Atividade rítmica para trabalhar repetição e ciclos (loops).",
    anos: ["4", "5", /*"6"*/],
    codigoBNCC: "EF15AR08",
    objetivos: [
      "Identificar padrões repetitivos",
      "Compreender o conceito de repetição (loop)",
      "Desenvolver coordenação motora",
    ],
    materiais: [
      "Espaço livre na sala",
    ],
    comoFunciona:
      "O professor cria uma sequência de movimentos (ex: bater palma, bater palma, pular). As crianças repetem várias vezes, identificando que se trata de um ciclo. Depois criam seus próprios loops corporais.",
  },
  {
    slug: "classificando-conjuntos",
    titulo: "Classificando e Criando Conjuntos",
    descricaoCurta:
      "Atividade que trabalha classificação e agrupamento por critérios definidos.",
    anos: ["4", "5", /*"6"*/],
    codigoBNCC: "EF04MA28",
    objetivos: [
      "Desenvolver reconhecimento de padrões",
      "Trabalhar classificação por critérios",
      "Estimular pensamento analítico",
    ],
    materiais: [
      "Objetos variados (botões, blocos, figuras geométricas)",
      "Cestos ou caixas",
    ],
    comoFunciona:
      "As crianças recebem diversos objetos e devem agrupá-los por critérios (cor, tamanho, forma). Depois explicam qual foi a regra utilizada para formar cada conjunto.",
  },
  {
    slug: "caca-aos-padroes",
    titulo: "Caça ao Tesouro dos Padrões",
    descricaoCurta:
      "Atividade de classificação e reconhecimento de padrões utilizando objetos físicos do ambiente escolar.",
    anos: ["1", "2"],
    codigoBNCC: "EF01MA09",
    objetivos: [
      "Identificar padrões visuais (cor, forma, tamanho) ",
      "Classificar objetos em conjuntos baseados em critérios lógicos ",
      "Desenvolver a observação sistemática",
    ],
    materiais: [
      "Objetos variados da sala de aula (lápis, brinquedos, folhas)",
      "Bambolês ou caixas para separar os grupos",
    ],
    comoFunciona:
      "Os alunos devem coletar objetos e organizá-los em grupos baseados em regras definidas pelo professor (ex: 'tudo que é vermelho' ou 'tudo que é redondo'). A atividade exercita o conceito computacional de reconhecimento de padrões e classificação de dados.",
  },
  {
    slug: "robo-humano",
    titulo: "O Robô Humano",
    descricaoCurta:
      "Uma dinâmica onde uma criança 'programa' a outra para realizar movimentos, introduzindo algoritmos e depuração.",
    anos: ["1", "2", "3"],
    codigoBNCC: "EF01MA11",
    objetivos: [
      "Criar e testar algoritmos usando movimentos do corpo",
      "Vivenciar a interação mediada por comandos",
      "Compreender a necessidade de instruções precisas",
    ],
    materiais: [
      "Cartões desenhados com setas (frente, trás, girar)",
      "Fita crepe para marcar o ponto de início e fim",
    ],
    comoFunciona:
      "Em duplas, um aluno é o 'programador' e o outro é o 'robô'. O programador deve dar uma sequência de instruções (algoritmo) para que o robô chegue a um objetivo. Se o robô errar, eles devem 'depurar' o código juntos, ajustando os movimentos.",
  },
  {
    slug: "decompondo-o-dia",
    titulo: "Decompondo o Dia a Dia",
    descricaoCurta:
      "Exercício de decomposição focado em quebrar tarefas rotineiras em passos menores e lógicos.",
    anos: ["2", "3", "4"],
    codigoBNCC: "EF02HI06",
    objetivos: [
      "Solucionar problemas decompondo-os em partes menores ",
      "Identificar etapas e sequenciamento lógico",
      "Estimular a autonomia na resolução de tarefas",
    ],
    materiais: [
      "Papel e lápis ou cartões com desenhos de rotina (escovar dentes, amarrar sapato)",
    ],
    comoFunciona:
      "Os alunos escolhem uma tarefa complexa (como 'se arrumar para a escola') e devem desenhar ou listar todas as micro-etapas necessárias para completá-la, colocando-as na ordem correta. Isso trabalha a abstração e a decomposição.",
  },
  {
    slug: "pixel-art-concreto",
    titulo: "Pixel Art com Materiais",
    descricaoCurta:
      "Introdução à representação de dados e imagens através de 'pixels' físicos, trabalhando a abstração.",
    anos: ["3", "4", "5"],
    codigoBNCC: "EF04MA16",
    objetivos: [
      "Compreender a representação de dados",
      "Trabalhar a abstração e a construção de imagens por unidades",
      "Seguir instruções codificadas para gerar um resultado visual",
    ],
    materiais: [
      "Post-its coloridos, tampinhas de garrafa ou blocos de montar",
      "Papel quadriculado",
    ],
    comoFunciona:
      "Os alunos recebem um 'código' (ex: 3 vermelhos, 2 azuis) e devem preencher uma grade física ou no papel para revelar uma imagem oculta. A atividade conecta a arte com o conceito de como computadores processam imagens.",
  },
  {
    slug: "danca-dos-loops",
    titulo: "A Dança da Repetição (Loops)",
    descricaoCurta:
      "Uso de música e dança para ensinar o conceito de repetição e ciclos na programação.",
    anos: ["1", "2"],
    codigoBNCC: "EF15AR10",
    objetivos: [
      "Identificar ciclos que se repetem e podem ser generalizados ",
      "Associar comandos auditivos a ações físicas",
      "Trabalhar o ritmo e a coordenação motora junto à lógica",
    ],
    materiais: [
      "Uma música animada",
      "Cartões com símbolos de repetição",
    ],
    comoFunciona:
      "O professor define uma sequência de movimentos (palma, pulo, gira). Ao levantar o cartão de 'Repetição', os alunos devem executar aquele bloco de movimentos continuamente até o sinal de pare. Isso ilustra o conceito de 'loop' ou laço de repetição.",
  },
  {
    slug: "jornada-do-heroi",
    titulo: "Jornada do Herói no Tabuleiro",
    descricaoCurta:
      "Criação de narrativas interativas onde os alunos constroem o caminho lógico de um personagem.",
    anos: ["3", "4", "5"],
    codigoBNCC: "EF03MA12",
    objetivos: [
      "Desenvolver o pensamento algorítmico e narrativo",
      "Antecipar problemas e planejar soluções",
      "Trabalhar em equipe para construir percursos",
    ],
    materiais: [
      "Giz ou fita para desenhar um tabuleiro gigante no chão",
      "Brinquedos ou os próprios alunos como peões",
    ],
    comoFunciona:
      "Os alunos desenham um mapa no chão com obstáculos. Eles devem escrever a 'história' (o algoritmo) de como o herói atravessa o mapa para pegar um item, definindo passos precisos antes de executar a ação.",
  },
  {
    slug: "mestre-mandou-condicional",
    titulo: "O Mestre Mandou... SE!",
    descricaoCurta:
      "Uma variação da brincadeira clássica para introduzir lógica condicional (Se/Então).",
    anos: ["1", "2", "3"],
    codigoBNCC: "EF12EF01",
    objetivos: [
      "Compreender condições lógicas (Se acontecer X, faça Y)",
      "Desenvolver atenção e controle inibitório",
      "Executar algoritmos baseados em regras variáveis",
    ],
    materiais: [
      "Cartões coloridos (Vermelho e Verde)",
      "Nenhum material extra necessário, apenas espaço livre",
    ],
    comoFunciona:
      "O professor dá comandos com condições: 'SE eu levantar o cartão verde, pulem. SE eu levantar o vermelho, agachem'. Isso ensina a estrutura de decisão que computadores usam.",
  },
  {
    slug: "algoritmo-do-sanduiche",
    titulo: "A Receita do Robô (Sanduíche)",
    descricaoCurta:
      "Atividade de decomposição onde as crianças escrevem instruções precisas para um 'robô' montar um lanche.",
    anos: ["3", "4", "5"],
    codigoBNCC: "EF03LP11",
    objetivos: [
      "Exercitar a decomposição de problemas em etapas menores",
      "Entender a importância da precisão nos comandos (sem ambiguidade)",
      "Identificar bugs (erros) na sequência lógica",
    ],
    materiais: [
      "Ingredientes de mentira (papel, feltro) ou reais (pão, queijo)",
      "Papel e lápis para anotar os passos",
    ],
    comoFunciona:
      "As crianças escrevem o passo a passo para fazer um sanduíche. O professor (atuando como um robô que não pensa) segue as instruções literalmente. Se a criança disser 'coloque o queijo no pão' sem dizer 'tire o plástico', o robô coloca com plástico. É divertido e ensina precisão.",
  },
  {
    slug: "binario-com-brinquedos",
    titulo: "Código Secreto com Brinquedos",
    descricaoCurta:
      "Introdução à representação de dados binários usando dois tipos de objetos para criar códigos.",
    anos: ["4", "5"],
    codigoBNCC: "EF04MA27",
    objetivos: [
      "Compreender que computadores usam sistemas de símbolos para guardar informação",
      "Codificar e decodificar mensagens simples",
      "Trabalhar a abstração e representação",
    ],
    materiais: [
      "Dois tipos de objetos (ex: blocos azuis e vermelhos)",
      "Tabela de conversão simples (ex: Azul-Vermelho = A)",
    ],
    comoFunciona:
      "Cada letra do alfabeto é representada por uma sequência de cores (ex: Azul-Azul = A). Os alunos escrevem seus nomes usando os blocos coloridos, entendendo como o computador 'vê' as letras.",
  },
  {
    slug: "rede-de-ordenacao",
    titulo: "A Grande Organização",
    descricaoCurta:
      "Atividade física para ensinar algoritmos de ordenação e comparação de valores.",
    anos: ["2", "3", "4"],
    codigoBNCC: "EF02MA16",
    objetivos: [
      "Identificar padrões de grandeza (maior/menor, mais pesado/mais leve)",
      "Executar um algoritmo de ordenação colaborativo",
      "Resolver problemas de organização de dados",
    ],
    materiais: [
      "Caixas de tamanhos diferentes ou garrafas com quantidades variadas de água",
      "Fita adesiva no chão marcando posições",
    ],
    comoFunciona:
      "As crianças recebem objetos com pesos ou tamanhos diferentes misturados. Elas devem trabalhar juntas para criar uma fila do menor para o maior, comparando os objetos par a par (lógica de 'Sorting Networks').",
  },
  {
    slug: "desenhando-por-comandos",
    titulo: "Artista Vendado",
    descricaoCurta:
      "Trabalho em duplas para reforçar a comunicação precisa e a execução de algoritmos visuais.",
    anos: ["3", "4", "5"],
    codigoBNCC: "EF03MA14",
    objetivos: [
      "Traduzir imagens em instruções verbais (algoritmos)",
      "Desenvolver a noção espacial e geométrica",
      "Trabalhar a cooperação e confiança no par",
    ],
    materiais: [
      "Papel em branco, lápis de cor e uma venda para os olhos",
      "Desenhos simples geométricos para servirem de 'gabarito'",
    ],
    comoFunciona:
      "Um aluno descreve um desenho geométrico (ex: 'desenhe um quadrado no centro') e o outro, vendado, tenta desenhar apenas ouvindo. Ao final, comparam o resultado (output) com o original para ver onde a comunicação falhou.",
  },
  {
    slug: "detector-de-padroes",
    titulo: "Detetive de Padrões na Natureza",
    descricaoCurta:
      "Exploração do ambiente para identificar repetições e estruturas lógicas fora do computador.",
    anos: ["1", "2"],
    codigoBNCC: "EF01CI01",
    objetivos: [
      "Reconhecer e identificar padrões visuais e comportamentais no ambiente",
      "Categorizar elementos por critérios observados",
      "Estimular a curiosidade científica e computacional",
    ],
    materiais: [
      "Lupas (opcional)",
      "Caderno de anotações ou câmera do celular para registro",
    ],
    comoFunciona:
      "Em um passeio pelo pátio, os alunos devem encontrar padrões (ex: 'folhas que têm pontas', 'pisos que se repetem'). Eles fotografam ou desenham e depois discutem quais regras a natureza usou para criar aquilo.",
  },
  {
    slug: "caminho-das-formas",
    titulo: "O Caminho das Formas",
    descricaoCurta:
      "Trilha motora onde a criança deve pisar apenas na sequência correta de formas geométricas.",
    anos: ["Pré 1"],
    codigoBNCC: "EI03ET05",
    objetivos: [
      "Desenvolver coordenação motora ampla",
      "Reconhecer e diferenciar formas geométricas",
      "Seguir regras condicionais simples",
    ],
    materiais: [
      "Formas geométricas de EVA ou papelão (círculo, quadrado, triângulo)",
      "Fita adesiva para fixar no chão",
    ],
    comoFunciona:
      "O professor monta uma trilha misturada no chão. A regra (condição lógica) é: 'atravesse o rio pisando apenas nos quadrados' ou 'pise no círculo e depois no triângulo'. A criança desenvolve a coordenação motora ao mesmo tempo que executa a instrução condicional, exercitando o foco e a autonomia.",
  },
  {
    slug: "separador-letras-numeros",
    titulo: "A Máquina de Separar Dados",
    descricaoCurta:
      "Atividade de classificação e reconhecimento de padrões para diferenciar números e letras.",
    anos: ["Pré 1", "Pré 2"],
    codigoBNCC: "EI03EF09",
    objetivos: [
      "Diferenciar graficamente letras de números",
      "Desenvolver autonomia na tomada de decisão",
      "Trabalhar a classificação e organização de dados",
    ],
    materiais: [
      "Cartões misturados contendo letras e números",
      "Duas caixas ou cestos rotulados (uma para Letras, outra para Números)",
    ],
    comoFunciona:
      "As crianças atuam como processadores de dados'. Elas pegam um cartão, analisam o símbolo (identificando se é letra ou número) e decidem em qual caixa ele deve ser armazenado. Isso introduz a ideia de organização de dados e bancos de dados físicos, fundamentais no processamento computacional.",
  },
  {
    slug: "codigo-do-meu-nome",
    titulo: "O Código Secreto do Meu Nome",
    descricaoCurta:
      "Criação de um colar ou pulseira usando cores para representar as letras do próprio nome.",
    anos: ["Pré 2"],
    codigoBNCC: "EI03CG05",
    objetivos: [
      "Praticar a escrita e o reconhecimento do próprio nome",
      "Desenvolver coordenação motora fina",
      "Compreender a representação de dados (codificação)",
    ],
    materiais: [
      "Miçangas, tampinhas furadas ou macarrão colorido",
      "Barbante",
      "Tabela na lousa associando vogais/letras a cores (ex: A = Amarelo, E = Verde)",
    ],
    comoFunciona:
      "Cada letra principal recebe uma cor na tabela de códigos. A criança deve 'escrever' seu próprio nome no barbante inserindo as peças nas cores correspondentes à tabela. Isso ensina de forma lúdica como os computadores representam informações complexas (textos) através de códigos alternativos (binário).",
  },
  {
    slug: "algoritmo-tesouro-espacial",
    titulo: "Algoritmo do Tesouro Espacial",
    descricaoCurta:
      "Jogo de orientação espacial onde as crianças usam quantificação e direções para encontrar um objeto.",
    anos: ["Pré 2"],
    codigoBNCC: "EI03ET01",
    objetivos: [
      "Avançar na noção de espaço (frente, trás, direita, esquerda)",
      "Praticar contagem e quantificação oral",
      "Criar sequências lógicas de passos (algoritmos)",
    ],
    materiais: [
      "Um objeto para ser o 'tesouro'",
      "Cartões com setas direcionais desenhadas",
    ],
    comoFunciona:
      "Uma criança esconde o tesouro e dita o algoritmo para o colega encontrá-lo, unindo contagem e noções espaciais ('dê 4 passos para frente, vire, dê 2 passos'). Se houver erro, eles param, revisam a rota ('depuram o código') e tentam novamente, trabalhando espaço, tempo e lógica lógico-matemática em conjunto.",
  }
];