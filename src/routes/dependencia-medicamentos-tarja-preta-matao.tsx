import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/dependencia-medicamentos-tarja-preta-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('medication'),
  component: () => <MataoSpecialtyPage specialty="medication" />,
});
