import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/dependencia-medicamentos-tarja-preta-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('medication'),
  component: () => <AmericoSpecialtyPage specialty="medication" />,
});
