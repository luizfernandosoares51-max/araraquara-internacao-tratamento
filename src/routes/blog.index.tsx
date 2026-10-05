import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import alcoholImage from "@/assets/blog-alcoolismo-consumo-problema.webp";
import chooseImage from "@/assets/blog-como-escolher-clinica.webp";
import worksImage from "@/assets/blog-como-funciona-clinica.webp";
import needsImage from "@/assets/blog-como-saber-clinica-reabilitacao.webp";
import saoCarlosImage from "@/assets/blog-dependencia-quimica-sao-carlos.jpg";
import signsImage from "@/assets/blog-dependencia-quimica-sinais.jpg";
import consequencesImage from "@/assets/blog-dependencia-sinais-consequencias.webp";
import { siteUrl, whatsappHref } from "@/lib/site";
import { conceptualImageCaption, visualAssets } from "@/lib/visual-assets";

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
    <div className="site-editorial min-h-screen bg-deep font-body text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-12">
        <figure className="mb-10 overflow-hidden rounded-lg border border-border bg-glass shadow-xl shadow-background/20">
          <img src={visualAssets.blog.src} alt={visualAssets.blog.alt} width={1600} height={1067} fetchPriority="high" decoding="async" className="aspect-[16/7] w-full object-cover" />
          <figcaption className="border-t border-border px-5 py-3 text-xs leading-relaxed text-muted-foreground">{conceptualImageCaption}</figcaption>
        </figure>
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

        <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          {
            category: "Família e busca de ajuda",
            title: "Como saber se uma pessoa precisa de uma clínica de reabilitação?",
            description: "Sinais de prejuízo, momento de buscar avaliação e participação responsável da família.",
            to: "/blog/como-saber-se-uma-pessoa-precisa-de-uma-clinica-de-reabilitacao" as const,
            image: needsImage,
          },
          {
            category: "Dependência química",
            title: "Dependência química: sinais, consequências e caminhos para o tratamento",
            description: "Uma visão aprofundada dos impactos, das formas de cuidado e da continuidade da recuperação.",
            to: "/blog/dependencia-quimica-sinais-consequencias-tratamento" as const,
            image: consequencesImage,
          },
          {
            category: "Alcoolismo",
            title: "Alcoolismo: quando o consumo de álcool se torna um problema?",
            description: "Como reconhecer perda de controle, riscos e prejuízos sem fazer diagnósticos pela internet.",
            to: "/blog/alcoolismo-quando-o-consumo-se-torna-um-problema" as const,
            image: alcoholImage,
          },
          {
            category: "Tratamento e acolhimento",
            title: "Como funciona uma clínica de reabilitação para dependência química?",
            description: "Avaliação, acolhimento, rotina terapêutica, participação familiar e cuidado após a saída.",
            to: "/blog/como-funciona-uma-clinica-de-reabilitacao" as const,
            image: worksImage,
          },
          {
            category: "Decisão da família",
            title: "Como escolher uma clínica de reabilitação para um familiar?",
            description: "Critérios e perguntas sobre equipe, estrutura, proposta, contrato e continuidade do cuidado.",
            to: "/blog/como-escolher-uma-clinica-de-reabilitacao" as const,
            image: chooseImage,
          },
        ].map((post) => (
          <article key={post.to} className="glass-panel group overflow-hidden rounded-lg">
            <img src={post.image} alt={`Imagem conceitual do artigo: ${post.title}`} width={1200} height={640} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            <div className="p-5 sm:p-7">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
              {post.category}
            </p>
            <h2 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
            <Link to={post.to} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground">
              Ler artigo <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            </div>
          </article>
        ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
        <article className="glass-panel overflow-hidden rounded-lg">
          <img src={visualAssets.araraquara[4].src} alt={visualAssets.araraquara[4].alt} width={1600} height={1067} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
          <div className="p-5 sm:p-7">
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
          </div>
        </article>

        <article className="glass-panel overflow-hidden rounded-lg">
          <img src={signsImage} alt="Pessoa em reflexão para artigo sobre sinais de dependência química" width={1200} height={640} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
          <div className="p-5 sm:p-7">
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
          </div>
        </article>

        <article className="glass-panel overflow-hidden rounded-lg">
          <img src={saoCarlosImage} alt="Conversa de apoio para artigo sobre dependência química em São Carlos" width={1200} height={640} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
          <div className="p-5 sm:p-7">
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
          </div>
        </article>
        </div>

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
