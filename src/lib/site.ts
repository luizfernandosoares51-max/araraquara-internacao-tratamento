export const siteUrl = "https://araraquara-hope-hub.lovable.app";

export const phoneDisplay = "(16) 99765-4579";
export const phoneHref = "tel:+5516997654579";

export const whatsappNumber = "5516997654579";
export const whatsappMessage =
  "Olá, gostaria de receber informações sobre o acolhimento e tratamento.";
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const instagramHref =
  "https://www.instagram.com/luizfernandosoares.soares.1?stkn=MXJuczZldHJseXk5ZA==";
export const facebookHref = "https://www.facebook.com/share/1EqxvF95Qn/";

/**
 * Menu principal. Âncoras (#) apontam para seções da página de Araraquara;
 * rotas (/) são páginas próprias — novas cidades e artigos entram aqui
 * sem mudar o restante do site.
 */
export const mainNav = [
  { label: "Início", href: "/clinica-de-recuperacao-em-araraquara#inicio" },
  { label: "Tratamento", href: "/clinica-de-recuperacao-em-araraquara#tratamento" },
  { label: "Acolhimento", href: "/clinica-de-recuperacao-em-araraquara#acolhimento" },
  { label: "Família", href: "/clinica-de-recuperacao-em-araraquara#familia" },
  { label: "Cidades", href: "/cidades" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/clinica-de-recuperacao-em-araraquara#contato" },
] as const;
