import Footer from '../Footer';

export default function FooterExample() {
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

  return <Footer socialLinks={socialLinks} />;
}
