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
    titulo: "Curso em Vídeo",
    descricao: "Canal lendário do Gustavo Guanabara. Embora focado em código, tem playlists excelentes sobre lógica de programação e algoritmos.",
    categoria: "Canal",
    link: "https://www.youtube.com/cursoemvideo",
    autor: "Gustavo Guanabara",
  },
  {
    id: "2",
    titulo: "Manual do Mundo",
    descricao: "Canal de experimentos maker que ensina muita física e lógica de construção, essencial para a cultura maker e desplugada.",
    categoria: "Canal",
    link: "https://www.youtube.com/manualdomundo",
    autor: "Iberê Thenório",
  },
  {
    id: "3",
    titulo: "Desplugando Ideias",
    descricao: "Canal inteiramente dedicado à computação desplugada. Traz dinâmicas prontas, brincadeiras e explicações didáticas de como ensinar lógica de programação sem o uso de telas.",
    categoria: "Canal",
    link: "https://www.youtube.com/channel/UCL5QH-dXyhnlc70rPAX93ew",
    autor: "Desplugando Ideias",
  },
  {
    id: "4",
    titulo: "Brino Robótica Educacional",
    descricao: "Focado em democratizar o ensino de tecnologia. Possui playlists fantásticas sobre como ensinar robótica e lógica computacional com materiais de sucata e dinâmicas desplugadas.",
    categoria: "Canal",
    link: "https://www.youtube.com/channel/UCNtwMLJg3lVNdCqko-XoODA",
    autor: "Brino Robótica",
  },
  {
    id: "5",
    titulo: "Nova Escola",
    descricao: "A maior referência para educadores no Brasil. Oferece vídeos excelentes sobre a implementação da BNCC, metodologias ativas e práticas pedagógicas inovadoras na Educação Infantil e Fundamental.",
    categoria: "Canal",
    link: "https://www.youtube.com/channel/UCxljPOm_cpojwny5H8EGEtQ",
    autor: "Associação Nova Escola",
  },
  
  {
    id: "6",
    titulo: "Lightbot",
    descricao: "Um jogo de quebra-cabeça que usa lógica de programação para guiar um robô. Excelente para entender sequenciamento.",
    categoria: "Jogo",
    link: "https://lightbot.com/",
    autor: "SpriteBox",
  },
  {
    id: "7",
    titulo: "ScratchJr",
    descricao: "Desenvolvido pelo MIT especificamente para a faixa etária de 5 a 7 anos. Usa blocos de montar digitais 100% visuais (sem necessidade de leitura) para introduzir lógica e sequenciamento.",
    categoria: "Jogo",
    link: "https://www.scratchjr.org/",
    autor: "MIT e Tufts University",
  },
  {
    id: "8",
    titulo: "Code.org (Hora do Código)",
    descricao: "Plataforma mundial com minijogos que utilizam personagens famosos (como Minecraft e Frozen) para ensinar blocos de comando, repetições (loops) e condicionais.",
    categoria: "Jogo",
    link: "https://hourofcode.com/br/learn",
    autor: "Code.org",
  },
  {
    id: "9",
    titulo: "Run Marco!",
    descricao: "Jogo de aventura muito semelhante ao Lightbot, traduzido para o português. A criança utiliza blocos de programação visual para guiar o personagem por um mapa cheio de obstáculos.",
    categoria: "Jogo",
    link: "https://runmarco.allcancode.com/",
    autor: "Allcancode",
  },
  {
    id: "10",
    titulo: "Hello Ruby: Uma aventura pela programação",
    descricao: "Livro infantil que ensina conceitos de lógica e pensamento computacional através de histórias, sem precisar de computador.",
    categoria: "Livro",
    link: "https://www.helloruby.com/",
    autor: "Linda Liukas",
  },
  
  {
    id: "11",
    titulo: "Ensino Criativo",
    descricao: "Livro fundamental do Mitchel Resnick (criador do Scratch) sobre como criar ambientes de aprendizagem criativa.",
    categoria: "Livro",
    link: "https://www.amazon.com.br/s?k=Jardim+de+Infância+para+a+Vida+Toda",
    autor: "Mitchel Resnick",
  },
  {
    id: "12",
    titulo: "Inventar para Aprender: Cultura Maker na Sala de Aula",
    descricao: "O guia definitivo sobre a cultura maker educacional. Explora como o trabalho manual, a construção de artefatos e a aprendizagem tangível se conectam com a lógica computacional.",
    categoria: "Livro",
    link: "https://www.amazon.com.br/s?k=Inventar+para+Aprender+Cultura+Maker",
    autor: "Sylvia Martinez e Gary Stager",
  },
  {
    id: "13",
    titulo: "A Máquina das Crianças: Repensando a Escola na Era da Informática",
    descricao: "Clássico atemporal de Seymour Papert. O autor fundamenta a teoria do Construcionismo e defende que a criança deve 'programar' o seu aprendizado ativamente.",
    categoria: "Livro",
    link: "https://www.amazon.com.br/s?k=A+Máquina+das+Crianças+Seymour+Papert",
    autor: "Seymour Papert",
  },
 {
    id: "14",
    titulo: "Pensamento Computacional na Educação Infantil (Guia Prático)",
    descricao: "Livro desenvolvido pelo IFRS (Instituto Federal do RS) que oferece estratégias práticas, acessíveis e inclusivas, alinhadas à BNCC, para desenvolver algoritmos e abstração com crianças, sem o uso de computadores.",
    categoria: "Material",
    link: "https://dspace.ifrs.edu.br/xmlui/handle/123456789/1559",
    autor: "Instituto Federal (IFRS)",
  },
  {
    id: "15",
    titulo: "Currículo de Referência em Tecnologia (CIEB)",
    descricao: "Um material completo em PDF com trilhas e cadernos complementares focados nos anos iniciais, mostrando como aplicar a lógica da computação com recursos do dia a dia da sala de aula.",
    categoria: "Material",
    link: "https://cieb.net.br/",
    autor: "CIEB",
  },
  {
    id: "16",
    titulo: "Diretrizes de Computação na Educação Básica",
    descricao: "Material oficial da Sociedade Brasileira de Computação (SBC) com exemplos de dinâmicas gratuitas e validadas para o ensino do pensamento computacional nas escolas públicas e privadas.",
    categoria: "Material",
    link: "https://www.sbc.org.br/",
    autor: "SBC (Soc. Bras. de Computação)",
  },
  {
    id: "17",
    titulo: "Computação na Escola (UFSC)",
    descricao: "Iniciativa universitária dedicada a levar o ensino de computação para a Educação Básica. Compartilham diversas pesquisas e práticas de atividades desplugadas e maker.",
    categoria: "Perfil",
    link: "https://www.instagram.com/computacaonaescola/",
    autor: "@computacaonaescola",
  },
  {
    id: "18",
    titulo: "Débora Garofalo",
    descricao: "Referência nacional em tecnologia na educação. Ela compartilha diariamente sua vivência com robótica com sucata, cultura maker e desenvolvimento do pensamento computacional criativo com recursos de baixo custo.",
    categoria: "Perfil",
    link: "https://www.instagram.com/garofalodebora/",
    autor: "@garofalodebora",
  },
  {
    id: "19",
    titulo: "Porvir - Inovação em Educação",
    descricao: "O principal portal de jornalismo e inovação educacional do Brasil. O perfil é uma fonte inesgotável de tendências, metodologias ativas e debates sobre a implementação da tecnologia na BNCC.",
    categoria: "Perfil",
    link: "https://www.instagram.com/porvir_/",
    autor: "@porvir_",
  },
  {
    id: "20",
    titulo: "Hipsters.tech",
    descricao: "Podcast sobre tecnologia e desenvolvimento. Procure os episódios sobre 'Educação em Tecnologia' e 'Início de Carreira'.",
    categoria: "Podcast",
    link: "https://hipsters.tech/",
    autor: "Alura",
  },
  {
    id: "21",
    titulo: "Pizza de Dados",
    descricao: "Conversas descontraídas sobre ciência de dados, mas que abordam muito sobre como pensar de forma analítica.",
    categoria: "Podcast",
    link: "https://pizzadedados.com/",
    autor: "Comunidade BR",
  },
   {
    id: "22",
    titulo: "Tecnologia na Educação (Porvir & CIEB)",
    descricao: "Série de debates essenciais focados na educação básica, abordando desde a formação de professores até o desenvolvimento do pensamento computacional e competências digitais em sala de aula.",
    categoria: "Podcast",
    link: "https://cieb.net.br/podcasts/",
    autor: "Porvir e CIEB",
  },
  
  {
    id: "23",
    titulo: "Programação Desplugada: Conheça essa prática!",
    descricao: "Um guia muito visual sobre como trabalhar a percepção, lateralidade e introdução aos algoritmos com crianças, sem o uso de telas ou eletrônicos.",
    categoria: "Vídeo",
    link: "https://www.youtube.com/watch?v=Zd_ZOk_lnYo",
    autor: "Canal: Aprendiz 21",
  },
  {
    id: "24",
    titulo: "Como ensinar robótica e lógica sem o computador",
    descricao: "Apresenta dinâmicas poderosas de computação desplugada para abordar raciocínio lógico e pensamento sequencial através de movimentos do corpo e interação.",
    categoria: "Vídeo",
    link: "https://www.youtube.com/watch?v=b_SCanxP4Ys",
    autor: "Canal: Brino Robótica Educacional",
  },
 
 
  
];