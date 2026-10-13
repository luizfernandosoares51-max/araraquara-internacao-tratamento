import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/tratamento-dependencia-jovens-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('youth'),
  component: () => <AmericoSpecialtyPage specialty="youth" />,
});
