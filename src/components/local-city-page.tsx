import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";
import { Button } from "@/components/ui/button";
import type { LocalCityPage } from "@/lib/local-city-pages";
import { phoneDisplay, phoneHref, whatsappHref } from "@/lib/site";

export function LocalCityPageView({ city }: { city: LocalCityPage }) {
  return (
    <div className="site-editorial min-h-screen bg-deep font-body text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-3" aria-label="Central de Acolhimento e Reabilitação — início">
            <img src={logoAsset.url} alt="Logo da Central de Acolhimento e Reabilitação" width={48} height={48} className="size-12 rounded-xl object-contain" />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-semibold">Central de Acolhimento</span>
              <span className="block text-xs text-muted-foreground">e Reabilitação · unidade em Araraquara</span>
            </span>
          </Link>
          <Button asChild className="min-h-11 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Falar com a Central</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-5 pb-14 pt-7 sm:px-8 lg:px-12 lg:pb-20">
            <nav aria-label="Navegação estrutural" className="text-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-secondary">Início</Link></li><li aria-hidden="true">/</li>
                <li><Link to="/cidades" className="hover:text-secondary">Cidades</Link></li><li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">{city.name}</li>
              </ol>
            </nav>
            <Button asChild variant="outline" className="mt-6 min-h-11 border-border bg-glass text-foreground hover:bg-glass-strong hover:text-foreground">
              <Link to="/"><ArrowLeft aria-hidden="true" /> Voltar para a página inicial</Link>
            </Button>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
              <div>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">Orientação local · {city.name}/SP</p>
                <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{city.h1}</h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{city.lead}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-h-14 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Conversar pelo WhatsApp</a></Button>
                  <Button asChild size="lg" variant="outline" className="min-h-14 border-border bg-glass text-foreground hover:bg-glass-strong hover:text-foreground"><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></Button>
                </div>
                <p className="mt-6 flex max-w-2xl items-start gap-3 text-sm leading-relaxed text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />{city.transparency}</p>
              </div>
              <figure>
                <div className="overflow-hidden rounded-lg border border-border bg-glass shadow-xl shadow-background/20">
                  <img src={city.image} alt={city.imageAlt} width={1200} height={630} loading="eager" className="aspect-[1200/630] w-full object-cover" />
                </div>
                 <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">{city.imageCaption}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {city.sections.map((section, index) => (
            <section key={section.heading} className="border-b border-border py-14 lg:py-20">
              <div className={`grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-16 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">{section.eyebrow}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">{section.heading}</h2>
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.points ? <ul className="grid gap-3 pt-2 sm:grid-cols-3">{section.points.map((point) => <li key={point} className="rounded-lg border border-border bg-glass p-4 text-sm text-foreground/85">{point}</li>)}</ul> : null}
                </div>
              </div>
            </section>
          ))}

          <section className="border-b border-border py-14 lg:py-20">
            <div className="max-w-3xl">
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">Serviços públicos independentes</p>
              <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">{city.resourcesHeading}</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{city.resourcesIntro}</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {city.resources.map((resource) => (
                <article key={resource.href} className="rounded-lg border border-border bg-glass p-5 sm:p-6">
                  <div className="flex items-start gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden="true" /><h3 className="font-display text-lg font-semibold">{resource.name}</h3></div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
                  <a href={resource.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary underline underline-offset-4">{resource.linkLabel}<ExternalLink className="size-4" aria-hidden="true" /></a>
                </article>
              ))}
            </div>
          </section>

          <section className="border-b border-border py-14 lg:py-20">
            <div className="rounded-lg bg-primary p-6 text-primary-foreground sm:p-10 lg:p-12">
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">Orientação familiar</p>
              <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-4xl">{city.familyHeading}</h2>
              <div className="mt-5 max-w-4xl space-y-4 text-[15px] leading-relaxed text-primary-foreground/75">{city.familyText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <Button asChild variant="outline" className="mt-7 min-h-11 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/familia">Conhecer a página para famílias <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </section>

          <section className="border-b border-border py-14 lg:py-20">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">Perguntas de {city.name}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Dúvidas locais respondidas com transparência</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {city.faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display font-semibold marker:content-none">{faq.question}<span className="grid size-7 shrink-0 place-items-center rounded-full bg-glass text-secondary transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p></details>)}
            </div>
          </section>

          <section className="py-14 lg:py-20">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">Continue com informação</p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Leituras relacionadas ao seu próximo passo</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {city.relatedLinks.map((link) => <Link key={link.to} to={link.to} className="rounded-lg border border-border bg-glass p-5 transition-colors hover:bg-glass-strong"><span className="flex items-center justify-between gap-3 font-display font-semibold">{link.label}<ArrowRight className="size-4 text-secondary" aria-hidden="true" /></span><span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{link.description}</span></Link>)}
            </div>
          </section>
        </div>

        <section className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">Converse antes de organizar qualquer deslocamento.</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/75">A equipe explica a unidade de Araraquara, ouve a situação e informa o que precisa ser avaliado, sem garantia de vaga ou resultado.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="min-h-14 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Falar pelo WhatsApp</a></Button><Button asChild size="lg" variant="outline" className="min-h-14 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></Button></div>
          </div>
        </section>
      </main>
    </div>
  );
}
