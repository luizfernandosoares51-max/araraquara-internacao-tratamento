import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

import { whatsappHref } from "@/lib/site";

export type ArticleSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  subsections?: Array<{ title: string; paragraphs: string[] }>;
};

export type ArticleLink = {
  to: string;
  label: string;
  description: string;
};

type ArticleShellProps = {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  sections: ArticleSection[];
  faqs: Array<{ question: string; answer: string }>;
  related: ArticleLink[];
};

export function ArticleShell({
  category,
  title,
  description,
  image,
  imageAlt,
  sections,
  faqs,
  related,
}: ArticleShellProps) {
  return (
    <main className="min-h-screen bg-deep font-body text-foreground">
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Voltar ao blog
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
            {category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-[17px] leading-8 text-muted-foreground">{description}</p>
          <figure className="mt-8">
            <img
              src={image}
              alt={imageAlt}
              width={1200}
              height={640}
              fetchPriority="high"
              decoding="async"
              className="aspect-[15/8] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Imagem ilustrativa sobre apoio, orientação e busca de cuidado.
            </figcaption>
          </figure>
        </header>

        <div className="mt-9 space-y-8 text-[16px] leading-8 text-muted-foreground">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-bold leading-tight text-foreground">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items ? (
                  <ul className="list-disc space-y-2 pl-6 marker:text-secondary">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
                {section.subsections?.map((subsection) => (
                  <div key={subsection.title} className="pt-2">
                    <h3 className="font-display text-xl font-bold text-foreground">{subsection.title}</h3>
                    <div className="mt-3 space-y-4">
                      {subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 border-t border-border pt-10" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-display text-2xl font-bold">Perguntas frequentes</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="glass-panel rounded-xl p-5">
                <summary className="cursor-pointer font-semibold text-foreground">{faq.question}</summary>
                <p className="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-10" aria-labelledby="continue-heading">
          <h2 id="continue-heading" className="font-display text-2xl font-bold">Continue se informando</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <Link key={item.to} to={item.to} className="glass-panel group rounded-xl p-5">
                <span className="flex items-center justify-between gap-3 font-semibold text-foreground">
                  {item.label}<ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted-foreground">{item.description}</span>
              </Link>
            ))}
          </div>
        </section>

        <aside className="glass-panel mt-10 rounded-2xl p-5 sm:p-7">
          <h2 className="font-display text-xl font-bold">Precisa conversar sobre uma situação específica?</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            A família pode buscar orientação para compreender possibilidades de cuidado. Cada caso precisa de avaliação individualizada.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground"
          >
            <MessageCircle className="size-5" aria-hidden="true" /> Falar pelo WhatsApp
          </a>
        </aside>
      </article>
    </main>
  );
}