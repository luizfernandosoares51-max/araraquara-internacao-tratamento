import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { institutionalIdentity } from "@/lib/institutional";

const linkClass = "inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4";

/** Blocos padronizados das páginas de cidade: modalidades, transparência e malha de links. */
export function CityStandardBlocks({ cityName, hideTransparency = false }: { cityName: string; hideTransparency?: boolean }) {
  const { cnpj, fullAddress, ownership, psychologyResponsible, generalCoordination } = institutionalIdentity;
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <section aria-labelledby="modalidades-titulo" className="border-b border-border py-10 sm:py-12">
        <h2 id="modalidades-titulo" className="font-display text-2xl font-semibold leading-tight sm:text-3xl">Internação Voluntária e Involuntária (Lei 13.840) para {cityName} e Região</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">O acolhimento voluntário ocorre com adesão da pessoa na sede própria em Araraquara. A internação involuntária é excepcional, exige avaliação e autorização médica e acontece somente em unidade médica habilitada; a Central orienta a família no encaminhamento.</p>
        <h2 className="mt-8 font-display text-2xl font-semibold leading-tight sm:text-3xl">Atendimento Psiquiátrico, Apoio em Dependência Química e Saúde Mental</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">A Central oferece suporte psicossocial e orientação; avaliação e acompanhamento psiquiátrico são realizados por profissionais e serviços médicos externos, para os quais a família é orientada conforme cada caso.</p>
        <h2 className="mt-8 font-display text-2xl font-semibold leading-tight sm:text-3xl">Orientações sobre Encaminhamento e Apoio Complementar à Rede Pública (CAPS e SAMU 192)</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">O CAPS de {cityName} segue como porta pública de cuidado em saúde mental. Em risco imediato à vida, ligue para o SAMU 192 antes de qualquer contato com a Central.</p>
      </section>

      <section hidden={hideTransparency} aria-labelledby="transparencia-cidade" className="border-b border-border py-10 sm:py-12">
        <div className="flex items-center gap-2 text-secondary"><ShieldCheck className="size-5" aria-hidden="true" /><p className="text-xs font-semibold uppercase">Transparência e responsabilidade</p></div>
        <h2 id="transparencia-cidade" className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Quem orienta as famílias de {cityName}</h2>
        <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
          <div><dt className="font-semibold">CNPJ</dt><dd className="text-muted-foreground">{cnpj}</dd></div>
          <div><dt className="font-semibold">Sede de acolhimento</dt><dd className="text-muted-foreground">{fullAddress}</dd></div>
          <div><dt className="font-semibold">Equipe técnica</dt><dd className="text-muted-foreground">{psychologyResponsible.role}: {psychologyResponsible.name} ({psychologyResponsible.registration}) · {generalCoordination.role}: {generalCoordination.name} · {ownership.role}: {ownership.name}</dd></div>
          <div><dt className="font-semibold">Amparo legal</dt><dd className="text-muted-foreground">Leis Federais 10.216/2001 e 13.840/2019, conforme o enquadramento de cada caso.</dd></div>
        </dl>
        <Link to="/transparencia" className={`mt-4 ${linkClass}`}>Ver transparência completa</Link>
      </section>

      <nav aria-labelledby="servicos-conectados" className="py-10">
        <h2 id="servicos-conectados" className="font-display text-xl font-semibold">Navegação e Serviços Conectados</h2>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <li><Link to="/" className={linkClass}>Central de Acolhimento e Regulação SP</Link></li>
          <li><Link to="/cidades" className={linkClass}>Ver Todas as Cidades Atendidas</Link></li>
          <li><Link to="/clinica-de-recuperacao-em-araraquara" className={linkClass}>Araraquara</Link></li>
          <li><Link to="/clinica-de-recuperacao-em-ribeirao-preto-sp" className={linkClass}>Ribeirão Preto</Link></li>
          <li><Link to="/clinica-de-recuperacao-em-sao-carlos-sp" className={linkClass}>São Carlos</Link></li>
          <li><Link to="/clinica-de-recuperacao-em-rio-claro-sp" className={linkClass}>Rio Claro</Link></li>
          <li><Link to="/clinica-de-reabilitacao" className={linkClass}>Clínica de reabilitação: como funciona</Link></li>
        </ul>
      </nav>
    </div>
  );
}
