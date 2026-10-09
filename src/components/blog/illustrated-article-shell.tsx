import { Link } from "@tanstack/react-router";
import type { ArticleSection } from "./article-shell";
import { conceptualImageCaption } from "@/lib/visual-assets";

export type IllustratedSection = ArticleSection & {
  image?: { src: string; alt: string };
  caption?: string;
};

export function IllustratedSections({ sections }: { sections: IllustratedSection[] }) {
  let imageIndex = 0;
  return <div className="mt-12 space-y-12 text-base leading-8 text-muted-foreground">
    {sections.map((section) => {
      const reversed = section.image ? imageIndex++ % 2 === 1 : false;
      return <section key={section.title} className="border-t border-border pt-10">
        <h2 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">{section.title}</h2>
        <div className={section.image ? "mt-6 grid items-start gap-7 lg:grid-cols-2 lg:gap-10" : "mt-5 max-w-3xl space-y-4"}>
          <div className={reversed ? "space-y-4 lg:order-2" : "space-y-4"}>
            {section.context}
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.items && <ul className="list-disc space-y-3 pl-5 marker:text-secondary">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
            {section.subsections?.map((subsection) => <div key={subsection.title} className="space-y-3 pt-3">
              <h3 className="font-display text-xl font-semibold text-foreground">{subsection.title}</h3>
              {subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>)}
          </div>
          {section.image && <figure className={reversed ? "min-w-0 lg:order-1" : "min-w-0"}>
            <img src={section.image.src} alt={section.image.alt} width={1440} height={960} loading="lazy" decoding="async" className="aspect-[3/2] w-full rounded-lg object-cover" />
            <figcaption className="mt-3 text-xs leading-5">{section.caption ? `${section.caption} ` : ""}{conceptualImageCaption}</figcaption>
          </figure>}
        </div>
      </section>;
    })}
  </div>;
}

export function ArticleBreadcrumb({ title }: { title: string }) {
  return <nav aria-label="Caminho da página" className="text-sm leading-6 text-muted-foreground">
    <ol className="flex flex-wrap gap-x-2"><li><Link to="/" className="text-secondary underline underline-offset-4">Início</Link></li><li aria-hidden="true">/</li><li><Link to="/blog" className="text-secondary underline underline-offset-4">Blog</Link></li><li aria-hidden="true">/</li><li aria-current="page">{title}</li></ol>
  </nav>;
}