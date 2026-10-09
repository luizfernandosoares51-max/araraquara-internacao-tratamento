import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { institutionalIdentity, institutionalLinks } from "@/lib/institutional";
import { TechnicalResponsibility } from "@/components/technical-responsibility";
import { emailDisplay, emailHref, phoneDisplay, phoneHref, instagramHref, facebookHref } from "@/lib/site";

export function InstitutionalFooter() {
  return (
    <footer className="home-serene border-t border-border bg-background px-5 py-12 text-foreground sm:px-8" aria-label="Informações institucionais">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <section className="min-w-0">
            <h2 className="font-display text-xl font-semibold">{institutionalIdentity.publicName}</h2>
            <dl className="mt-5 space-y-3 text-sm leading-relaxed">
              <div><dt className="font-semibold">CNPJ informado</dt><dd className="text-muted-foreground">{institutionalIdentity.cnpj}</dd></div>
              <div><dt className="font-semibold">Nome empresarial completo</dt><dd className="text-muted-foreground">Aguardando confirmação documental.</dd></div>
              <div><dt className="font-semibold">Endereço físico</dt><dd className="text-muted-foreground">Unidade somente em Araraquara/SP. Endereço completo aguardando confirmação.</dd></div>
            </dl>
          </section>
          <section className="min-w-0">
            <h2 className="text-base font-semibold">Responsabilidade técnica e sanitária</h2>
            <div className="mt-5 text-sm leading-relaxed"><TechnicalResponsibility /></div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Dados confirmados pela instituição; ícones não representam certificação independente.</p>
            <p className="mt-4 text-sm font-semibold">Vigilância Sanitária</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{institutionalIdentity.sanitaryStatement}</p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Número e validade da licença sanitária e responsável médico/CRM não informados. Acolhimento não equivale automaticamente a internação médica.</p>
          </section>
          <section className="min-w-0">
            <h2 className="text-base font-semibold">Contato oficial e transparência</h2>
            <a href={phoneHref} className="mt-4 flex min-h-12 items-center gap-2 text-sm font-medium text-primary"><Phone className="size-4 shrink-0" aria-hidden="true" />{phoneDisplay}</a>
            <a href={emailHref} className="flex min-h-12 items-center gap-2 text-sm text-primary"><Mail className="size-4 shrink-0" aria-hidden="true" /><span className="break-all">{emailDisplay}</span></a>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Para dúvidas, solicitações e manifestações, utilize os contatos acima. Não há canal exclusivo de ouvidoria confirmado.</p>
            <nav aria-label="Transparência institucional" className="mt-4 flex flex-col">
              {institutionalLinks.map((link) => <Link key={link.href} to={link.href} className="flex min-h-12 items-center py-2 text-sm font-medium text-primary underline-offset-4 hover:underline">{link.label}</Link>)}
              <Link to="/contato" className="flex min-h-12 items-center py-2 text-sm font-medium text-primary hover:underline">Contato e orientações de emergência</Link>
            </nav>
          </section>
        </div>
        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
          <Link to="/">Início</Link><Link to="/cidades">Cidades</Link><Link to="/blog">Blog</Link><Link to="/videos">Vídeos</Link>
          <a href={instagramHref} target="_blank" rel="noopener noreferrer">Instagram</a><a href={facebookHref} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Conteúdo educativo, sem diagnóstico remoto, indicação automática de internação ou promessa de resultados. Em emergência médica, ligue 192 (SAMU); o contato da Central não substitui o atendimento de urgência.</p>
      </div>
    </footer>
  );
}