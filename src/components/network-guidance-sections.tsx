import { Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, HeartHandshake, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { institutionalNetwork } from "@/lib/institutional";
import { whatsappHref } from "@/lib/site";
import networkImage from "@/assets/acolhimento-rede-estadual.png.asset.json";

export function NetworkSafety() {
  return (
    <section aria-labelledby="rede-seguranca" className="border-t border-border py-16 lg:py-24">
      <div className="flex items-center gap-2 text-secondary"><ShieldCheck className="size-5" aria-hidden="true" /><p className="text-sm font-semibold">Proteção e cuidado responsável</p></div>
      <h2 id="rede-seguranca" className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Acolhimento e Rede Credenciada em Todo o Estado de São Paulo</h2>
      <img src={networkImage.url} alt="Acolhimento Familiar e Rede Credenciada no Estado de São Paulo" width={768} height={768} loading="lazy" decoding="async" className="mt-7 h-auto max-h-[420px] w-full max-w-[420px] rounded-2xl object-cover shadow-md" />
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Você não precisa buscar ajuda sozinho. Oferecemos suporte à família, consulta de vagas para acolhimento voluntário e encaminhamento para internação voluntária ou involuntária em estabelecimentos médicos habilitados, conforme avaliação e requisitos da Lei Federal 13.840/2019. Direcionamos famílias para a rede de clínicas credenciadas e parceiras declarada pela instituição em todas as regiões do Estado de São Paulo — incluindo Grande São Paulo, Interior e Litoral. Vagas e admissão dependem da avaliação e disponibilidade da unidade receptora. <Link to="/cidades" className="ml-1 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-ring">Consulte todas as cidades atendidas <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link></p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Nossa equipe acolhe a família, organiza os próximos passos e articula o encaminhamento com respeito à privacidade; a avaliação da necessidade médica e a autorização da internação cabem aos profissionais responsáveis do estabelecimento receptor. A Central declara que sua rede parceira é regularizada pela Vigilância Sanitária competente, sem verificação independente das licenças ou das equipes de cada unidade. Oferecemos orientação 24 horas para agendamento de remoção especializada, conforme avaliação, trajeto e disponibilidade da rede, sem garantir execução de transporte 24h ou atendimento imediato em todo o território paulista.</p>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        <li className="rounded-lg border border-border bg-card p-6"><HeartHandshake className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Consulta de Vagas e Triagem Familiar</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Disponibilizamos acolhimento voluntário e apoio para encaminhamento à internação voluntária ou involuntária em unidades médicas habilitadas, conforme a Lei 13.840/2019. Orientamos famílias de todas as regiões do Estado de SP; vagas e condições de admissão são confirmadas com a unidade receptora.</p></li>
        <li className="rounded-lg border border-border bg-card p-6"><FileCheck2 className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Rede e documentação sanitária</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Disponibilizamos direcionamento para a rede declarada regularizada pela instituição e apoio para esclarecer a licença aplicável, a equipe e a modalidade de cuidado do estabelecimento receptor.</p></li>
        <li className="rounded-lg border border-border bg-card p-6"><Truck className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Plantão 24 Horas para Agendamento de Remoção</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Oferecemos orientação 24h para famílias de qualquer município paulista e organizamos o agendamento do transporte com a rede, conforme avaliação, trajeto e disponibilidade. O plantão não garante execução de remoção 24h ou resgate imediato. Em risco à vida, procure o SAMU 192.</p></li>
        <li className="rounded-lg border border-border bg-card p-6"><ShieldCheck className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Atendimento particular e planos de saúde</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Oferecemos atendimento particular e assessoria administrativa para consulta de cobertura ou reembolso. Aceitação e autorização dependem da unidade receptora e da operadora, sem garantia de aprovação.</p></li>
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Regularidade informada pela instituição; não representa verificação independente, selo de certificação ou garantia de vaga.</p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Internação médica segue avaliação, autorização e requisitos legais, incluindo a Lei 13.840/2019, sob responsabilidade do estabelecimento receptor; é distinta do acolhimento voluntário da Central.</p>
      <Button asChild size="lg" className="mt-6 h-auto min-h-14 whitespace-normal bg-whatsapp px-6 py-4 text-whatsapp-foreground hover:bg-whatsapp/90">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Consultar Vagas e Falar com o Plantão Agora</a>
      </Button>
    </section>
  );
}

export function NetworkPlanGuidance() {
  return (
    <section aria-labelledby="planos-rede" className="border-t border-border py-16 lg:py-24">
      <p className="text-sm font-semibold text-secondary">Orientação financeira às famílias</p>
      <h2 id="planos-rede" className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Atendimento e Direcionamento para Planos de Saúde</h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Oferecemos acolhimento particular e assessoria administrativa para consulta de cobertura e reembolso, com apoio na organização dos próximos passos e das possibilidades de encaminhamento. A aceitação do plano depende da unidade receptora e da operadora, conforme o contrato e o serviço indicado.</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Operadoras para consulta de cobertura">
        {institutionalNetwork.insurers.map(insurer => <li key={insurer} className="flex min-h-20 items-center gap-3 rounded-lg border border-border bg-card p-5"><FileCheck2 className="size-5 shrink-0 text-secondary" aria-hidden="true" /><span className="text-sm font-semibold">{insurer}</span></li>)}
      </ul>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Operadoras apresentadas para consulta, não como convênios ou parcerias comprovadas. Não há garantia de cobertura integral, autorização ou reembolso. A decisão pertence à operadora; a orientação administrativa não substitui sua aprovação.</p>
      <Button asChild size="lg" className="mt-6 h-auto min-h-14 whitespace-normal bg-whatsapp px-6 py-4 text-whatsapp-foreground hover:bg-whatsapp/90">
        <a href={`${whatsappHref.split("?")[0]}?text=${encodeURIComponent("Olá! Gostaria de orientação para consultar a cobertura do meu plano e possibilidades de atendimento na rede parceira.")}`} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Consultar Cobertura do Meu Plano no WhatsApp</a>
      </Button>
    </section>
  );
}