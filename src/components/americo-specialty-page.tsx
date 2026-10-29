import { Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { TreatmentStandardBlocks, treatmentHeading } from '@/components/treatment-standard-blocks';
import { Button } from '@/components/ui/button';
import { InteractiveTriage } from '@/components/interactive-triage';
import { AmericoSpecialtyIcon } from './americo-specialties';
import { americoSpecialty, americoWhatsappHref, americoAccess, americoParentPath, specialtySources, type AmericoSpecialtyKey, type SpecialtyContent } from '@/lib/americo-specialties';
import { visualAssets } from '@/lib/visual-assets';
import { institutionalIdentity } from '@/lib/institutional';
import { phoneDisplay, phoneHref } from '@/lib/site';

export function AmericoSpecialtyPage({ specialty, content }: { specialty: AmericoSpecialtyKey; content?: SpecialtyContent }) {
  const page = content ?? americoSpecialty(specialty);
  const image = visualAssets.americoSpecialties[specialty];
  const whatsapp = americoWhatsappHref(specialty);
  return <div className="site-editorial min-h-screen bg-deep font-body text-foreground"><main>
    <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
      <nav aria-label="Navegação estrutural" className="text-xs leading-relaxed text-muted-foreground"><ol className="flex flex-wrap items-center gap-2">
        <li><Link to="/" className="hover:text-secondary">Início</Link></li><li aria-hidden="true">/</li>
        <li><Link to={americoParentPath} className="hover:text-secondary">Américo Brasiliense</Link></li><li aria-hidden="true">/</li>
        <li aria-current="page" className="text-foreground">{page.label}</li>
      </ol></nav>
    </div>
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-6 sm:px-8 sm:pt-10">
        <div className="flex items-center gap-3"><AmericoSpecialtyIcon name={specialty} /><p className="text-xs font-semibold uppercase text-secondary">Américo Brasiliense · Apoio regional a partir de Araraquara</p></div>
        <h1 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">{treatmentHeading(page.label, "Américo Brasiliense")}</h1>
<p className="mt-4 max-w-3xl font-display text-xl font-semibold leading-snug sm:text-2xl">{page.heading}</p>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">{page.intro}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild className="h-auto min-h-12 max-w-full whitespace-normal bg-whatsapp py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="shrink-0" aria-hidden="true" />Falar com Plantão de Atendimento 24h via WhatsApp</a></Button>
          <Button asChild variant="outline" className="h-auto min-h-12 whitespace-normal border-border bg-glass py-3 text-foreground hover:bg-glass-strong"><a href={phoneHref}><Phone aria-hidden="true" />{phoneDisplay}</a></Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Orientação e suporte para agendamento 24h; não é serviço de emergência.</p>
      </div>
      <figure className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <img src={image.src} alt={image.alt} width={756} height={628} decoding="async" fetchPriority="high" className="aspect-[4/3] w-full rounded-lg object-cover sm:aspect-[16/7]" />

      </figure>
    </section>
    <InteractiveTriage defaultCity="Américo Brasiliense" />
    <aside className="border-b border-border bg-glass px-5 py-7 sm:px-8" aria-label="Segurança e limites do atendimento"><div className="mx-auto flex max-w-6xl items-start gap-3"><ShieldCheck className="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" /><p className="max-w-4xl text-sm leading-relaxed">{page.notice}</p></div></aside>
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16 lg:py-20">
      <article className="min-w-0 space-y-12" data-specialty-content>
        {page.sections.map(section => <section key={section.title}><h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">{section.title}</h2><div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">{section.paragraphs.map(text => <p key={text}>{text}</p>)}</div></section>)}
        <section><h2 className="font-display text-2xl font-semibold sm:text-3xl">Acesso regional e participação da família</h2><p className="mt-5 leading-relaxed text-muted-foreground">{americoAccess.route}</p><p className="mt-4 leading-relaxed text-muted-foreground">A SP-257 é uma referência regional; confirme o trajeto conforme origem e destino. Centro, Jardim Planalto, Luiz Ometto, Jardim Santa Terezinha, Jardim Vista Alegre e São Judas Tadeu são referências municipais, não locais de atendimento da Central. Visitas e transporte dependem de agendamento, sem prazo garantido por bairro.</p></section>
      </article>
      <aside className="self-start border-l-2 border-accent pl-5" aria-label="Organizar o cuidado">
        <h2 className="font-display text-xl font-semibold">Próximos passos</h2>
        <ol className="mt-6 space-y-6">{['Relatar a necessidade sem diagnóstico remoto.', 'Consultar avaliação, perfil de admissão e encaminhamentos.', 'Confirmar condições antes de organizar viagem e visitas.'].map((step, i) => <li key={step}><p className="text-xs font-semibold text-secondary">0{i + 1}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step}</p></li>)}</ol>
        <div className="mt-8 border-t border-border pt-6"><MapPin className="size-5 text-secondary" aria-hidden="true" /><p className="mt-3 text-sm font-semibold">Sede em Araraquara</p><address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">{institutionalIdentity.fullAddress}</address><Button asChild variant="link" className="mt-3 h-auto min-h-12 max-w-full whitespace-normal px-0 text-left text-secondary"><a href={institutionalIdentity.mapsHref} target="_blank" rel="noopener noreferrer">Como chegar <ArrowRight aria-hidden="true" /></a></Button></div>
      </aside>
    </div>
    <section className="border-y border-border bg-glass px-5 py-14 sm:px-8"><div className="mx-auto max-w-6xl">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">Perguntas de famílias de Américo Brasiliense</h2>
      <div className="mt-7 divide-y divide-border border-y border-border">{page.faqs.map(faq => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-semibold marker:content-none">{faq.question}<span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-secondary group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p></details>)}</div>
    </div></section>
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <h2 className="font-display text-xl font-semibold">Fontes e responsabilidade da informação</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Conteúdo educativo baseado em fontes públicas e nas informações fornecidas pela instituição. Não substitui avaliação clínica ou parecer jurídico, nem representa validação clínica individual deste artigo. A instituição informa suporte psicológico com Margareth C. V. Moraes (CRP 06/130268) e coordenação de Luiz Fernando Soares; as fontes não certificam a Central.</p>
      <ul className="mt-5 space-y-3 text-sm">{specialtySources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-secondary underline underline-offset-4">{source.label}</a></li>)}</ul>
      <div className="mt-6 flex flex-col items-start gap-2"><Button asChild variant="link" className="h-auto min-h-12 max-w-full whitespace-normal px-0 text-left text-secondary"><Link to="/transparencia">Transparência e responsabilidade técnica <ArrowRight aria-hidden="true" /></Link></Button><Button asChild variant="link" className="h-auto min-h-12 max-w-full whitespace-normal px-0 text-left text-secondary"><Link to="/internacao-involuntaria-araraquara">Orientação geral sobre internação involuntária <ArrowRight aria-hidden="true" /></Link></Button></div>
    </section>
    <section className="border-t border-border px-5 py-12 sm:px-8"><div className="mx-auto max-w-6xl">
      <h2 className="max-w-3xl font-display text-2xl font-semibold sm:text-3xl">Uma conversa acolhedora para o próximo passo</h2><p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Conte o que preocupa sua família em Américo Brasiliense. A equipe esclarece avaliação, disponibilidade e encaminhamento, sem garantia de vaga ou resultado.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button asChild className="h-auto min-h-12 max-w-full whitespace-normal bg-whatsapp py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Falar pelo WhatsApp</a></Button><Button asChild variant="outline" className="h-auto min-h-12 whitespace-normal border-border bg-glass py-3"><Link to="/contato">Solicitar orientação <ArrowRight aria-hidden="true" /></Link></Button></div>
      <Button asChild variant="link" className="mt-7 h-auto min-h-12 max-w-full whitespace-normal px-0 text-left text-secondary"><Link to={americoParentPath}><ArrowLeft className="shrink-0" aria-hidden="true" />Voltar à página de Américo Brasiliense</Link></Button>
    </div></section>
  <TreatmentStandardBlocks cityName="Américo Brasiliense" cityPath="/clinica-de-recuperacao-em-americo-brasiliense-sp" />
</main></div>;
}