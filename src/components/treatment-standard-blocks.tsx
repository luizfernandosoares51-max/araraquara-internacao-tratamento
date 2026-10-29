import { Link } from "@tanstack/react-router";
import { CircleCheck, ShieldCheck } from "lucide-react";
import { institutionalIdentity } from "@/lib/institutional";

const linkClass = "inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4";

/** H1 padronizado das páginas de tratamento. */
export function treatmentHeading(label: string, cityName: string) {
  return `${label} em ${cityName} - SP | Acolhimento e Consulta de Vagas 24h`;
}

/** Blocos padronizados das páginas de tratamento: critérios, rede pública, transparência e malha de links. */
export function TreatmentStandardBlocks({ cityName, cityPath }: { cityName: string; cityPath: string }) {
  const { cnpj, fullAddress, ownership, psychologyResponsible, generalCoordination } = institutionalIdentity;
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8" data-treatment-standard>
      <section aria-labelledby="criterios-encaminhamento" className="border-t border-border py-10 sm:py-12">
        <h2 id="criterios-encaminhamento" className="font-display text-2xl font-semibold leading-tight sm:text-3xl">Critérios de Encaminhamento, Amparo Legal (Lei 13.840) e Apoio à Família</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">O acolhimento voluntário depende da adesão da pessoa e ocorre na sede própria em Araraquara. A internação involuntária é excepcional, exige avaliação e autorização médica e acontece somente em unidade médica habilitada; a Central orienta a família sobre critérios, documentos e próximos passos da internação involuntária e voluntária, dentro das normas da Lei 13.840/2019, sem garantia de vaga.</p>
        <h3 className="mt-6 font-display text-xl font-semibold leading-tight">Clínica para dependentes químicos e centro de reabilitação: acolhimento humanizado para {cityName}</h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Quem procura clínica de recuperação, clínica para dependentes químicos ou centro de reabilitação em {cityName} recebe da Central um acolhimento humanizado, sigiloso e voltado à família. A orientação para resgate e remoção 24h avalia cada situação e indica estabelecimentos credenciados quando necessário, com apoio a famílias de Araraquara, Matão, São Carlos, Itápolis, Jaboticabal, Rio Claro, Franca e região.</p>
        <h2 className="mt-8 font-display text-2xl font-semibold leading-tight sm:text-3xl">Apoio Complementar à Rede Pública (Orientações CAPS Regional e SAMU 192)</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">O CAPS de {cityName} e da região segue como porta pública de cuidado em saúde mental. Em risco imediato à vida, ligue para o SAMU 192 antes de qualquer contato com a Central.</p>
      </section>

      <section aria-labelledby="transparencia-tratamento" className="border-t border-border py-10 sm:py-12">
        <div className="flex items-center gap-2 text-secondary"><ShieldCheck className="size-5" aria-hidden="true" /><p className="text-xs font-semibold uppercase">Transparência e responsabilidade</p></div>
        <h2 id="transparencia-tratamento" className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Quem orienta as famílias de {cityName}</h2>
        <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
          <div><dt className="font-semibold">Empresa / Titular</dt><dd className="text-muted-foreground">{ownership.name} · CNPJ {cnpj}</dd></div>
          <div><dt className="font-semibold">Sede administrativa e acolhimento às famílias</dt><dd className="text-muted-foreground">{fullAddress}</dd></div>
          <div><dt className="font-semibold">Responsável Técnica</dt><dd className="text-muted-foreground">{psychologyResponsible.role}: {psychologyResponsible.name} ({psychologyResponsible.registration})</dd></div>
          <div><dt className="font-semibold">Coordenação Geral / Operacional</dt><dd className="text-muted-foreground">{generalCoordination.name}</dd></div>
          <div><dt className="flex items-start gap-2 font-semibold"><CircleCheck className="mt-0.5 size-4 shrink-0 text-whatsapp" aria-hidden="true" />Articulação Médica e Psiquiátrica Especializada</dt><dd className="ml-6 text-muted-foreground">Com profissionais e serviços parceiros credenciados, conforme cada caso.</dd></div>
          <div><dt className="flex items-start gap-2 font-semibold"><CircleCheck className="mt-0.5 size-4 shrink-0 text-whatsapp" aria-hidden="true" />Supervisão e Cuidados Contínuos</dt><dd className="ml-6 text-muted-foreground">Equipe multidisciplinar para suporte diário na rotina de acolhimento.</dd></div>
          <div className="sm:col-span-2"><dt className="font-semibold">Amparo legal</dt><dd className="text-muted-foreground">Leis Federais 10.216/2001 e 13.840/2019, conforme o enquadramento de cada caso.</dd></div>
        </dl>
        <Link to="/transparencia" className={`mt-4 ${linkClass}`}>Ver transparência completa</Link>
      </section>

      <nav aria-labelledby="servicos-conectados-tratamento" className="border-t border-border py-10">
        <h2 id="servicos-conectados-tratamento" className="font-display text-xl font-semibold">Navegação e Serviços Conectados</h2>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <li><Link to="/" className={linkClass}>Central de Acolhimento e Regulação</Link></li>
          <li><Link to="/cidades" className={linkClass}>Ver Todas as Cidades Atendidas</Link></li>
          <li><a href={cityPath} className={linkClass}>Clínica de recuperação em {cityName}</a></li>
        </ul>
      </nav>
    </div>
  );
}
