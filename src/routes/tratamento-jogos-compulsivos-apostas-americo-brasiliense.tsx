import { createFileRoute } from '@tanstack/react-router';
import { AmericoSpecialtyPage } from '@/components/americo-specialty-page';
import { americoSpecialtyHead } from '@/lib/americo-specialties';
export const Route = createFileRoute('/tratamento-jogos-compulsivos-apostas-americo-brasiliense')({
  staticData: { sitemap: true },
  head: () => americoSpecialtyHead('gambling'),
  component: () => <AmericoSpecialtyPage specialty="gambling" />,
});
