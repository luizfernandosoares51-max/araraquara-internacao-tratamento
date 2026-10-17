import { createFileRoute } from '@tanstack/react-router';
import { RibeiraoPretoSpecialtyPage } from '@/components/ribeirao-preto-specialty-page';
import { ribeiraoSpecialtyHead } from '@/lib/ribeirao-preto-specialties';
export const Route = createFileRoute('/comunidade-terapeutica-masculina-ribeirao-preto')({
  staticData: { sitemap: true },
  head: () => ribeiraoSpecialtyHead('men'),
  component: () => <RibeiraoPretoSpecialtyPage specialty="men" />,
});
