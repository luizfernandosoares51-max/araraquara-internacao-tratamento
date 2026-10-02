import { createFileRoute, notFound } from "@tanstack/react-router";

import { CityPageTemplate } from "@/components/city-page-template";
import { templatedCityPageBySlug } from "@/lib/city-pages";
import { siteUrl } from "@/lib/site";

export const Route = createFileRoute("/$citySlug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const prefix = "clinica-de-recuperacao-em-";
    if (!params.citySlug.startsWith(prefix)) throw notFound();
    const city = templatedCityPageBySlug[params.citySlug.slice(prefix.length)];
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

    const pageUrl = `${siteUrl}/clinica-de-recuperacao-em-${loaderData.slug}`;
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
                "@type": "WebPage",
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name: title,
                description: loaderData.seoDescription,
                inLanguage: "pt-BR",
                isPartOf: {
                  "@type": "WebSite",
                  name: "Central de Acolhimento e Reabilitação",
                  url: siteUrl,
                },
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
  component: CityRoutePage,
});

function CityRoutePage() {
  const city = Route.useLoaderData();
  return <CityPageTemplate city={city} />;
}