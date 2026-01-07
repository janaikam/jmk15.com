export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    articles: string;
  };
  interests: string[];
}

export const profile: Profile = {
  name: 'Janai Kameka',
  headline: 'Software Engineer & Scrum Master',
  tagline: 'Building scalable solutions and delivering projects on time.',
  location: 'Atlanta, GA',
  email: 'janai@example.com',
  links: {
    github: 'https://github.com/janaikameka',
    linkedin: 'https://linkedin.com/in/janaikameka',
    articles: 'https://github.com/janaikameka.io',
  },
  interests: ['Crochet', 'Fantasy Books', 'Anime', 'Sewing'],
};
