import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/internacao-involuntaria-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('involuntary'),
  component: () => <MataoSpecialtyPage specialty="involuntary" />,
});
