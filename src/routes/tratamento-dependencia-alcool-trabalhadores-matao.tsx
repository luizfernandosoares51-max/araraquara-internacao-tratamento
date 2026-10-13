import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/tratamento-dependencia-alcool-trabalhadores-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('workers'),
  component: () => <MataoSpecialtyPage specialty="workers" />,
});
