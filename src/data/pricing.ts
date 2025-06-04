export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export const pricingPlansData: PricingPlan[] = [
  {
    id: 'starter-website',
    name: 'AI Starter Website',
    price: '$999',
    frequency: 'one-time',
    description: 'A foundational AI-enhanced website to get your business online with intelligence.',
    features: [
      'Up to 5 Pages',
      'Basic AI Chatbot Integration',
      'SEO Fundamentals',
      'Responsive Design',
      'Contact Form',
      '1 Month Support',
    ],
    ctaText: 'Get Started',
    ctaLink: '/contact?plan=starter-website',
  },
  {
    id: 'pro-bot',
    name: 'Pro AI Bot Agent',
    price: '$499',
    frequency: '/month',
    description: 'Advanced Botpress agent with custom workflows and integrations.',
    features: [
      'Custom NLU Training',
      'Up to 3 Integrations (CRM, etc.)',
      'Advanced Analytics',
      'Multi-platform Deployment',
      'Ongoing Maintenance & Optimization',
      'Priority Support',
    ],
    isPopular: true,
    ctaText: 'Choose Pro Bot',
    ctaLink: '/contact?plan=pro-bot',
  },
  {
    id: 'enterprise-solution',
    name: 'Enterprise AI Solution',
    price: 'Custom',
    frequency: '',
    description: 'Bespoke AI solutions including complex websites, multiple bots, and backend systems.',
    features: [
      'Full-Scale AI Website Development',
      'Unlimited Botpress Agents',
      'Custom AI Backend Development',
      'Dedicated Project Manager',
      'Full System Integration',
      '24/7 Enterprise Support',
      'Service Level Agreement (SLA)',
    ],
    ctaText: 'Request a Quote',
    ctaLink: '/contact?plan=enterprise-solution',
  },
];
