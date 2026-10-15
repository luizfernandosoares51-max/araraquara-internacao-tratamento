import { FileCheck2, HeartHandshake, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { institutionalNetwork } from "@/lib/institutional";
import { whatsappHref } from "@/lib/site";

export function NetworkSafety() {
  return (
    <section aria-labelledby="rede-seguranca" className="border-t border-border py-16 lg:py-24">
      <div className="flex items-center gap-2 text-secondary"><ShieldCheck className="size-5" aria-hidden="true" /><p className="text-sm font-semibold">Proteção e cuidado responsável</p></div>
      <h2 id="rede-seguranca" className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Acolhimento e rede parceira: nós organizamos os próximos passos</h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Você não precisa buscar ajuda sozinho. Oferecemos acolhimento voluntário e direcionamento para a rede parceira em São Paulo, com escuta da família e apoio na organização do acesso ao cuidado. Nossa equipe esclarece as opções, as condições de admissão e a disponibilidade no contato.</p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Segundo declaração da Central, as clínicas da rede são regularizadas pela Vigilância Sanitária competente. A equipe apoia a família na obtenção das informações do estabelecimento receptor, incluindo documentação, responsabilidade técnica e recursos adequados ao caso.</p>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        <li className="rounded-lg border border-border bg-card p-6"><HeartHandshake className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Consulta de vagas e triagem familiar</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Oferecemos escuta inicial e apoio para admissão voluntária. O plantão confirma vagas e condições de acolhimento conforme o perfil da pessoa e a disponibilidade da rede.</p></li>
        <li className="rounded-lg border border-border bg-card p-6"><FileCheck2 className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Rede e documentação sanitária</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Disponibilizamos direcionamento para a rede declarada regularizada pela instituição e apoio para esclarecer a licença aplicável, a equipe e a modalidade de cuidado do estabelecimento receptor.</p></li>
        <li className="rounded-lg border border-border bg-card p-6"><Truck className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Apoio para remoção e transporte</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Organizamos com a família o encaminhamento e o agendamento do deslocamento, conforme avaliação, trajeto e disponibilidade da rede. Não há garantia de transporte imediato. Em risco à vida, procure o SAMU 192.</p></li>
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