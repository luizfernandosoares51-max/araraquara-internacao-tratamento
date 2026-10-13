import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/clinica-recuperacao-feminina-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('women'),
  component: () => <AmericoSpecialtyPage specialty="women" />,
});
