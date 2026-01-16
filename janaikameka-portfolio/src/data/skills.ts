export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'CSS', 'HTML5', 'Responsive Design'],
  },
  {
    category: 'Backend & Databases',
    skills: ['RESTful APIs', 'Neo4j', 'MongoDB', 'SQL', 'Microservices'],
  },
  {
    category: 'Agile & Leadership',
    skills: [
      'SCRUM Master',
      'Sprint Planning',
      'Risk Management',
      'Stakeholder Communication',
      'Team Leadership',
    ],
  },
  {
    category: 'Tools & Practices',
    skills: [
      'Git',
      'CI/CD',
      'Agile Methodologies',
      'Web Scraping',
      'Test-Driven Development',
      'Github Copilot',
    ],
  },
];
