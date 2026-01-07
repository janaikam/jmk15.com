export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'event-locator',
    title: 'Event Locator App',
    description:
      'Real-time event discovery platform with geolocation filtering and personalized recommendations.',
    tags: ['React', 'TypeScript', 'REST API', 'Neo4j'],
    repoUrl: 'https://github.com/janaikameka/event-locator',
    liveUrl: 'https://event-locator-demo.com',
  },
  {
    id: 'sentiment-web-scraper',
    title: 'Sentiment Analysis Web Scraper',
    description:
      'Distributed web scraper for collecting and analyzing sentiment from multiple sources using NLP.',
    tags: ['Python', 'Web Scraping', 'MongoDB', 'NLP'],
    repoUrl: 'https://github.com/janaikameka/sentiment-scraper',
  },
  {
    id: 'agile-dashboard',
    title: 'Agile Delivery Dashboard',
    description:
      'Sprint tracking and intake automation tool for team velocity metrics and risk visualization.',
    tags: ['React', 'TypeScript', 'SQL', 'Charts'],
    repoUrl: 'https://github.com/janaikameka/agile-dashboard',
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Site',
    description:
      'Fast, accessible single-page portfolio built with React, TypeScript, and Vite.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS'],
    repoUrl: 'https://github.com/janaikameka/portfolio',
    liveUrl: 'https://janaikameka.com',
  },
];
