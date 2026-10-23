import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, HeartHandshake, MapPin, MessageCircle, ShieldCheck, Truck, Compass, Check, Users, ClipboardCheck, Building2, Flame, UserCheck } from "lucide-react";
import voluntaryWelcomeImage from "@/assets/home-voluntary-welcome.webp";
import transportSupportImage from "@/assets/home-transport-support.webp";
import clinicalEvaluationImage from "@/assets/home-clinical-evaluation.jpg";
import networkImage from "@/assets/acolhimento-rede-estadual.png.asset.json";
import { InteractiveTriage } from "@/components/interactive-triage";
import { Button } from "@/components/ui/button";
import { institutionalIdentity, institutionalNetwork } from "@/lib/institutional";
import { facebookHref, instagramHref, siteUrl, whatsappHref } from "@/lib/site";
import { visualAssets } from "@/lib/visual-assets";
import { homeTitle, homeDescription, homeFaqs, homeFaqSchema, homeRegionalLinks, vacancyConsultationHref } from "@/lib/home-seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const pageUrl = `${siteUrl}/`;
const pageTitle = homeTitle;
const pageDescription = homeDescription;

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: pageTitle },
      {
        name: "description",
        content:
          pageDescription,
      },
      { property: "og:title", content: pageTitle },
      {
        property: "og:description",
        content:
          pageDescription,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
    links: [{ rel: "canonical", href: pageUrl }, { rel: "preload", as: "image", type: "image/webp", href: visualAssets.home.hero.mobileSrc, imageSrcSet: `${visualAssets.home.hero.mobileSrc} 600w, ${visualAssets.home.hero.src} 720w`, imageSizes: "(max-width: 640px) 100vw, 720px", fetchPriority: "high" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { ...homeFaqSchema, "@id": `${pageUrl}#faq` },
            {
              "@type": "WebSite",
              "@id": `${pageUrl}#website`,
              url: pageUrl,
              name: "Central de Acolhimento e Reabilitação",
              inLanguage: "pt-BR",
            },
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
               name: pageTitle,
               description: pageDescription,
              isPartOf: { "@id": `${pageUrl}#website` },
              about: { "@id": `${pageUrl}#organization` },
              inLanguage: "pt-BR",
            },
            {
              "@type": "Organization",
              "@id": `${pageUrl}#organization`,
              name: "Central de Acolhimento e Reabilitação",
              url: pageUrl,
              telephone: "+5516997654579",
              address: institutionalIdentity.postalAddress,
              hasMap: institutionalIdentity.mapsHref,
              areaServed: "Estado de São Paulo",
              sameAs: [facebookHref, instagramHref],
              description:
                pageDescription,
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="home-serene home-editorial min-h-screen bg-deep font-body text-foreground">
      <main id="inicio" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <section aria-labelledby="institucional-titulo" className="relative -mx-5 overflow-hidden px-5 py-10 sm:-mx-8 sm:px-8 sm:py-12 lg:-mx-12 lg:px-12">
          <img src={visualAssets.home.hero.src} srcSet={`${visualAssets.home.hero.mobileSrc} 600w, ${visualAssets.home.hero.src} 720w`} sizes="(max-width: 640px) 100vw, 720px" width={720} height={482} decoding="async" fetchPriority="high" alt={visualAssets.home.hero.alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" aria-hidden="true" />
          <div className="relative max-w-4xl text-background">
            <a href={vacancyConsultationHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-xs font-semibold text-whatsapp-foreground"><MessageCircle className="size-4 shrink-0" aria-hidden="true" />Plantão de Orientação em Saúde Mental e Acolhimento 24h: fale no WhatsApp</a>
            <p className="mt-4 text-xs font-semibold uppercase leading-relaxed">CENTRAL ESTADUAL DE REGULAÇÃO E ACOLHIMENTO</p>
            <h1 id="institucional-titulo" className="mt-4 font-display text-3xl font-semibold leading-tight text-background sm:text-4xl lg:text-5xl">Central de Acolhimento e Reabilitação no Estado de São Paulo</h1>
            <p className="mt-4 max-w-2xl text-lg font-semibold leading-snug text-background">Central de orientação para vagas em clínica e casa de recuperação, apoio à saúde mental e plantão de orientação 24h em São Paulo.</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/90">Desde o primeiro contato, acolhemos famílias e organizamos a consulta de vagas para acolhimento voluntário e encaminhamento à internação voluntária ou involuntária (Lei 13.840/2019) em unidades médicas habilitadas. Oferecemos orientação 24h para agendamento de transporte especializado em todo o Estado, conforme avaliação e disponibilidade.</p>
            <p className="mt-3 text-xs leading-relaxed text-background/90">Articulação privada de encaminhamentos, com sede própria em Araraquara.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal bg-whatsapp px-6 py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={vacancyConsultationHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Consultar Vagas no WhatsApp 24h</a></Button>
              <Button asChild variant="outline" size="lg" className="h-auto min-h-12 whitespace-normal px-6 py-3 text-foreground"><a href="#triagem-familiar" onClick={(event) => { event.preventDefault(); const target = document.getElementById("triagem-familiar"); target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }); target?.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true }); }}>Iniciar Triagem Online<ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        <InteractiveTriage className="py-10 sm:py-12" />

        <section aria-labelledby="pilares-titulo" className="py-10 sm:py-12">
          <p className="text-xs font-semibold uppercase text-secondary">Missão, visão e valores</p>
          <h2 id="pilares-titulo" className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Dignidade em cada etapa do cuidado</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { label: "Missão", title: "Resgate e Dignidade Humana", text: "Acolher famílias com escuta respeitosa e facilitar o acesso ao cuidado adequado, preservando a dignidade, os direitos e a participação da pessoa em cada etapa.", icon: HeartHandshake },
              { label: "Visão", title: "Referência Estadual em Orientação", text: "Construir uma relação de confiança com famílias de todo o Estado de São Paulo, articulando encaminhamentos privados e valorizando práticas humanizadas e responsáveis.", icon: Compass },
              { label: "Valores", title: "Ética, Legalidade e Transparência", text: "Respeito aos direitos do paciente, clareza documental e orientação familiar 24 horas. Cada encaminhamento considera avaliação, requisitos legais e disponibilidade.", icon: ShieldCheck },
              { label: "Compromisso", title: "Apoio Integral à Família", text: "Compreendemos que a dependência afeta todo o núcleo familiar. Oferecemos orientação contínua, acolhimento humanizado e suporte emocional para quem cuida, restaurando vínculos e proporcionando segurança em cada decisão.", icon: Users },
            ].map(({ label, title, text, icon: Icon }) => <article key={label} className="rounded-lg border border-border bg-card p-5 text-card-foreground"><div className="flex items-center gap-3 text-secondary"><Icon className="size-6" aria-hidden="true" /><p className="text-xs font-semibold uppercase">{label}</p></div><h3 className="mt-4 font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
        </section>

        <section aria-labelledby="conformidade-titulo" className="border-t border-border py-10 sm:py-12">
          <h2 id="conformidade-titulo" className="font-display text-2xl font-semibold text-primary sm:text-3xl">Conformidade Legal, Sanitária e Responsabilidade Técnica</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">A Central de Acolhimento e Reabilitação atua em articulação com unidade física de acolhimento e internação devidamente licenciada e fiscalizada pelos órgãos competentes do Estado de São Paulo.</p>
          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { label: "Registro CNPJ", value: institutionalIdentity.cnpj, text: "Matriz ativa em Saúde e Assistência Psicossocial (CNAE 87.20-4).", icon: Building2 },
              { label: "Vigilância Sanitária", value: "CEVS 350320802", text: "Licença de Funcionamento Sanitário deferida em Araraquara/SP.", icon: ShieldCheck },
              { label: "Bombeiros SP", value: "AVCB Nº 723305", text: "Vistoria aprovada para 1.275 m² de infraestrutura segura.", icon: Flame },
              { label: "Direção Clínica", value: "CRP 06/130268", text: "Supervisão técnica terapêutica em psicologia clínica.", icon: UserCheck },
            ].map(({ label, value, text, icon: Icon }) => <article key={label} className="flex h-full flex-col items-center rounded-lg border border-border bg-card p-3 text-center text-card-foreground"><span className="flex size-12 items-center justify-center rounded-full bg-secondary/15 text-secondary"><Icon className="size-6" aria-hidden="true" /></span><p className="mt-2 text-xs font-semibold uppercase text-secondary">{label}</p><p className="mt-1 break-words text-sm font-semibold text-primary">{value}</p><p className="mt-2 text-xs leading-snug text-muted-foreground">{text}</p></article>)}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Dados de registro informados pela instituição.</p>
        </section>

        <section aria-labelledby="equipe-titulo" className="border-t border-border py-8 sm:py-10">
          <h2 id="equipe-titulo" className="font-display text-2xl font-semibold sm:text-3xl">Equipe Técnica e Médica</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { area: "Psicologia", name: "Margareth C. V. Moraes", reg: "CRP 06/130268", role: "Psicoterapia individual, em grupo e suporte familiar.", icon: HeartHandshake },
              { area: "Enfermagem", name: "Isabelly Leticia Rosa", reg: "COREN-SP 788016", role: "Supervisão 24h, triagem e controle medicamentoso.", icon: ShieldCheck },
              { area: "Psiquiatria", name: "Dr. Mayrton Mascaro Jr.", reg: "CRM-SP 119.473", role: "Avaliação diagnóstica e estabilização clínica.", icon: ClipboardCheck },
              { area: "Terapia", name: "Darlan Jorge da Silva", reg: "CRT-SP 299/17", role: "Metodologia dos 12 Passos e prevenção de recaída.", icon: Users },
            ].map(({ area, name, reg, role, icon: Icon }) => (
              <li key={area} className="flex h-full flex-col items-center rounded-lg border border-border bg-card p-3 text-center text-card-foreground">
                <span className="flex size-16 items-center justify-center rounded-full bg-secondary/15 text-secondary"><Icon className="size-7" aria-hidden="true" /></span>
                <p className="mt-2 text-xs font-semibold uppercase text-secondary">{area}</p>
                <h3 className="mt-1 text-sm font-semibold leading-tight">{name}</h3>
                <span className="mt-1 rounded-full bg-muted px-2 py-0.5 text-xs font-medium">{reg}</span>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{role}</p>
              </li>
            ))}
          </ul>
        </section>



        <section id="servicos" aria-label="Serviços de acolhimento e encaminhamento" className="border-t border-border py-10 sm:py-12">
          <h2 className="mb-6 font-display text-2xl font-semibold sm:text-3xl">Acolhimento, encaminhamento e transporte</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <article className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
              <img src={voluntaryWelcomeImage} alt="Representação de escuta acolhedora de um adulto e sua familiar" width={640} height={360} loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
              <div className="p-5"><HeartHandshake className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-xl font-semibold">Internação Voluntária Humanizada em São Paulo</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Acolhimento humanizado e suporte psicossocial na sede de Araraquara, com adesão da pessoa. Quando indicada, a internação médica com consentimento ocorre por encaminhamento à unidade habilitada, conforme avaliação e disponibilidade.</p></div>
            </article>
            <article className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
              <img src={visualAssets.specialties.involuntary.src} alt="Representação de orientação familiar sobre encaminhamento para internação involuntária" width={1152} height={768} loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
              <div className="p-5"><ShieldCheck className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-xl font-semibold">Encaminhamento para Internação Involuntária (Lei 13.840/2019)</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Apoio à família para encaminhamento a estabelecimentos médicos habilitados. A medida é excepcional e exige avaliação, autorização médica e os requisitos da Lei Federal 13.840/2019; o pedido familiar não basta para autorizá-la.</p></div>
            </article>
            <article className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
              <img src={transportSupportImage} alt="Representação de profissionais de apoio junto a uma van executiva discreta" width={640} height={360} loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
              <div className="p-5"><Truck className="size-6 text-secondary" aria-hidden="true" /><h3 className="mt-3 font-display text-xl font-semibold">Remoção Especializada em SP: Orientação 24h</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Plantão para organizar transporte especializado com a rede, com atenção à privacidade. Equipe, veículo e trajeto dependem de avaliação, agendamento e disponibilidade, sem resgate imediato. Em risco à vida, procure o SAMU 192.</p></div>
            </article>
            <article className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
              <img src={clinicalEvaluationImage} alt="Representação de profissional de saúde em atendimento humanizado com um adulto" width={1088} height={608} loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
              <div className="p-5"><div className="flex items-center gap-3 text-secondary"><ClipboardCheck className="size-6" aria-hidden="true" /><p className="text-xs font-semibold uppercase">Avaliação clínica</p></div><h3 className="mt-3 font-display text-xl font-semibold">Triagem Médica e Avaliação Diagnóstica</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Encaminhamento para diagnóstico especializado com psiquiatria e psicologia clínica. Identificação precoce de comorbidades (diagnóstico duplo), avaliação do grau de dependência e direcionamento para a unidade mais adequada ao perfil de cada paciente. A avaliação é feita por profissionais habilitados da rede de saúde.</p></div>
            </article>
          </div>
        </section>

        <section id="planos" aria-labelledby="planos-titulo" className="border-t border-border py-10 sm:py-12">
          <h2 id="planos-titulo" className="max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-3xl">Tratamento para Dependência Química e Saúde Mental: Consulta aos Planos de Saúde</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Assessoria administrativa para consultar cobertura ou reembolso. As operadoras abaixo são exemplos para consulta, não convênios confirmados; autorização e condições dependem da unidade receptora, da operadora e do contrato.</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-3" aria-label="Operadoras para consulta de cobertura">
            {institutionalNetwork.insurers.map(insurer => <li key={insurer} className="flex min-h-20 items-center gap-3 rounded-lg border border-border bg-card p-4"><FileCheck2 className="size-5 shrink-0 text-secondary" aria-hidden="true" /><span className="text-sm font-semibold">{insurer}</span></li>)}
          </ul>
          <Button asChild size="lg" className="mt-5 h-auto min-h-12 whitespace-normal bg-whatsapp px-6 py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={`${whatsappHref.split("?")[0]}?text=${encodeURIComponent("Olá! Gostaria de orientação para consultar a cobertura do meu plano e possibilidades de atendimento na rede parceira.")}`} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Consultar Cobertura do Meu Plano</a></Button>
        </section>

        <section id="atendimento-por-cidade" aria-labelledby="regional-titulo" className="border-t border-border py-10 sm:py-12">
          <div className="flex items-center gap-2 text-secondary"><MapPin className="size-5" aria-hidden="true" /><p className="text-sm font-semibold">Alcance regional</p></div>
          <h2 id="regional-titulo" className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">Rede de Acolhimento e Orientação nas Regiões do Estado de SP</h2>
          <div className="my-6 w-full overflow-hidden rounded-2xl bg-card shadow-md">
            <img src={networkImage.url} alt="Acolhimento Familiar e Rede Credenciada no Estado de São Paulo" width={768} height={768} loading="lazy" decoding="async" className="h-auto max-h-[480px] w-full rounded-2xl object-contain object-center md:max-h-[550px]" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">A partir de nossa Central em Araraquara, conectamos famílias da Capital, Grande São Paulo, Interior e Litoral à rede de clínicas credenciadas e parceiras declarada pela instituição. Organizamos a consulta de vagas para acolhimento voluntário e encaminhamento à internação voluntária ou involuntária em unidades médicas habilitadas, conforme avaliação e requisitos legais. Nosso plantão oferece orientação 24 horas para agendar remoção especializada, sujeita à disponibilidade da equipe e da unidade receptora.</p>
          <Link to="/cidades" className="mt-3 inline-flex min-h-11 items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-primary/80">Ver todas as cidades atendidas em São Paulo<ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link>
          <nav aria-label="Orientação nas principais cidades de São Paulo" className="mt-4 flex flex-wrap gap-x-6 gap-y-2">{homeRegionalLinks.map(item => <Link key={item.to} to={item.to} className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">{item.label}</Link>)}</nav>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Famílias do interior também encontram orientação local: veja a <Link to="/clinica-de-recuperacao-em-ribeirao-preto-sp" className="font-semibold text-primary underline underline-offset-4">clínica de dependentes químicos em Ribeirão Preto</Link> e a <Link to="/clinica-de-recuperacao-em-rio-claro-sp" className="font-semibold text-primary underline underline-offset-4">clínica de recuperação em Rio Claro</Link>, com encaminhamento conforme avaliação e disponibilidade.</p>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Consultar orientação por região">{["Grande São Paulo e Capital", "Região Metropolitana de Campinas", "Ribeirão Preto e Franca", "Araraquara, São Carlos e Rio Claro", "Sorocaba e Região", "Marília e Região", "Vale do Paraíba", "Baixada Santista e Litoral"].map(region => <Button asChild key={region} variant="outline" size="sm" className="h-auto min-h-11 max-w-full whitespace-normal px-3 py-2 text-left"><a href={`${whatsappHref.split("?")[0]}?text=${encodeURIComponent(`Olá! Gostaria de orientação sobre acolhimento e encaminhamento para uma família da região ${region}.`)}`} target="_blank" rel="noopener noreferrer"><MapPin className="size-4 shrink-0" aria-hidden="true" />{region}</a></Button>)}</div>
        </section>
        <section aria-labelledby="responsabilidade-titulo" className="-mx-5 bg-foreground px-5 py-10 text-background sm:-mx-8 sm:px-8 sm:py-12 lg:-mx-12 lg:px-12">
          <div className="flex items-start gap-4"><ShieldCheck className="mt-1 size-8 shrink-0" aria-hidden="true" /><div><p className="text-xs font-semibold uppercase">Compromisso institucional</p><h2 id="responsabilidade-titulo" className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Responsabilidade Legal e Sanitária</h2></div></div>
          <ul className="mt-6 grid gap-4 text-sm sm:grid-cols-3">{["Respeito aos direitos do paciente", "Encaminhamento sujeito à avaliação médica", "Clareza sobre documentação e responsabilidades"].map(item => <li key={item} className="flex items-start gap-2 leading-relaxed"><Check className="size-5 shrink-0" aria-hidden="true" />{item}</li>)}</ul>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-background/90">{institutionalIdentity.sanitaryStatement} A regularidade da rede é uma declaração da instituição, não certificação independente. Licenças e responsáveis de cada unidade receptora devem ser conferidos para o encaminhamento.</p>
          <Button asChild variant="outline" className="mt-5 h-auto min-h-11 whitespace-normal text-foreground"><Link to="/transparencia">Transparência e Responsabilidade Técnica<ArrowRight aria-hidden="true" /></Link></Button>
        </section>
        <section aria-labelledby="home-faq-title" className="border-t border-border py-10 sm:py-12">
          <h2 id="home-faq-title" className="font-display text-2xl font-semibold sm:text-3xl">Dúvidas Frequentes sobre Acolhimento e Internação em SP</h2>
          <Accordion type="single" collapsible className="mt-5">
            {homeFaqs.map(({ question, answer }, index) => <AccordionItem key={question} value={`faq-${index}`} className="[&>div[data-state=closed]]:hidden"><AccordionTrigger>{question}</AccordionTrigger><AccordionContent forceMount className="leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}
          </Accordion>
          <Button asChild size="lg" className="mt-6 h-auto min-h-12 whitespace-normal bg-whatsapp px-6 py-3 text-whatsapp-foreground hover:bg-whatsapp/90"><a href={vacancyConsultationHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Consultar Disponibilidade pelo WhatsApp</a></Button>
          <nav aria-label="Acesso regional ao final da Home" className="mt-5 flex flex-wrap gap-x-6 gap-y-2">{homeRegionalLinks.map(item => <Link key={item.to} to={item.to} className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">{item.label}</Link>)}</nav>
        </section>
      </main>
    </div>
  );
}
