import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";

import { cityPages } from "@/lib/city-pages";
import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async ({ request }) => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
        const cityRoute = router.routesById["/$citySlug"];

        if (isSitemapRouteIncluded(cityRoute)) {
          for (const city of cityPages) {
            const location = router.buildLocation({
              to: "/$citySlug",
              params: { citySlug: `clinica-de-recuperacao-em-${city.slug}` },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, "/$citySlug");
            if (path) entries.push({ path });
          }
        }

        if (entries.length === 0) {
          return new Response("No public pages are included in the sitemap", {
            status: 404,
            headers: { "Cache-Control": "no-store" },
          });
        }

        return new Response(sitemapXML(new URL(request.url).origin, entries), {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});