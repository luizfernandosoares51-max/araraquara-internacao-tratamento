export const navigationGroups = [
  { label: "Tratamento", items: [
    { label: "Dependência Química e Alcoolismo", to: "/clinica-de-reabilitacao" },
    { label: "Orientação sobre Jogos e Apostas", to: "/tratamento-jogos-compulsivos-apostas" },
    { label: "Medicamentos e Cuidados Especiais", to: "/dependencia-medicamentos-tarja-preta-ribeirao-preto" },
  ] },
  { label: "Acolhimento", items: [
    { label: "Acolhimento Voluntário", to: "/internacao-voluntaria-araraquara" },
    { label: "Internação Involuntária e Amparo Legal", to: "/internacao-involuntaria-araraquara" },
    { label: "Orientação e Agendamento de Remoção 24h", to: "/resgate-remocao-araraquara" },
    { label: "Orientação sobre Acolhimento Feminino", to: "/clinica-recuperacao-feminina-ribeirao-preto" },
  ] },
  { label: "Família", items: [
    { label: "Guia de Apoio à Família", to: "/", hash: "guia-orientacao-familia" },
    { label: "Cobertura e Reembolso", to: "/", hash: "cobertura-reembolso" },
    { label: "Transparência e Normas Legais", to: "/transparencia" },
  ] },
  { label: "Cidades", items: [
    { label: "Araraquara", to: "/clinica-de-recuperacao-em-araraquara" },
    { label: "São Carlos", to: "/clinica-de-recuperacao-em-sao-carlos-sp" },
    { label: "Ribeirão Preto", to: "/clinica-de-recuperacao-em-ribeirao-preto-sp" },
    { label: "Rio Claro", to: "/clinica-de-recuperacao-em-rio-claro-sp" },
    { label: "Franca", to: "/clinica-de-recuperacao-em-franca-sp" },
    { label: "Matão", to: "/clinica-de-recuperacao-em-matao-sp" },
    { label: "Ver Todas as Cidades", to: "/cidades" },
  ] },
] as const;
export const navigationDirectLinks = [
  { label: "Blog", to: "/blog" },
  { label: "Vídeos", to: "/clinica-de-recuperacao-em-araraquara", hash: "videos" },
  { label: "Contato", to: "/contato" },
] as const;