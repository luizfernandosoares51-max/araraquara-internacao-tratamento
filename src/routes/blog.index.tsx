import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { blogPosts, blogTopics } from "@/lib/blog-catalog";
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

        <nav aria-label="Temas do blog" className="mt-10 border-y border-border py-5">
          <p className="font-display text-lg font-semibold">Explore por tema</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-4">
            {blogTopics.map((topic) => <li key={topic.id}><a href={`#${topic.id}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-secondary underline underline-offset-4">{topic.title}<ArrowRight className="size-4 shrink-0" aria-hidden="true" /></a></li>)}
          </ul>
        </nav>
        {blogTopics.map((topic) => <section key={topic.id} id={topic.id} aria-labelledby={`${topic.id}-heading`} className="mt-12 scroll-mt-8">
          <h2 id={`${topic.id}-heading`} className="font-display text-2xl font-bold sm:text-3xl">{topic.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{topic.description}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {blogPosts.filter((post) => post.topic === topic.id).map((post) => <article key={post.to} className="glass-panel group overflow-hidden rounded-lg">
              <img src={post.image} alt={post.alt} width={1200} height={800} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.02]" />
              <div className="p-5 sm:p-7">
                <p className="text-xs font-semibold text-secondary">{post.detail}</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl"><Link to={post.to} className="hover:text-secondary">{post.title}</Link></h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.description}</p>
                <Link to={post.to} aria-label={`Ler artigo: ${post.title}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground">Ler artigo <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
            </article>)}
          </div>
        </section>)}
        <p className="mt-8 text-xs leading-6 text-muted-foreground">{conceptualImageCaption}</p>

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
