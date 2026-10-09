import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { InstitutionalPage } from "@/components/institutional-page";
import { Button } from "@/components/ui/button";
import { institutionalHead, institutionalIdentity, institutionalLocalBusiness } from "@/lib/institutional";
import { InstitutionalLocation } from "@/components/institutional-location";
import { TechnicalResponsibility } from "@/components/technical-responsibility";
import { phoneDisplay, phoneHref, emailDisplay, emailHref, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  staticData: { sitemap: true },
  head: () => institutionalHead("/contato", "Contato e Orientações de Emergência", "Contatos da Central e como chegar à R. Alfredo Micelli, 70, Condomínio Satélite, Araraquara/SP. Serviços públicos de emergência 24h."),
  component: ContactPage,
});

function ContactPage() {
  return <InstitutionalPage title="Contato e Orientações de Emergência" intro="Escolha o canal adequado: os contatos da Central são diferentes dos serviços públicos de urgência.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(institutionalLocalBusiness).replace(/</g, "\\u003c") }} />
    <section className="border-l-4 border-destructive pl-5"><h2>Emergência: não aguarde resposta da Central</h2><p>Em emergência médica, intoxicação, perda de consciência ou risco imediato à vida, ligue <strong>192 — SAMU</strong>, serviço público gratuito, 24 horas. Em situação de violência ou ameaça à segurança, ligue <strong>190 — Polícia Militar</strong>; para incêndio, salvamento e resgate, <strong>193 — Corpo de Bombeiros</strong>.</p><div className="flex flex-wrap gap-3"><Button asChild className="min-h-12"><a href="tel:192"><Phone className="size-4" />SAMU 192</a></Button><Button asChild variant="outline" className="min-h-12"><a href="tel:190">Polícia 190</a></Button><Button asChild variant="outline" className="min-h-12"><a href="tel:193">Bombeiros 193</a></Button></div><p className="mt-4 text-sm"><a href="https://www.gov.br/saude/pt-br/composicao/saes/samu-192/samu-192" target="_blank" rel="noopener noreferrer">SAMU — Ministério da Saúde</a> · <a href="https://www.policiamilitar.sp.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Militar de São Paulo</a> · <a href="https://www.corpodebombeiros.sp.gov.br/" target="_blank" rel="noopener noreferrer">Corpo de Bombeiros de São Paulo</a></p></section>
    <section itemScope itemType="https://schema.org/Organization"><h2>Contatos oficiais da Central</h2><p itemProp="name">{institutionalIdentity.publicName}</p><p>CNPJ informado: {institutionalIdentity.cnpj}.</p><div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint"><meta itemProp="contactType" content="Informações institucionais" /><meta itemProp="availableLanguage" content="pt-BR" /><div className="flex flex-col items-start gap-3"><Button asChild variant="outline" className="min-h-12"><a href={phoneHref} itemProp="telephone"><Phone className="size-4" />{phoneDisplay}</a></Button><Button asChild className="min-h-12"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4" />WhatsApp da Central</a></Button><a href={emailHref} itemProp="email" className="inline-flex min-h-12 max-w-full items-center gap-2"><Mail className="size-4 shrink-0" /><span className="break-all">{emailDisplay}</span></a></div></div><p className="mt-5">Os horários de atendimento da Central não estão confirmados. Não anunciamos atendimento institucional 24 horas, plantão médico ou disponibilidade de vagas.</p></section>
    <section><h2>Localização e rotas de acesso</h2><p>A única unidade física da Central fica em Araraquara/SP. Consulte o endereço oficial e as orientações de acesso abaixo.</p><InstitutionalLocation /><p className="mt-5"><Link to="/clinica-de-recuperacao-em-araraquara">Informações sobre a Central em Araraquara</Link>.</p></section>
    <section><h2>Responsabilidade técnica e gestão</h2><TechnicalResponsibility /></section>
    <section><h2>Manifestações e solicitações</h2><p>Dúvidas, pedidos de documentos, reclamações e solicitações de privacidade podem ser encaminhados ao e-mail institucional acima. Não há ouvidoria exclusiva confirmada. Evite anexar dados de saúde ou documentos pessoais no primeiro contato.</p><p><Link to="/transparencia">Transparência e Responsabilidade Técnica</Link> · <Link to="/politica-de-privacidade">Política de Privacidade e LGPD</Link></p></section>
  </InstitutionalPage>;
}