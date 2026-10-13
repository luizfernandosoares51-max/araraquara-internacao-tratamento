import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/clinica-recuperacao-idosos-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('elderly'),
  component: () => <AmericoSpecialtyPage specialty="elderly" />,
});
