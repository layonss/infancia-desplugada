export interface Membro {
  id: string;
  nome: string;
  funcao: string;
  bio: string;
  foto?: string; // Caminho da foto na pasta public
  lattes?: string;
  linkedin?: string;
  destaque: boolean;
}

export const equipe: Membro[] = [
  {
    id: "1",
    nome: "Prof. Dra. Jéssica Zacarias de Andrade",
    funcao: "Coordenadora & Orientadora",
    bio: "Doutora em Educação pela PUC-Rio com estágio na Universidade de Lisboa. Professora do Programa de Pós-Graduação em Educação da Universidade Estácio de Sá (PPGE/UNESA). Atualmente lidera o projeto de pesquisa 'Infância (Des)Plugada: Computação com/para crianças na Educação Infantil', investigando práticas pedagógicas para o desenvolvimento do pensamento computacional na primeira infância.",
    foto: "/membros/jessica-andrade.jpg", // Nome sugerido para o arquivo
    lattes: "http://lattes.cnpq.br/7614397636294870",
    destaque: true,
  },
  {
    id: "2",
    nome: "Layon Araujo",
    funcao: "Desenvolvedor & Pesquisador",
    bio: "Graduando em Pedagogia. Voluntário de Iniciação Científica (IC) responsável pelo desenvolvimento da plataforma web e curadoria de ferramentas digitais do projeto Infância Desplugada, que servirá como veículo para disseminar esse conhecimento e ferramentas para educadores.",
    foto: "/membros/seu-nome.jpg",
    lattes: "http://lattes.cnpq.br/8941574767249674", // Coloque seu link real
    destaque: false,
  },
  // Adicione outros membros aqui se houver (ex: voluntários do GETEC)
  {
    id: "3",
    nome: "Kamille Amaro",
    funcao: "Pesquisadora (Artigos)",
    bio: "Graduanda em Pedagogia. Voluntária de Iniciação Científica (IC) Responsável pelo levantamento bibliográfico e curadoria de artigos científicos sobre computação desplugada. Encarregada do levantamento do estado da arte sobre o tema. Sua pesquisa mapeia artigos científicos e relatos de experiência recentes (2020-2024), investigando como o pensamento computacional tem sido aplicado na prática dentro das salas de aula da Educação Infantil.",
    foto: "/membros/seu-nome.jpg",
    lattes: "http://lattes.cnpq.br/7396642264188211",
    destaque: false,
  },
  {
    id: "4",
    nome: "Mayara Brito",
    funcao: "Pesquisadora ",
    bio: "Focada na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    lattes: "#",
    destaque: false,
  },
  {
    id: "5",
    nome: "Juliane Alves",
    funcao: "Pesquisadora (Pedagogia)",
    bio: "Responsável pela investigação dos documentos norteadores da BNCC Computação. Seu trabalho foca na análise de conteúdo das diretrizes educacionais, categorizando e interpretando como a computação deve ser inserida nas políticas públicas da Educação Infantil.",
    foto: "/membros/seu-nome.jpg",
    lattes: "http://lattes.cnpq.br/2227603650301535",
    destaque: false,
  },
  {
    id: "6",
    nome: "Giullia Marçal",
    funcao: "Pesquisadora (Pedagogia)",
    bio: "Focada na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    lattes: "http://lattes.cnpq.br/9344532414513653",
    destaque: false,
  },
  {
    id: "7",
    nome: "Gabriel Moreno Felippe",
    funcao: "Pesquisador (Pedagogia)",
    bio: "Focado na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    lattes: "#",
    destaque: false,
  },
  {
    id: "8",
    nome: "Júlia",
    funcao: "Pesquisadora (Pedagogia)",
    bio: "Focada na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    lattes: "#",
    destaque: false,
  },
  {
    id: "9",
    nome: "July",
    funcao: "Pesquisadora (Pedagogia)",
    bio: "Focada na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    lattes: "#",
    destaque: false,
  },
];