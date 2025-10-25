import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Widgets from '@/components/Widgets';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import Contact from '@/components/Contact';
import AskMe from '@/components/AskMe';

export default function Home() {
  const aboutContent = `I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With over 5 years of experience in web development, I specialize in building scalable applications using modern technologies.

When I'm not coding, you can find me exploring new coffee shops, reading about design systems, or contributing to open-source projects. I believe in writing clean, maintainable code and creating delightful user experiences.`;

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

  const widgets = [
    {
      id: 'spotify',
      title: 'Now Playing',
      description: 'See what I\'m currently listening to on Spotify',
      icon: 'music' as const,
      isPlaceholder: true
    },
    {
      id: 'weather',
      title: 'Local Weather',
      description: 'Current weather conditions in my area',
      icon: 'weather' as const,
      isPlaceholder: true
    }
  ];

  const socialLinks = [
    {
      platform: 'github' as const,
      url: 'https://github.com',
      label: 'GitHub Profile'
    },
    {
      platform: 'linkedin' as const,
      url: 'https://linkedin.com',
      label: 'LinkedIn Profile'
    },
    {
      platform: 'instagram' as const,
      url: 'https://instagram.com',
      label: 'Instagram Profile'
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <Hero 
        name="Nick Wanner" 
        tagline="AI Systems Engineer & Creative Problem Solver"
      />
      
      <Contact 
        location="Austin, TX" 
        email="nickrwann@gmail.com" 
      />
      
      <About content={aboutContent} />
      <Experiences experiences={experiences} />
      <AskMe />
      <Widgets widgets={widgets} />
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
