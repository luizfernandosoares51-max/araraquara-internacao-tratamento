import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/tratamento-dependencia-jovens-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('youth'),
  component: () => <MataoSpecialtyPage specialty="youth" />,
});
