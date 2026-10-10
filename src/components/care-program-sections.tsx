import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, HeartHandshake, MapPin, MessageCircle, ShieldCheck, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { therapeuticSchedule } from "@/lib/care-program";
import { institutionalIdentity, legalSources } from "@/lib/institutional";
import { whatsappHref } from "@/lib/site";

const sectionClass = "care-program-section border-y border-border py-14 sm:py-16 lg:py-20";
const headingClass = "max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-4xl";

export function CareSpecialties() {
  return <section className={sectionClass} aria-label="Modalidades de acolhimento e orientação">
    <p className="mb-3 text-xs font-semibold uppercase text-secondary">Modalidades e necessidades de cuidado</p>
    <h2 className={headingClass}>Acolhimento psicossocial e caminhos de tratamento</h2>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">A unidade própria oferece acolhimento voluntário contínuo e suporte psicossocial. O plano considera as necessidades da pessoa; cuidados médicos são encaminhados a estabelecimentos habilitados.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      <article className="rounded-lg border border-border bg-card p-6">
        <HeartHandshake className="size-6 text-secondary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold">Álcool, cocaína, crack e múltiplas substâncias</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A busca de ajuda começa com escuta e triagem sobre o uso de substâncias, a saúde e a situação familiar. A indicação de cuidado depende de avaliação individual, não apenas da substância utilizada.</p>
        <Button asChild variant="link" className="mt-4 h-auto min-h-12 whitespace-normal px-0 text-left"><Link to="/blog/dependencia-quimica-sinais-consequencias-tratamento">Entender a dependência química <ArrowRight aria-hidden="true" /></Link></Button>
      </article>
      <article className="rounded-lg border border-border bg-card p-6">
        <Sprout className="size-6 text-secondary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold">Reabilitação psicossocial na unidade</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Suporte psicológico com Margarete Vasques (CRP 06/130268), conscientização em 12 Passos, laborterapia, convivência terapêutica e plano de prevenção à recaída integram a proposta confirmada pela instituição.</p>
        <Button asChild variant="link" className="mt-4 h-auto min-h-12 whitespace-normal px-0 text-left"><Link to="/transparencia">Conhecer a responsabilidade técnica <ArrowRight aria-hidden="true" /></Link></Button>
      </article>
      <article className="rounded-lg border border-border bg-card p-6">
        <ShieldCheck className="size-6 text-secondary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold">Desintoxicação médica: encaminhamento externo</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A desintoxicação médica não é realizada na unidade própria. A Central orienta a família, realiza triagem e encaminhamento para avaliação e cuidado em estabelecimentos médicos habilitados. Protocolos e condutas são responsabilidade da equipe médica desses serviços.</p>
        <Button asChild variant="link" className="mt-4 h-auto min-h-12 whitespace-normal px-0 text-left"><Link to="/clinica-de-reabilitacao">Compreender as etapas do cuidado <ArrowRight aria-hidden="true" /></Link></Button>
      </article>
      <article className="rounded-lg border border-border bg-card p-6">
        <HeartHandshake className="size-6 text-secondary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold">Acolhimento voluntário e orientação em internação involuntária</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Acolhimento voluntário psicossocial não equivale a internação hospitalar. Situações que requerem internação involuntária clínica são encaminhadas a unidades habilitadas, com orientação familiar sobre os trâmites; a decisão e a autorização são médicas, conforme os requisitos legais.</p>
        <Button asChild variant="link" className="mt-4 h-auto min-h-12 whitespace-normal px-0 text-left"><Link to="/termos-de-acolhimento">Consultar os termos de atendimento <ArrowRight aria-hidden="true" /></Link></Button>
      </article>
    </div>
    <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">Para necessidades de acolhimento masculino ou feminino, consulte a equipe sobre perfil de admissão e possibilidades de encaminhamento. Não há confirmação de ambientes separados na unidade.</p>
    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Informações de serviço fornecidas pela instituição, sem promessa de cura, prazo ou resultado. Em risco imediato, procure atendimento de urgência ou ligue para o SAMU 192.</p>
  </section>;
}

export function TherapeuticRoutine() {
  return <section className={sectionClass} aria-label="Cronograma terapêutico da unidade">
    <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-secondary"><Clock className="size-4" aria-hidden="true" />Rotina na unidade própria</p>
    <h2 className={headingClass}>Um dia de acolhimento em Araraquara</h2>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">Cronograma informado e confirmado pela instituição. A participação nas atividades considera o plano de cuidado e a avaliação da equipe, sem garantir resultados terapêuticos.</p>
    <ol className="mt-8 divide-y divide-border border-y border-border">
      {therapeuticSchedule.map(item => <li key={item.start} className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-secondary"><span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" /><time dateTime={item.start}>{item.start.replace(":", "h")}</time><span>às</span><time dateTime={item.end}>{item.end.replace(":", "h")}</time></div>
        <div><h3 className="font-display text-lg font-semibold">{item.title}</h3><p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{item.activities}</p></div>
      </li>)}
    </ol>
  </section>;
}

export function RegionalCare({ cityName }: { cityName?: string }) {
  return <section className={sectionClass} aria-label="Unidade própria em Araraquara e acesso familiar">
    <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-secondary"><MapPin className="size-4" aria-hidden="true" />Proximidade e vínculo familiar</p>
    <h2 className={headingClass}>{cityName && cityName !== "Araraquara" ? `Uma referência em Araraquara para famílias de ${cityName}` : "Unidade própria em Araraquara, perto da família"}</h2>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">A única unidade física da Central fica em Araraquara/SP. A proximidade da sede facilita a organização do acesso da família, respeitando as condições do acolhimento. As páginas de outros municípios são informativas e não representam filiais.</p>
    <address className="mt-4 text-sm not-italic font-semibold leading-relaxed">{institutionalIdentity.fullAddress}</address>
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <div className="border-l-2 border-accent pl-5"><CalendarDays className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-lg font-semibold">Visitas familiares agendadas</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">As visitas seguem dias e horários agendados conforme o cronograma terapêutico, preservando a rotina de cuidado e o vínculo com a família.</p></div>
      <div className="border-l-2 border-accent pl-5"><MapPin className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-lg font-semibold">Transporte com agendamento prévio</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Suporte de remoção e translado especializado para Araraquara e municípios vizinhos, mediante agendamento com a equipe operacional coordenada por Luiz Fernando Soares. Confirme condições e disponibilidade antes de qualquer deslocamento; não é serviço de emergência 24h.</p></div>
    </div>
    <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
      <Button asChild variant="outline" className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left"><a href={institutionalIdentity.mapsHref} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" />Ver no Google Maps / Como Chegar</a></Button>
      <Button asChild variant="link" className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left"><Link to="/contato">Consultar visitas e transporte <ArrowRight aria-hidden="true" /></Link></Button>
    </div>
  </section>;
}

export function FinancialGuidance() {
  return <section className={sectionClass} aria-label="Orientação financeira e requisitos legais">
    <h2 className={headingClass}>Acolhimento particular e orientação sobre planos de saúde</h2>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">A Central oferece acolhimento particular e orientação sobre possibilidades de cobertura e reembolso via planos de saúde. Consulte as opções com a equipe antes de contratar qualquer serviço.</p>
    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Essa orientação não significa aceitação de convênios nem garantia de cobertura ou reembolso. As condições dependem do contrato, da operadora e do serviço indicado; solicite a confirmação diretamente ao plano.</p>
    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">O acolhimento voluntário e o encaminhamento hospitalar são distintos. Os trâmites de internação devem observar as Leis 10.216/2001 e 13.840/2019. A orientação familiar da Central não substitui assessoria jurídica ou avaliação médica, nem garante vaga em serviços externos.</p>
    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-secondary">{legalSources.slice(0, 2).map(source => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.label}</a>)}</div>
    <Button asChild className="mt-6 h-auto min-h-12 max-w-full whitespace-normal bg-whatsapp py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Consultar condições de acolhimento</a></Button>
  </section>;
}