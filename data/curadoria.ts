export interface Recurso {
  id: string;
  titulo: string;
  descricao: string;
  categoria: "Livro" | "Vídeo" | "Jogo" | "Material" | "Canal" | "Podcast" | "Perfil";
  link: string;
  autor: string;
}

export const recursos: Recurso[] = [
  {
    id: "1",
    titulo: "Hello Ruby: Uma aventura pela programação",
    descricao: "Livro infantil que ensina conceitos de lógica e pensamento computacional através de histórias, sem precisar de computador.",
    categoria: "Livro",
    link: "https://www.helloruby.com/",
    autor: "Linda Liukas",
  },
  {
    id: "2",
    titulo: "Computação Desplugada (PDF Gratuito)",
    descricao: "O guia clássico com dezenas de atividades gratuitas para ensinar ciência da computação apenas com papel, caneta e movimento.",
    categoria: "Material",
    link: "https://classic.csunplugged.org/books/",
    autor: "CS Unplugged",
  },
  {
    id: "3",
    titulo: "Lightbot",
    descricao: "Um jogo de quebra-cabeça que usa lógica de programação para guiar um robô. Excelente para entender sequenciamento.",
    categoria: "Jogo",
    link: "https://lightbot.com/",
    autor: "SpriteBox",
  },
  {
    id: "4",
    titulo: "O que é Pensamento Computacional?",
    descricao: "Vídeo curto e didático explicando os pilares do pensamento computacional de forma ilustrada.",
    categoria: "Vídeo",
    link: "https://www.youtube.com/",
    autor: "Canal TechEdu",
  },
  {
    id: "5",
    titulo: "Ensino Criativo",
    descricao: "Livro fundamental do Mitchel Resnick (criador do Scratch) sobre como criar ambientes de aprendizagem criativa.",
    categoria: "Livro",
    link: "https://www.amazon.com.br",
    autor: "Mitchel Resnick",
  },
  {
    id: "6",
    titulo: "Baralho de Algoritmos",
    descricao: "Material para impressão com cartas de comandos para criar atividades desplugadas em sala de aula.",
    categoria: "Material",
    link: "#",
    autor: "Recurso Próprio",
  },
  {
    id: "7",
    titulo: "Curso em Vídeo",
    descricao: "Canal lendário do Gustavo Guanabara. Embora focado em código, tem playlists excelentes sobre lógica de programação e algoritmos.",
    categoria: "Canal",
    link: "https://www.youtube.com/cursoemvideo",
    autor: "Gustavo Guanabara",
  },
  {
    id: "8",
    titulo: "Manual do Mundo",
    descricao: "Canal de experimentos maker que ensina muita física e lógica de construção, essencial para a cultura maker e desplugada.",
    categoria: "Canal",
    link: "https://www.youtube.com/manualdomundo",
    autor: "Iberê Thenório",
  },
  {
    id: "9",
    titulo: "Hipsters.tech",
    descricao: "Podcast sobre tecnologia e desenvolvimento. Procure os episódios sobre 'Educação em Tecnologia' e 'Início de Carreira'.",
    categoria: "Podcast",
    link: "https://hipsters.tech/",
    autor: "Alura",
  },
  {
    id: "10",
    titulo: "Pizza de Dados",
    descricao: "Conversas descontraídas sobre ciência de dados, mas que abordam muito sobre como pensar de forma analítica.",
    categoria: "Podcast",
    link: "https://pizzadedados.com/",
    autor: "Comunidade BR",
  },
  {
    id: "11",
    titulo: "Dicas de Lógica Rápida",
    descricao: "Perfil focado em desafios rápidos de lógica e charadas matemáticas para usar como 'quebra-gelo' nas aulas.",
    categoria: "Perfil",
    link: "https://tiktok.com",
    autor: "@logica_rapida",
  }
];