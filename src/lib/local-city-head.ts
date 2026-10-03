import type { LocalCityPage } from "@/lib/local-city-pages";
import { siteUrl } from "@/lib/site";

export function localCityHead(city: LocalCityPage) {
  const pageUrl = `${siteUrl}/clinica-de-recuperacao-em-${city.slug}`;
  return {
    meta: [
      { title: city.title },
      { name: "description", content: city.description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: city.title },
      { property: "og:description", content: city.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: city.title },
      { name: "twitter:description", content: city.description },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: city.title, description: city.description, inLanguage: "pt-BR", isPartOf: { "@type": "WebSite", name: "Central de Acolhimento e Reabilitação", url: siteUrl } },
          { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Cidades", item: `${siteUrl}/cidades` },
            { "@type": "ListItem", position: 3, name: city.name, item: pageUrl },
          ] },
          { "@type": "FAQPage", mainEntity: city.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
        ],
      }),
    }],
  };
}
