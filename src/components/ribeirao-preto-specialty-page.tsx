import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RibeiraoSpecialtyIcon as SpecialtyIcon } from "./ribeirao-preto-specialties";
import { ribeiraoSpecialty, specialtySources } from "@/lib/ribeirao-preto-specialties";
import type { RibeiraoSpecialtyKey } from "@/lib/ribeirao-preto-specialties";
import { institutionalIdentity } from "@/lib/institutional";
import { phoneDisplay, phoneHref, whatsappHref } from "@/lib/site";
import { visualAssets, conceptualImageCaption } from "@/lib/visual-assets";

export function RibeiraoPretoSpecialtyPage({ specialty }: { specialty: RibeiraoSpecialtyKey }) {
  const page = ribeiraoSpecialty(specialty);
  const image = visualAssets.ribeiraoSpecialties[specialty];
  return <div className="home-serene site-editorial min-h-screen bg-background font-body text-foreground">
    <header className="border-b border-border px-5 py-5 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <Link to="/" className="max-w-sm font-display text-lg font-semibold">Central de Acolhimento e Reabilitação</Link>
        <Button asChild variant="link" className="h-auto min-h-12 whitespace-normal px-0"><a href={phoneHref}><Phone aria-hidden="true" />{phoneDisplay}</a></Button>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <nav aria-label="Navegação estrutural" className="text-xs leading-relaxed text-muted-foreground"><ol className="flex flex-wrap items-center gap-2">
          <li><Link to="/" className="hover:text-primary">Início</Link></li><li aria-hidden="true">/</li>
          <li><Link to="/cidades" className="hover:text-primary">Cidades</Link></li><li aria-hidden="true">/</li>
          <li><Link to="/clinica-de-recuperacao-em-ribeirao-preto-sp" className="hover:text-primary">Ribeirão Preto</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">{page.label}</li>
        </ol></nav>
      </div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-6 sm:px-8 sm:pt-10">
          <div className="flex items-center gap-3"><SpecialtyIcon name={page.key} /><p className="text-xs font-semibold uppercase text-secondary">Ribeirão Preto · Sede em Araraquara</p></div>
          <h1 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">{page.heading}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{page.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="h-auto min-h-12 max-w-full whitespace-normal bg-whatsapp py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Conversar com a equipe</a></Button>
            <Button asChild variant="outline" className="h-auto min-h-12 whitespace-normal py-3"><Link to="/contato">Solicitar orientação <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
        <figure className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <img src={image.src} alt={image.alt} width={1440} height={960} decoding="async" fetchPriority="high" className="aspect-[3/2] w-full rounded-lg object-cover sm:aspect-[16/7]" />
          <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">{conceptualImageCaption}</figcaption>
        </figure>
      </section>
      <aside className="border-b border-border bg-muted px-5 py-7 sm:px-8" aria-label="Limites do atendimento e segurança"><div className="mx-auto flex max-w-6xl items-start gap-3"><ShieldCheck className="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" /><p className="max-w-4xl text-sm leading-relaxed">{page.notice}</p></div></aside>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16 lg:py-20">
        <article className="min-w-0 space-y-12" data-specialty-content>
          {page.sections.map(section => <section key={section.title}><h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">{section.title}</h2><div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">{section.paragraphs.map(text => <p key={text}>{text}</p>)}</div></section>)}
        </article>
        <aside className="self-start border-l-2 border-accent pl-5" aria-label="Organizar os próximos passos">
          <h2 className="font-display text-xl font-semibold">Próximos passos</h2>
          <ol className="mt-6 space-y-6">{page.steps.map((step, index) => <li key={step.title}><p className="text-xs font-semibold text-secondary">0{index + 1}</p><h3 className="mt-2 text-sm font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p></li>)}</ol>
          <div className="mt-8 border-t border-border pt-6"><MapPin className="size-5 text-secondary" aria-hidden="true" /><p className="mt-3 text-sm font-semibold">Única sede própria</p><address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">{institutionalIdentity.fullAddress}</address><Button asChild variant="link" className="mt-3 h-auto min-h-12 max-w-full whitespace-normal px-0 text-left"><a href={institutionalIdentity.mapsHref} target="_blank" rel="noopener noreferrer">Como chegar <ArrowRight aria-hidden="true" /></a></Button></div>
        </aside>
      </div>
      <section className="border-y border-border bg-muted px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl"><h2 className="font-display text-2xl font-semibold sm:text-3xl">Perguntas sobre {page.label.toLocaleLowerCase("pt-BR")}</h2>
          <div className="mt-7 divide-y divide-border border-y border-border">{page.faqs.map(faq => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-semibold marker:content-none">{faq.question}<span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-secondary group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p></details>)}</div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <h2 className="font-display text-xl font-semibold">Fontes e responsabilidade da informação</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Conteúdo educativo, sem diagnóstico, prescrição ou parecer jurídico. Os serviços e responsáveis descritos foram informados pela instituição; as fontes públicas abaixo fundamentam a orientação geral, não certificam a Central.</p>
        <ul className="mt-5 space-y-3 text-sm">{specialtySources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-secondary underline underline-offset-4">{source.label}</a></li>)}</ul>
        <Button asChild variant="link" className="mt-5 h-auto min-h-12 max-w-full whitespace-normal px-0 text-left"><Link to="/transparencia">Transparência e responsabilidade técnica <ArrowRight aria-hidden="true" /></Link></Button>
      </section>
      <section className="border-t border-border px-5 py-12 sm:px-8"><div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-2xl font-semibold sm:text-3xl">Orientação para sua família em Ribeirão Preto</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Explique suas dúvidas e consulte as condições do acolhimento ou encaminhamento, sem compromisso de admissão ou garantia de vaga.</p>
        <div className="mt-6 flex flex-wrap gap-3"><Button asChild className="h-auto min-h-12 max-w-full whitespace-normal bg-whatsapp py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Falar pelo WhatsApp</a></Button><Button asChild variant="outline" className="h-auto min-h-12 whitespace-normal py-3"><a href={phoneHref}><Phone aria-hidden="true" />{phoneDisplay}</a></Button></div>
        <Button asChild variant="link" className="mt-7 h-auto min-h-12 max-w-full whitespace-normal px-0 text-left"><Link to="/clinica-de-recuperacao-em-ribeirao-preto-sp"><ArrowLeft className="shrink-0" aria-hidden="true" />Conhecer toda a estrutura para Ribeirão Preto</Link></Button>
      </div></section>
    </main>
  </div>;
}