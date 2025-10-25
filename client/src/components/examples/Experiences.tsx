import Experiences from '../Experiences';

export default function ExperiencesExample() {
  const experiences = [
    {
      id: '1',
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2021 - Present',
      description: 'Lead development of scalable web applications using React, Node.js, and PostgreSQL. Mentored junior developers and established best practices for code quality and testing.'
    },
    {
      id: '2',
      role: 'Full-Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2019 - 2021',
      description: 'Built and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved deployment processes, reducing release time by 40%.'
    },
    {
      id: '3',
      role: 'Frontend Developer',
      company: 'Startup Ventures',
      period: '2018 - 2019',
      description: 'Developed responsive user interfaces and collaborated with designers to create intuitive user experiences. Worked with React, TypeScript, and modern CSS frameworks.'
    }
  ];

  return <Experiences experiences={experiences} />;
}
