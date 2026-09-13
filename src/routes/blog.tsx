import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { siteUrl, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Central de Acolhimento e Reabilitação" },
      {
        name: "description",
        content:
          "Espaço de conteúdo da Central de Acolhimento e Reabilitação, com orientações sobre dependência química, alcoolismo e apoio às famílias.",
      },
      { property: "og:title", content: "Blog | Central de Acolhimento e Reabilitação" },
      {
        property: "og:description",
        content:
          "Conteúdos de orientação sobre dependência química, alcoolismo e apoio às famílias.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/blog` },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/blog` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="min-h-screen bg-deep font-body text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
          Blog
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
          Conteúdos de orientação para famílias
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
          Estamos preparando textos com orientações sobre dependência química, alcoolismo,
          modalidades de acolhimento e como a família pode ajudar. Os primeiros artigos serão
          publicados aqui em breve.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-sm font-semibold text-whatsapp-foreground"
          >
            <MessageCircle className="size-5" aria-hidden="true" /> Tirar dúvidas agora
          </a>
          <Link
            to="/clinica-de-recuperacao-em-araraquara"
            className="glass-panel flex min-h-14 items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold"
          >
            Voltar para a página de Araraquara
          </Link>
        </div>
      </div>
    </div>
  );
}
