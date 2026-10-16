export interface Ingredient {
  name: string;
  amount: string;
  detail: string;
  symbol: 'water' | 'soap' | 'sugar';
}

export interface Tutorial {
  title: string;
  description: string;
  youtubeUrl?: string;
  thumbnailUrl?: string;
  duration?: string;
  published: boolean;
}

export interface AdviceItem {
  title: string;
  description: string;
}

export const siteContent = {
  brand: {
    name: 'Super Bolhas',
    tagline: 'Encha o ar de bolhas e a memória de brincadeiras!',
  },
  siteUrl: '',
  seo: {
    title: 'Super Bolhas — prepare a mistura e comece a brincar',
    description:
      'Veja a receita da mistura para bolhas, aprenda o passo a passo e confira dicas e cuidados para brincar com a Super Bolhas.',
  },
  hero: {
    eyebrow: 'A brincadeira mais leve do dia começa aqui!',
    title: 'Prepare a mistura e solte a magia!',
    description: 'Receita na mão, bolhas no ar e muita diversão pela frente!',
  },
  recipe: {
    title: 'A receita da brincadeira',
    intro: 'Separe três ingredientes simples e prepare tudo com a ajuda de um adulto.',
    rest: 'Descanso mínimo: 30 minutos',
    ingredients: [
      { name: 'Água morna', amount: '100 ml', detail: 'Morna, não quente', symbol: 'water' },
      { name: 'Detergente', amount: '2 colheres', detail: 'De sopa', symbol: 'soap' },
      { name: 'Açúcar', amount: '1 colher', detail: 'De sopa', symbol: 'sugar' },
    ] satisfies Ingredient[],
    steps: [
      'Dissolva o açúcar na água morna.',
      'Acrescente o detergente.',
      'Misture devagar, sem fazer espuma.',
      'Deixe descansar por pelo menos 30 minutos.',
    ],
  },
  tutorials: [
    { title: 'Como preparar a mistura', description: 'A receita explicada passo a passo.', published: false },
    { title: 'Como usar a argola', description: 'Um jeito simples de começar a brincar.', published: false },
    { title: 'Dicas para criar bolhas maiores', description: 'Ideias para experimentar com a sua argola.', published: false },
  ] as Tutorial[],
  tutorialEmpty:
    'Estamos preparando vídeos cheios de magia! Enquanto isso, bora descobrir as dicas para fazer suas bolhas?',
  tips: [
    { title: 'Misture com calma', description: 'Misture os ingredientes devagar para evitar espuma em excesso.' },
    { title: 'Dê um tempinho', description: 'Deixe a mistura descansar por pelo menos 30 minutos antes de brincar.' },
    { title: 'Procure um vento leve', description: 'Um local com brisa suave pode ser mais agradável do que um lugar com vento forte.' },
    { title: 'Fuja do calor muito seco', description: 'Quando puder, escolha um lugar que não esteja excessivamente quente e seco.' },
    { title: 'Cuide da argola', description: 'Manuseie a argola com delicadeza e mantenha o acessório limpo.' },
  ] satisfies AdviceItem[],
  troubleshooting: [
    { title: 'As bolhas estouram muito rápido', description: 'Confira a mistura, respeite o tempo de descanso e tente brincar longe do vento forte.' },
    { title: 'A mistura está fazendo muita espuma', description: 'Mexa devagar e evite agitar o recipiente com força.' },
    { title: 'Está difícil formar bolhas', description: 'Confira se a argola está limpa e faça movimentos suaves.' },
  ] satisfies AdviceItem[],
  safety: [
    'A supervisão de um adulto é recomendada durante a preparação e a brincadeira.',
    'Não ingerir a mistura.',
    'Evite o contato com os olhos. Se acontecer, enxágue cuidadosamente com água limpa.',
    'Mantenha os ingredientes e a mistura fora do alcance de crianças pequenas quando não estiverem em uso.',
    'A água morna deve ser manuseada por um adulto.',
    'A mistura pode deixar pisos escorregadios. Limpe respingos imediatamente.',
    'Lave as mãos após a brincadeira.',
  ],
  contact: undefined as { whatsappUrl: string } | undefined,
};
