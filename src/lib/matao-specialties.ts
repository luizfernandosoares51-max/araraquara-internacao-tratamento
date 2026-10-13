import { siteUrl, whatsappNumber } from './site';
import { regionalCityAccess } from './regional-city-access';
import { specialtySources } from './araraquara-specialties';

export { specialtySources };
export const mataoParentPath = '/clinica-de-recuperacao-em-matao-sp';
export const mataoScope = {
  physicalUnitCity: 'Araraquara', orientationHours: 24, transportByAppointment: true,
  transport24Hours: false, ownMedicalDetox: false, ownInvoluntaryHospitalization: false,
  femaleUnit: false, adolescentProgram: false, geriatricProgram: false,
  gamblingProgram: false, workerMedicalReports: false, clinicalReviewVerified: false,
} as const;

type Section = { title: string; paragraphs: readonly string[] };
type Faq = { question: string; answer: string };
type SpecialtyContent = {
  key: string; path: string; label: string; summary: string; title: string;
  description: string; heading: string; intro: string; notice: string;
  sections: readonly Section[]; faqs: readonly Faq[];
};

export const mataoSpecialtyList = [
  {
    key: 'cocaine', path: '/tratamento-cocaina-crack-matao', label: 'Cocaína e Crack',
    summary: 'Escuta familiar, fissura e reorganização da rotina com apoio profissional.',
    title: 'Cocaína e Crack: Tratamento para Matão SP | Central de Acolhimento',
    description: 'Apoio para famílias de Matão diante do uso de cocaína e crack. Orientação 24h, acolhimento voluntário em Araraquara e avaliação das necessidades clínicas.',
    heading: 'Cuidado para dependência de cocaína e crack: orientação para Matão',
    intro: 'Perceber mudanças no sono, nos gastos ou nos vínculos pode trazer preocupação à família de Matão. A conversa inicial na Central acolhe essas dúvidas e ajuda a distinguir necessidades clínicas de suporte psicossocial, sem diagnóstico pela internet.',
    notice: 'Dor no peito, convulsões, alteração de consciência ou risco imediato exigem atendimento de urgência. Ligue SAMU 192; não aguarde transporte particular.',
    sections: [
      { title: 'Conversar sobre mudanças concretas', paragraphs: ['Relate episódios observados e tentativas anteriores de ajuda, sem acusações ou rótulos. O padrão de uso, outras substâncias e a saúde física e emocional são considerados por profissionais habilitados.', 'Uma rotina de trabalho ou convivência aparentemente preservada não descarta dificuldades. A família pode buscar avaliação na rede de saúde de Matão e orientação particular na Central; essas possibilidades são independentes.'] },
      { title: 'Fissura, vínculos e prevenção à recaída', paragraphs: ['Reconhecer situações associadas ao consumo ajuda a discutir formas de proteção e pedidos de apoio. A fissura varia entre pessoas e não tem um prazo universal para desaparecer.', 'A proposta confirmada de acolhimento voluntário inclui psicologia, 12 Passos, laborterapia, convivência e plano de prevenção à recaída. A mudança de ambiente não substitui avaliação nem garante recuperação.'] },
      { title: 'Planejar o retorno à rotina de Matão', paragraphs: ['Combine participação familiar, visitas agendadas e continuidade com os profissionais responsáveis. O planejamento considera vínculos, compromissos e recursos perto de casa.', 'Acompanhamento médico e psiquiátrico integrado e enfermagem complementam o cuidado na sede em Araraquara; desintoxicação médica e necessidades hospitalares seguem encaminhamento a estabelecimentos habilitados.'] },
    ],
    faqs: [
      { question: 'Mudanças no sono confirmam dependência de cocaína?', answer: 'Não. Alterações no sono têm várias causas. A avaliação profissional considera histórico, padrão de uso, saúde e riscos; relatos familiares ajudam, mas não confirmam diagnóstico.' },
      { question: 'A família de Matão pode pedir orientação antes de decidir pelo acolhimento?', answer: 'Sim. O plantão de orientação 24h escuta a família e esclarece opções. A conversa não determina internação nem garante vaga.' },
      { question: 'O afastamento de Matão elimina a fissura?', answer: 'Não. Uma mudança de ambiente pode integrar o plano individual, mas não elimina automaticamente a fissura. Apoio profissional e continuidade do cuidado seguem necessários.' },
    ],
  },
  {
    key: 'alcohol', path: '/tratamento-alcoolismo-matao', label: 'Alcoolismo',
    summary: 'Avaliação do uso de álcool e apoio para reconstruir hábitos e vínculos.',
    title: 'Tratamento do Alcoolismo para Matão SP | Central de Acolhimento',
    description: 'Orientação sobre alcoolismo para Matão e apoio familiar 24h. Acolhimento voluntário em Araraquara; desintoxicação médica por encaminhamento adequado.',
    heading: 'Tratamento do alcoolismo para famílias de Matão',
    intro: 'O álcool pode afetar saúde e relações mesmo quando a pessoa mantém suas atividades. Famílias de Matão encontram na Central uma primeira conversa para organizar avaliação, acolhimento voluntário e participação no cuidado.',
    notice: 'Abstinência após uso intenso pode exigir avaliação médica. Convulsões, confusão intensa ou perda de consciência são urgências: SAMU 192.',
    sections: [
      { title: 'Trabalhar não significa ausência de prejuízos', paragraphs: ['A expressão alcoolismo funcional não é uma garantia de segurança. A dificuldade de reduzir o consumo, conflitos e compromissos prejudicados precisam ser avaliados sem esperar uma ruptura completa da rotina.', 'Anote mudanças e converse em um momento seguro. A quantidade consumida isoladamente não define diagnóstico nem a modalidade de cuidado indicada.'] },
      { title: 'Abstinência e desintoxicação pertencem ao cuidado médico', paragraphs: ['A redução após consumo intenso ou prolongado pode trazer complicações. Não improvise medicação, doses ou uma desintoxicação em casa; procure orientação médica sobre a forma segura de cuidado.', 'A Central não realiza desintoxicação médica na sede. Quando necessária, há orientação e encaminhamento para estabelecimentos habilitados, com condutas sob responsabilidade do serviço receptor.'] },
      { title: 'Cuidar dos vínculos além da interrupção do consumo', paragraphs: ['Suporte psicológico, convivência terapêutica e prevenção à recaída ajudam a discutir a reorganização do cotidiano. A família participa com limites possíveis, sem assumir sozinha a responsabilidade pelo resultado.', 'Para quem vem de Matão, esclareça visitas, disponibilidade e continuidade após o acolhimento. Não há prazo universal de recuperação nem cobertura de plano garantida.'] },
    ],
    faqs: [
      { question: 'Quem trabalha todos os dias pode precisar de ajuda com o álcool?', answer: 'Sim. Manter o trabalho não exclui prejuízos à saúde, aos vínculos ou ao controle do consumo. A avaliação individual define as necessidades de cuidado.' },
      { question: 'A Central oferece protocolo próprio de desintoxicação alcoólica?', answer: 'Não. A desintoxicação médica é encaminhada a estabelecimentos habilitados. A sede em Araraquara oferece acolhimento voluntário e suporte psicossocial, com acompanhamento integrado.' },
      { question: 'Como organizar visitas saindo de Matão?', answer: 'Combine dias e horários com a equipe antes de viajar. O acesso pela SP-310 é uma referência regional; confira o trajeto e as condições de trânsito, sem presumir prazo garantido.' },
    ],
  },
  {
    key: 'voluntary', path: '/internacao-voluntaria-matao', label: 'Acolhimento Voluntário',
    summary: 'Escolha informada, consentimento e participação da família no cuidado.',
    title: 'Acolhimento Voluntário para Matão SP | Central de Acolhimento',
    description: 'Entenda o acolhimento voluntário para famílias de Matão: consentimento, rotina e apoio psicossocial em Araraquara. Orientação e agendamento 24h.',
    heading: 'Acolhimento voluntário com apoio à família de Matão',
    intro: 'Escolher pedir ajuda envolve dúvidas sobre rotina, convivência e participação familiar. A Central recebe essas perguntas de Matão e apresenta as condições do acolhimento voluntário na sede em Araraquara, respeitando a decisão da pessoa.',
    notice: 'Acolhimento voluntário depende de consentimento e avaliação de compatibilidade. Não é internação médica hospitalar nem promessa de admissão imediata.',
    sections: [
      { title: 'Uma decisão que precisa ser compreendida', paragraphs: ['A pessoa deve conhecer proposta, regras de convivência, custos, contatos e condições do acolhimento. Pressão, ameaça ou engano não substituem consentimento.', 'Antes de sair de Matão, converse com a equipe e confirme quais informações são necessárias. A família pode apoiar sem falar pela pessoa em todas as decisões.'] },
      { title: 'Conhecer a rotina e o acompanhamento', paragraphs: ['O cronograma informado pela instituição reúne atividades entre 07h e 22h, com psicologia, 12 Passos, convivência, laborterapia e prevenção à recaída. As atividades devem ser discutidas conforme as necessidades individuais.', 'Acompanhamento médico e psiquiátrico integrado e enfermagem com supervisão diária complementam a proposta. Cuidados que exigem hospital ou desintoxicação médica seguem encaminhamento.'] },
      { title: 'Preparar participação e continuidade', paragraphs: ['Pergunte sobre pertences, comunicação com familiares e visitas agendadas. A proximidade regional facilita o planejamento, sem significar acesso sem confirmação.', 'O retorno a Matão merece um plano com acompanhamento indicado e apoios locais. Duração, encerramento e condições contratuais precisam ser esclarecidos antes do ingresso.'] },
    ],
    faqs: [
      { question: 'A família pode decidir sozinha pelo acolhimento voluntário?', answer: 'Não. A modalidade voluntária depende da decisão e do consentimento da pessoa, além da avaliação de compatibilidade e das condições de admissão.' },
      { question: 'Posso sair de Matão sem confirmar a recepção?', answer: 'Confirme primeiro avaliação, disponibilidade e orientações da equipe. O contato inicial não reserva vaga nem garante admissão imediata.' },
      { question: 'O acolhimento voluntário substitui assistência hospitalar?', answer: 'Não. Necessidades hospitalares e desintoxicação médica exigem avaliação e atendimento em estabelecimento habilitado.' },
    ],
  },
  {
    key: 'involuntary', path: '/internacao-involuntaria-matao', label: 'Internação Involuntária: Orientação',
    summary: 'Direitos, avaliação médica e caminhos legais para famílias de Matão.',
    title: 'Internação Involuntária: Orientação em Matão SP | Central',
    description: 'Orientação 24h para famílias de Matão sobre internação involuntária, direitos e avaliação médica. Encaminhamento a unidades habilitadas, sem internação na sede.',
    heading: 'Internação involuntária: amparo legal e orientação para Matão',
    intro: 'Quando há recusa de ajuda, o desgaste familiar pode dificultar decisões. A Central orienta famílias de Matão sobre avaliação, direitos e encaminhamento, distinguindo a internação clínica do acolhimento voluntário realizado em sua sede.',
    notice: 'A Central não realiza internação involuntária na sede. A indicação e autorização são médicas, conforme os requisitos legais; risco imediato exige urgência ou SAMU 192.',
    sections: [
      { title: 'Recusa não é indicação automática', paragraphs: ['Discordância familiar, uso de substâncias ou um diagnóstico isolado não bastam para determinar internação involuntária. A avaliação médica e os requisitos das Leis 10.216/2001 e 13.840/2019 orientam a decisão.', 'Organize o histórico e os riscos observados para a equipe responsável. Não use ameaças ou contenção improvisada para obter concordância.'] },
      { title: 'Separar a orientação da internação clínica', paragraphs: ['A Central presta escuta, suporte psicossocial, orientação familiar e organização do encaminhamento. A internação, quando indicada, ocorre em estabelecimento médico habilitado, não na sede de acolhimento voluntário.', 'Cabe ao serviço receptor verificar indicação, documentação e responsabilidades médicas. Não se anuncia aqui hospital parceiro específico ou vaga disponível sem confirmação.'] },
      { title: 'Direitos e comunicações legais', paragraphs: ['As comunicações legais aplicáveis em até 72 horas são responsabilidade do estabelecimento que realiza a internação. Esse prazo não é tempo de espera, duração do cuidado ou obrigação de acolhimento pela Central.', 'A família de Matão pode pedir esclarecimentos sobre consentimento, acompanhamento e direitos. Esta página é educativa, não um parecer jurídico nem uma autorização de internação.'] },
    ],
    faqs: [
      { question: 'A Lei 13.840/2019 permite à família internar alguém por conta própria?', answer: 'Não. A internação involuntária depende de avaliação e autorização médicas e do cumprimento dos requisitos legais. A vontade familiar isolada não determina a indicação.' },
      { question: 'Onde acontece uma internação involuntária indicada para alguém de Matão?', answer: 'Em estabelecimento médico habilitado, conforme avaliação e condições de recepção. A Central orienta e apoia o encaminhamento, mas não realiza essa internação na sede.' },
      { question: 'Quem responde pelas comunicações legais em até 72 horas?', answer: 'O estabelecimento que realiza a internação é responsável pelas comunicações legalmente aplicáveis. O prazo não é uma promessa de admissão ou de transporte.' },
    ],
  },
  {
    key: 'transport', path: '/resgate-remocao-matao', label: 'Resgate e Remoção: Agendamento',
    summary: 'Planejamento seguro do deslocamento, com avaliação e condições confirmadas.',
    title: 'Resgate e Remoção para Matão SP | Orientação e Agendamento',
    description: 'Suporte 24h para organizar o deslocamento de Matão. Transporte mediante agendamento, avaliação e confirmação; orientação da Central pelo WhatsApp oficial.',
    heading: 'Resgate e remoção para Matão: organizar o deslocamento com segurança',
    intro: 'Preparar uma viagem em um momento delicado exige clareza sobre origem, destino e necessidades de cuidado. A equipe operacional conversa com a família de Matão para organizar o agendamento, sem prometer saída imediata.',
    notice: 'O plantão de orientação e suporte para agendamento funciona 24h. A execução do transporte depende de confirmação; a Central não é serviço de emergência. Em risco imediato, SAMU 192.',
    sections: [
      { title: 'Informações para planejar, não para expor a pessoa', paragraphs: ['No primeiro contato, informe município, necessidade geral e existência de risco atual. Endereço exato e dados sensíveis devem ser tratados diretamente com a equipe quando necessários ao planejamento.', 'A coordenação operacional informada é de Luiz Fernando Soares. Origem, destino, consentimento, condições clínicas e disponibilidade precisam ser esclarecidos antes de qualquer confirmação.'] },
      { title: 'Referências rodoviárias sem prazo de chegada', paragraphs: ['A SP-310, Rodovia Washington Luís, conecta Matão à região de Araraquara. O acesso à rodovia pode variar conforme o ponto de saída; a SP-326 pode integrar o trajeto de algumas origens e precisa ser conferida.', 'Não há tempo verificado de chegada aos bairros de Matão. Trânsito, obras, avaliação e destino alteram o planejamento; a referência regional de cerca de 30 minutos não é um prazo de deslocamento da equipe.'] },
      { title: 'Confirmar o cuidado no destino', paragraphs: ['Antes de organizar transporte, esclareça se a pessoa necessita de acolhimento voluntário ou de avaliação hospitalar. Uma viagem para Araraquara não deve atrasar assistência urgente em Matão.', 'Não são anunciados frota, ambulância ou transporte 24h sem confirmação. A família deve receber as condições operacionais aplicáveis à situação antes de se deslocar.'] },
    ],
    faqs: [
      { question: 'Plantão 24h significa remoção imediata em Matão?', answer: 'Não. As 24 horas referem-se à orientação e ao suporte para agendamento. A execução depende de avaliação, disponibilidade e confirmação das condições.' },
      { question: 'Existe tempo garantido de chegada aos bairros de Matão?', answer: 'Não. Não há tempos de chegada por bairro verificados. A origem, o trânsito, as necessidades clínicas e a disponibilidade operacional influenciam o deslocamento.' },
      { question: 'Posso aguardar a remoção particular em uma emergência?', answer: 'Não. Em risco à vida, convulsões ou alteração de consciência, procure atendimento de urgência ou ligue SAMU 192. Transporte agendado não substitui emergência.' },
    ],
  },
  {
    key: 'women', path: '/clinica-recuperacao-feminina-matao', label: 'Orientação para Mulheres',
    summary: 'Privacidade, vínculos e perguntas essenciais sobre a modalidade de cuidado.',
    title: 'Orientação para Mulheres e Famílias de Matão SP | Central',
    description: 'Escuta para mulheres e famílias de Matão, com orientação 24h e respeito à privacidade. Consulte perfil de admissão e condições; sem unidade feminina anunciada.',
    heading: 'Acolhimento e recuperação: orientação para mulheres de Matão',
    intro: 'Buscar ajuda pode envolver preocupações com privacidade, responsabilidades familiares e segurança. A Central acolhe dúvidas de mulheres e famílias de Matão e ajuda a organizar a avaliação de opções compatíveis com cada necessidade.',
    notice: 'Esta página não confirma unidade feminina, ala exclusiva ou ambientes separados. Consulte perfil de admissão e disponibilidade antes de decidir por acolhimento.',
    sections: [
      { title: 'Escuta que considera a vida da mulher', paragraphs: ['Maternidade, trabalho e relações podem influenciar a organização do cuidado, sem definir um único perfil de necessidade. Converse sobre prioridades e apoios sem pressupor diagnóstico ou experiência pessoal.', 'A avaliação pode discutir saúde física e emocional, uso de substâncias e segurança. Programas específicos para trauma, gestação ou maternidade não estão confirmados pela Central.'] },
      { title: 'Perguntas sobre privacidade e convivência', paragraphs: ['Antes de escolher um serviço, pergunte sobre alojamento, convivência, contatos familiares e tratamento de dados. A existência de uma página regional não comprova ala feminina ou atendimento disponível.', 'Compartilhe somente o necessário na primeira conversa. A proteção de informações respeita obrigações legais e situações de segurança, sem promessa de sigilo absoluto.'] },
      { title: 'Organizar apoio perto de Matão', paragraphs: ['A família pode ajudar a planejar avaliação, responsabilidades e acompanhamento indicado perto de casa. A orientação da Central parte de Araraquara, sem unidade física em Matão.', 'Se a modalidade necessária não for compatível com o acolhimento informado, converse sobre encaminhamento adequado. Nenhum ingresso ou resultado é garantido pelo contato inicial.'] },
    ],
    faqs: [
      { question: 'A Central tem unidade feminina exclusiva em Matão?', answer: 'Não há unidade da Central em Matão nem confirmação de ala feminina exclusiva. A página oferece orientação; consulte perfil de admissão e condições reais diretamente.' },
      { question: 'Quais informações uma mulher precisa compartilhar no primeiro contato?', answer: 'Apenas o necessário para esclarecer a necessidade geral. Dados clínicos, endereço e documentos devem ser discutidos em canal adequado quando forem necessários ao cuidado.' },
      { question: 'Esta página confirma programa para gestantes ou mães com filhos?', answer: 'Não. Esses programas não foram confirmados. A avaliação individual e a verificação das condições do serviço são indispensáveis.' },
    ],
  },
  {
    key: 'medication', path: '/dependencia-medicamentos-tarja-preta-matao', label: 'Medicamentos Controlados',
    summary: 'Uso prescrito, riscos da interrupção e avaliação pelo profissional responsável.',
    title: 'Dependência de Medicamentos: Orientação para Matão SP | Central',
    description: 'Dúvidas sobre medicamentos controlados em Matão? Orientação familiar 24h e avaliação médica responsável, sem desmame ou desintoxicação próprios na Central.',
    heading: 'Medicamentos controlados: orientação para famílias de Matão',
    intro: 'Receber uma prescrição não significa automaticamente ter dependência problemática. Quando surgem medo de parar, mudanças de dose ou uso fora da orientação, a família de Matão pode organizar uma conversa com o profissional responsável.',
    notice: 'Não interrompa, reduza ou combine medicamentos por conta própria. A Central não anuncia programa próprio de desmame; convulsões ou alteração de consciência exigem urgência ou SAMU 192.',
    sections: [
      { title: 'Diferenciar uso indicado e dificuldades relacionadas', paragraphs: ['Ansiolíticos, calmantes e opioides têm indicações e riscos distintos. A tarja do medicamento, isoladamente, não confirma dependência; tolerância, dependência física e uso problemático precisam ser avaliados.', 'Organize nomes, prescrições e mudanças percebidas para a consulta. Não use medicamento emprestado ou substitua o tratamento por orientação informal.'] },
      { title: 'Redução exige planejamento médico individual', paragraphs: ['A interrupção abrupta de alguns medicamentos pode provocar abstinência ou agravar sintomas. Não existem doses, prazos ou substituições universais que possam ser definidos por esta página.', 'O acompanhamento médico e psiquiátrico integrado pode avaliar as necessidades; desintoxicação médica segue encaminhamento externo. Não se confirma desmame especializado na sede.'] },
      { title: 'Continuidade com o prescritor em Matão', paragraphs: ['Sempre que possível, mantenha comunicação com o profissional que acompanha a pessoa. O cuidado considera também os motivos da prescrição, como dor, ansiedade ou dificuldades de sono.', 'A família pode apoiar o comparecimento às consultas e registrar dúvidas com consentimento. Isso não autoriza administrar ou suspender tratamento por conta própria.'] },
    ],
    faqs: [
      { question: 'Tomar remédio tarja preta significa dependência?', answer: 'Não necessariamente. A indicação, o padrão de uso e os efeitos precisam de avaliação profissional. A tarja isolada não confirma diagnóstico.' },
      { question: 'A Central faz desmame de ansiolíticos ou opioides?', answer: 'Um programa próprio de desmame não está confirmado. Alterações do tratamento cabem ao profissional médico responsável; desintoxicação médica recebe encaminhamento adequado.' },
      { question: 'Posso reduzir a dose antes de sair de Matão?', answer: 'Não altere doses para preparar uma viagem. Converse antes com o prescritor sobre segurança e continuidade do tratamento.' },
    ],
  },
  {
    key: 'youth', path: '/tratamento-dependencia-jovens-matao', label: 'Jovens e Apoio Familiar',
    summary: 'Diálogo entre gerações, avaliação por idade e continuidade de estudos e vínculos.',
    title: 'Dependência em Jovens: Orientação para Matão SP | Central',
    description: 'Orientação 24h para famílias de jovens de Matão: diálogo, avaliação e caminhos de cuidado. Consulte perfil de admissão; programa para adolescentes não confirmado.',
    heading: 'Jovens e dependência: orientação à família de Matão',
    intro: 'Mudanças no convívio e nas atividades podem gerar dúvidas sem revelar, sozinhas, um diagnóstico. A Central orienta famílias de Matão a buscar avaliação adequada à idade e a conversar sem transformar preocupação em punição.',
    notice: 'Programa de adolescentes e admissão de menores não estão confirmados. Crianças e adolescentes exigem avaliação em serviços adequados à idade e respeito às medidas de proteção.',
    sections: [
      { title: 'Diálogo antes de conclusões', paragraphs: ['Pergunte sobre dificuldades e escute o relato do jovem. Escola, trabalho, sono e vínculos fazem parte do contexto, mas nenhum comportamento isolado confirma dependência.', 'A participação familiar precisa considerar autonomia e faixa etária. Para menores, responsáveis e serviços habilitados devem esclarecer os cuidados e requisitos de proteção.'] },
      { title: 'Escolher um serviço compatível com a idade', paragraphs: ['Uma página sobre jovens não comprova programa para adolescentes. Antes de organizar viagem ou permanência, confirme faixa etária de admissão e recursos necessários.', 'A Central informa acolhimento voluntário e suporte psicossocial em Araraquara. Avaliação médica e encaminhamentos orientam necessidades que ultrapassam essa modalidade.'] },
      { title: 'Preservar perspectivas de estudo e trabalho', paragraphs: ['Um plano de continuidade pode discutir retorno às atividades, contatos familiares e apoios próximos a Matão. Não é necessário prometer uma ruptura definitiva com a cidade ou com todos os vínculos.', 'A família também pode buscar orientação para estabelecer limites e lidar com o desgaste. Não há resultado garantido ou duração universal do cuidado.'] },
    ],
    faqs: [
      { question: 'A Central confirma atendimento de adolescentes de Matão?', answer: 'Não. Programa de adolescentes e admissão de menores não estão confirmados. Consulte serviços adequados à idade e esclareça o perfil de admissão antes de qualquer decisão.' },
      { question: 'Um jovem adulto pode pedir orientação sem a família?', answer: 'Pode procurar a conversa inicial por iniciativa própria. A avaliação individual e as condições de admissão continuam necessárias; o contato não garante vaga.' },
      { question: 'Como incluir estudos e trabalho no planejamento?', answer: 'Discuta com os profissionais a continuidade das atividades e os apoios disponíveis em Matão, respeitando necessidades clínicas, autonomia e proteção conforme a idade.' },
    ],
  },
  {
    key: 'gambling', path: '/tratamento-jogos-compulsivos-apostas-matao', label: 'Jogos e Apostas',
    summary: 'Impactos financeiros, controle de impulsos e orientação sem julgamento.',
    title: 'Jogos e Apostas: Orientação para Matão SP | Central de Acolhimento',
    description: 'Apoio e orientação 24h para famílias de Matão diante dos impactos das apostas. Escuta sobre vínculos e próximos passos, sem programa especializado anunciado.',
    heading: 'Compulsão em jogos e apostas: orientação para Matão',
    intro: 'A tentativa de recuperar perdas pode ampliar dívidas e tensão familiar. A Central oferece escuta e orientação para pessoas e famílias de Matão compreenderem os impactos e buscarem avaliação, sem diagnóstico remoto.',
    notice: 'Programa especializado para apostas e terapia específica não estão confirmados na Central. Risco de suicídio ou ameaça imediata à vida exige atendimento de urgência ou SAMU 192.',
    sections: [
      { title: 'Quando as apostas ocupam o cotidiano', paragraphs: ['Dificuldade de interromper, ocultação de gastos e abandono de compromissos podem ser motivos para buscar avaliação. Não é preciso esperar uma dívida extrema para pedir ajuda.', 'Converse sobre acontecimentos concretos sem humilhação. Uma avaliação profissional considera comportamento, sofrimento emocional e outras necessidades de saúde.'] },
      { title: 'Impulsos e vínculos como temas de avaliação', paragraphs: ['Controle de impulsos, reconstrução da rotina e apoio familiar são temas educativos para discutir com profissionais. Esta página não oferece protocolo psicológico, TCC própria ou prescrição psiquiátrica.', 'Acolhimento não é indicado automaticamente por perdas financeiras. Compatibilidade e encaminhamentos precisam ser avaliados individualmente.'] },
      { title: 'Apoio familiar sem assumir todas as dívidas', paragraphs: ['Limites financeiros podem ser discutidos com apoio adequado, sem vigilância coercitiva ou promessa de resolver o comportamento pagando perdas. A família também pode precisar de suporte.', 'No primeiro contato em Matão, compartilhe apenas o necessário. Não envie senhas, extratos ou documentos financeiros sensíveis para obter orientação geral.'] },
    ],
    faqs: [
      { question: 'Dívidas de apostas significam indicação de internação?', answer: 'Não automaticamente. A avaliação considera comportamento, sofrimento, riscos e necessidades de cuidado; o valor da dívida isolado não define modalidade.' },
      { question: 'Existe programa especializado para apostas na Central?', answer: 'Não há confirmação desse programa. A Central oferece escuta e orientação familiar, com discussão dos próximos passos e encaminhamento quando necessário.' },
      { question: 'Preciso enviar extratos ou senhas para pedir orientação?', answer: 'Não. Compartilhe apenas a necessidade geral no primeiro contato. Nunca envie senhas ou acessos a contas para obter orientação.' },
    ],
  },
  {
    key: 'workers', path: '/tratamento-dependencia-alcool-trabalhadores-matao', label: 'Trabalhadores e Uso de Álcool',
    summary: 'Saúde, responsabilidades profissionais e privacidade no planejamento do cuidado.',
    title: 'Álcool e Trabalho: Orientação para Matão SP | Central de Acolhimento',
    description: 'Orientação 24h para trabalhadores e famílias de Matão sobre álcool, saúde e continuidade do cuidado. Privacidade responsável, sem laudo ou afastamento garantido.',
    heading: 'Uso de álcool e trabalho: orientação para Matão',
    intro: 'Responsabilidades profissionais podem tornar difícil reconhecer a necessidade de ajuda. Trabalhadores e gestores de Matão podem conversar com a Central sobre cuidado e organização familiar, sem exposição desnecessária ou promessas documentais.',
    notice: 'Não há programa ocupacional exclusivo ou emissão garantida de laudo médico. Documentos clínicos cabem aos profissionais responsáveis, conforme avaliação; sigilo respeita limites legais.',
    sections: [
      { title: 'Segurança e saúde vêm antes de esconder dificuldades', paragraphs: ['O uso de álcool pode interferir em atenção e decisões. Se houver intoxicação ou condições inseguras, não dirija nem opere máquinas; procure ajuda e avaliação apropriadas.', 'Manter o emprego não significa ausência de prejuízos. Descreva alterações na rotina sem depender de um rótulo como alcoolismo funcional para decidir procurar cuidado.'] },
      { title: 'Privacidade sem promessa absoluta', paragraphs: ['Informações devem ser compartilhadas apenas conforme necessidade, consentimento e obrigações legais. A primeira conversa não exige expor empregador, cargo ou documentos do trabalho.', 'Esclareça com os profissionais as regras de comunicação e documentação. Não se promete sigilo absoluto em situações que envolvem risco ou deveres legais.'] },
      { title: 'Afastamento e documentação exigem avaliação', paragraphs: ['Laudos e relatórios médicos pertencem aos profissionais responsáveis pelo atendimento. A página não garante emissão, conteúdo, afastamento ou aceitação pelo empregador ou plano.', 'Discuta retorno à rotina de Matão e acompanhamento indicado. O acolhimento particular e a orientação sobre reembolso não significam convênio nem cobertura assegurada.'] },
    ],
    faqs: [
      { question: 'A Central garante laudo para afastamento do trabalho?', answer: 'Não. A necessidade e emissão de documento clínico dependem da avaliação e da competência do profissional responsável; afastamento e aceitação não são garantidos.' },
      { question: 'Preciso informar minha empresa ao pedir orientação?', answer: 'Não é necessário identificar o empregador para uma conversa geral. Informações adicionais devem ser tratadas somente quando necessárias ao cuidado e à documentação aplicável.' },
      { question: 'O programa para trabalhadores oferece sigilo absoluto?', answer: 'Não se confirma programa ocupacional exclusivo nem sigilo absoluto. A privacidade deve ser respeitada conforme consentimento, segurança e obrigações legais.' },
    ],
  },
  {
    key: 'crisis', path: '/internacao-psiquiatrica-crise-saude-mental-matao', label: 'Crises de Saúde Mental',
    summary: 'Reconhecimento de risco, atendimento de urgência e encaminhamento adequado.',
    title: 'Crise de Saúde Mental em Matão SP | Orientação e Encaminhamento',
    description: 'Orientação para famílias de Matão sobre crise de saúde mental e cuidado adequado. Em risco imediato, SAMU 192; a Central não é hospital ou emergência.',
    heading: 'Crises de saúde mental: caminhos de cuidado para Matão',
    intro: 'Em uma crise, a prioridade é proteger a pessoa e buscar o atendimento adequado. A Central ajuda famílias de Matão a compreender encaminhamentos, mas uma situação aguda não deve aguardar contato particular ou viagem a Araraquara.',
    notice: 'Em risco à vida, tentativa de suicídio, alteração de consciência ou crise com perigo imediato, ligue SAMU 192 ou procure urgência. A Central não oferece emergência psiquiátrica hospitalar.',
    sections: [
      { title: 'Priorizar segurança no local', paragraphs: ['Não confronte, ameace ou faça contenção improvisada. Se houver risco imediato, acione o serviço de urgência e siga suas orientações, preservando sua própria segurança.', 'A família pode relatar mudanças recentes, tratamento em curso e riscos observados à equipe de emergência. Não é necessário concluir um diagnóstico antes de pedir socorro.'] },
      { title: 'Avaliação não equivale a internação automática', paragraphs: ['Depressão, agitação ou outros sintomas precisam de avaliação clínica e de riscos. A necessidade de internação e o local de cuidado são definidos por profissionais habilitados, conforme os requisitos legais.', 'A sede da Central realiza acolhimento voluntário psicossocial com acompanhamento integrado. Internação hospitalar e estabilização de crises agudas acontecem nos serviços habilitados indicados.'] },
      { title: 'Depois da urgência, organizar continuidade', paragraphs: ['Após avaliação, a família pode discutir as orientações recebidas, acompanhamento em Matão e compatibilidade de outras modalidades de cuidado. Não altere medicamentos por iniciativa própria.', 'O plantão da Central orienta e apoia o agendamento, sem médico de emergência anunciado, vaga hospitalar garantida ou prazo de remoção.'] },
    ],
    faqs: [
      { question: 'Posso ligar para a Central em vez do SAMU durante uma crise grave?', answer: 'Em risco imediato, priorize SAMU 192 ou atendimento de urgência. O plantão da Central não substitui serviço de emergência.' },
      { question: 'A Central tem médicos de plantão para internação psiquiátrica?', answer: 'Não se anuncia emergência psiquiátrica hospitalar ou médicos de plantão 24h. Há acompanhamento médico e psiquiátrico integrado; necessidades hospitalares seguem encaminhamento.' },
      { question: 'Depressão severa sempre exige internação involuntária?', answer: 'Não. A modalidade depende de avaliação médica, riscos, alternativas e requisitos legais. Um rótulo diagnóstico isolado não autoriza internação involuntária.' },
    ],
  },
  {
    key: 'elderly', path: '/clinica-recuperacao-idosos-matao', label: 'Pessoas Idosas e Família',
    summary: 'Autonomia, avaliação clínica e atenção às necessidades de cuidado na idade avançada.',
    title: 'Álcool e Medicamentos em Idosos de Matão SP | Orientação da Central',
    description: 'Orientação 24h para idosos e famílias de Matão sobre álcool, medicamentos e cuidado. Avaliação individual; sem acolhimento geriátrico especializado anunciado.',
    heading: 'Álcool, medicamentos e cuidado: orientação para idosos de Matão',
    intro: 'Na idade avançada, o cuidado precisa considerar autonomia, saúde e apoios cotidianos. A Central orienta pessoas idosas e famílias de Matão sobre avaliação e compatibilidade, sem anunciar programa geriátrico próprio.',
    notice: 'Programa geriátrico especializado não está confirmado. Confusão súbita, queda com alteração de consciência ou risco imediato exigem avaliação de urgência ou SAMU 192.',
    sections: [
      { title: 'Avaliar mudanças sem atribuí-las somente à idade', paragraphs: ['Alterações de equilíbrio, memória ou rotina podem ter várias causas e merecem avaliação. Não presuma que todo sintoma decorre do álcool, de um medicamento ou do envelhecimento.', 'Informe aos profissionais os tratamentos em curso e mudanças percebidas. Combinações de álcool e medicamentos exigem discussão clínica, sem ajustes improvisados pela família.'] },
      { title: 'Autonomia e necessidades de apoio', paragraphs: ['A pessoa idosa deve participar das decisões conforme sua condição e seus direitos. Necessidades de mobilidade, comunicação e cuidados cotidianos precisam ser esclarecidas antes de escolher um serviço.', 'A Central não confirma estrutura geriátrica, cuidado de longa permanência ou programa para demência. Compatibilidade e encaminhamento dependem de avaliação individual.'] },
      { title: 'Planejamento familiar a partir de Matão', paragraphs: ['Antes de viajar, confirme condições de recepção e necessidades de acompanhamento. A referência rodoviária não comprova acessibilidade ou recursos assistenciais no destino.', 'Combine continuidade com profissionais que já acompanham a pessoa e visitas quando aplicáveis. O acolhimento voluntário em Araraquara não substitui assistência hospitalar necessária.'] },
    ],
    faqs: [
      { question: 'A Central oferece acolhimento geriátrico especializado?', answer: 'Esse programa não está confirmado. A avaliação deve verificar necessidades clínicas, autonomia, recursos necessários e compatibilidade da modalidade antes de qualquer ingresso.' },
      { question: 'A família pode suspender medicamentos de um idoso que bebe?', answer: 'Não. Suspensão, redução e combinações devem ser avaliadas pelo profissional médico responsável; não ajuste tratamento por iniciativa própria.' },
      { question: 'Confusão súbita pode aguardar visita agendada?', answer: 'Não. Confusão súbita merece avaliação urgente, especialmente com alteração de consciência ou outros sinais de risco. Procure urgência ou SAMU 192 conforme a situação.' },
    ],
  },
] as const satisfies readonly SpecialtyContent[];

export type MataoSpecialtyKey = typeof mataoSpecialtyList[number]['key'];
export function mataoSpecialty(key: MataoSpecialtyKey) {
  const page = mataoSpecialtyList.find(item => item.key === key);
  if (!page) throw new Error('Especialidade de Matão indisponível');
  return page;
}
export function mataoWhatsappHref(key: MataoSpecialtyKey) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá, sou de Matão e gostaria de orientação sobre ${mataoSpecialty(key).label.toLocaleLowerCase('pt-BR')}.`)}`;
}
export const mataoAccess = regionalCityAccess['matao-sp'];
export function mataoSpecialtyHead(key: MataoSpecialtyKey) {
  const page = mataoSpecialty(key);
  const url = `${siteUrl}${page.path}`;
  return {
    meta: [
      { title: page.title }, { name: 'description', content: page.description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: page.title }, { property: 'og:description', content: page.description },
      { property: 'og:type', content: 'website' }, { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: page.title }, { name: 'twitter:description', content: page.description },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({
      '@context': 'https://schema.org', '@graph': [
        { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'pt-BR' },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Matão', item: `${siteUrl}${mataoParentPath}` },
          { '@type': 'ListItem', position: 3, name: page.label, item: url },
        ] },
        { '@type': 'FAQPage', mainEntity: page.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      ],
    }) }],
  };
}