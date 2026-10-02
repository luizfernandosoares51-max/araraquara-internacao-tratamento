import { siteUrl } from "@/lib/site";

type ArticleHeadInput = {
  title: string;
  description: string;
  slug: string;
  image: string;
  published: string;
};

export function createArticleHead({ title, description, slug, image, published }: ArticleHeadInput) {
  const url = `${siteUrl}/blog/${slug}`;
  const imageUrl = new URL(image, siteUrl).href;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: title,
              description,
              url,
              mainEntityOfPage: url,
              image: imageUrl,
              datePublished: published,
              dateModified: published,
              inLanguage: "pt-BR",
              author: { "@type": "Organization", name: "Central de Acolhimento e Reabilitação" },
              publisher: { "@type": "Organization", name: "Central de Acolhimento e Reabilitação" },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
                { "@type": "ListItem", position: 3, name: title, item: url },
              ],
            },
          ],
        }),
      },
    ],
  };
}