import { Music, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Widget {
  id: string;
  title: string;
  description: string;
  icon: 'music' | 'weather';
  isPlaceholder?: boolean;
}

interface WidgetsProps {
  widgets: Widget[];
}

const iconMap = {
  music: Music,
  weather: Cloud,
};

export default function Widgets({ widgets }: WidgetsProps) {
  if (widgets.length === 0) return null;

  return (
    <section className="py-16 px-6 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {widgets.map((widget) => {
              const Icon = iconMap[widget.icon];
              
              return (
                <Card 
                  key={widget.id}
                  className="p-6 sm:p-8 hover-elevate transition-all duration-300"
                  data-testid={`card-widget-${widget.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-accent">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 
                        className="text-lg font-semibold text-foreground"
                        data-testid={`text-widget-title-${widget.id}`}
                      >
                        {widget.title}
                      </h3>
                      
                      <p 
                        className="text-sm text-muted-foreground"
                        data-testid={`text-widget-description-${widget.id}`}
                      >
                        {widget.description}
                      </p>
                      
                      {widget.isPlaceholder && (
                        <p className="text-xs text-muted-foreground/60 pt-2 italic">
                          Coming soon
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
