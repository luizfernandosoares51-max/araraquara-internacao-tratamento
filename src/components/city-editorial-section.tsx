import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cityEditorial } from "@/lib/city-editorial";
import { cityContactLabel, cityWhatsappHref, regionalCityAccess } from "@/lib/regional-city-access";
import { institutionalIdentity } from "@/lib/institutional";
import { phoneDisplay, phoneHref } from "@/lib/site";

const sources = {
  network: { label: "Ministério da Saúde: Rede de Atenção Psicossocial", href: "https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps" },
  emergency: { label: "Ministério da Saúde: avaliação do uso de álcool na urgência", href: "https://linhasdecuidado.saude.gov.br/portal/transtornos-por-uso-de-alcool-no-adulto/unidade-de-pronto-atendimento/avaliacao-conduta/" },
  family: { label: "Ministério da Justiça: Conversar é Proteger", href: "https://www.gov.br/mj/pt-br/assuntos/sua-protecao/politicas-sobre-drogas/conversareproteger" },
  rights: { label: "Lei 10.216/2001: direitos e internação", href: "https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10216.htm" },
  drugs: { label: "Lei 13.840/2019: regras de cuidado e internação", href: "https://www2.camara.leg.br/legin/fed/lei/2019/lei-13840-5-junho-2019-788260-norma-pl.html" },
};

export function CityEditorialSection({ slug }: { slug: string }) {
  const editorial = cityEditorial[slug];
  if (!editorial) return null;
  const access = regionalCityAccess[slug];
  const references = slug === "taquaritinga-sp" ? [sources.rights, sources.drugs, sources.network] : [sources.network, sources.emergency, sources.family];
  return <div data-city-editorial={slug}>
    <section className="border-y border-border py-14 lg:py-20" aria-label={`Acesso de ${editorial.name} à sede`}>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase text-secondary"><MapPin className="size-4 shrink-0" aria-hidden="true" />Unidade própria · Araraquara/SP</p>
      <h2 className="mt-3 max-w-4xl font-display text-2xl font-semibold leading-tight sm:text-4xl">{slug === "araraquara" ? "Uma sede terapêutica perto da sua família em Araraquara" : `Acolhimento regional para ${editorial.name}, com a família presente`}</h2>
      <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground">{access?.welcome ?? editorial.introduction}</p>
      <h3 className="mt-7 font-display text-xl font-semibold">{slug === "araraquara" ? "Acesso à sede pelos bairros e pela região" : `Como chegar de ${editorial.name} a Araraquara`}</h3>
      <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">{access?.route ?? editorial.access}</p>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">Referências de deslocamento são indicativas: origem, trânsito, acessos e paradas alteram o percurso. Consulte o mapa atualizado e combine a chegada com a equipe.</p>
      <address className="mt-4 text-sm font-semibold not-italic leading-relaxed">{institutionalIdentity.fullAddress}</address>
      <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground">{access?.visits ?? editorial.preparation} Uma mudança de ambiente pode reduzir a exposição a contextos associados ao consumo, junto ao apoio psicológico e à prevenção à recaída; cada plano considera as necessidades individuais e a continuidade do cuidado.</p>
      <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">A única sede própria da Central, em Araraquara, reúne acolhimento voluntário, suporte psicológico especializado, acompanhamento médico e psiquiátrico integrado e enfermagem com supervisão diária e cuidados contínuos. A família conta com orientação e suporte para agendamento de resgate/remoção 24 horas. Quando há indicação de desintoxicação médica ou internação hospitalar, a equipe orienta o encaminhamento a estabelecimentos habilitados. Transporte e admissão seguem avaliação e confirmação das condições; em risco imediato, procure urgência ou SAMU 192.</p>
      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild variant="outline" className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left"><a href={institutionalIdentity.mapsHref} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" />Conferir o trajeto no Google Maps</a></Button>
        <Button asChild variant="link" className="h-auto min-h-12 max-w-full whitespace-normal px-0 py-3 text-left"><a href={phoneHref}><Phone aria-hidden="true" />{phoneDisplay}</a></Button>
      </div>
    </section>
    <article className="py-14 lg:py-20" aria-labelledby={`editorial-${slug}`}>
      <p className="text-xs font-semibold uppercase text-secondary">Orientação à família · {editorial.name}</p>
      <h2 id={`editorial-${slug}`} className="mt-3 max-w-4xl font-display text-2xl font-semibold leading-tight sm:text-4xl">{editorial.articleTitle}</h2>
      <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground">{editorial.introduction}</p>
      <div className="mt-10 divide-y divide-border">
        {editorial.sections.map((section) => <section key={section.heading} className="grid gap-5 py-8 first:pt-0 lg:grid-cols-[.75fr_1.25fr] lg:gap-12">
          <h3 className="font-display text-xl font-semibold leading-snug sm:text-2xl">{section.heading}</h3>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>)}
      </div>
      <aside className="border-t border-border pt-6" aria-label="Fontes da orientação educativa">
        <p className="text-sm font-semibold">Fontes públicas para aprofundar</p>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-secondary">{references.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.label}</a></li>)}</ul>
        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-muted-foreground">Orientação educativa, sem diagnóstico ou indicação individual. As fontes fundamentam informações gerais de saúde e direitos; os dados sobre a Central são declarações fornecidas pela instituição, não validação dos serviços por esses órgãos.</p>
      </aside>
      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild className="h-auto min-h-12 max-w-full whitespace-normal bg-whatsapp py-3 text-left text-whatsapp-foreground hover:bg-whatsapp/90"><a href={cityWhatsappHref(editorial.name)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />{cityContactLabel(editorial.name)}</a></Button>
        <Button asChild variant="link" className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left"><Link to="/transparencia">Equipe e responsabilidade pelo cuidado<ArrowRight aria-hidden="true" /></Link></Button>
      </div>
    </article>
  </div>;
}