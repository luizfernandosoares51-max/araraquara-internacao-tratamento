import { createFileRoute, notFound } from "@tanstack/react-router";

import { CityPageTemplate } from "@/components/city-page-template";
import { cityPageBySlug } from "@/lib/city-pages";
import { facebookHref, instagramHref, siteUrl } from "@/lib/site";

const pagePath = "/clinica-de-recuperacao-em-sao-carlos-sp";

export const Route = createFileRoute("/clinica-de-recuperacao-em-sao-carlos-sp")({
  staticData: { sitemap: true },
  loader: () => {
    const city = cityPageBySlug["sao-carlos-sp"];
    if (!city) throw notFound();
    return city;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Página de cidade não encontrada | Central de Acolhimento" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const pageUrl = `${siteUrl}${pagePath}`;
    const title = `Clínica de Recuperação em ${loaderData.name} | Central`;

    return {
      meta: [
        { title },
        { name: "description", content: loaderData.seoDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.seoDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: pageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: loaderData.seoDescription },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Central de Acolhimento e Reabilitação",
                url: siteUrl,
                telephone: "+5516997654579",
                sameAs: [facebookHref, instagramHref],
                areaServed: [
                  { "@type": "City", name: "Araraquara" },
                  { "@type": "City", name: loaderData.name },
                ],
              },
              {
                "@type": "Service",
                name: `Orientação sobre acolhimento para famílias de ${loaderData.name}`,
                provider: { "@type": "Organization", name: "Central de Acolhimento e Reabilitação" },
                areaServed: { "@type": "City", name: loaderData.name },
                description: loaderData.seoDescription,
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
                  { "@type": "ListItem", position: 2, name: "Cidades", item: `${siteUrl}/cidades` },
                  { "@type": "ListItem", position: 3, name: loaderData.name, item: pageUrl },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: loaderData.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }),
        },
      ],
    };
  },
  component: SaoCarlosPage,
});

function SaoCarlosPage() {
  const city = Route.useLoaderData();
  return <CityPageTemplate city={city} />;
}