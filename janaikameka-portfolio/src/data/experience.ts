export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  type: 'internship' | 'fulltime' | 'leadership';
  bullets: string[];
}

export const experience: Experience[] = [
  {
    id: 'delta',
    title: 'IT Intern',
    company: 'Delta Airlines',
    period: 'Summer 2022',
    type: 'internship',
    bullets: [
      'Improved sprint tracking efficiency by 30% through process optimization',
      'Automated intake workflows, reducing manual data entry by 25 hours/week',
      'Collaborated with cross-functional teams on agile delivery',
    ],
  },
  {
    id: 'meta',
    title: 'Software Engineering Intern',
    company: 'Meta',
    period: 'Summer 2020, Summer 2021',
    type: 'internship',
    bullets: [
      'Built event locator app using React with RESTful backend services',
      'Implemented REST APIs for real-time event filtering and geolocation',
      'Deployed and optimized database queries reducing latency by 40%',
    ],
  },
  {
    id: 'schlumberger',
    title: 'Team Lead',
    company: 'Schlumberger',
    period: 'Spring Semester 2023',
    type: 'leadership',
    bullets: [
      'Led team of 5 engineers in web scraping project for sentiment analysis',
      'Managed sprint planning, backlog refinement, and stakeholder communication',
      'Tracked risks and delivery metrics; achieved 95% on-time delivery',
      'Mentored junior developers and coordinated cross-team integration',
    ],
  },
];
