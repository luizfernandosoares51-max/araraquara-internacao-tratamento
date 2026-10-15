import { FileCheck2, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { institutionalNetwork } from "@/lib/institutional";
import { whatsappHref } from "@/lib/site";

export function NetworkSafety() {
  return (
    <section aria-labelledby="rede-seguranca" className="border-t border-border py-16 lg:py-24">
      <div className="flex items-center gap-2 text-secondary"><ShieldCheck className="size-5" aria-hidden="true" /><p className="text-sm font-semibold">Proteção e cuidado responsável</p></div>
      <h2 id="rede-seguranca" className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Segurança e tranquilidade: compromisso com uma rede regularizada</h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Quem você ama merece cuidado em um estabelecimento autorizado, com informações claras. A Central declara direcionar famílias exclusivamente para clínicas parceiras regularizadas e autorizadas pela Vigilância Sanitária competente, observando as normas aplicáveis e as diretrizes nacionais da ANVISA.</p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Evite estabelecimentos clandestinos ou sem documentação. Antes de decidir, solicite a licença sanitária vigente, a identificação do responsável técnico e os profissionais disponíveis para o caso. Exija esclarecimento da modalidade de cuidado, dos direitos da pessoa e das condições de atendimento.</p>
      <ul className="mt-8 grid gap-6 border-y border-border py-6 md:grid-cols-3">
        <li><FileCheck2 className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Documentação sanitária</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Confira a autorização da Vigilância Sanitária competente; diretrizes da ANVISA não equivalem a certificação individual.</p></li>
        <li><Users className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Equipe e disponibilidade</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Confirme médicos, psiquiatras, psicólogos, enfermagem e terapeutas conforme a modalidade. A presença médica 24h não é presumida para toda a rede.</p></li>
        <li><ShieldCheck className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-semibold">Requisitos da Lei 13.840/2019</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Internação médica depende de avaliação, autorização e responsabilidades do estabelecimento receptor, distintas da orientação da Central.</p></li>
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Regularidade informada pela instituição; não representa verificação independente, selo de certificação ou garantia de vaga.</p>
    </section>
  );
}

export function NetworkPlanGuidance() {
  return (
    <section aria-labelledby="planos-rede" className="border-t border-border py-16 lg:py-24">
      <p className="text-sm font-semibold text-secondary">Orientação financeira às famílias</p>
      <h2 id="planos-rede" className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Atendimento e Direcionamento para Planos de Saúde</h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Ajudamos a organizar dúvidas sobre atendimento particular, cobertura e reembolso e a consultar possibilidades de encaminhamento na rede parceira. A aceitação do plano deve ser confirmada com a unidade receptora e a operadora, conforme o contrato e o serviço indicado.</p>
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