import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/internacao-voluntaria-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('voluntary'),
  component: () => <MataoSpecialtyPage specialty="voluntary" />,
});
