import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/internacao-involuntaria-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('involuntary'),
  component: () => <AmericoSpecialtyPage specialty="involuntary" />,
});
