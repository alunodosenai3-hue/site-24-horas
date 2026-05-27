export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  themeColor: string;
  gradient: string;
  description: string;
  heroSnippet: string;
  features: string[];
  demoUrl?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  avatarBg: string;
  comment: string;
  date: string;
  role: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
