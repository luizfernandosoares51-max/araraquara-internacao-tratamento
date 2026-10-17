import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, HeartHandshake, MapPin, MessageCircle, ShieldCheck, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { careMethodology, therapeuticSchedule } from "@/lib/care-program";
import { institutionalIdentity, legalSources } from "@/lib/institutional";
import { whatsappHref } from "@/lib/site";

const sectionClass = "care-program-section border-y border-border py-14 sm:py-16 lg:py-20";
const headingClass = "max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-4xl";

export function CareSpecialties() {
  return <><section className={sectionClass} aria-label="Modalidades de acolhimento e orientação">
    <p className="mb-3 text-xs font-semibold uppercase text-secondary">Modalidades e necessidades de cuidado</p>
    <h2 className={headingClass}>Acolhimento psicossocial e caminhos de tratamento</h2>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">A unidade própria oferece acolhimento voluntário contínuo e suporte psicossocial. O plano reúne psicologia, articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar com supervisão diária e cuidados contínuos, conforme as necessidades da pessoa.</p>
    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      <article className="min-w-0 rounded-lg border border-border bg-card p-3 sm:p-6">
        <HeartHandshake className="size-6 text-secondary" aria-hidden="true" />
        <h3 className="mt-3 font-display text-sm font-semibold leading-snug sm:text-xl">Álcool, cocaína, crack e múltiplas substâncias</h3>
        <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">A busca de ajuda começa com escuta e triagem sobre o uso de substâncias, a saúde e a situação familiar. A indicação de cuidado depende de avaliação individual, não apenas da substância utilizada.</p>
        <Button asChild variant="link" className="mt-2 h-auto min-h-12 whitespace-normal px-0 text-left text-xs sm:text-sm"><Link to="/blog/dependencia-quimica-sinais-consequencias-tratamento">Entender a dependência química <ArrowRight aria-hidden="true" /></Link></Button>
      </article>
      <article className="min-w-0 rounded-lg border border-border bg-card p-3 sm:p-6">
        <Sprout className="size-6 text-secondary" aria-hidden="true" />
        <h3 className="mt-3 font-display text-sm font-semibold leading-snug sm:text-xl">Reabilitação psicossocial na unidade</h3>
        <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">Suporte psicológico com Margarete Vasques (CRP 06/130268), conscientização em 12 Passos, laborterapia, convivência terapêutica e plano de prevenção à recaída integram a proposta confirmada pela instituição.</p>
        <Button asChild variant="link" className="mt-2 h-auto min-h-12 whitespace-normal px-0 text-left text-xs sm:text-sm"><Link to="/transparencia">Conhecer a responsabilidade técnica <ArrowRight aria-hidden="true" /></Link></Button>
      </article>
      <article className="min-w-0 rounded-lg border border-border bg-card p-3 sm:p-6">
        <ShieldCheck className="size-6 text-secondary" aria-hidden="true" />
        <h3 className="mt-3 font-display text-sm font-semibold leading-snug sm:text-xl">Avaliação clínica e encaminhamento para desintoxicação</h3>
        <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">A avaliação médica orienta o cuidado adequado. Quando há indicação de desintoxicação médica ou assistência hospitalar, a Central apoia a família no encaminhamento a estabelecimentos habilitados, com protocolos e condutas definidos pela equipe responsável.</p>
        <Button asChild variant="link" className="mt-2 h-auto min-h-12 whitespace-normal px-0 text-left text-xs sm:text-sm"><Link to="/clinica-de-reabilitacao">Compreender as etapas do cuidado <ArrowRight aria-hidden="true" /></Link></Button>
      </article>
      <article className="min-w-0 rounded-lg border border-border bg-card p-3 sm:p-6">
        <HeartHandshake className="size-6 text-secondary" aria-hidden="true" />
        <h3 className="mt-3 font-display text-sm font-semibold leading-snug sm:text-xl">Acolhimento voluntário e orientação em internação involuntária</h3>
        <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">Acolhimento voluntário psicossocial não equivale a internação hospitalar. Situações que requerem internação involuntária clínica são encaminhadas a unidades habilitadas, com orientação familiar sobre os trâmites; a decisão e a autorização são médicas, conforme os requisitos legais.</p>
        <Button asChild variant="link" className="mt-2 h-auto min-h-12 whitespace-normal px-0 text-left text-xs sm:text-sm"><Link to="/termos-de-acolhimento">Consultar os termos de atendimento <ArrowRight aria-hidden="true" /></Link></Button>
      </article>
    </div>
    <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">Para necessidades de acolhimento masculino ou feminino, consulte a equipe sobre perfil de admissão e possibilidades de encaminhamento. A organização dos ambientes e a compatibilidade de admissão devem ser esclarecidas diretamente antes do ingresso.</p>
    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Informações de serviço fornecidas pela instituição, sem promessa de cura, prazo ou resultado. Em risco imediato, procure atendimento de urgência ou ligue para o SAMU 192.</p>
  </section><CareMethodology /></>;
}

function CareMethodology() {
  return <section className={sectionClass} aria-label="Metodologia e equipe multidisciplinar">
    <p className="mb-3 text-xs font-semibold uppercase text-secondary">Equipe multidisciplinar e cuidado individualizado</p>
    <h2 className={headingClass}>Metodologia Terapêutica e Equipe Multidisciplinar</h2>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">O acolhimento voluntário da Central reúne suporte psicológico, conscientização em 12 Passos, laborterapia, convivência terapêutica e prevenção à recaída. Articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar com supervisão diária e cuidados contínuos complementam essa estrutura. O plano individual orienta as prioridades e eventuais encaminhamentos hospitalares.</p>
    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
      {careMethodology.map(method => <article key={method.title} className="min-w-0 rounded-lg border border-border bg-card p-3 sm:p-6">
        <ShieldCheck className="size-6 text-secondary" aria-hidden="true" />
        <h3 className="mt-3 font-display text-sm font-semibold leading-snug sm:text-xl">{method.title}</h3>
        <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">{method.description}</p>
      </article>)}
    </div>
    <div className="mt-7 border-l-2 border-accent pl-5">
      <h3 className="font-display text-lg font-semibold">Estrutura de acolhimento multidisciplinar</h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">O suporte psicológico especializado é conduzido por Margarete Vasques (CRP 06/130268), com foco em suporte emocional, manejo comportamental e acolhimento. Luiz Fernando Soares lidera a coordenação operacional, a organização da rotina terapêutica e o apoio às famílias. O articulação médica e psiquiátrica com serviços parceiros credenciados contempla avaliação clínica, estabilização e manejo de comorbidades. A equipe multidisciplinar na unidade realiza supervisão diária e cuidados contínuos dos acolhidos. Conscientização em 12 Passos, PPR, laborterapia e convivência terapêutica integram o planejamento de autonomia e reinserção social.</p>
    </div>
    <Button asChild variant="link" className="mt-5 h-auto min-h-12 max-w-full whitespace-normal px-0 text-left"><Link to="/transparencia">Conhecer a equipe e a responsabilidade pelo cuidado <ArrowRight aria-hidden="true" /></Link></Button>
  </section>;
}

export function TherapeuticRoutine() {
  return <section className={sectionClass} aria-label="Cronograma terapêutico da unidade">
    <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-secondary"><Clock className="size-4" aria-hidden="true" />Rotina na unidade própria</p>
    <h2 className={headingClass}>Um dia de acolhimento em Araraquara</h2>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">Cronograma informado e confirmado pela instituição. A participação nas atividades considera o plano de cuidado e a avaliação da equipe, sem garantir resultados terapêuticos.</p>
    <ol className="mt-6 grid grid-cols-2 gap-2 rounded-lg border border-border bg-card p-3 sm:gap-3 sm:p-5 md:grid-cols-3">
      {therapeuticSchedule.map(item => { const h = Number(item.start.slice(0, 2)); const period = h < 11 ? "Manhã" : h < 18 ? "Tarde" : "Noite"; return <li key={item.start} className="min-w-0 rounded-md bg-background p-2.5 sm:p-4">
        <p className="text-[10px] font-semibold uppercase text-muted-foreground">{period}</p>
        <div className="mt-1 flex flex-wrap items-center gap-1 text-xs font-semibold text-secondary"><time dateTime={item.start}>{item.start.replace(":", "h")}</time><span>às</span><time dateTime={item.end}>{item.end.replace(":", "h")}</time></div>
        <h3 className="mt-1 font-display text-sm font-semibold leading-snug">{item.title}</h3><p className="mt-1 text-xs leading-snug text-muted-foreground">{item.activities}</p>
      </li>; })}
    </ol>
  </section>;
}

export function RegionalCare({ cityName }: { cityName?: string }) {
  return <section className={sectionClass} aria-label="Unidade própria em Araraquara e acesso familiar">
    <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-secondary"><MapPin className="size-4" aria-hidden="true" />Proximidade e vínculo familiar</p>
    <h2 className={headingClass}>{cityName && cityName !== "Araraquara" ? `Uma referência em Araraquara para famílias de ${cityName}` : "Unidade própria em Araraquara, perto da família"}</h2>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">A única unidade física da Central fica em Araraquara/SP. A proximidade da sede facilita a organização do acesso da família, respeitando as condições do acolhimento. As páginas de outros municípios são informativas e não representam filiais.</p>
    <address className="mt-4 text-sm not-italic font-semibold leading-relaxed">{institutionalIdentity.fullAddress}</address>
    <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2">
      <div className="border-l-2 border-accent pl-5"><CalendarDays className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-lg font-semibold">Visitas familiares agendadas</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">As visitas seguem dias e horários agendados conforme o cronograma terapêutico, preservando a rotina de cuidado e o vínculo com a família.</p></div>
      <div className="border-l-2 border-accent pl-5"><MapPin className="size-5 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-lg font-semibold">Transporte com agendamento prévio</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Suporte de remoção e translado especializado para Araraquara e municípios vizinhos, mediante agendamento com a equipe operacional coordenada por Luiz Fernando Soares. O plantão de orientação e o suporte para agendamento funcionam 24 horas. Combine condições e disponibilidade antes do deslocamento; em emergência, acione o SAMU 192.</p></div>
    </div>
    <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
      <Button asChild variant="outline" className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left"><a href={institutionalIdentity.mapsHref} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" />Ver no Google Maps / Como Chegar</a></Button>
      <Button asChild variant="link" className="h-auto min-h-12 max-w-full whitespace-normal py-3 text-left"><Link to="/contato">Consultar visitas e transporte <ArrowRight aria-hidden="true" /></Link></Button>
    </div>
  </section>;
}

export function FinancialGuidance() {
  return <section id="cobertura-reembolso" className={sectionClass} aria-label="Orientação financeira e requisitos legais">
    <h2 className={headingClass}>Atendimento Particular e Assessoria para Cobertura / Reembolso</h2>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">Sabemos que a busca de cuidado exige atenção e clareza. Além do acolhimento particular, a Central oferece orientação à família para consultar possibilidades de cobertura ou reembolso integral ou parcial junto ao plano de saúde, conforme as condições do contrato.</p>
    <div className="mt-7 border-l-2 border-accent pl-5">
      <h3 className="font-display text-lg font-semibold">Documentação e consulta à operadora</h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">A Central fornece documentação administrativa referente ao acolhimento. A equipe ajuda a família a identificar os documentos solicitados pela operadora e orienta a solicitação de laudos e relatórios aos profissionais responsáveis pelo atendimento. Cada documento clínico depende da avaliação e da competência do profissional emissor.</p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Se o seu plano é Unimed, Bradesco Saúde, SulAmérica, Amil, Porto Seguro Saúde ou NotreDame Intermédica, consulte diretamente a operadora sobre requisitos, elegibilidade e documentos. A menção a essas operadoras é apenas informativa e não indica convênio, parceria ou atendimento credenciado da Central.</p>
    </div>
    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">A assessoria apoia a organização do pedido; autorização, cobertura e reembolso são decisões da operadora, conforme contrato e serviço indicado. Consulte diretamente seu plano para confirmar as condições. As operadoras citadas são exemplos para consulta, e não convênios anunciados.</p>
    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">O acolhimento voluntário e o encaminhamento hospitalar são distintos. Os trâmites de internação devem observar as Leis 10.216/2001 e 13.840/2019. A orientação familiar da Central não substitui assessoria jurídica ou avaliação médica, nem garante vaga em serviços externos.</p>
    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-secondary">{legalSources.slice(0, 2).map(source => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.label}</a>)}</div>
    <Button asChild className="mt-6 h-auto min-h-12 max-w-full whitespace-normal bg-whatsapp py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Receber orientação sobre acolhimento e reembolso</a></Button>
  </section>;
}