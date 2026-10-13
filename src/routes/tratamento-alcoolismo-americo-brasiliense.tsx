import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/tratamento-alcoolismo-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('alcohol'),
  component: () => <AmericoSpecialtyPage specialty="alcohol" />,
});
