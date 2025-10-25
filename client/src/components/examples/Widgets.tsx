import Widgets from '../Widgets';

export default function WidgetsExample() {
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

  return <Widgets widgets={widgets} />;
}
