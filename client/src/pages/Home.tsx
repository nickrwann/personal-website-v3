import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Widgets from '@/components/Widgets';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import Contact from '@/components/Contact';
import AskMe from '@/components/AskMe';

export default function Home() {

  const aboutContent = `I'm a software engineer with five years of experience and 20+ patents. 
    I specialize in learning new technologies quickly and applying them to solve real problems. 
    I focus on building reliable, scalable systems that move from prototype to product without losing clarity or purpose. 

    When I'm not working, you can usually find me exploring the city, traveling, working out, or hunting down the best latte in town.`;

  const experiences = [
    {
      id: '1',
      role: 'Software Engineer II – CTO Engineering',
      company: 'Dell Technologies',
      period: '2023 – Present',
      description: `Focus on AI systems, distributed services, and internal enablement tools. 
  I've worked across MLOps pipelines, model optimization with ONNX Runtime, and agentic systems that automate complex workloads. 
  My work has centered on RAG and multi-agent platforms that help teams use AI more effectively. 
  Along the way, I’ve contributed to over 20 patents in AI and systems design.`
    },
    {
      id: '2',
      role: 'Software Engineer – Innovation Studio',
      company: 'Dell Technologies',
      period: '2021 – 2023',
      description: (
        <>
          Worked within the Client CTO organization exploring new ideas for on-client intelligence and connected devices. 
          Projects ranged from a telemetry automation framework for local system model training to designing the{' '}
          <a
            href="https://dell.alienwarearena.com/leveling-up-concept-nyx-with-new-controller-concept-and-game-changing-enhancements/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            NYX Wi-Fi gaming controller
          </a>. These ranged from quick proofs of concept to systems that later made their way into product development.
        </>
      )
    },
    {
      id: '3',
      role: 'Software Engineering Intern – Tech Strategy Team',
      company: 'Dell Technologies',
      period: '2020',
      description: (
        <>
          Researched and developed a touchpad concept that integrated video conferencing controls directly into the hardware — 
          now found in modern Dell devices. Learn more about the{' '}
          <a
            href="https://www.dell.com/support/manuals/es-mx/latitude-14-7450-2-in-1-laptop/lat_7450_ctp_guide/introduction?guid=guid-09e3dcfc-9dd5-4415-a128-6f9818ce863c&lang=en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Collaboration Touchpad
          </a>.
        </>
      )
    },
    {
      id: '4',
      role: 'Data Science Intern',
      company: 'ThoughtTrace',
      period: '2018',
      description: `Helped automate the training and validation process for classification models used on oil and gas lease documents. 
  Focused on improving dataset quality and retraining efficiency.`
    },
    {
      id: '5',
      role: 'Peer Teacher – Electrical Engineering',
      company: 'Texas A&M University',
      period: '2019',
      description: `Taught computer systems fundamentals and supported lab instruction for undergraduate engineering students.`
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
