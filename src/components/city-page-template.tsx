import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

import acolhimentoImage from "@/assets/acolhimento-araraquara.jpg";
import logoAsset from "@/assets/logo-central-acolhimento.png.asset.json";
import type { CityPageData } from "@/lib/city-pages";
import { cityPageBySlug } from "@/lib/city-pages";
import {
  facebookHref,
  instagramHref,
  phoneDisplay,
  phoneHref,
  whatsappHref,
} from "@/lib/site";

const steps = [
  "A família entra em contato",
  "A equipe escuta a situação",
  "As condições são explicadas",
  "O caso é avaliado",
  "Os próximos passos são orientados",
  "O acolhimento é combinado, se possível",
];

const sectionLinkClass = "transition-colors hover:text-secondary";
const saoCarlosFacebookHref = "https://www.facebook.com/share/19LjvZp41r/";

function SocialIcon({ network }: { network: "facebook" | "instagram" }) {
  return network === "facebook" ? (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ) : (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675A6.162 6.162 0 1 0 12 18.163 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">{children}</p>;
}

export function CityPageTemplate({ city }: { city: CityPageData }) {
  const relatedCities = city.relatedSlugs
    .map((slug) => cityPageBySlug[slug])
    .filter((related): related is CityPageData => related !== undefined);
  const cityFacebookHref = city.slug === "sao-carlos-sp" ? saoCarlosFacebookHref : facebookHref;

  return (
    <div className="relative min-h-screen overflow-hidden bg-deep font-body text-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float-one absolute -left-32 top-16 size-80 rounded-full bg-brand/35 blur-3xl" />
        <div className="float-two absolute -right-24 top-[34rem] size-72 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-32 pt-6 sm:px-8 lg:px-12">
        <header>
          <div className="flex items-center justify-between gap-4">
            <Link to="/clinica-de-recuperacao-em-araraquara" className="flex items-center gap-3" aria-label="Central de Acolhimento e Reabilitação">
              <img src={logoAsset.url} alt="Logo da Central de Acolhimento e Reabilitação" width={44} height={44} className="size-11 shrink-0 rounded-xl object-contain" loading="eager" />
              <span className="leading-tight">
                <span className="block font-display text-[13px] font-semibold sm:text-sm">Central de Acolhimento</span>
                <span className="block text-[11px] text-muted-foreground">e Reabilitação · unidade em Araraquara</span>
              </span>
            </Link>
            <span className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:flex">
              <MapPin className="size-3" aria-hidden="true" /> Araraquara/SP
            </span>
          </div>
          <nav aria-label="Menu principal" className="mt-4 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <ul className="flex min-w-max items-center gap-x-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <li><Link to="/clinica-de-recuperacao-em-araraquara" className={sectionLinkClass}>Início</Link></li>
              <li><Link to="/tratamento" className={sectionLinkClass}>Tratamento</Link></li>
              <li><Link to="/acolhimento" className={sectionLinkClass}>Acolhimento</Link></li>
              <li><Link to="/familia" className={sectionLinkClass}>Família</Link></li>
              <li><Link to="/cidades" className={sectionLinkClass}>Cidades</Link></li>
              <li><Link to="/blog" className={sectionLinkClass}>Blog</Link></li>
               <li><Link to="/videos" className={sectionLinkClass}>Vídeos</Link></li>
              <li><Link to="/contato" className={sectionLinkClass}>Contato</Link></li>
            </ul>
          </nav>
        </header>

        <main id="inicio">
          <nav aria-label="Navegação estrutural" className="pt-8 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/clinica-de-recuperacao-em-araraquara" className="hover:text-secondary">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/cidades" className="hover:text-secondary">Cidades</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">{city.name}</li>
            </ol>
          </nav>

          <section className="grid gap-10 pb-14 pt-7 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-20 lg:pt-12">
            <div>
              <div className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                <span className="size-1.5 rounded-full bg-accent" /> Orientação para {city.name}
              </div>
              <h1 className="mt-5 max-w-3xl font-display text-[2.15rem] font-bold leading-[1.04] sm:text-5xl lg:text-[3.5rem]">
                Clínica de recuperação para famílias {city.preposition} <span className="text-secondary">{city.name}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">{city.intro}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-center text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5">
                  <MessageCircle className="size-5" aria-hidden="true" /> Falar pelo WhatsApp
                </a>
                <a href={phoneHref} className="glass-panel flex min-h-14 items-center justify-center gap-2 rounded-2xl px-5 py-4 text-center text-sm font-semibold hover:bg-glass-strong">
                  <Phone className="size-4" aria-hidden="true" /> Ligar agora
                </a>
              </div>
              <div className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" /> Avaliação individual, conforme disponibilidade e condições do acolhimento.
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-2xl shadow-background/30">
              <img src={acolhimentoImage} width={1024} height={640} loading="lazy" decoding="async" alt="Ambiente terapêutico ilustrativo da proposta de acolhimento" className="aspect-[16/10] w-full object-cover" />
              <div className="glass-panel-strong border-x-0 border-b-0 px-5 py-4 text-sm text-muted-foreground">Imagem ilustrativa de um ambiente de escuta e cuidado.</div>
            </div>
          </section>

          <section className="border-y border-border py-9">
            <div className="grid gap-4 text-sm sm:grid-cols-2">
              <p><span className="font-semibold text-foreground">Primeiro contato</span><br /><span className="text-muted-foreground">Orientação por telefone ou WhatsApp</span></p>
              <p><span className="font-semibold text-foreground">Acolhimento</span><br /><span className="text-muted-foreground">Sujeito a avaliação e disponibilidade</span></p>
            </div>
          </section>

          <section className="border-b border-border py-14 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
              <div><SectionLabel>{city.name} e região</SectionLabel><h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">{city.localHeading}</h2></div>
              <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">{city.localContext}</p>
            </div>
          </section>

          <section id="acolhimento" className="border-b border-border py-14 lg:py-20">
            <SectionLabel>Sobre o acolhimento</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-4xl">{city.welcomeHeading}</h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">{city.welcomeText}</p>
          </section>

          <section id="tratamento" className="border-b border-border py-14 lg:py-20">
            <SectionLabel>Dependência química e alcoolismo</SectionLabel>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <article className="glass-panel rounded-2xl p-5 sm:p-7"><h2 className="font-display text-xl font-semibold">{city.dependencyHeading}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{city.dependencyText}</p></article>
              <article className="glass-panel rounded-2xl p-5 sm:p-7"><h2 className="font-display text-xl font-semibold">{city.alcoholHeading}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{city.alcoholText}</p></article>
            </div>
          </section>

          <section id="familia" className="border-b border-border py-14 lg:py-20">
            <div className="glass-panel-strong rounded-3xl p-6 sm:p-9">
              <div><SectionLabel>Orientação familiar</SectionLabel><h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">{city.familyHeading}</h2><p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{city.familyText}</p></div>
            </div>
          </section>

          <section className="border-b border-border py-14 lg:py-20">
            <SectionLabel>Como funciona</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Do pedido de informação aos próximos passos</h2>
            <ol className="glass-panel mt-8 grid overflow-hidden rounded-3xl md:grid-cols-3">
              {steps.map((step, index) => <li key={step} className="flex min-h-24 items-center gap-4 border-b border-border p-5 md:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(n+4)]:border-b-0"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-primary-foreground">{index === 5 ? <Check className="size-4" aria-hidden="true" /> : index + 1}</span><span className="text-sm font-medium text-foreground/85">{step}</span></li>)}
            </ol>
          </section>

          <section className="border-b border-border py-14 lg:py-20">
            <SectionLabel>Contato</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-4xl">{city.contactHeading}</h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">{city.contactText}</p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-sm font-semibold text-whatsapp-foreground"><MessageCircle className="size-5" aria-hidden="true" /> Conversar com nossa equipe</a>
          </section>

          <section id="perguntas" className="border-b border-border py-14 lg:py-20">
            <SectionLabel>Perguntas frequentes em {city.name}</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl">Respostas para uma decisão informada</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {city.faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-[15px] font-semibold marker:content-none sm:text-base">{faq.question}<span className="grid size-7 shrink-0 place-items-center rounded-full bg-glass text-secondary transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p></details>)}
            </div>
          </section>

          <section className="border-b border-border py-12">
            <SectionLabel>Outras páginas úteis</SectionLabel>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link to="/clinica-de-recuperacao-em-araraquara" className="glass-panel inline-flex items-center gap-2 rounded-xl px-4 py-3 font-medium">Unidade em Araraquara <ArrowRight className="size-4" aria-hidden="true" /></Link>
              <Link to="/cidades" className="glass-panel inline-flex items-center gap-2 rounded-xl px-4 py-3 font-medium">Todas as cidades <ArrowRight className="size-4" aria-hidden="true" /></Link>
              {relatedCities.map((related) => <Link key={related.slug} to="/$citySlug" params={{ citySlug: `clinica-de-recuperacao-em-${related.slug}` }} className="glass-panel inline-flex items-center gap-2 rounded-xl px-4 py-3 font-medium">{related.name} <ArrowRight className="size-4" aria-hidden="true" /></Link>)}
            </div>
          </section>

          <section id="contato" className="py-14 lg:py-20">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-6 sm:p-10 lg:p-14">
              <div className="relative max-w-3xl"><SectionLabel>Converse antes de decidir</SectionLabel><h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">Talvez o primeiro passo seja simplesmente conversar.</h2><p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/75">A equipe pode explicar o acolhimento em Araraquara e orientar sua família sobre o que precisa ser avaliado.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-sm font-semibold text-whatsapp-foreground"><MessageCircle className="size-5" aria-hidden="true" /> Falar pelo WhatsApp</a><a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-primary-foreground/30 px-5 py-4 text-sm font-semibold text-primary-foreground"><Phone className="size-4" aria-hidden="true" /> Ligar agora · {phoneDisplay}</a></div></div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-display font-semibold">Central de Acolhimento e Reabilitação</p><p className="mt-1 text-xs text-muted-foreground">Unidade física em Araraquara/SP</p><a href={phoneHref} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-secondary"><Phone className="size-3.5" aria-hidden="true" /> Ligar agora · {phoneDisplay}</a></div><div className="flex flex-wrap gap-5 text-xs text-muted-foreground"><Link to="/cidades" className="hover:text-foreground">Cidades</Link><Link to="/blog" className="hover:text-foreground">Blog</Link><a href={cityFacebookHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-secondary"><SocialIcon network="facebook" /> Facebook</a><a href={instagramHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-secondary"><SocialIcon network="instagram" /> Instagram</a></div></div>
          <p className="mt-7 max-w-3xl text-[11px] leading-relaxed text-muted-foreground/70">As informações são orientativas. Qualquer modalidade de cuidado depende de avaliação individual e profissional, sem promessa de resultado.</p>
        </footer>
      </div>

      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 left-4 right-4 z-50 flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground shadow-xl shadow-background/40 sm:left-auto sm:right-6"><MessageCircle className="size-5" aria-hidden="true" /> WhatsApp</a>
    </div>
  );
}