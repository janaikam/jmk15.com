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
  email: 'janaiescuela@gmail.com',
  links: {
    github: 'https://github.com/janaikam',
    linkedin: 'https://www.linkedin.com/in/janai-k-00a67618a/',
    articles: 'https://github.com/janaikameka.io',
  },
  interests: ['Crocheting', 'Reading', 'Watching Anime', 'Sewing'],
};
