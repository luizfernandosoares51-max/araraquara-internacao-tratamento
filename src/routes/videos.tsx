import { createFileRoute } from "@tanstack/react-router";

import { siteUrl } from "@/lib/site";

const pageTitle = "Vídeos – Central de Acolhimento e Reabilitação";
const pageDescription =
  "Conteúdos em vídeo sobre acolhimento, tratamento e dependência química da Central de Acolhimento e Reabilitação.";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/videos` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/videos` }],
  }),
  component: VideosPage,
});

function VideosPage() {
  return (
    <main className="min-h-screen bg-deep font-body text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
          Vídeos
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
          Vídeos – Central de Acolhimento e Reabilitação
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
          Esta página receberá conteúdos do canal da Central sobre acolhimento, tratamento e
          dependência química.
        </p>
      </div>
    </main>
  );
}