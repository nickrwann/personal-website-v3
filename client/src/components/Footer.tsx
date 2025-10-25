import { Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialLink {
  platform: 'github' | 'linkedin' | 'instagram';
  url: string;
  label: string;
}

interface FooterProps {
  socialLinks: SocialLink[];
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

export default function Footer({ socialLinks }: FooterProps) {
  const handleSocialClick = (platform: string, url: string) => {
    console.log(`Opening ${platform}: ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="py-16 px-6 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-border pt-12">
          <div className="flex justify-center items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.platform];
              
              return (
                <Button
                  key={link.platform}
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick(link.platform, link.url)}
                  className="transition-all duration-300 hover:scale-110"
                  data-testid={`button-social-${link.platform}`}
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </Button>
              );
            })}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
