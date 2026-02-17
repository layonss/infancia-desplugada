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
    nome: "Seu Nome",
    funcao: "Desenvolvedor & Pesquisador",
    bio: "Graduando em Sistemas de Informação. Bolsista de Iniciação Científica (IC) responsável pelo desenvolvimento da plataforma web e pela curadoria técnica de ferramentas desplugadas.",
    foto: "/membros/seu-nome.jpg",
    linkedin: "https://linkedin.com/in/seu-perfil", // Coloque seu link real
    destaque: false,
  },
  // Adicione outros membros aqui se houver (ex: voluntários do GETEC)
   {
    id: "3",
    nome: "Layon",
    funcao: "Desenvolvedor & Pesquisador",
    bio: "Graduando em Pedagogia. Responsável pelo desenvolvimento da plataforma web e curadoria de ferramentas digitais do projeto Infância Desplugada.",
    foto: "/membros/seu-nome.jpg",
    linkedin: "https://linkedin.com/in/seu-perfil",
    destaque: false,
  },
  {
    id: "4",
    nome: "Fulano da Silva",
    funcao: "Pesquisador (Artigos)",
    bio: "Responsável pelo levantamento bibliográfico e curadoria de artigos científicos sobre computação desplugada.",
    foto: "/membros/seu-nome.jpg",
    lattes: "#",
    destaque: false,
  },
  {
    id: "5",
    nome: "Ciclana de Souza",
    funcao: "Pesquisadora (Pedagogia)",
    bio: "Focada na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    destaque: false,
  },
  {
    id: "6",
    nome: "Ciclana de Souza",
    funcao: "Pesquisadora (Pedagogia)",
    bio: "Focada na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    destaque: false,
  },
  {
    id: "7",
    nome: "Ciclana de Souza",
    funcao: "Pesquisadora (Pedagogia)",
    bio: "Focada na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    destaque: false,
  },
  {
    id: "8",
    nome: "Ciclana de Souza",
    funcao: "Pesquisadora (Pedagogia)",
    bio: "Focada na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    destaque: false,
  },
  {
    id: "9",
    nome: "Ciclana de Souza",
    funcao: "Pesquisadora (Pedagogia)",
    bio: "Focada na análise pedagógica das atividades e adaptação para o ensino fundamental.",
    foto: "/membros/seu-nome.jpg",
    destaque: false,
  },
];