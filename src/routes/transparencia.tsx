import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/components/institutional-page";
import { TechnicalResponsibility } from "@/components/technical-responsibility";
import { InstitutionalLocation } from "@/components/institutional-location";
import { institutionalHead, institutionalIdentity, institutionalLocalBusiness, legalSources, involuntaryHospitalizationSafeguards } from "@/lib/institutional";
import { emailDisplay, emailHref } from "@/lib/site";

export const Route = createFileRoute("/transparencia")({
  staticData: { sitemap: true },
  head: () => institutionalHead("/transparencia", "Transparência e Responsabilidade Técnica", "Equipe e localização da Central: R. Alfredo Micelli, 70, Condomínio Satélite, Araraquara/SP. Responsabilidade técnica e referências legais."),
  component: TransparencyPage,
});

function TransparencyPage() {
  return <InstitutionalPage title="Transparência e Responsabilidade Técnica" intro="Conheça a equipe multidisciplinar, a organização do acolhimento e as referências legais para decisões informadas e responsáveis.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(institutionalLocalBusiness).replace(/</g, "\\u003c") }} />
    <section><h2>Identificação institucional e localização</h2><p>Nome utilizado neste site: {institutionalIdentity.publicName}.</p><p><strong>Empresa / Titular:</strong> {institutionalIdentity.legalName}<br /><strong>CNPJ:</strong> {institutionalIdentity.cnpj}</p><p>Os dados empresariais foram fornecidos pela instituição; sua apresentação não substitui a consulta cadastral oficial nem comprova autorização sanitária. A única unidade física da Central fica em Araraquara/SP; páginas de outras cidades são informativas e não representam filiais.</p><InstitutionalLocation /></section>
    <section><h2>Responsabilidade técnica e gestão</h2><TechnicalResponsibility /><p>A instituição informa articulação médica e psiquiátrica com serviços parceiros credenciados para avaliação clínica, estabilização e manejo de comorbidades, além de equipe multidisciplinar na unidade para supervisão diária e cuidados contínuos. Informações sobre os responsáveis e registros profissionais podem ser solicitadas diretamente. A apresentação da equipe não atribui revisão clínica nominal aos artigos educativos do site.</p></section>
    <section><h2>Vigilância Sanitária e enquadramento do serviço</h2><p>{institutionalIdentity.sanitaryStatement}</p></section>
    <section><h2>Equipe integrada, acolhimento voluntário e encaminhamento hospitalar</h2><p>{institutionalIdentity.receptionStatement}</p><p>{institutionalIdentity.referralStatement}</p><p>Essas informações são declarações fornecidas pela instituição. Não representam validação independente das habilitações de estabelecimentos parceiros nem garantia de vaga ou admissão. A indicação, a autorização e a condução de uma internação médica cabem aos profissionais e estabelecimentos legalmente habilitados.</p></section>
    <section className="legal-compliance-card border-l-2 border-secondary pl-5" aria-labelledby="legal-compliance-heading">
      <h2 id="legal-compliance-heading">Amparo Legal e Segurança Jurídica (Lei Federal nº 13.840/2019)</h2>
      <p>A internação involuntária é uma medida excepcional, sujeita aos requisitos legais, à avaliação individual e à autorização médica. A Lei Federal nº 13.840/2019 alterou a Lei nº 11.343/2006 quanto ao cuidado relacionado ao uso de drogas, priorizando o tratamento ambulatorial. A Central acolhe a preocupação da família, orienta a avaliação e organiza encaminhamentos para estabelecimentos médicos habilitados. Na sede própria, o acolhimento permanece voluntário.</p>
      <ul>
        <li><strong>Avaliação e autorização médicas:</strong> a internação psiquiátrica exige laudo médico circunstanciado, conforme a Lei nº 10.216/2001. A autorização cabe a médico registrado no CRM do estado onde se localiza o estabelecimento, observados os requisitos legais; o articulação médica e psiquiátrica com serviços parceiros credenciados da Central apoia a avaliação individual e o encaminhamento indicado, respeitando a responsabilidade do estabelecimento onde ocorre a internação.</li>
        <li><strong>Notificação legal obrigatória:</strong> a Lei nº 10.216/2001 prevê comunicação da internação involuntária ao Ministério Público Estadual em até {involuntaryHospitalizationSafeguards.notificationDeadlineHours} horas pelo responsável técnico do estabelecimento onde ocorreu. No cuidado relacionado ao uso de drogas, a Lei nº 11.343/2006 também prevê comunicação das internações e altas, nesse prazo, ao Ministério Público, à Defensoria Pública e a outros órgãos de fiscalização, na forma da regulamentação. Essa obrigação pertence ao serviço médico responsável, não ao simples encaminhamento feito pela Central.</li>
        <li><strong>Abordagem humanizada e ética:</strong> o cuidado deve respeitar a dignidade, os direitos e a segurança da pessoa, com condutas definidas pela equipe habilitada. A orientação familiar e o suporte psicossocial da Central não substituem assistência médica em crises nem garantem ausência de riscos ou sofrimento.</li>
      </ul>
      <p>Acolhimento em comunidade terapêutica não equivale a internação hospitalar. A Lei nº 11.343/2006 veda qualquer modalidade de internação em comunidades terapêuticas acolhedoras e exige adesão e permanência voluntárias. Na sede própria em Araraquara, a Central oferece acolhimento voluntário.</p>
      <p>Esta orientação é educativa e não substitui avaliação clínica ou assessoria jurídica sobre um caso individual; não constitui garantia de legalidade de uma internação específica, de vaga ou de resultado terapêutico.</p>
    </section>
    <section><h2>Fontes e responsabilidade editorial</h2><p>O conteúdo do site é institucional e educativo. Não há revisão clínica nominal confirmada; a informação não substitui atendimento profissional e não promete cura ou resultados.</p><ul>{legalSources.slice(0, 2).map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label} — texto oficial</a></li>)}<li><a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11343.htm" target="_blank" rel="noopener noreferrer">Lei 11.343/2006 — texto consolidado</a></li></ul></section>
    <section><h2>Manifestações e correções</h2><p>Para solicitar esclarecimentos, documentos ou correção de informações, escreva para <a href={emailHref}>{emailDisplay}</a>.</p></section>
  </InstitutionalPage>;
}