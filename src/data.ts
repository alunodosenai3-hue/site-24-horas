import { PortfolioItem, ReviewItem, FAQItem, BenefitItem, BonusItem } from "./types";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "odontologia",
    name: "Dentista Premium - Odontologia Estética e Implantes de Alta Precisão",
    category: "Saúde & Estética",
    themeColor: "#8b5cf6",
    gradient: "from-violet-600 via-purple-700 to-indigo-800",
    description: "Página luxuosa desenvolvida sob medida para clínicas modernas de odontologia e profissionais de estética orofacial que buscam agendamentos qualificados no particular.",
    heroSnippet: "Dê vida ao seu sorriso com tratamentos modernos realizados por especialistas de alta confiança.",
    features: [
      "Agendamento no WhatsApp de alta conversão",
      "Lista de Especialidades com detalhes refinados",
      "Galeria de Fotos do Consultório com visual premium",
      "Avaliações Reais de Pacientes Integradas",
      "Endereço e rotas integradas ao Google Maps"
    ],
    demoUrl: "https://dentista-portifolio01.netlify.app/"
  },
  {
    id: "advocacia",
    name: "Advogado Corporativo - Direito Empresarial e Blindagem Patrimonial de Alta Performance",
    category: "Serviços Jurídicos",
    themeColor: "#b45309",
    gradient: "from-slate-900 via-amber-950 to-stone-900",
    description: "Visual sóbrio, limpo e extremamente luxuoso que eleva de imediato a autoridade jurídica do escritório. Perfeito para captação estratégica de causas corporativas de alto tíquete.",
    heroSnippet: "Defesa jurídica impecável e assessoria estratégica de alto nível para blindar o seu patrimônio corporativo.",
    features: [
      "Canal de Consulta Pronta via WhatsApp",
      "Áreas de Atuação Corporativa detalhadas",
      "Artigos, Notas Técnicas e Informativos",
      "Perfil dos Sócios e Equipe de Advogados",
      "Formulário avançado de contato seguro"
    ],
    demoUrl: "https://advogado-portifolio.netlify.app/"
  },
  {
    id: "moda",
    name: "Moda / Vestuário - Moda Feminina Autoral e Atemporal",
    category: "Varejo & Confecção",
    themeColor: "#ec4899",
    gradient: "from-pink-600 via-fuchsia-700 to-rose-700",
    description: "Vitrine digital deslumbrante focada em realçar o design, as fotos, os tecidos e o caimento único das peças. Proporciona uma jornada de desejo irresistível e facilidade de compra direta pelo direct ou WhatsApp.",
    heroSnippet: "Moda autoral e atemporal para vestir o seu melhor e expressar sua essence única.",
    features: [
      "Vitrine de Coleções com fotos em alta definição",
      "Botão de Pedido Direto via WhatsApp integrado",
      "Links rápidos para canais de atendimento e Redes Sociais",
      "Guia de Tamanhos interativo e simplificado",
      "Depoimentos reais de clientes satisfeitas"
    ],
    demoUrl: "https://moda-portifolio.netlify.app/"
  },
  {
    id: "farmacia",
    name: "Farmácia - Farmácia de Manipulação e Bem-Estar Familiar",
    category: "Saúde & Farmácia",
    themeColor: "#10b981",
    gradient: "from-emerald-500 via-teal-600 to-emerald-800",
    description: "Plataforma profissional desenvolvida para facilitar ao máximo o envio de receitas médicas e orçamentos. Layout super limpo e legível que inspira cuidado, segurança e saúde familiar.",
    heroSnippet: "Medicamentos manipulados e fórmulas personalizadas com máxima qualidade e carinho pela sua saúde.",
    features: [
      "Botão de Enviar Receita via WhatsApp em destaque",
      "Catálogo de Categorias de Medicamentos e Vitaminas",
      "Selos oficiais de conformidade técnica e qualidade",
      "Localização prática da unidade e canais de contato",
      "Opção de entrega expressa de fórmulas para o seu lar"
    ],
    demoUrl: "https://farmacia-portifolio.netlify.app/"
  },
  {
    id: "padaria",
    name: "Padaria Artesanal - Padaria de Fermentação Natural e Confeitaria Fina",
    category: "Alimentação & Gourmet",
    themeColor: "#f59e0b",
    gradient: "from-amber-600 via-orange-600 to-amber-900",
    description: "Aromas e sensações traduzidos em design. Um cardápio interativo irresistível com foco visual em pães artesanais rústicos, tortas finas de confeitaria e avisos programados de fornadas quentes.",
    heroSnippet: "Sabor incomparável do verdadeiro pão artesanal saído quentinho do forno todos os dias.",
    features: [
      "Cronograma em tempo real das fornadas quentes",
      "Cardápio ilustrado dinâmico de delícias",
      "Canal direto de encomendas pelo WhatsApp",
      "Espaço do Café e galeria de fotos acolhedoras",
      "Informações práticas de retirada e entrega"
    ],
    demoUrl: "https://padaria-portifolio.netlify.app/"
  },
  {
    id: "mercadinho",
    name: "Mercadinho / Hortifruti - Mercado de Conveniência e Hortifruti de Bairro",
    category: "Alimentação & Mercado",
    themeColor: "#059669",
    gradient: "from-green-600 via-emerald-800 to-teal-950",
    description: "Estrutura ágil para mercadinhos de proximidade e quitandas que buscam receber pedidos online com agilidade. Permite exibir o folheto de feira do dia de forma prática, elevando a confiança do cliente local.",
    heroSnippet: "Feira fresca selecionada do dia e ofertas especiais pertinho do seu lar com entrega ágil.",
    features: [
      "Encarte Digital de ofertas e frutas/verduras do dia",
      "Botão WhatsApp para Pedido e Entrega Rápida local",
      "Lista de Categorias de Produtos organizada",
      "Sinalização clara de taxa e área de atendimento",
      "Garantia de Qualidade e seleção cuidadosa de produtos"
    ],
    demoUrl: "https://mercadinho-portifolio.netlify.app/"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev1",
    name: "Mariana Souza",
    avatarBg: "from-purple-500 to-pink-500",
    role: "Proprietária da Sorveteria Doce Sabor",
    date: "Há 2 dias",
    comment: "Estou chocada com a rapidez de entrega! Fechei meu pedido ontem de manhã e hoje à tarde o site já estava no ar, perfeito, lindo e pronto para receber pedidos. O Lucas foi super atencioso e o melhor é que paguei somente quando vi tudo funcionando perfeitamente!"
  },
  {
    id: "rev2",
    name: "Dr. Bruno Ribeiro",
    avatarBg: "from-blue-500 to-cyan-500",
    role: "Médico Cardiologista",
    date: "Há 1 semana",
    comment: "Eu precisava de uma página profissional para o meu consultório particular que transmitisse seriedade e confiança. O resultado superou de longe o que eu esperava. Site extremamente rápido no celular, design impecável e suporte humano de altíssimo nível. Parabéns pelo profissionalismo!"
  },
  {
    id: "rev3",
    name: "Carlos Menezes",
    avatarBg: "from-amber-500 to-orange-500",
    role: "Eletricista Residencial & Comercial",
    date: "Há 3 semanas",
    comment: "Simplesmente incrível. Depois que meu site foi pro ar, o meu WhatsApp não para mais de tocar com clientes me solicitando orçamentos para serviços elétricos. O site realmente se paga na primeira semana. Lucas é um mestre nisso!"
  },
  {
    id: "rev4",
    name: "Patrícia Lima",
    avatarBg: "from-teal-500 to-emerald-500",
    role: "Artesã e Designer de Joias",
    date: "Há 1 mês",
    comment: "O Lucas me deu todo o suporte necessário para definir as melhores cores e mensagens para o meu público. Ele foi super prestativo, honesto e se preocupou verdadeiramente se o site traria retorno financeiro para o meu ateliê. Parceria de longo prazo fechada!"
  },
  {
    id: "rev5",
    name: "Felipe Rocha",
    avatarBg: "from-red-500 to-pink-500",
    role: "Fundador do Delivery Central Burger",
    date: "Há 1 mês",
    comment: "A segurança de só precisar pagar após ver o site pronto foi o que me fez fechar. Trabalho honesto demais. Ele cumpriu perfeitamente o prazo de 24 horas e ainda me deu dicas de como divulgar no meu bairro. Recomendo de olhos fechados!"
  },
  {
    id: "rev6",
    name: "Amanda Vieira",
    avatarBg: "from-indigo-500 to-violet-500",
    role: "Consultora de Negócios e Estilo",
    date: "Há 2 meses",
    comment: "Meu maior receio era contratar um site lento, que demorasse a carregar no 3G das minhas clientes. Mas a programação que eles fazem é ultra veloz! O site abre instantaneamente. Minhas clientes elogiaram bastante a facilidade de agendamento."
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "ben1",
    title: "Pagamento Somente na Entrega",
    description: "Você não assume nenhum risco financeiro. Nós criamos e configuramos seu site primeiro, você avalia, e só paga o valor único de R$ 97 após aprovar o projeto final."
  },
  {
    id: "ben2",
    title: "Ativação em Recorde de 24 Horas",
    description: "Nossa metodologia ágil nos permite desenvolver, programar e publicar o site do seu negócio pronto para atrair contatos em menos de um único dia útil."
  },
  {
    id: "ben3",
    title: "Plano de Manutenção Super Acessível",
    description: "Se não quiser mexer com códigos, oferecemos manutenção técnica completa de alterações por apenas R$ 50/mês. Este serviço é 100% opcional."
  },
  {
    id: "ben4",
    title: "Consultoria Estratégica Lucrativa",
    description: "Não entregamos apenas código. Você ganha uma consultoria sobre como usar o seu site para de fato converter acessos em vendas diárias no seu nicho."
  },
  {
    id: "ben5",
    title: "Honestidade e Suporte Humano",
    description: "Chega de falar com chatbots travados ou atendentes impessoais. Você terá atendimento direto com profissionais humanos que querem ver seu negócio crescer."
  },
  {
    id: "ben6",
    title: "Parceria Estreita de Longo Prazo",
    description: "Entendemos as dores do pequeno empresário. Trabalhamos lado a lado para ser o seu braço direito tecnológico em qualquer nova demanda que surgir."
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: "bon1",
    title: "Panfletagem Digital Express",
    description: "Aprenda o passo a passo definitivo para fazer anúncios pagos no Facebook, Instagram e WhatsApp de forma inteligente, investindo a partir de apenas R$ 6 por dia para inundar seu negócio de clientes locais.",
    iconName: "Gift"
  },
  {
    id: "bon2",
    title: "Fórmula de Crescimento Web",
    description: "Um manual prático direto ao ponto ensinando como potencializar as visitas do seu site sem investir em anúncios, otimizando as conversões e gerando desejo natural nas suas soluções com gatilhos mentais modernos.",
    iconName: "TrendingUp"
  },
  {
    id: "bon3",
    title: "Dominando o Google Negócio",
    description: "O guia estratégico detalhado para posicionar sua empresa no topo das pesquisas locais e no Google Maps. Descubra como receber centenas de avaliações 5 estrelas gratuitamente de forma consistente.",
    iconName: "MapPin"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Em quanto tempo o site fica realmente pronto?",
    answer: "Seu site é finalizado em até 24 horas úteis, a contar do momento em que você nos envia os dados básicos e textos (como nome do negócio, serviços, fotos, logotipo e WhatsApp). Nosso fluxo de trabalho inteligente nos capacita a publicar com velocidade impressionante!"
  },
  {
    id: "faq2",
    question: "Eu realmente só pago após o site estar pronto?",
    answer: "Sim! Essa é a nossa maior garantia de honestidade. Nós confiamos piamente no nosso produto. Desenvolvemos o site completo, colocamos no ar em nosso link para você navegar e testar no celular. Somente após você olhar e falar 'Ficou sensacional, está aprovado!' é que enviamos a chave PIX para o pagamento único de R$ 97,00."
  },
  {
    id: "faq3",
    question: "O site funciona com foco em celulares?",
    answer: "Sem dúvidas! Criamos a página usando a abordagem 'Mobile First' (Celular em Primeiro Lugar). Mais de 85% do tráfego atual na internet vem de smartphones, então sua página será extremamente otimizada, legível, com botões fáceis de tocar por polegares e sem qualquer tipo de quebra de layout."
  },
  {
    id: "faq4",
    question: "Vocês fazem alterações de cores, textos e fotos?",
    answer: "Com toda certeza. Mudamos o design de forma que case perfeitamente com a paleta de cores da sua marca ou logotipo. Colocamos as suas fotos originais (ou selecionamos as melhores imagens profissionais de banco licenciado se você não tiver fotos próprias) e encaixamos as redes sociais do seu negócio."
  },
  {
    id: "faq5",
    question: "O site fica rápido mesmo em conexões de internet fracas (3G/4G)?",
    answer: "Sim, incrivelmente rápido! Evitamos criadores de sites como WordPress ou Wix que carregam dezenas de plugins desnecessários deixando a tela pesada. Programamos seu site de forma limpa. Isso contribui para que ele abra quase instantaneamente, reduzindo drasticamente a desistência dos clientes."
  },
  {
    id: "faq6",
    question: "Há custos adicionais ocultos com hospedagem?",
    answer: "De forma alguma! A hospedagem em servidores velozes está inclusa sem taxas mensais para você na nossa conta coletiva. Não existe cobrança extra secreta. O pagamento do site é único de R$ 97,00."
  },
  {
    id: "faq7",
    question: "Posso utilizar meu próprio domínio personalizado?",
    answer: "Claro! Caso você já possua um domínio próprio (ex: www.seunegocio.com.br) ou queira registrá-lo no Registro.br, nós fazemos o apontamento técnico de graça. Se preferir não comprar agora, disponibilizamos um subdomínio premium gratuito para você usar sem custo."
  },
  {
    id: "faq8",
    question: "O site vai aparecer em buscas orgânicas do Google?",
    answer: "Sim. Estruturamos o site com as melhores tags de SEO técnico (H1, H2, Meta Tags descritivas, sitemap simplificado) para impulsionar o rastreamento do robô do Google e acelerar sua indexação na sua cidade."
  },
  {
    id: "faq9",
    question: "Como funciona a garantia de suporte pós-entrega?",
    answer: "Oferecemos uma cobertura de 7 dias de manutenção totalmente gratuita. Caso queira reajustar algum texto, telefone, endereço ou trocar alguma foto logo após a publicação, nós resolvemos para você rapidamente sem cobrar nada extra!"
  },
  {
    id: "faq10",
    question: "Qual o passo a passo para fazer meu pedido agora?",
    answer: "É extremamente fácil: clique em qualquer botão deste site. Você será direcionado para o nosso WhatsApp pessoal. Lá, tiramos qualquer dúvida rápida, você envia as cores ou tipo de segmento do seu negócio, e nós começamos a trabalhar imediatamente para entregar seu site em menos de 24 horas!"
  }
];
