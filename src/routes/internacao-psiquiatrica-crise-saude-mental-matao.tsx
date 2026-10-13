import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/internacao-psiquiatrica-crise-saude-mental-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('crisis'),
  component: () => <MataoSpecialtyPage specialty="crisis" />,
});
