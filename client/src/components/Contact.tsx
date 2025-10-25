import { MapPin, Mail } from 'lucide-react';

interface ContactProps {
  location?: string;
  email?: string;
}

export default function Contact({ location, email }: ContactProps) {
  if (!location && !email) return null;

  const handleEmailClick = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
      console.log(`Opening email client for ${email}`);
    }
  };

  return (
    <section className="py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          {location && (
            <div 
              className="flex items-center gap-2"
              data-testid="text-location"
            >
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
          
          {email && (
            <button
              onClick={handleEmailClick}
              className="flex items-center gap-2 hover-elevate transition-all duration-300 rounded px-2 py-1 -mx-2"
              data-testid="button-email"
            >
              <Mail className="w-4 h-4" />
              <span className="underline decoration-dotted underline-offset-4">
                {email}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
