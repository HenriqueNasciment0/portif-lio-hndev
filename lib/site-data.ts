export interface PortfolioProject {
  title: string;
  status: string;
  category: string;
  description: string;
  impact: string;
  technologies: string[];
  highlights: string[];
  imageSrc: string;
  imageHint: string;
  liveUrl?: string;
  repoUrl?: string;
  note?: string;
}

export const featuredProjects: PortfolioProject[] = [
  {
    title: 'Draftos',
    status: 'Case principal',
    category: 'SaaS | Documentos e assinatura',
    description:
      'Plataforma para geracao de documentos profissionais, fluxos de assinatura eletrônica, formulários, batches e uso via API ou interface visual.',
    impact:
      'Produto desenvolvido end-to-end, incluindo stack em TypeScript e Node.js, configuracao completa em VPS, monitoramento do sistema e automacoes com n8n.',
    technologies: ['TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'n8n', 'Linux/VPS'],
    highlights: [
      'Arquitetura e implementacao do produto do zero ate o ambiente de producao.',
      'Operacao com deploy, observabilidade e sustentacao da infraestrutura.',
      'Evolucao do ecossistema com SDKs de instalacao para PHP e Python.',
    ],
    imageSrc: '/images/projects/draftos-cover.webp',
    imageHint: 'Print da dashboard, editor de template ou fluxo de assinatura do Draftos.',
    liveUrl: 'https://draftos.com.br',
  },
  {
    title: 'BoostedMeds',
    status: 'Telehealth',
    category: 'Telehealth | Mercado dos EUA',
    description:
      'Site de telehealth orientado a conversao para venda de tratamento de saude masculina nos Estados Unidos.',
    impact:
      'Experiencia digital pensada para aquisicao, clareza comercial e posicionamento premium em um mercado regulado e altamente competitivo.',
    technologies: ['Next.js', 'TypeScript', 'Landing Pages', 'UX de Conversao', 'Deploy Web'],
    highlights: [
      'Fluxo orientado a aquisicao com destaque para avaliacao online e onboarding.',
      'Camada visual forte, posicionamento premium e narrativa comercial consistente.',
      'Experiencia alinhada a performance de landing page e jornada de conversao.',
    ],
    imageSrc: '/images/projects/boostedmeds-cover.webp',
    imageHint: 'Print da hero, da seção de produto ou da jornada de onboarding.',
    liveUrl: 'https://boostedmeds.com',
  },
  {
    title: 'TranslateLua',
    status: 'Publicado',
    category: 'Landing Page | Captacao de leads',
    description:
      'Landing page focada em captacao de interessados em servicos de traducao ingles-portugues com fluxo simples e direto.',
    impact:
      'Mostra capacidade de construir experiencias enxutas de conversao com integracao operacional para captar e organizar leads automaticamente.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Google Sheets API', 'Vercel'],
    highlights: [
      'Integração de leads com planilha para operacao rapida.',
      'Estrutura pensada para clareza, CTA e validacao de interesse.',
      'Bom case para mostrar entregas objetivas com valor comercial.',
    ],
    imageSrc: '/images/projects/translatelua-cover.webp',
    imageHint: 'Print da landing page completa ou da hero com CTA principal.',
    liveUrl: 'https://translatelua.vercel.app/',
    repoUrl: 'https://github.com/HenriqueNasciment0/lp-luatrad',
  },
  {
    title: 'Pokedex BSN',
    status: 'Mobile showcase',
    category: 'Angular | Ionic',
    description:
      'Pokedex mobile-first desenvolvida com Ionic Angular e componentes standalone, com scroll infinito, favoritos persistidos e visual dark refinado.',
    impact:
      'Projeto que amplia o repertorio do portfólio ao mostrar dominio de Angular, cuidado com UX mobile e construcoes fora do ecossistema React.',
    technologies: ['Angular', 'Ionic', 'TypeScript', 'Standalone Components', 'Vercel'],
    highlights: [
      'Infinite scroll controlado carregando 20 pokemons por vez.',
      'Sistema de favoritos com armazenamento local e feedback interativo.',
      'Design system com cores dinamicas baseadas no tipo do pokemon.',
    ],
    imageSrc: '/images/projects/pokedex-bsn-cover.webp',
    imageHint: 'Print da tela inicial mobile ou da listagem com cards e favoritos.',
    liveUrl: 'https://pokedex-bsn.vercel.app/tabs/home',
    repoUrl: 'https://github.com/HenriqueNasciment0/pokedex-bsn',
    note: 'Projeto apresentado como showcase mobile e exploracao de interface, nao como case principal de negocio.',
  },
];

export const inProgressProjects: PortfolioProject[] = [
  {
    title: 'CRM Operacional',
    status: 'Em andamento',
    category: 'Produto interno / gestao comercial',
    description:
      'Aplicacao para centralizar relacionamento, acompanhamento de oportunidades e operacao comercial.',
    impact:
      'Importante para mostrar visao de produto de negocio e modelagem de fluxo operacional.',
    technologies: ['TypeScript', 'Node.js', 'Next.js', 'PostgreSQL'],
    imageSrc: '/images/projects/crm-cover.webp',
    imageHint: 'Print do pipeline comercial, dashboard ou tela de clientes.',
    highlights: [
      'Pipeline comercial e organizacao operacional.',
      'Base para dashboards, historico e produtividade de equipe.',
    ],
  },
  {
    title: 'Plataforma para fotografa',
    status: 'Em andamento',
    category: 'Portal de servicos e gestao',
    description:
      'Site para exibicao de trabalhos, fechamento de servicos, contratos, locacoes e organizacao da relacao com clientes.',
    impact:
      'Case forte por combinar portfólio visual, funil comercial e camada administrativa.',
    technologies: ['Next.js', 'TypeScript', 'Contratos', 'Gestao de Locacoes'],
    imageSrc: '/images/projects/fotografa-cover.webp',
    imageHint: 'Print da galeria premium ou da tela de contratos/servicos.',
    highlights: [
      'Exibicao de acervo com experiencia premium.',
      'Gestao de contratos e acompanhamento de servicos.',
    ],
  },
  {
    title: 'App mobile de recibos',
    status: 'Em andamento',
    category: 'React Native | Expo',
    description:
      'Aplicativo mobile para gerir recibos, acompanhar despesas e gerar relatorios consolidados de gastos.',
    impact:
      'Acrescenta maturidade ao portfólio por mostrar rastreio financeiro, mobilidade e foco em usabilidade cotidiana.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Relatorios', 'Mobile UX'],
    imageSrc: '/images/projects/recibos-mobile-cover.webp',
    imageHint: 'Print da tela de listagem de recibos ou do relatorio consolidado.',
    highlights: [
      'Cadastro e controle de comprovantes e despesas.',
      'Relatorios totais para visibilidade financeira.',
    ],
  },
];
