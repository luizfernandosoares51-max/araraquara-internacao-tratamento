import { createFileRoute } from '@tanstack/react-router';
import { RibeiraoPretoSpecialtyPage } from '@/components/ribeirao-preto-specialty-page';
import { ribeiraoSpecialtyHead } from '@/lib/ribeirao-preto-specialties';
export const Route = createFileRoute('/tratamento-dependencia-jovens-ribeirao-preto')({
  staticData: { sitemap: true },
  head: () => ribeiraoSpecialtyHead('youth'),
  component: () => <RibeiraoPretoSpecialtyPage specialty="youth" />,
});
