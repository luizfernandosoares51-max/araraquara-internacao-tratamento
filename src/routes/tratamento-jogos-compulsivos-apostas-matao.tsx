import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/tratamento-jogos-compulsivos-apostas-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('gambling'),
  component: () => <MataoSpecialtyPage specialty="gambling" />,
});
