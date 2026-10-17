import { createFileRoute } from '@tanstack/react-router';
import { RibeiraoPretoSpecialtyPage } from '@/components/ribeirao-preto-specialty-page';
import { ribeiraoSpecialtyHead } from '@/lib/ribeirao-preto-specialties';
export const Route = createFileRoute('/tratamento-dependencia-trabalhadores-ribeirao-preto')({
  staticData: { sitemap: true },
  head: () => ribeiraoSpecialtyHead('workers'),
  component: () => <RibeiraoPretoSpecialtyPage specialty="workers" />,
});
