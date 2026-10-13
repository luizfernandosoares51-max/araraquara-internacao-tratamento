import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/resgate-remocao-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('transport'),
  component: () => <MataoSpecialtyPage specialty="transport" />,
});
