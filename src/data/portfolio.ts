import type { LucideIcon } from 'lucide-react';
import { Bot, Globe, Cpu } from 'lucide-react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Website' | 'Bot' | 'Backend';
  Icon: LucideIcon;
  imageUrl: string;
  imageAiHint: string;
  summary: string;
  description: string;
  technologies: string[];
  results: string[];
  client?: string;
  liveLink?: string;
  caseStudyLink?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'ai-enhanced-e-commerce-platform',
    title: 'AI-Enhanced E-commerce Platform',
    category: 'Website',
    Icon: Globe,
    imageUrl: '/images/portfolio/commerce.png',
    imageAiHint: 'online store',
    summary: 'Developed a personalized e-commerce website that increased sales by 30%.',
    description: 'This project involved building a full-fledged e-commerce platform with AI-driven product recommendations, personalized user dashboards, and intelligent search functionality. The goal was to improve user engagement and boost conversion rates for an online retailer.',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Firebase', 'Recommendation AI'],
    results: [
      '30% increase in average order value.',
      '25% improvement in user session duration.',
      'Significant reduction in cart abandonment rates.',
    ],
    client: 'FashionForward Co.',
    liveLink: '#',
  },
  {
    id: 'customer-service-ai-chatbot',
    title: 'Customer Service AI Chatbot',
    category: 'Bot',
    Icon: Bot,
    imageUrl: '/images/portfolio/saas.png',
    imageAiHint: 'customer support',
    summary: 'Deployed a Botpress agent that resolved 70% of customer queries automatically.',
    description: 'We developed and integrated a custom Botpress agent for a SaaS company to handle customer support inquiries. The bot was trained on company documentation and FAQs, and integrated with their existing helpdesk software.',
    technologies: ['Botpress', 'NLU', 'Dialogflow', 'Zendesk API'],
    results: [
      '70% of Tier-1 support queries automated.',
      'Reduced average response time by 80%.',
      'Improved customer satisfaction scores by 15%.',
    ],
    client: 'SupportSync Ltd.',
  },
  {
    id: 'ml-powered-analytics-backend',
    title: 'ML-Powered Analytics Backend',
    category: 'Backend',
    Icon: Cpu,
    imageUrl: '/images/portfolio/backend.png',
    imageAiHint: 'data analysis',
    summary: 'Built a scalable backend for real-time data analysis and prediction.',
    description: 'This project focused on creating a high-performance backend system to process large volumes of data and run machine learning models for predictive analytics. The system was designed for a fintech company to identify market trends.',
    technologies: ['Python', 'FastAPI', 'TensorFlow', 'Kubernetes', 'AWS Sagemaker'],
    results: [
      'Real-time processing of over 1 million data points per minute.',
      '90% accuracy in trend prediction models.',
      'Enabled new data-driven product offerings.',
    ],
    client: 'FinAnalyse Inc.',
  },
  {
    id: 'interactive-ai-learning-portal',
    title: 'Interactive AI Learning Portal',
    category: 'Website',
    Icon: Globe,
    imageUrl: '/images/portfolio/commerce2.png',
    imageAiHint: 'online education',
    summary: 'Created an engaging online platform for AI education with interactive modules.',
    description: 'An educational institution required a modern, interactive portal for teaching AI concepts. We built a platform featuring AI-generated quizzes, personalized learning paths, and embedded coding environments.',
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Docker'],
    results: [
      'User engagement increased by 40%.',
      'Course completion rates improved by 20%.',
      'Positive feedback on interactive learning tools.',
    ],
    client: 'EduFuture Academy',
    liveLink: '#',
  }
];
