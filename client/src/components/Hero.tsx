import profileImage from "@assets/IMG_1797.jpeg";

interface HeroProps {
  name: string;
  tagline: string;
  profileImageUrl?: string;
}

export default function Hero({ name, tagline, profileImageUrl }: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-6 sm:py-32">
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <div
          className="relative mb-8 rounded-full overflow-hidden border-2 border-border w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80"
          data-testid="img-profile"
        >
          <img
            src={profileImageUrl || profileImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-foreground mb-4 tracking-tight"
          data-testid="text-name"
        >
          {name}
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light"
          data-testid="text-tagline"
        >
          {tagline}
        </p>
      </div>
    </section>
  );
}
