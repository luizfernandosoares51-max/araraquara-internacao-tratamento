import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { siteUrl, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
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
      { name: "twitter:card", content: "summary_large_image" },
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
          Informações sobre dependência química, acolhimento, tratamento e apoio às famílias.
        </p>

        <article className="glass-panel mt-8 rounded-2xl p-5 sm:p-7">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
            Araraquara · Dependência química
          </p>
          <h2 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl">
            Dependência Química em Araraquara: Tratamento, CAPS AD, Acolhimento e Como Escolher uma
            Instituição Segura
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Informações sobre atendimento, orientação familiar e cuidados importantes antes de escolher
            uma instituição para tratamento.
          </p>
          <Link
            to="/blog/dependencia-quimica-em-araraquara-tratamento"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground"
          >
            Ler artigo <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </article>

        <article className="glass-panel mt-5 rounded-2xl p-5 sm:p-7">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
            Dependência química
          </p>
          <h2 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl">
            Dependência Química: Entenda os Sinais e a Importância do Tratamento
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Entenda os principais sinais da dependência química e saiba quando buscar orientação,
            acolhimento e tratamento especializado.
          </p>
          <Link
            to="/blog/dependencia-quimica-sinais-tratamento"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground"
          >
            Ler artigo <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </article>

        <article className="glass-panel mt-5 rounded-2xl p-5 sm:p-7">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
            São Carlos · Dependência química
          </p>
          <h2 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl">
            Dependência Química em São Carlos: acolhimento, tratamento e onde buscar ajuda
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Informações sobre sinais de atenção, atendimento público, acolhimento e caminhos de
            tratamento para pessoas e famílias em São Carlos.
          </p>
          <Link
            to="/blog/dependencia-quimica-sao-carlos"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground"
          >
            Ler artigo <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </article>

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
            to="/"
            className="glass-panel flex min-h-14 items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
