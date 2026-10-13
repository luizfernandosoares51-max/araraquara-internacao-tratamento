import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/tratamento-cocaina-crack-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('cocaine'),
  component: () => <AmericoSpecialtyPage specialty="cocaine" />,
});
