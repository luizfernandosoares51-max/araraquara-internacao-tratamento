import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/resgate-remocao-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('transport'),
  component: () => <AmericoSpecialtyPage specialty="transport" />,
});
