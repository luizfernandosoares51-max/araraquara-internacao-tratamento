import { Link } from "@tanstack/react-router";
import { ArrowUpRight, HeartHandshake, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo-central-optimized.webp.asset.json";
import { Button } from "@/components/ui/button";
import { adsPages, campaignWhatsappHref, type AdsPageKey } from "@/lib/ads-pages";
import { institutionalIdentity } from "@/lib/institutional";
import { phoneDisplay, phoneHref } from "@/lib/site";
import { conceptualImageCaption, visualAssets } from "@/lib/visual-assets";

function CampaignActions({ pageKey, fixed = false }: { pageKey: AdsPageKey; fixed?: boolean }) {
  return <div className={fixed ? "campaign-fixed-actions" : "campaign-actions"}>
    <Button asChild className="campaign-whatsapp min-h-12 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
      <a href={campaignWhatsappHref(pageKey)} target="_blank" rel="noopener noreferrer" aria-label="Falar com Especialista de Plantão no WhatsApp">
        <MessageCircle aria-hidden="true" /><span>Falar com Especialista de Plantão no WhatsApp</span><ArrowUpRight aria-hidden="true" className="campaign-cta-arrow" />
      </a>
    </Button>
    <Button asChild variant="outline" className="min-h-12 border-border bg-background text-foreground hover:bg-muted">
      <a href={phoneHref}><Phone aria-hidden="true" /><span>Ligar Agora</span></a>
    </Button>
  </div>;
}

export function CampaignPage({ pageKey }: { pageKey: AdsPageKey }) {
  const page = adsPages[pageKey];
  const image = visualAssets.campaigns[page.image];
  return <div className="campaign-page home-serene bg-background text-foreground">
    <div className="campaign-scroll-content">
      <header className="border-b border-border bg-background">
        <div className="campaign-header mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Central de Acolhimento e Reabilitação — início">
            <img src={logo.url} alt="Logo da Central" width={48} height={48} className="size-12 shrink-0 object-contain" />
            <span className="campaign-brand font-display text-base font-semibold leading-snug">Central de Acolhimento<br />e Reabilitação</span>
          </Link>
          <div className="campaign-header-contacts flex items-center gap-3">
            <Button asChild variant="link" className="min-h-12 text-foreground"><a href={phoneHref}><Phone aria-hidden="true" /><span>{phoneDisplay}</span></a></Button>
            <Button asChild className="min-h-12 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"><a href={campaignWhatsappHref(pageKey)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />WhatsApp</a></Button>
          </div>
        </div>
      </header>
      <main>
        <section className="campaign-hero relative isolate overflow-hidden">
          <img src={image.src} alt={image.alt} width={1600} height={1008} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-right" />
          <div className="campaign-hero-shade absolute inset-0" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
            <p className="mb-5 text-sm font-semibold uppercase leading-relaxed">{page.eyebrow}</p>
            <h1 className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-5xl">{page.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">{page.description}</p>
            <div className="mt-8"><CampaignActions pageKey={pageKey} /></div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed">Orientação 24h • Sede única em Araraquara • Acolhimento voluntário</p>
          </div>
        </section>
        <p className="mx-auto max-w-7xl px-5 py-3 text-xs leading-relaxed text-muted-foreground sm:px-8">{conceptualImageCaption}</p>
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="mb-10 flex items-start gap-4 border-b border-border pb-8">
            <HeartHandshake className="mt-1 size-8 shrink-0 text-whatsapp" aria-hidden="true" />
            <h2 className="max-w-3xl font-display text-2xl leading-snug sm:text-3xl">{page.intro}</h2>
          </div>
          <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
            {page.sections.map((section, index) => <article key={section.title} className="border-b border-border pb-8">
              <span className="text-sm font-semibold text-whatsapp">0{index + 1}</span>
              <h3 className="mt-3 font-display text-2xl leading-snug">{section.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{section.text}</p>
            </article>)}
          </div>
        </section>
        <section className="border-y border-border bg-muted">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
            <ShieldCheck className="mb-4 size-8 text-whatsapp" aria-hidden="true" />
            <h2 className="font-display text-3xl">Converse com o plantão da Central</h2>
            <p className="mb-7 mt-4 max-w-2xl leading-relaxed text-muted-foreground">Escuta respeitosa e orientação para sua família. O contato não garante admissão, transporte imediato ou resultados.</p>
            <CampaignActions pageKey={pageKey} />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Em emergência ou risco à vida, ligue SAMU <a href="tel:192" className="font-semibold underline">192</a>.</p>
          </div>
        </section>
      </main>
      <footer className="mx-auto max-w-7xl px-5 py-10 text-sm leading-relaxed sm:px-8">
        <p className="font-semibold">{institutionalIdentity.publicName}</p>
        <p className="mt-2 text-muted-foreground">{institutionalIdentity.fullAddress}</p>
        <p className="mt-2 text-muted-foreground">CNPJ {institutionalIdentity.cnpj} • Coordenação: Luiz Fernando Soares</p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
          <Link to="/transparencia" className="underline">Transparência e responsabilidade técnica</Link>
          <Link to="/politica-de-privacidade" className="underline">Privacidade e LGPD</Link>
          <Link to="/termos-de-acolhimento" className="underline">Termos de acolhimento</Link>
        </div>
      </footer>
    </div>
    <aside className="campaign-contact-dock border-t border-border bg-background" aria-label="Contato direto com o plantão"><CampaignActions pageKey={pageKey} fixed /></aside>
  </div>;
}