import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gamblingCareScope, gamblingOrientationSections } from "@/lib/gambling-orientation";
import { visualAssets } from "@/lib/visual-assets";
import { phoneDisplay, phoneHref, siteUrl, whatsappHref } from "@/lib/site";
import { TreatmentStandardBlocks } from "@/components/treatment-standard-blocks";
import { InteractiveTriage } from "@/components/interactive-triage";

const title = "Orientação sobre Jogos Compulsivos e Apostas | Central";
const description = "Orientação educativa sobre compulsão em jogos e apostas online, controle de impulsos, apoio familiar e avaliação profissional. Central em Araraquara.";
const heading = "Orientação e Acolhimento para Compulsão em Jogos e Apostas Online";
const pageUrl = `${siteUrl}/tratamento-jogos-compulsivos-apostas`;

export const Route = createFileRoute("/tratamento-jogos-compulsivos-apostas")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: heading, description, inLanguage: "pt-BR" },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Orientação sobre jogos e apostas", item: pageUrl },
        ] },
      ],
    }) }],
  }),
  component: GamblingOrientationPage,
});

function GamblingOrientationPage() {
  return (
    <div className="home-serene site-editorial min-h-screen bg-background text-foreground">

      <main>
        <section className="relative isolate overflow-hidden">
          <img src={visualAssets.gambling.src} alt={visualAssets.gambling.alt} width={1440} height={960} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-foreground/80" />
          <div className="mx-auto max-w-6xl px-5 py-16 text-background sm:px-8 sm:py-20">
            <p className="text-sm font-semibold">Informação, escuta e orientação</p>
            <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-5xl">{heading}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed">Quando as apostas passam a afetar a rotina, as relações ou o orçamento, pedir ajuda é um passo possível. Conheça caminhos educativos e possibilidades de avaliação, sem julgamentos ou promessas de resultado.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-auto min-h-12 whitespace-normal"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4 shrink-0" aria-hidden="true" />Falar com Plantão de Atendimento 24h via WhatsApp</a></Button>
              <Button asChild variant="secondary" className="min-h-12"><a href={phoneHref}><Phone className="size-4" aria-hidden="true" />{phoneDisplay}</a></Button>
            </div>

          </div>
        </section>
        <InteractiveTriage />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <section className="border-b border-border py-10">
            <h2 className="font-display text-2xl font-semibold">O que esta orientação significa</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">A Central oferece acolhimento voluntário e suporte psicossocial na única sede, em {gamblingCareScope.ownUnitCity}. Não há confirmação de programa especializado para compulsão em apostas. O contato serve para esclarecer o escopo do atendimento e orientar a busca de avaliação adequada, sem confirmar vagas ou admissão.</p>
          </section>
          {gamblingOrientationSections.map((section, index) => (
            <section key={section.title} className="grid gap-5 border-b border-border py-10 md:grid-cols-[.75fr_1.25fr] md:gap-12">
              <div><p className="mb-3 text-sm font-semibold text-secondary">0{index + 1}</p><h2 className="font-display text-2xl font-semibold leading-tight">{section.title}</h2></div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            </section>
          ))}
          <section className="border-b border-border py-10">
            <h2 className="font-display text-2xl font-semibold">Em risco imediato, procure emergência</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Em tentativa de suicídio, perda de consciência ou outra emergência médica, ligue {gamblingCareScope.emergencyPhone} — SAMU. Não aguarde resposta da Central. O conteúdo desta página não substitui atendimento profissional.</p>
            <Button asChild variant="outline" className="mt-5 min-h-12"><a href={`tel:${gamblingCareScope.emergencyPhone}`}><Phone className="size-4" aria-hidden="true" />SAMU 192</a></Button>
          </section>
          <section className="py-10">
            <h2 className="font-display text-2xl font-semibold">Continue buscando informação segura</h2>
            <div className="mt-5 flex flex-wrap gap-3"><Button asChild variant="outline" className="min-h-12"><Link to="/clinica-de-recuperacao-em-araraquara" hash="familia">Orientação para a família</Link></Button><Button asChild variant="outline" className="min-h-12"><Link to="/transparencia">Transparência e limites do atendimento</Link></Button></div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Referências públicas: <a href="https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">Rede de Atenção Psicossocial — Ministério da Saúde</a> e <a href="https://www.gov.br/saude/pt-br/composicao/saes/samu-192/samu-192" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">SAMU 192 — Ministério da Saúde</a>. Confirme o acesso aos serviços com a rede municipal.</p>
          </section>
        </div>
      <TreatmentStandardBlocks cityName="Araraquara" cityPath="/clinica-de-recuperacao-em-araraquara" />
</main>
    </div>
  );
}