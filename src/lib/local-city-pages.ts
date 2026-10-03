import americoImage from "@/assets/local-americo-access.jpg";
import descalvadoImage from "@/assets/local-descalvado-prepare.jpg";
import francaImage from "@/assets/local-franca-raps.jpg";
import ibateImage from "@/assets/local-ibate-ambulatory.jpg";
import ibitingaImage from "@/assets/local-ibitinga-support.jpg";
import itapolisImage from "@/assets/local-itapolis-path.jpg";
import jaboticabalImage from "@/assets/local-jaboticabal-care.jpg";
import mataoImage from "@/assets/local-matao-family.jpg";
import portoFerreiraImage from "@/assets/local-porto-ferreira-network.jpg";
import taquaritingaImage from "@/assets/local-taquaritinga-guidance.jpg";

export type LocalCitySection = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type LocalPublicResource = {
  name: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type LocalCityPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  transparency: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  sections: LocalCitySection[];
  resourcesHeading: string;
  resourcesIntro: string;
  resources: LocalPublicResource[];
  familyHeading: string;
  familyText: string[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { to: "/clinica-de-reabilitacao" | "/blog" | "/acolhimento" | "/familia" | "/tratamento" | "/cidades"; label: string; description: string }[];
};

export const localCityPages = {
  "matao-sp": {
    slug: "matao-sp",
    name: "Matão",
    title: "Clínica de Recuperação em Matão | Orientação e Rede Local",
    description: "Orientação para famílias de Matão sobre dependência química, CAPS AD, rede municipal e acolhimento responsável na unidade em Araraquara.",
    h1: "Clínica de recuperação em Matão: orientação, rede local e cuidado continuado",
    lead: "Em Matão, a busca por ajuda pode começar pela rede pública do próprio município ou por uma conversa sobre acolhimento fora da cidade. Entender a função de cada caminho evita decisões apressadas e ajuda a família a preservar a continuidade do cuidado.",
    transparency: "A Central não possui unidade em Matão nem parceria com a Prefeitura ou com os serviços municipais. Sua única unidade física fica em Araraquara.",
    image: mataoImage,
    imageAlt: "Família reunida em conversa cuidadosa antes de buscar orientação em Matão",
    imageCaption: "Imagem ilustrativa sobre diálogo familiar; não representa uma unidade de saúde nem instalação da Central.",
    sections: [
      {
        eyebrow: "Cuidado no território",
        heading: "Matão possui diferentes portas públicas para saúde mental",
        paragraphs: [
          "A Prefeitura de Matão apresenta uma rede municipal formada por CAPS AD, CAPS II e Ambulatório de Saúde Mental. Essa organização permite que necessidades relacionadas ao uso de álcool e outras drogas sejam consideradas dentro de uma rede mais ampla, e não como um episódio isolado.",
          "Para a pessoa e a família, conhecer essas portas é importante porque o cuidado pode exigir avaliação, acompanhamento e articulação entre serviços. Informações de acesso, horários e critérios devem ser confirmadas diretamente nos canais municipais antes do deslocamento.",
        ],
        points: ["CAPS AD para demandas relacionadas a álcool e outras drogas", "CAPS II para atenção psicossocial", "Ambulatório de Saúde Mental dentro da rede municipal"],
      },
      {
        eyebrow: "Dependência química",
        heading: "Interromper o uso não encerra todas as necessidades de cuidado",
        paragraphs: [
          "Quando o consumo afeta saúde, trabalho, segurança ou vínculos, a família pode se concentrar apenas em fazer a pessoa parar imediatamente. Porém, compreender riscos, histórico, tentativas anteriores e condições de saúde ajuda a construir um caminho mais responsável.",
          "A continuidade importa: depois de uma crise ou de uma mudança inicial, acompanhamento e rede de apoio podem reduzir desorganização e favorecer novas decisões. Nenhuma modalidade, pública ou privada, deve ser apresentada como resposta garantida para todos os casos.",
        ],
      },
      {
        eyebrow: "Acolhimento fora da cidade",
        heading: "Quando a família de Matão considera a unidade em Araraquara",
        paragraphs: [
          "A proximidade regional facilita uma conversa inicial, mas não cria vaga, indicação automática ou vínculo com a rede municipal. A Central precisa compreender o contexto e explicar proposta, limites, disponibilidade e condições aplicáveis.",
          "Antes de qualquer deslocamento, a família deve confirmar se a situação pode ser avaliada e quais documentos ou informações serão necessários. Em urgência, o caminho adequado é o serviço público de emergência, não uma viagem sem orientação prévia.",
        ],
      },
    ],
    resourcesHeading: "Onde buscar ajuda pública em Matão",
    resourcesIntro: "Os links abaixo pertencem à Prefeitura de Matão. São referências independentes da Central para conferir serviços públicos e informações atuais.",
    resources: [
      { name: "Unidades municipais de saúde", description: "Relação oficial que inclui CAPS AD, CAPS II e Ambulatório de Saúde Mental.", href: "https://matao.sp.gov.br/covid-19/unidades-de-saude", linkLabel: "Consultar unidades de saúde" },
      { name: "Rede municipal de saúde mental", description: "Notícia oficial sobre a composição e a atuação da rede de Matão.", href: "https://www.matao.sp.gov.br/noticias/geral/matao-reforca-compromisso-com-a-saude-mental-na-semana-da-luta-antimanicomial", linkLabel: "Conhecer a rede municipal" },
      { name: "Secretaria Municipal da Saúde", description: "Canal institucional para confirmar acesso, horários e orientações.", href: "https://www.matao.sp.gov.br/secretarias/saude", linkLabel: "Acessar a Secretaria da Saúde" },
    ],
    familyHeading: "A família pode ajudar conectando informação, segurança e continuidade",
    familyText: ["Registrar mudanças observadas, episódios de risco e tentativas anteriores torna a conversa mais objetiva. Também é útil separar o que precisa de urgência do que pode ser organizado em acompanhamento.", "Buscar informação na rede municipal não obriga a família a escolher uma única modalidade. Se houver interesse na Central, o primeiro contato serve para entender se a unidade de Araraquara pode ser considerada."],
    faqs: [
      { question: "Matão possui CAPS AD?", answer: "Sim. A relação oficial de unidades da Prefeitura inclui CAPS AD, além de CAPS II e Ambulatório de Saúde Mental. Formas de acesso e horários devem ser confirmados no canal municipal." },
      { question: "A Central faz parte da rede municipal de Matão?", answer: "Não. A Central é independente da Prefeitura e dos serviços do SUS citados nesta página. A única unidade física da Central fica em Araraquara." },
      { question: "É possível combinar acompanhamento público e orientação familiar?", answer: "As necessidades devem ser avaliadas pelos profissionais responsáveis. A família pode procurar a rede pública e reunir informações para compreender outros caminhos, sem presumir que um substitua o outro." },
      { question: "O que fazer se houver intoxicação ou risco imediato?", answer: "Procure um serviço público de urgência ou acione o SAMU pelo 192. A página e o WhatsApp da Central não substituem atendimento de emergência." },
      { question: "A proximidade entre Matão e Araraquara garante acolhimento?", answer: "Não. Qualquer possibilidade na Central depende de conversa, avaliação individual, disponibilidade e condições aplicáveis." },
    ],
    relatedLinks: [
      { to: "/familia", label: "Orientação para a família", description: "Organize a conversa e os próximos passos sem culpabilização." },
      { to: "/tratamento", label: "Entender o tratamento", description: "Conheça princípios e limites de um plano individual." },
      { to: "/blog", label: "Conteúdos de apoio", description: "Leia guias sobre sinais, álcool, cuidado e recuperação." },
    ],
  },
  "americo-brasiliense-sp": {
    slug: "americo-brasiliense-sp",
    name: "Américo Brasiliense",
    title: "Clínica de Recuperação em Américo Brasiliense | Orientação",
    description: "Informações locais sobre o CAPS Doçura, saúde mental e orientação a famílias de Américo Brasiliense, sem afirmar unidade da Central na cidade.",
    h1: "Ajuda para dependência química em Américo Brasiliense: como organizar a busca",
    lead: "Em uma cidade próxima a Araraquara, distância curta não significa que todos os serviços sejam iguais ou conectados. Para decidir com clareza, a família precisa distinguir a rede pública de Américo Brasiliense de uma eventual avaliação na unidade privada da Central.",
    transparency: "Não existe unidade da Central em Américo Brasiliense. O CAPS Doçura e o Departamento Municipal de Saúde são serviços públicos locais, sem parceria declarada com a Central.",
    image: americoImage,
    imageAlt: "Pessoa adulta e jovem caminhando em busca de orientação de saúde em Américo Brasiliense",
    imageCaption: "Imagem ilustrativa de busca por atendimento; o prédio não representa o CAPS Doçura nem uma unidade da Central.",
    sections: [
      {
        eyebrow: "Primeira referência local",
        heading: "O CAPS Doçura integra a estrutura municipal de saúde",
        paragraphs: [
          "O Departamento de Saúde de Américo Brasiliense relaciona o CAPS Doçura entre seus equipamentos. A fonte municipal consultada não o classifica como CAPS AD, CAPS II ou CAPS III; por isso, a necessidade de cada pessoa deve ser confirmada diretamente com o serviço.",
          "Essa cautela evita transformar o nome CAPS em uma promessa de atendimento específico. A equipe municipal é quem pode informar público atendido, forma de entrada, documentação e disponibilidade atuais.",
        ],
      },
      {
        eyebrow: "Conversa familiar",
        heading: "Proximidade ajuda na logística, mas não resolve a decisão",
        paragraphs: [
          "Famílias podem sentir pressão para agir rapidamente quando há conflitos, sumiços, dívidas ou perda de rotina. Antes de escolher um caminho, vale registrar fatos concretos e procurar uma orientação que considere riscos e condições de saúde.",
          "Falar sem ameaças, escolher um momento seguro e evitar confronto durante intoxicação são medidas prudentes. Se houver perigo imediato, a prioridade é a urgência pública.",
        ],
      },
      {
        eyebrow: "Opção em Araraquara",
        heading: "O contato com a Central é uma avaliação separada",
        paragraphs: [
          "A Central pode explicar sua proposta de acolhimento em Araraquara, mas não recebe encaminhamento automático do CAPS Doçura e não representa o município. O contato privado começa pela escuta da situação e pela apresentação dos limites do serviço.",
          "Mesmo com a curta distância, ninguém deve se deslocar sem confirmar previamente avaliação, disponibilidade e procedimentos. A cidade de origem não garante admissão ou resultado.",
        ],
      },
    ],
    resourcesHeading: "Onde confirmar ajuda em Américo Brasiliense",
    resourcesIntro: "Estas páginas oficiais permitem conferir os equipamentos e contatos municipais. A rede pública é independente da Central.",
    resources: [
      { name: "Departamento de Saúde", description: "Página oficial com a estrutura municipal e referência ao CAPS Doçura.", href: "https://americobrasiliense.sp.gov.br/site/departamento/saude/", linkLabel: "Ver o Departamento de Saúde" },
      { name: "Telefones úteis da Saúde", description: "Relação publicada pelo município para confirmar os contatos atuais.", href: "https://americobrasiliense.sp.gov.br/site/%F0%9F%93%9E%E2%9C%A8-telefones-uteis-departamento-de-saude-%E2%9C%A8%F0%9F%93%9E/", linkLabel: "Consultar telefones oficiais" },
      { name: "Portal da Saúde", description: "Canal municipal para avisos e orientações mais recentes.", href: "https://americobrasiliense.sp.gov.br/site/saude/", linkLabel: "Acessar o portal da Saúde" },
    ],
    familyHeading: "Antes de decidir, transforme preocupação em informações úteis",
    familyText: ["Anote quando as mudanças começaram, quais prejuízos estão acontecendo e se existem condições clínicas ou riscos conhecidos. Isso ajuda tanto no contato com a rede municipal quanto em uma consulta à Central.", "O objetivo não é rotular a pessoa pela internet. É encontrar uma porta segura para avaliação e compreender quais responsabilidades cabem a cada serviço."],
    faqs: [
      { question: "O CAPS Doçura é um CAPS AD?", answer: "A página oficial confirma o CAPS Doçura, mas não informa uma classificação específica como CAPS AD. O escopo atual deve ser confirmado diretamente com o Departamento de Saúde." },
      { question: "Existe unidade da Central em Américo Brasiliense?", answer: "Não. A única unidade física da Central fica em Araraquara. Esta página oferece orientação para moradores de Américo Brasiliense." },
      { question: "A Central recebe encaminhamentos do CAPS Doçura?", answer: "Não há parceria ou fluxo de encaminhamento declarado. Os serviços são independentes e qualquer contato com a Central ocorre diretamente com a família." },
      { question: "Como preparar o primeiro pedido de ajuda?", answer: "Reúna fatos observados, riscos atuais, histórico conhecido e dúvidas. Em seguida, confirme com o serviço escolhido como funciona a avaliação." },
      { question: "É preciso viajar para conversar com a Central?", answer: "Não. A conversa inicial pode ser feita por telefone ou WhatsApp antes de qualquer deslocamento." },
    ],
    relatedLinks: [
      { to: "/acolhimento", label: "O que significa acolhimento", description: "Entenda como informação e escuta antecedem decisões." },
      { to: "/familia", label: "Como a família pode participar", description: "Veja formas responsáveis de organizar o primeiro contato." },
      { to: "/cidades", label: "Atendimento por cidade", description: "Consulte a relação de páginas regionais disponíveis." },
    ],
  },
  "taquaritinga-sp": {
    slug: "taquaritinga-sp",
    name: "Taquaritinga",
    title: "Clínica de Recuperação em Taquaritinga | Caminhos de Ajuda",
    description: "Saiba como confirmar atendimento público em Taquaritinga e buscar orientação responsável para álcool, drogas e acolhimento em Araraquara.",
    h1: "Onde procurar ajuda para álcool e drogas em Taquaritinga",
    lead: "Informações sobre funcionamento de serviços podem mudar, especialmente durante reformas ou reorganizações. Em Taquaritinga, o caminho mais seguro é confirmar a porta pública disponível antes de sair de casa e separar esse acesso de uma consulta privada à Central.",
    transparency: "A Central não possui unidade em Taquaritinga nem vínculo com o CAPS ou a Prefeitura. A unidade física da instituição está somente em Araraquara.",
    image: taquaritingaImage,
    imageAlt: "Moradora de Taquaritinga anotando orientações durante contato telefônico",
    imageCaption: "Imagem ilustrativa sobre confirmação de informações antes de buscar atendimento.",
    sections: [
      {
        eyebrow: "Situação que exige confirmação",
        heading: "O município informou fechamento temporário do CAPS para reforma",
        paragraphs: [
          "Em nota oficial publicada em fevereiro de 2026, a Prefeitura informou que o CAPS estava temporariamente fechado para reformas após vandalismo. Como a situação pode ter mudado desde a publicação, a página não presume que o serviço permaneça fechado nem que já tenha reaberto.",
          "Antes de procurar atendimento, a orientação mais segura é consultar a Secretaria Municipal de Saúde e perguntar qual local está recebendo as demandas no momento. Não foi localizada confirmação oficial de um CAPS AD separado na cidade.",
        ],
      },
      {
        eyebrow: "Álcool e outras drogas",
        heading: "Uma porta de entrada precisa ser atual, não apenas próxima",
        paragraphs: [
          "Em momentos de desgaste, encontrar um nome de serviço em uma busca pode parecer suficiente. Mas endereço, funcionamento e fluxo podem mudar. Confirmar a informação no canal oficial evita deslocamentos sem atendimento e permite perguntar se é necessário encaminhamento.",
          "A avaliação pública pode orientar necessidades de saúde mental e uso de substâncias. Em risco imediato, intoxicação grave ou alteração importante de consciência, deve-se procurar urgência ou acionar o SAMU 192.",
        ],
      },
      {
        eyebrow: "Acolhimento privado",
        heading: "A unidade de Araraquara só deve ser considerada após conversa prévia",
        paragraphs: [
          "A Central pode ouvir famílias de Taquaritinga e explicar como funciona sua unidade, sem afirmar que o acolhimento será indicado. A conversa deve incluir histórico, riscos, condições de saúde e expectativas da família.",
          "A instituição não substitui a rede municipal nem atende emergências. Avaliação, disponibilidade e condições precisam ser confirmadas antes de qualquer planejamento de deslocamento.",
        ],
      },
    ],
    resourcesHeading: "Como verificar a rede pública em Taquaritinga",
    resourcesIntro: "Como houve uma mudança operacional divulgada em 2026, use os canais oficiais para confirmar o atendimento vigente.",
    resources: [
      { name: "Nota oficial sobre o CAPS", description: "Comunicado municipal de fevereiro de 2026 sobre o fechamento temporário para reforma.", href: "https://taquaritinga.sp.gov.br/noticias/geral/nota-oficial-vandalismo-no-caps", linkLabel: "Ler a nota da Prefeitura" },
      { name: "Secretarias municipais", description: "Canal institucional para localizar a Secretaria de Saúde e confirmar a porta atual.", href: "https://taquaritinga.sp.gov.br/secretarias", linkLabel: "Consultar as secretarias" },
      { name: "Ações intersetoriais", description: "Informação oficial sobre atuação conjunta do CAPS e da assistência social.", href: "https://www.taquaritinga.sp.gov.br/noticias/geral/prefeitura-de-taquaritinga-realiza-abordagem-social-para-apoio-a-pessoas-em-situacao-de-rua", linkLabel: "Conhecer a ação municipal" },
    ],
    familyHeading: "Confirmar primeiro é parte do cuidado",
    familyText: ["A família pode anotar o que precisa perguntar: onde ocorre o atendimento atual, se há acolhimento de demanda espontânea, quais documentos levar e qual serviço procurar em crise.", "Se também quiser conhecer a Central, faça isso em contato separado. A ausência de vínculo entre os serviços precisa ficar clara para que nenhuma orientação seja confundida com encaminhamento oficial."],
    faqs: [
      { question: "O CAPS de Taquaritinga está aberto?", answer: "A Prefeitura informou em fevereiro de 2026 que o serviço estava temporariamente fechado para reforma. Como o status pode ter mudado, confirme diretamente com a Secretaria de Saúde antes de se deslocar." },
      { question: "Taquaritinga possui CAPS AD?", answer: "Não foi encontrada confirmação oficial de uma unidade CAPS AD separada. A Secretaria Municipal de Saúde deve informar qual serviço recebe atualmente demandas relacionadas a álcool e outras drogas." },
      { question: "O que perguntar ao ligar para a rede municipal?", answer: "Confirme local de atendimento, forma de entrada, necessidade de encaminhamento, documentos e orientação para situações urgentes." },
      { question: "A Central mantém clínica em Taquaritinga?", answer: "Não. A única unidade física da Central fica em Araraquara, e não há parceria declarada com a Prefeitura." },
      { question: "Posso ir diretamente para Araraquara em uma crise?", answer: "Em crise ou risco imediato, procure a urgência pública. A unidade da Central não é pronto atendimento e qualquer avaliação deve ser combinada previamente." },
    ],
    relatedLinks: [
      { to: "/clinica-de-reabilitacao", label: "Guia sobre clínica de reabilitação", description: "Compare modalidades e critérios antes de decidir." },
      { to: "/tratamento", label: "Tratamento individualizado", description: "Entenda por que não existe resposta única para todos os casos." },
      { to: "/familia", label: "Orientação familiar", description: "Prepare perguntas e uma conversa mais segura." },
    ],
  },
  "ibitinga-sp": {
    slug: "ibitinga-sp",
    name: "Ibitinga",
    title: "Clínica de Recuperação em Ibitinga | Saúde Mental e Família",
    description: "Orientação local para famílias de Ibitinga sobre saúde mental, gestão do SAMS e avaliação de acolhimento responsável na unidade em Araraquara.",
    h1: "Dependência química em Ibitinga: rede de saúde mental e apoio à família",
    lead: "Ibitinga organiza a saúde pública por meio do Serviço Autônomo Municipal de Saúde, o SAMS. Para quem busca ajuda com álcool ou outras drogas, entender essa gestão e confirmar o serviço adequado é mais útil do que presumir uma modalidade a partir de informações incompletas.",
    transparency: "A Central não possui unidade em Ibitinga e não integra o SAMS. Sua unidade física está em Araraquara e qualquer avaliação ocorre de forma independente.",
    image: ibitingaImage,
    imageAlt: "Família participando de conversa de apoio sobre saúde mental em Ibitinga",
    imageCaption: "Imagem ilustrativa de uma conversa de apoio; não retrata serviço público nem instalação da Central.",
    sections: [
      {
        eyebrow: "Gestão local",
        heading: "O SAMS coordena a saúde municipal de Ibitinga",
        paragraphs: [
          "O Serviço Autônomo Municipal de Saúde é uma autarquia responsável pela saúde pública local. O Plano Municipal de Saúde 2026–2029 apresenta uma Coordenadoria de Saúde Mental, o que oferece à população uma referência oficial para confirmar a organização atual do cuidado.",
          "A pesquisa encontrou menções cadastrais a um CAPS AD, mas não uma página operacional direta do SAMS que confirme publicamente modalidade, endereço e acesso atuais. Por responsabilidade, esta página orienta a confirmação com o órgão gestor e não publica esses dados como definitivos.",
        ],
      },
      {
        eyebrow: "Pessoa e família",
        heading: "A orientação precisa considerar sofrimento, riscos e contexto",
        paragraphs: [
          "O uso de substâncias pode aparecer junto a isolamento, conflitos, perdas e dificuldades de saúde. Uma descrição cuidadosa do que vem ocorrendo ajuda o serviço responsável a indicar a porta adequada.",
          "Para a família, ouvir orientações e estabelecer limites seguros costuma ser mais produtivo do que acumular ameaças. Em emergências, deve-se acionar a rede de urgência; páginas informativas não fazem triagem clínica.",
        ],
      },
      {
        eyebrow: "Possibilidade em outra cidade",
        heading: "Acolhimento em Araraquara exige alinhamento antes da viagem",
        paragraphs: [
          "Se a família quiser compreender a proposta da Central, o primeiro contato pode ser remoto. A equipe explica o que precisa ser avaliado, os limites da unidade e se existe disponibilidade para continuar a conversa.",
          "A Central não substitui o acompanhamento local e não promete recuperação. Eventual acolhimento é uma decisão individual, sujeita a critérios e condições informadas diretamente.",
        ],
      },
    ],
    resourcesHeading: "Referências públicas para moradores de Ibitinga",
    resourcesIntro: "Consulte o órgão municipal responsável para confirmar qual equipamento atende a necessidade apresentada.",
    resources: [
      { name: "Serviço Autônomo Municipal de Saúde", description: "Página institucional do SAMS, responsável pela gestão da saúde em Ibitinga.", href: "https://samsibitinga.sp.gov.br/sobre/", linkLabel: "Conhecer o SAMS" },
      { name: "Plano Municipal de Saúde 2026–2029", description: "Documento oficial que apresenta a organização municipal, incluindo a Coordenação de Saúde Mental.", href: "https://samsibitinga.sp.gov.br/wp-content/uploads/2026/01/PMS-2026-2029_aprovado.pdf", linkLabel: "Consultar o plano municipal" },
      { name: "Entidades de saúde", description: "Canal do SAMS para localizar unidades e atualizações da rede.", href: "https://samsibitinga.sp.gov.br/entidades-de-saude/", linkLabel: "Ver entidades de saúde" },
    ],
    familyHeading: "Uma boa conversa começa pelo que pode ser confirmado",
    familyText: ["Prepare um resumo do histórico, substâncias envolvidas quando conhecidas, riscos e impactos atuais. Pergunte ao SAMS qual porta municipal está disponível e como ocorre o acesso.", "Se houver interesse em acolhimento privado, converse separadamente com a Central e confirme avaliação e disponibilidade antes de organizar transporte."],
    faqs: [
      { question: "Quem administra a saúde mental em Ibitinga?", answer: "A saúde municipal é gerida pelo SAMS. O Plano Municipal de Saúde 2026–2029 apresenta uma Coordenadoria de Saúde Mental dentro dessa estrutura." },
      { question: "Ibitinga possui CAPS AD II?", answer: "A pesquisa não localizou uma página operacional oficial do SAMS que confirme publicamente a classificação, o endereço e o fluxo atuais. Para não divulgar informação incompleta, orientamos confirmar diretamente com o SAMS." },
      { question: "Onde consultar as metas municipais de saúde mental?", answer: "O Plano Municipal de Saúde 2026–2029 está publicado no site do SAMS e é uma fonte oficial sobre a organização da rede." },
      { question: "A Central tem vínculo com o SAMS?", answer: "Não. A Central é independente da rede municipal e possui unidade física somente em Araraquara." },
      { question: "É possível receber diagnóstico pelo WhatsApp?", answer: "Não. O contato pode organizar informações e explicar um serviço, mas diagnóstico e indicação dependem de avaliação profissional adequada." },
    ],
    relatedLinks: [
      { to: "/blog", label: "Leituras sobre dependência química", description: "Aprofunde sinais, consequências e caminhos de cuidado." },
      { to: "/acolhimento", label: "Como começa o acolhimento", description: "Veja o papel da escuta e da avaliação inicial." },
      { to: "/tratamento", label: "Tratamento e continuidade", description: "Entenda por que acompanhamento não termina numa decisão isolada." },
    ],
  },
  "itapolis-sp": {
    slug: "itapolis-sp",
    name: "Itápolis",
    title: "Clínica de Recuperação em Itápolis | CAPS e Orientação",
    description: "Informações verificadas sobre o CAPS Guido Cavicchiolli, a rede municipal de Itápolis e orientação responsável para dependência química.",
    h1: "Clínica de recuperação em Itápolis: CAPS, família e caminhos de cuidado",
    lead: "Para quem vive em Itápolis, a rede municipal oferece referências de saúde em diferentes regiões, além do CAPS Guido Cavicchiolli. Compreender essas portas ajuda a família a começar pela avaliação, sem tratar internação como resposta automática.",
    transparency: "A Central não mantém unidade em Itápolis e não possui parceria com o CAPS ou com a Secretaria de Saúde. A única estrutura física da Central fica em Araraquara.",
    image: itapolisImage,
    imageAlt: "Família recebendo explicação ilustrativa sobre caminhos de cuidado em Itápolis",
    imageCaption: "Imagem ilustrativa; não representa o CAPS Guido Cavicchiolli nem atendimento realizado pela Central.",
    sections: [
      {
        eyebrow: "Rede do município",
        heading: "O CAPS Guido Cavicchiolli é uma referência oficial de Itápolis",
        paragraphs: [
          "A Secretaria Municipal de Saúde relaciona o CAPS Guido Cavicchiolli entre seus órgãos. A rede também possui unidades básicas e de saúde da família em bairros e distritos, que podem orientar o acesso ao SUS local.",
          "A fonte consultada não detalha publicamente se o CAPS tem classificação AD nem todo o seu fluxo atual. Uma notícia de 2020 informa mudança de endereço, mas dados operacionais antigos devem ser confirmados antes de qualquer visita.",
        ],
      },
      {
        eyebrow: "Avaliação responsável",
        heading: "Uso de álcool e drogas não define sozinho a modalidade de cuidado",
        paragraphs: [
          "Frequência, perdas, riscos, saúde física, sofrimento psíquico e tentativas anteriores fazem parte da compreensão do caso. A avaliação evita escolhas baseadas somente no medo ou em uma palavra de busca.",
          "UBS, Secretaria de Saúde e CAPS têm papéis que precisam ser confirmados na rede municipal. A família pode perguntar onde iniciar, se há necessidade de encaminhamento e que serviço atende a demanda relatada.",
        ],
      },
      {
        eyebrow: "Central em Araraquara",
        heading: "Uma avaliação privada não substitui o percurso público local",
        paragraphs: [
          "A família de Itápolis pode procurar a Central para conhecer uma possibilidade de acolhimento em Araraquara. Esse contato é independente e não deve ser entendido como encaminhamento do CAPS.",
          "Antes de avançar, a equipe precisa esclarecer proposta, avaliação, disponibilidade e condições. Não existe garantia de admissão, duração ou resultado.",
        ],
      },
    ],
    resourcesHeading: "Onde buscar informação oficial em Itápolis",
    resourcesIntro: "Use estes canais municipais para confirmar o serviço adequado e os dados vigentes antes de se deslocar.",
    resources: [
      { name: "Secretaria Municipal de Saúde", description: "Página institucional que relaciona o CAPS Guido Cavicchiolli entre os órgãos municipais.", href: "https://www.itapolis.sp.gov.br/portal/secretarias/17/secretaria-municipal-de-saude/", linkLabel: "Acessar a Secretaria de Saúde" },
      { name: "Contatos e unidades municipais", description: "Relação oficial de unidades básicas, distritais e contatos da Saúde.", href: "https://www.itapolis.sp.gov.br/portal/secretarias-paginas/64/contato/", linkLabel: "Consultar unidades e contatos" },
      { name: "Comunicado sobre o CAPS", description: "Notícia municipal de 2020; confirme se endereço e telefone permanecem atuais.", href: "https://www.itapolis.sp.gov.br/portal/noticias/0/3/2099/caps-esta-em-novo-endereco", linkLabel: "Ler o comunicado oficial" },
    ],
    familyHeading: "Escolher a porta de entrada é diferente de escolher uma solução pronta",
    familyText: ["A família pode procurar a unidade básica de referência ou a Secretaria para saber como chegar ao CAPS. Perguntas simples sobre fluxo, documentos e urgência ajudam a evitar confusão.", "Para conhecer a Central, o contato deve ser feito diretamente. A equipe privada não pode confirmar atribuições da rede municipal nem oferecer diagnóstico on-line."],
    faqs: [
      { question: "Itápolis possui CAPS?", answer: "Sim. A Secretaria Municipal de Saúde relaciona oficialmente o CAPS Guido Cavicchiolli entre seus órgãos." },
      { question: "O CAPS Guido Cavicchiolli é CAPS AD?", answer: "A fonte oficial consultada não informa essa classificação. Confirme com a Secretaria quais demandas são atendidas e como acessar o serviço." },
      { question: "É preciso encaminhamento da UBS?", answer: "O site oficial não detalha uma regra única. A UBS de referência ou a Secretaria de Saúde pode informar o fluxo atualizado." },
      { question: "A Central possui clínica em Itápolis?", answer: "Não. A única unidade física da Central está em Araraquara." },
      { question: "Posso confiar no endereço publicado em notícia antiga?", answer: "A notícia municipal de 2020 é uma referência oficial, mas endereços e contatos podem mudar. Confirme diretamente antes de ir." },
    ],
    relatedLinks: [
      { to: "/clinica-de-reabilitacao", label: "Como avaliar uma clínica", description: "Conheça critérios, limites e perguntas importantes." },
      { to: "/familia", label: "Família e busca de ajuda", description: "Prepare o contato sem transformar culpa em resposta." },
      { to: "/tratamento", label: "Modalidades de tratamento", description: "Entenda por que a indicação deve ser individual." },
    ],
  },
  "ibate-sp": {
    slug: "ibate-sp",
    name: "Ibaté",
    title: "Clínica de Recuperação em Ibaté | Saúde Mental e Orientação",
    description: "Orientação para moradores de Ibaté com referência ao Ambulatório de Saúde Mental e sem atribuir CAPS AD não confirmado ao município.",
    h1: "Ajuda para dependência química em Ibaté: por onde começar",
    lead: "Em Ibaté, as fontes oficiais consultadas indicam um Ambulatório de Saúde Mental e a Secretaria Municipal de Saúde, mas não confirmam um CAPS AD. Essa diferença importa: a orientação deve partir dos serviços que o município realmente publica.",
    transparency: "Não existe unidade da Central em Ibaté. O Ambulatório de Saúde Mental e a Secretaria Municipal de Saúde são serviços públicos independentes, sem parceria com a Central.",
    image: ibateImage,
    imageAlt: "Conversa ilustrativa de orientação em saúde mental para morador de Ibaté",
    imageCaption: "Imagem ilustrativa; não mostra o Ambulatório de Saúde Mental de Ibaté nem a unidade da Central.",
    sections: [
      {
        eyebrow: "Informação confirmada",
        heading: "Ibaté publica um contato específico para o Ambulatório de Saúde Mental",
        paragraphs: [
          "A lista oficial de telefones da Prefeitura apresenta o Ambulatório de Saúde Mental separadamente do Ambulatório Municipal Dr. Ivo Morganti. Isso indica canais distintos, mas a página não detalha especialidades, endereço ou forma de entrada do serviço de saúde mental.",
          "A Secretaria Municipal de Saúde é a referência adequada para confirmar atendimento, encaminhamento e localização antes de sair de casa. Esta página não atribui ao município um CAPS ou CAPS AD que a fonte oficial não confirmou.",
        ],
      },
      {
        eyebrow: "Primeiro pedido de ajuda",
        heading: "Descrever a necessidade ajuda a localizar o serviço certo",
        paragraphs: [
          "Ao entrar em contato, informe se a preocupação envolve uso de álcool ou outras drogas, sofrimento psíquico, risco atual e necessidade de avaliação. Essa descrição permite que o município indique o canal compatível.",
          "Se houver perda de consciência, intoxicação grave, violência ou risco à vida, procure urgência ou acione o SAMU 192. O ambulatório e a Central não substituem emergência.",
        ],
      },
      {
        eyebrow: "Acolhimento em Araraquara",
        heading: "A curta distância não elimina avaliação e planejamento",
        paragraphs: [
          "Famílias de Ibaté podem conversar com a Central por telefone para entender a proposta da unidade de Araraquara. Essa conversa não tem vínculo com o Ambulatório municipal e não garante acolhimento.",
          "A equipe deve explicar condições, disponibilidade e limites antes de qualquer deslocamento. A proximidade pode facilitar logística, mas a necessidade de cuidado continua sendo individual.",
        ],
      },
    ],
    resourcesHeading: "Canais públicos confirmados em Ibaté",
    resourcesIntro: "A Prefeitura é a fonte para conferir o Ambulatório de Saúde Mental e a organização atual da rede.",
    resources: [
      { name: "Telefones úteis municipais", description: "Lista oficial que inclui o Ambulatório de Saúde Mental e outros serviços da cidade.", href: "https://www.ibate.sp.gov.br/portal/telefones", linkLabel: "Consultar telefones úteis" },
      { name: "Secretaria Municipal de Saúde", description: "Página institucional para verificar contato, horário administrativo e documentos publicados.", href: "https://www.ibate.sp.gov.br/portal/secretarias/22/secretaria-municipal-de-saude", linkLabel: "Acessar a Secretaria de Saúde" },
      { name: "Relação de secretarias", description: "Canal geral da Prefeitura para conferir dados administrativos atualizados.", href: "https://www.ibate.sp.gov.br/portal/secretarias/", linkLabel: "Ver canais municipais" },
    ],
    familyHeading: "Em Ibaté, a precisão evita procurar um serviço que não foi confirmado",
    familyText: ["Ao ligar, pergunte diretamente qual unidade recebe situações ligadas a álcool e outras drogas, como ocorre a avaliação e o que fazer em crise. Não presuma que o Ambulatório tenha todas as atribuições de um CAPS AD.", "Se considerar a Central, mantenha essa conversa separada e confirme tudo antes de viajar para Araraquara."],
    faqs: [
      { question: "Ibaté possui CAPS AD?", answer: "Não foi encontrada confirmação oficial de CAPS AD no município. A Prefeitura publica o Ambulatório de Saúde Mental e a Secretaria de Saúde como referências." },
      { question: "O Ambulatório de Saúde Mental é o mesmo que o Ambulatório Municipal?", answer: "Não. Eles aparecem como contatos distintos na lista oficial. Confirme com a Prefeitura a função e o acesso de cada um." },
      { question: "Onde confirmar atendimento para álcool e drogas?", answer: "Entre em contato com a Secretaria Municipal de Saúde ou com o Ambulatório de Saúde Mental pelos canais publicados pela Prefeitura." },
      { question: "A Central atende dentro de Ibaté?", answer: "Não. A Central possui unidade física somente em Araraquara e não integra a rede municipal de Ibaté." },
      { question: "Posso ir à Central sem falar antes?", answer: "Não é recomendado. A avaliação inicial, a disponibilidade e as condições devem ser confirmadas antes de qualquer deslocamento." },
    ],
    relatedLinks: [
      { to: "/acolhimento", label: "Acolhimento com avaliação", description: "Entenda o que precisa ser esclarecido antes de avançar." },
      { to: "/blog", label: "Informação para reconhecer riscos", description: "Leia conteúdos responsáveis sobre sinais e consequências." },
      { to: "/cidades", label: "Outras páginas locais", description: "Consulte somente cidades com conteúdo publicado." },
    ],
  },
  "descalvado-sp": {
    slug: "descalvado-sp",
    name: "Descalvado",
    title: "Clínica de Recuperação em Descalvado | CAPS e Família",
    description: "Informações oficiais sobre o CAPS de Descalvado, orientação familiar e avaliação de acolhimento na unidade da Central em Araraquara.",
    h1: "Dependência química em Descalvado: CAPS, família e busca de orientação",
    lead: "Descalvado mantém um CAPS confirmado na estrutura da Secretaria Municipal de Saúde. Para a família que enfrenta problemas com álcool ou outras drogas, o primeiro passo útil é compreender a necessidade e confirmar com a rede local qual atendimento está disponível.",
    transparency: "A Central não possui unidade em Descalvado e não tem parceria declarada com o CAPS ou com a Prefeitura. Sua unidade física está em Araraquara.",
    image: descalvadoImage,
    imageAlt: "Família de Descalvado organizando perguntas antes de buscar ajuda em saúde mental",
    imageCaption: "Imagem ilustrativa de preparação familiar; não representa o CAPS de Descalvado nem a unidade da Central.",
    sections: [
      {
        eyebrow: "Referência municipal",
        heading: "O CAPS aparece nos contatos oficiais da Secretaria de Saúde",
        paragraphs: [
          "A Prefeitura lista o Centro de Atenção Psicossocial entre os serviços vinculados à Saúde. A página confirma sua existência e oferece contato, mas não especifica modalidade como CAPS AD ou CAPS II.",
          "Por isso, a família deve descrever a situação e perguntar se o próprio CAPS atende a demanda ou orienta outra porta da rede. Evitar classificações não publicadas preserva a precisão da informação.",
        ],
      },
      {
        eyebrow: "Preparação da família",
        heading: "Fatos concretos ajudam mais do que acusações",
        paragraphs: [
          "Anotar episódios de risco, mudanças de rotina, consumo conhecido e tentativas anteriores de ajuda pode tornar a conversa com o serviço mais clara. Também ajuda a família a reconhecer quando há uma emergência.",
          "Em risco imediato, a prioridade é acionar o SAMU 192 ou procurar pronto atendimento. Para situações que permitem planejamento, a rede local pode orientar avaliação e acompanhamento.",
        ],
      },
      {
        eyebrow: "Outra possibilidade",
        heading: "O acolhimento em Araraquara deve ser analisado sem atalhos",
        paragraphs: [
          "A Central pode explicar sua proposta a famílias de Descalvado, mas não recebe encaminhamento automático do CAPS e não atua como urgência. O contato privado é uma conversa separada.",
          "Se houver possibilidade de avançar, a equipe informa avaliação, disponibilidade e condições. Nenhum contato permite garantir cura, prazo ou admissão.",
        ],
      },
    ],
    resourcesHeading: "Onde consultar a saúde pública em Descalvado",
    resourcesIntro: "A fonte municipal abaixo reúne o CAPS e outros contatos vinculados à Secretaria de Saúde.",
    resources: [
      { name: "Secretaria Municipal de Saúde", description: "Página oficial com o CAPS e os canais públicos vinculados à rede municipal.", href: "https://www.descalvado.sp.gov.br/novoportal/prefeitura/index.php/portal/secretarias/45c48cce2e2d7fbdea1afc51c7c6ad26", linkLabel: "Consultar a Secretaria e o CAPS" },
      { name: "Portal da Prefeitura", description: "Canal institucional para avisos e eventuais mudanças nos serviços.", href: "https://www.descalvado.sp.gov.br/", linkLabel: "Acessar o portal municipal" },
    ],
    familyHeading: "Prepare o contato local e o contato privado como conversas diferentes",
    familyText: ["Com o CAPS, confirme o atendimento oferecido, a forma de acesso e a orientação para a necessidade apresentada. Com a Central, pergunte sobre a unidade de Araraquara, critérios e disponibilidade.", "Essa separação evita a impressão de parceria e ajuda a família a comparar caminhos com responsabilidade."],
    faqs: [
      { question: "Descalvado possui CAPS?", answer: "Sim. O CAPS aparece na página oficial da Secretaria Municipal de Saúde entre os contatos da rede." },
      { question: "O CAPS de Descalvado é CAPS AD?", answer: "A fonte oficial consultada não informa essa modalidade. Confirme diretamente quais demandas são atendidas." },
      { question: "O que devo informar no primeiro contato?", answer: "Relate fatos recentes, riscos, histórico conhecido, substâncias envolvidas quando souber e tentativas anteriores de ajuda." },
      { question: "A Central funciona em Descalvado?", answer: "Não. A Central possui unidade física apenas em Araraquara." },
      { question: "O CAPS e a Central trabalham juntos?", answer: "Não há parceria declarada. O CAPS pertence à rede pública municipal e a Central é uma instituição independente." },
    ],
    relatedLinks: [
      { to: "/familia", label: "Preparar a família", description: "Organize limites, fatos e perguntas para o primeiro contato." },
      { to: "/clinica-de-reabilitacao", label: "Avaliar uma clínica", description: "Saiba o que verificar antes de considerar acolhimento." },
      { to: "/acolhimento", label: "Acolhimento responsável", description: "Entenda avaliação, disponibilidade e condições." },
    ],
  },
  "porto-ferreira-sp": {
    slug: "porto-ferreira-sp",
    name: "Porto Ferreira",
    title: "Clínica de Recuperação em Porto Ferreira | CAPS e Tratamento",
    description: "Caminhos públicos de saúde mental em Porto Ferreira e orientação responsável sobre álcool, drogas e acolhimento na unidade em Araraquara.",
    h1: "Tratamento para álcool e drogas em Porto Ferreira: como buscar orientação",
    lead: "Porto Ferreira possui um CAPS com ações relacionadas à saúde mental, álcool e outras drogas, mas as informações públicas sobre fluxo e contato precisam ser confirmadas. Para a família, compreender a porta municipal e suas alternativas é mais seguro do que decidir apenas pela urgência emocional.",
    transparency: "A Central não mantém unidade em Porto Ferreira e não possui parceria com o CAPS, a Secretaria de Saúde ou o SUS local. Sua unidade física fica em Araraquara.",
    image: portoFerreiraImage,
    imageAlt: "Moradora de Porto Ferreira confirmando por telefone informações da rede de saúde",
    imageCaption: "Imagem ilustrativa sobre consulta a canais oficiais; não mostra serviço municipal nem instalação da Central.",
    sections: [
      {
        eyebrow: "Rede pública",
        heading: "O CAPS local reúne saúde mental e ações sobre álcool e drogas",
        paragraphs: [
          "Documentos públicos municipais registram ações do CAPS relacionadas a álcool e drogas. A pesquisa não encontrou confirmação oficial atual de uma unidade separada classificada como CAPS AD nem uma página única com todos os dados operacionais.",
          "A relação de unidades da Secretaria de Saúde é o ponto de partida para confirmar onde procurar orientação, se há encaminhamento e quais contatos estão vigentes. Não é responsável publicar endereço não validado apenas porque aparece em diretórios externos.",
        ],
      },
      {
        eyebrow: "Demanda e continuidade",
        heading: "A busca por cuidado pode envolver espera e integração com a atenção básica",
        paragraphs: [
          "A rede municipal já debateu publicamente demanda por atendimento psicológico e integração entre CAPS e Atenção Básica. Para cada pessoa, é importante perguntar como funciona o acompanhamento e o que fazer enquanto aguarda uma etapa.",
          "A família pode apoiar mantendo informações organizadas, observando riscos e evitando abandonar orientações anteriores sem conversa com o profissional responsável.",
        ],
      },
      {
        eyebrow: "Acolhimento fora de Porto Ferreira",
        heading: "Uma alternativa privada precisa ser verificada antes do deslocamento",
        paragraphs: [
          "A Central recebe contatos remotos para explicar a unidade em Araraquara. Esse atendimento não é parte da rede municipal e não representa encaminhamento público.",
          "A possibilidade de acolhimento depende de avaliação, disponibilidade e condições. Em crise, procure urgência; não faça uma viagem à unidade sem confirmação prévia.",
        ],
      },
    ],
    resourcesHeading: "Onde confirmar o acesso em Porto Ferreira",
    resourcesIntro: "Os canais públicos abaixo ajudam a localizar unidades e informações oficiais sem criar vínculo com a Central.",
    resources: [
      { name: "Unidades de Saúde", description: "Relação oficial da Secretaria Municipal de Saúde para localizar portas da rede.", href: "https://www.portoferreira.sp.gov.br/secretarias/saude/unidades-de-saude", linkLabel: "Consultar unidades municipais" },
      { name: "Ações de prevenção", description: "Informação da Prefeitura sobre orientação relacionada a álcool, tabagismo e drogas.", href: "https://www.portoferreira.sp.gov.br/noticias/saude/programa-saude-na-escola-distribui-material-impresso-com-dicas-e-orientacoes", linkLabel: "Conhecer a ação municipal" },
      { name: "Portal da Saúde", description: "Notícias e atualizações da Secretaria para confirmar mudanças na rede.", href: "https://www.portoferreira.sp.gov.br/secretarias/saude", linkLabel: "Acessar a Secretaria de Saúde" },
    ],
    familyHeading: "Pergunte sobre o fluxo, não apenas sobre a existência do serviço",
    familyText: ["Confirme onde é feita a primeira avaliação, se é preciso encaminhamento, como funciona o retorno e qual orientação existe para situações de crise. Essas respostas podem variar com a organização atual da rede.", "Ao conversar com a Central, confirme localização, proposta e condições de forma independente. Nenhum órgão público citado endossa o serviço privado."],
    faqs: [
      { question: "O CAPS de Porto Ferreira atende álcool e outras drogas?", answer: "Documentos e ações municipais registram atuação relacionada a álcool e drogas dentro do CAPS. Confirme diretamente o fluxo e o atendimento atual com a Secretaria de Saúde." },
      { question: "Porto Ferreira possui CAPS AD separado?", answer: "A pesquisa não encontrou confirmação oficial atual de uma unidade CAPS AD separada. Evitamos atribuir uma classificação não publicada." },
      { question: "Onde confirmar endereço e forma de acesso?", answer: "Use a página oficial de unidades ou o canal da Secretaria Municipal de Saúde antes de se deslocar." },
      { question: "A Central possui unidade em Porto Ferreira?", answer: "Não. A única unidade física da Central está em Araraquara." },
      { question: "Existe garantia de acolhimento em Araraquara?", answer: "Não. A possibilidade depende de avaliação, disponibilidade e condições aplicáveis, sem promessa de resultado." },
    ],
    relatedLinks: [
      { to: "/tratamento", label: "Tratamento e continuidade", description: "Entenda acompanhamento, revisão e participação da família." },
      { to: "/blog", label: "Guia sobre alcoolismo", description: "Leia quando o consumo pode estar causando prejuízos." },
      { to: "/clinica-de-reabilitacao", label: "Critérios para avaliar acolhimento", description: "Compare possibilidades sem procurar uma resposta automática." },
    ],
  },
  "jaboticabal-sp": {
    slug: "jaboticabal-sp",
    name: "Jaboticabal",
    title: "Clínica de Recuperação em Jaboticabal | CAPS II e Família",
    description: "Orientação local sobre o CAPS II de Jaboticabal, álcool e drogas, participação da família e possível acolhimento em Araraquara.",
    h1: "Saúde mental e dependência química em Jaboticabal: caminhos de cuidado",
    lead: "Jaboticabal inaugurou uma nova sede para o CAPS II em 2025 e a Prefeitura informa atendimento também a situações relacionadas a álcool e outras drogas. Para a família, essa referência local pode ser o início de uma avaliação sem transformar acolhimento em resposta única.",
    transparency: "A Central não possui unidade em Jaboticabal e não tem parceria com o CAPS II ou com a Prefeitura. A unidade física da Central está em Araraquara.",
    image: jaboticabalImage,
    imageAlt: "Casal em conversa ilustrativa de orientação sobre saúde mental em Jaboticabal",
    imageCaption: "Imagem ilustrativa de escuta familiar; não retrata o CAPS II nem uma instalação da Central.",
    sections: [
      {
        eyebrow: "Atualização local",
        heading: "O CAPS II passou a atender em nova sede no Jardim Kennedy",
        paragraphs: [
          "A Prefeitura informou a inauguração da nova sede do CAPS II Maria Regina Leandro Moraes Ferreira em setembro de 2025. O comunicado descreve atenção a transtornos mentais graves e persistentes, inclusive situações relacionadas ao uso de álcool e outras drogas.",
          "Como páginas municipais antigas ainda podem mostrar o endereço anterior, o comunicado mais recente deve ser priorizado e os dados precisam ser confirmados antes da visita.",
        ],
      },
      {
        eyebrow: "Rede e avaliação",
        heading: "Saúde mental e uso de substâncias podem exigir articulação de cuidados",
        paragraphs: [
          "Nem toda pessoa com consumo problemático precisa da mesma modalidade. O CAPS II pode orientar dentro de suas atribuições e a rede municipal pode envolver outros pontos conforme a necessidade.",
          "A família contribui relatando riscos, prejuízos e histórico com clareza. Não deve interromper acompanhamento ou organizar procedimentos por conta própria sem orientação.",
        ],
      },
      {
        eyebrow: "Escolha informada",
        heading: "Conhecer a Central é diferente de receber indicação da Prefeitura",
        paragraphs: [
          "A Central pode explicar por telefone sua proposta de acolhimento em Araraquara. Não existe encaminhamento automático, convênio ou recomendação do CAPS II implícita nesta página.",
          "Qualquer possibilidade precisa ser avaliada individualmente. Disponibilidade, condições e limites devem ficar claros antes do deslocamento.",
        ],
      },
    ],
    resourcesHeading: "Serviços e informações oficiais de Jaboticabal",
    resourcesIntro: "Use os canais municipais para confirmar a sede atual, o acesso ao CAPS II e outros pontos da rede.",
    resources: [
      { name: "Nova sede do CAPS II", description: "Comunicado oficial de 2025 com a atualização mais recente sobre a unidade.", href: "https://www.jaboticabal.sp.gov.br/portal/noticias/0/3/18603/saude-nova-sede-do-caps-ii-e-inaugurada-no-jardim-kennedy", linkLabel: "Ler a notícia oficial" },
      { name: "Unidades de Saúde Secundária", description: "Relação municipal de CAPS, centro de saúde e ambulatórios; confirme dados que possam estar desatualizados.", href: "https://www.jaboticabal.sp.gov.br/portal/secretarias-paginas/64/unidades-de-saude-secundaria/", linkLabel: "Consultar a rede secundária" },
      { name: "Secretaria de Saúde", description: "Canal institucional para confirmar fluxo, contatos e serviços vigentes.", href: "https://www.jaboticabal.sp.gov.br/portal/secretarias/11/secretaria-de-saude/", linkLabel: "Acessar a Secretaria de Saúde" },
    ],
    familyHeading: "A nova sede facilita localização, mas a indicação continua individual",
    familyText: ["Confirme com o CAPS II como ocorre o acolhimento inicial e se a demanda apresentada pertence ao escopo do serviço. Em urgência, utilize a rede de emergência.", "Se a família quiser avaliar uma instituição fora da cidade, compare proposta, critérios e acompanhamento sem interpretar informação pública como endosso privado."],
    faqs: [
      { question: "Qual é a informação mais recente sobre o CAPS II de Jaboticabal?", answer: "A Prefeitura anunciou em setembro de 2025 a nova sede no Jardim Kennedy. Confirme os dados antes de ir, pois páginas antigas podem manter o endereço anterior." },
      { question: "O CAPS II atende situações relacionadas a álcool e drogas?", answer: "Sim. O comunicado oficial inclui situações relacionadas ao uso de álcool e outras drogas entre as demandas do serviço." },
      { question: "Existe CAPS infantil em Jaboticabal?", answer: "Houve anúncio de implantação, mas a pesquisa não confirmou oficialmente a abertura como fato concluído. Consulte a Secretaria de Saúde para informação atual." },
      { question: "A Central possui clínica em Jaboticabal?", answer: "Não. A única unidade física da Central fica em Araraquara." },
      { question: "O CAPS II pode garantir que uma clínica privada seja indicada?", answer: "Não cabe a esta página presumir indicação. A rede pública e a Central são independentes, e cada possibilidade deve ser avaliada pelos responsáveis." },
    ],
    relatedLinks: [
      { to: "/familia", label: "Participação da família", description: "Saiba como compartilhar informações sem estigmatizar." },
      { to: "/tratamento", label: "Plano de tratamento", description: "Conheça a importância de objetivos e revisões individuais." },
      { to: "/acolhimento", label: "Avaliação para acolhimento", description: "Entenda etapas, limites e disponibilidade." },
    ],
  },
  "franca-sp": {
    slug: "franca-sp",
    name: "Franca",
    title: "Clínica de Recuperação em Franca | RAPS e CAPS AD III",
    description: "Guia local sobre a RAPS de Franca, CAPS AD III Renascer, ajuda pública e avaliação responsável de acolhimento em Araraquara.",
    h1: "Dependência química em Franca: RAPS, CAPS AD III e opções de cuidado",
    lead: "Franca possui uma Rede de Atenção Psicossocial estruturada e um CAPS AD III voltado a necessidades relacionadas ao uso de álcool e outras drogas. Essa realidade pede uma página própria: antes de considerar cuidado fora da cidade, a pessoa e a família podem conhecer as portas públicas locais.",
    transparency: "A Central não possui unidade em Franca e não integra a RAPS nem o CAPS AD III Renascer. Sua única unidade física fica em Araraquara.",
    image: francaImage,
    imageAlt: "Casal caminhando em direção a atendimento de saúde ilustrativo em Franca",
    imageCaption: "Imagem ilustrativa; o prédio não representa o CAPS AD III Renascer nem qualquer unidade da Central.",
    sections: [
      {
        eyebrow: "Rede municipal ampla",
        heading: "A RAPS articula diferentes pontos de atenção em Franca",
        paragraphs: [
          "A Carta de Serviços da Prefeitura descreve a Rede de Atenção Psicossocial como política pública gratuita para sofrimento mental e necessidades decorrentes do uso de álcool e outras drogas. UBS, serviços especializados e apoio à família podem integrar o percurso.",
          "A própria Carta de Serviços deve ser consultada para requisitos e fluxo atual. Uma rede articulada permite que o cuidado seja pensado no território e não apenas em torno de uma internação.",
        ],
      },
      {
        eyebrow: "Álcool e outras drogas",
        heading: "O CAPS AD III Renascer oferece atendimento contínuo",
        paragraphs: [
          "Em notícia oficial de julho de 2026, a Prefeitura informa que o CAPS AD III Renascer funciona 24 horas, todos os dias, e oferece atendimento especializado a pessoas com sofrimento decorrente do uso de álcool e outras drogas. A publicação também descreve suporte às famílias e possibilidade de acolhimento noturno para estabilização clínica quando necessário.",
          "O serviço público possui proposta própria e não deve ser confundido com clínica privada. Para saber como acessar e quais condições se aplicam, consulte os canais oficiais atuais.",
        ],
      },
      {
        eyebrow: "Quando avaliar outra cidade",
        heading: "Uma opção em Araraquara precisa ter motivo claro",
        paragraphs: [
          "Mesmo com uma rede local ampla, uma família pode querer compreender outras possibilidades. A Central oferece uma conversa sobre sua unidade de Araraquara, mas não substitui a RAPS nem recebe encaminhamento automático do CAPS AD III.",
          "A distância exige planejamento. Antes de viajar, confirme avaliação, disponibilidade, condições, participação familiar e limites. Não há promessa de cura ou garantia de acolhimento.",
        ],
      },
    ],
    resourcesHeading: "Onde buscar ajuda pública em Franca",
    resourcesIntro: "Franca possui fontes oficiais específicas. Consulte-as diretamente para conhecer o acesso atual à RAPS e ao CAPS AD III.",
    resources: [
      { name: "Rede de Atenção Psicossocial", description: "Carta de Serviços oficial com finalidade, público e organização da RAPS de Franca.", href: "https://www3.franca.sp.gov.br/cartadeservicos/servicos/rede-de-ateno-psicossocial-de-franca-raps", linkLabel: "Consultar a RAPS" },
      { name: "CAPS AD III Renascer", description: "Notícia oficial de 2026 sobre funcionamento contínuo, equipe e apoio a usuários e famílias.", href: "https://www3.franca.sp.gov.br/noticia/39339/caps-renascer-completa-seis-anos-com-mais-de-43-mil-atendimentos.html", linkLabel: "Conhecer o CAPS Renascer" },
      { name: "Ações sobre álcool e drogas", description: "Informação municipal sobre prevenção e porta de entrada pelo CAPS AD III.", href: "https://www3.franca.sp.gov.br/noticia/38010/sade-e-caps-renascer-promovem-aes-do-fevereiro-vermelho.html", linkLabel: "Ver orientação da Saúde" },
    ],
    familyHeading: "Em Franca, a família pode começar pela rede territorial",
    familyText: ["A RAPS informa atendimento também a familiares que precisam de suporte. Ao procurar a rede, descreva os impactos, riscos e necessidades sem reduzir a pessoa ao uso da substância.", "Se houver interesse na Central, compare a proposta de Araraquara com os caminhos locais e só avance após informações claras. Os serviços não possuem parceria entre si."],
    faqs: [
      { question: "Franca possui CAPS específico para álcool e drogas?", answer: "Sim. A Prefeitura mantém o CAPS AD III Renascer para necessidades relacionadas ao uso de álcool e outras drogas." },
      { question: "O CAPS AD III Renascer funciona 24 horas?", answer: "A notícia oficial publicada em julho de 2026 informa funcionamento 24 horas, todos os dias, inclusive finais de semana e feriados." },
      { question: "O que é a RAPS de Franca?", answer: "É a Rede de Atenção Psicossocial municipal, que articula pontos de cuidado em saúde mental e também atende necessidades decorrentes do uso de álcool e outras drogas." },
      { question: "A Central possui unidade ou parceria em Franca?", answer: "Não. A Central não possui unidade em Franca nem integra a RAPS. Sua unidade física está em Araraquara." },
      { question: "Por que considerar acolhimento fora de Franca?", answer: "Essa possibilidade só deve ser avaliada conforme necessidades individuais, proposta do serviço, participação familiar e condições aplicáveis. Não é uma escolha automática nem superior à rede local." },
    ],
    relatedLinks: [
      { to: "/clinica-de-reabilitacao", label: "Entender clínica de reabilitação", description: "Compare acolhimento, tratamento e rede territorial." },
      { to: "/blog", label: "Dependência química em profundidade", description: "Leia sobre consequências e continuidade da recuperação." },
      { to: "/familia", label: "Suporte para familiares", description: "Organize limites, comunicação e busca de ajuda." },
    ],
  },
} satisfies Record<string, LocalCityPage>;

export type LocalCitySlug = keyof typeof localCityPages;
