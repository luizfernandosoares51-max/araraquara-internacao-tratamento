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

        <p className="mt-5 border-l-2 border-secondary pl-4 text-sm leading-7 text-muted-foreground">
          Para uma visão integrada sobre avaliação, acolhimento e continuidade do cuidado, consulte o{" "}
          <Link to="/clinica-de-reabilitacao" className="font-semibold text-secondary hover:text-foreground">
            guia central sobre clínica de reabilitação
          </Link>.
        </p>

        {[
          {
            category: "Família e busca de ajuda",
            title: "Como saber se uma pessoa precisa de uma clínica de reabilitação?",
            description: "Sinais de prejuízo, momento de buscar avaliação e participação responsável da família.",
            to: "/blog/como-saber-se-uma-pessoa-precisa-de-uma-clinica-de-reabilitacao" as const,
          },
          {
            category: "Dependência química",
            title: "Dependência química: sinais, consequências e caminhos para o tratamento",
            description: "Uma visão aprofundada dos impactos, das formas de cuidado e da continuidade da recuperação.",
            to: "/blog/dependencia-quimica-sinais-consequencias-tratamento" as const,
          },
          {
            category: "Alcoolismo",
            title: "Alcoolismo: quando o consumo de álcool se torna um problema?",
            description: "Como reconhecer perda de controle, riscos e prejuízos sem fazer diagnósticos pela internet.",
            to: "/blog/alcoolismo-quando-o-consumo-se-torna-um-problema" as const,
          },
          {
            category: "Tratamento e acolhimento",
            title: "Como funciona uma clínica de reabilitação para dependência química?",
            description: "Avaliação, acolhimento, rotina terapêutica, participação familiar e cuidado após a saída.",
            to: "/blog/como-funciona-uma-clinica-de-reabilitacao" as const,
          },
          {
            category: "Decisão da família",
            title: "Como escolher uma clínica de reabilitação para um familiar?",
            description: "Critérios e perguntas sobre equipe, estrutura, proposta, contrato e continuidade do cuidado.",
            to: "/blog/como-escolher-uma-clinica-de-reabilitacao" as const,
          },
        ].map((post) => (
          <article key={post.to} className="glass-panel mt-5 rounded-2xl p-5 sm:p-7">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
              {post.category}
            </p>
            <h2 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
            <Link to={post.to} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground">
              Ler artigo <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        ))}

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
            Uma introdução para famílias reconhecerem mudanças, organizarem a conversa e entenderem
            os primeiros passos para buscar orientação.
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
