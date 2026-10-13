import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/tratamento-alcoolismo-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('alcohol'),
  component: () => <MataoSpecialtyPage specialty="alcohol" />,
});
