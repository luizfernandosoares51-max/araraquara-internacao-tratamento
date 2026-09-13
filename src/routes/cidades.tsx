import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import { cityPages } from "@/lib/city-pages";
import { phoneDisplay, phoneHref, siteUrl, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/cidades")({
  head: () => ({
    meta: [
      { title: "Cidades atendidas | Central de Acolhimento e Reabilitação" },
      {
        name: "description",
        content:
          "Araraquara é a cidade principal do atendimento da Central de Acolhimento e Reabilitação, que também orienta famílias de cidades da região.",
      },
      { property: "og:title", content: "Cidades atendidas | Central de Acolhimento e Reabilitação" },
      {
        property: "og:description",
        content:
          "Atendimento com sede em Araraquara/SP e orientação para famílias de cidades da região.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/cidades` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/cidades` }],
  }),
  component: CidadesPage,
});

function CidadesPage() {
  return (
    <div className="min-h-screen bg-deep font-body text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
          Cidades
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
          Cidades atendidas pela Central de Acolhimento e Reabilitação
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
          A unidade fica em Araraquara/SP, cidade principal do nosso atendimento. Famílias de outras
          cidades da região também podem receber orientação, conforme a avaliação feita no primeiro
          contato.
        </p>

        <h2 className="mt-10 font-display text-xl font-semibold">Páginas disponíveis</h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <Link
              to="/clinica-de-recuperacao-em-araraquara"
              className="glass-panel flex items-center justify-between rounded-2xl px-5 py-4 font-medium transition-colors hover:bg-glass-strong"
            >
              Araraquara / SP
              <span className="text-xs text-muted-foreground">Ver página</span>
            </Link>
          </li>
          {cityPages.map((city) => (
            <li key={city.slug}>
              <Link
                to="/$citySlug"
                params={{ citySlug: `clinica-de-recuperacao-em-${city.slug}` }}
                className="glass-panel flex items-center justify-between rounded-2xl px-5 py-4 font-medium transition-colors hover:bg-glass-strong"
              >
                {city.name} / SP
                <span className="text-xs text-muted-foreground">Ver página</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-sm font-semibold text-whatsapp-foreground"
          >
            <MessageCircle className="size-5" aria-hidden="true" /> Falar no WhatsApp
          </a>
          <a
            href={phoneHref}
            className="glass-panel flex min-h-14 items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-semibold"
          >
            <Phone className="size-4" aria-hidden="true" /> Ligar agora · {phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
