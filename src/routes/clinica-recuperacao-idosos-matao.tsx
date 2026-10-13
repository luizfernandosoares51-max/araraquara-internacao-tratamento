import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/clinica-recuperacao-idosos-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('elderly'),
  component: () => <MataoSpecialtyPage specialty="elderly" />,
});
