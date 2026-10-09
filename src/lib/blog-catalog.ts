import alcoholImage from "@/assets/blog-alcoolismo-consumo-problema.webp";
import chooseImage from "@/assets/blog-como-escolher-clinica.webp";
import needsImage from "@/assets/blog-como-saber-clinica-reabilitacao.webp";
import saoCarlosImage from "@/assets/blog-dependencia-quimica-sao-carlos.jpg";
import signsImage from "@/assets/blog-dependencia-quimica-sinais.jpg";
import consequencesImage from "@/assets/blog-dependencia-sinais-consequencias.webp";
import araraquaraCover from "@/assets/blog-araraquara-capa.webp.asset.json";
import { visualAssets } from "@/lib/visual-assets";

export const blogTopics = [
  { id: "clinica-e-tratamento", title: "Clínica de Reabilitação e Tratamento", description: "Compreenda a jornada de cuidado e os critérios para comparar instituições." },
  { id: "dependencia-quimica", title: "Dependência Química", description: "Primeiros sinais, impactos, caminhos de cuidado e orientação em Araraquara e São Carlos." },
  { id: "alcoolismo", title: "Alcoolismo", description: "Perda de controle, riscos da abstinência e procura responsável por avaliação." },
  { id: "familia-e-acolhimento", title: "Família e Acolhimento", description: "Quando buscar avaliação e como participar com respeito e limites." },
] as const;

export const blogPosts = [
  { topic: "clinica-e-tratamento", title: "Clínica de Reabilitação: Como Funciona o Tratamento e Como Escolher", description: "A jornada da avaliação à continuidade: acolhimento, abstinência, acompanhamento e participação familiar.", to: "/blog/como-funciona-uma-clinica-de-reabilitacao", image: visualAssets.rehabilitationArticle.welcome.src, alt: visualAssets.rehabilitationArticle.welcome.alt, detail: "Guia do processo de cuidado" },
  { topic: "clinica-e-tratamento", title: "Como escolher uma clínica de reabilitação para um familiar?", description: "Perguntas práticas para a visita e comparação: documentação, equipe, segurança, valores e contrato.", to: "/blog/como-escolher-uma-clinica-de-reabilitacao", image: chooseImage, alt: "Familiares anotam informações durante uma conversa à mesa", detail: "Critérios de escolha" },
  { topic: "dependencia-quimica", title: "Dependência química: sinais, consequências e caminhos para o tratamento", description: "Aprofunde os impactos e entenda como avaliação, modalidades de cuidado e acompanhamento se relacionam.", to: "/blog/dependencia-quimica-sinais-consequencias-tratamento", image: consequencesImage, alt: "Adultos participam de uma conversa de apoio em ambiente reservado", detail: "Impactos e modalidades de cuidado" },
  { topic: "dependencia-quimica", title: "Dependência Química: Entenda os Sinais e a Importância do Tratamento", description: "Uma introdução para quem percebeu mudanças: o que observar, como conversar e organizar o primeiro pedido de orientação.", to: "/blog/dependencia-quimica-sinais-tratamento", image: signsImage, alt: "Pessoa adulta em um momento de reflexão", detail: "Primeiros sinais e conversa familiar" },
  { topic: "dependencia-quimica", title: "Dependência Química em Araraquara: Tratamento, CAPS AD, Acolhimento e Como Escolher uma Instituição Segura", description: "Recursos públicos locais e perguntas sobre documentação e segurança antes de escolher uma instituição.", to: "/blog/dependencia-quimica-em-araraquara-tratamento", image: araraquaraCover.url, alt: "Familiares conversam sobre busca de orientação", detail: "Orientação local · Araraquara" },
  { topic: "dependencia-quimica", title: "Dependência Química em São Carlos: acolhimento, tratamento e onde buscar ajuda", description: "Informações sobre a rede pública e caminhos de orientação para pessoas e famílias de São Carlos.", to: "/blog/dependencia-quimica-sao-carlos", image: saoCarlosImage, alt: "Adultos conversam em um ambiente de escuta", detail: "Orientação local · São Carlos" },
  { topic: "alcoolismo", title: "Alcoolismo: quando o consumo de álcool se torna um problema?", description: "Sinais específicos do consumo de álcool, riscos e prejuízos que merecem avaliação profissional.", to: "/blog/alcoolismo-quando-o-consumo-se-torna-um-problema", image: alcoholImage, alt: "Adultos conversam sobre dificuldades relacionadas ao álcool", detail: "Riscos e busca por avaliação" },
  { topic: "familia-e-acolhimento", title: "Como saber se uma pessoa precisa de uma clínica de reabilitação?", description: "Quando procurar avaliação, quais prejuízos considerar e como a família pode ajudar sem fazer diagnóstico remoto.", to: "/blog/como-saber-se-uma-pessoa-precisa-de-uma-clinica-de-reabilitacao", image: needsImage, alt: "Familiares reunidos em uma conversa de apoio", detail: "Decisão sobre busca de ajuda" },
] as const;