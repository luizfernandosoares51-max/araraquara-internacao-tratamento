import { createFileRoute } from '@tanstack/react-router';
import { MataoSpecialtyPage } from '@/components/matao-specialty-page';
import { mataoSpecialtyHead } from '@/lib/matao-specialties';

export const Route = createFileRoute('/tratamento-cocaina-crack-matao')({
  staticData: { sitemap: true },
  head: () => mataoSpecialtyHead('cocaine'),
  component: () => <MataoSpecialtyPage specialty="cocaine" />,
});
