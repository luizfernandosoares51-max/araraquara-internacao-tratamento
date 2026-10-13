import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/internacao-voluntaria-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('voluntary'),
  component: () => <AmericoSpecialtyPage specialty="voluntary" />,
});
