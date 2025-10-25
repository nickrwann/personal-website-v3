import About from '../About';

export default function AboutExample() {
  const content = `I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With over 5 years of experience in web development, I specialize in building scalable applications using modern technologies.

When I'm not coding, you can find me exploring new coffee shops, reading about design systems, or contributing to open-source projects. I believe in writing clean, maintainable code and creating delightful user experiences.`;

  return <About content={content} />;
}
