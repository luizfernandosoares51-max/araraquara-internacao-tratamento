import { specialtyScope, specialtySources, type SpecialtyKey } from './araraquara-specialties';
import { institutionalLocalBusiness } from './institutional';
import { siteUrl } from './site';
export { specialtyScope, specialtySources };
type SpecialtyPath = '/tratamento-alcoolismo-rio-claro' | '/tratamento-cocaina-crack-rio-claro' | '/internacao-involuntaria-rio-claro' | '/internacao-voluntaria-rio-claro' | '/resgate-remocao-rio-claro';
type Specialty = {
  key: SpecialtyKey; path: SpecialtyPath; label: string; summary: string; title: string; description: string;
  heading: string; intro: string; notice: string; condition?: string;
  sections: { title: string; paragraphs: string[] }[]; steps: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};
export const rioClaroParentPath = '/clinica-de-recuperacao-em-rio-claro-sp';
export const rioClaroSpecialties: Record<SpecialtyKey, Specialty> = {
  alcohol: {
    key: 'alcohol', path: '/tratamento-alcoolismo-rio-claro', label: 'Tratamento do Alcoolismo', summary: 'Segurança na abstinência e apoio familiar.',
    title: 'Tratamento do Alcoolismo para Rio Claro - SP | Acolhimento em Araraquara',
    description: 'Orientação sobre álcool e abstinência para famílias de Rio Claro. Acolhimento voluntário em Araraquara; desintoxicação médica por encaminhamento externo.',
    heading: 'Tratamento do alcoolismo para famílias de Rio Claro',
    intro: 'Quando beber passa a comprometer relações, saúde e responsabilidades, a família pode precisar de orientação antes de decidir o próximo passo. A Central atende essa busca de Rio Claro com escuta e acolhimento voluntário psicossocial na única sede própria em Araraquara, sem unidade em Rio Claro.',
    notice: 'A Central não realiza desintoxicação médica. Convulsões, confusão intensa ou alteração de consciência exigem urgência ou SAMU 192; não aguarde uma viagem para acolhimento.',
    condition: 'Dependência de álcool',
    sections: [
      { title: 'Reconhecer mudanças na vida familiar', paragraphs: [
        'A gravidade do uso de álcool não se mede apenas pela quantidade visível de bebida. Tentativas frustradas de reduzir o consumo, conflitos repetidos, compromissos abandonados e prejuízos físicos ou emocionais merecem avaliação. Uma pessoa continuar cumprindo parte da rotina não significa que esteja protegida dos efeitos do uso.',
        'Para famílias de Rio Claro, o primeiro passo pode ser reunir observações concretas e procurar a rede de saúde do município ou orientação particular. Não é preciso esperar uma ruptura extrema para conversar. A Central ajuda a esclarecer possibilidades sem diagnosticar por telefone, prometer admissão ou substituir os serviços públicos.'
      ] },
      { title: 'Parar abruptamente pode exigir cuidado médico', paragraphs: [
        'Depois de uso intenso ou prolongado, a redução ou interrupção do álcool pode provocar abstinência. Tremores, agitação e outros sintomas precisam de avaliação; confusão intensa, convulsões ou alteração de consciência são sinais de urgência. Não é seguro estabelecer em casa um protocolo de desintoxicação baseado em informações da internet.',
        'A necessidade de monitoramento, tratamento e local de atendimento é definida pela equipe médica. Alguns casos exigem cuidados hospitalares, mas não se pode afirmar que todos sigam o mesmo protocolo ou prazo. A Central oferece acompanhamento médico e psiquiátrico integrado e enfermagem para supervisão diária e cuidados contínuos na sede. Desintoxicação médica e necessidades hospitalares seguem encaminhamento ao serviço habilitado adequado.'
      ] },
      { title: 'Cuidar dos vínculos além da interrupção do consumo', paragraphs: [
        'Uma etapa médica, quando necessária, não encerra todas as questões associadas ao álcool. Comunicação, hábitos e formas de pedir apoio podem ser trabalhados no plano psicossocial. A proposta informada pela Central inclui suporte psicológico de Margarete Vasques, CRP 06/130268, 12 Passos, laborterapia, convivência e prevenção à recaída.',
        'A família pode apoiar sem controlar cada decisão ou assumir sozinha o resultado. Na preparação de visitas de Rio Claro à sede em Araraquara, converse sobre objetivos e horários agendados. Organizar o deslocamento deve vir depois da avaliação da segurança e da confirmação das condições de acolhimento, não como resposta improvisada à abstinência.'
      ] },
      { title: 'Planejar a continuidade perto da família', paragraphs: [
        'O retorno a Rio Claro precisa considerar apoios que permaneçam acessíveis: acompanhamento indicado, pessoas de confiança e alternativas para situações associadas ao consumo. O plano de prevenção à recaída não é uma promessa de que dificuldades nunca voltarão; serve para discutir respostas e revisar o cuidado quando necessário.',
        'Informe-se previamente sobre permanência, custos e participação familiar. A Central oferece acolhimento particular e orientação administrativa sobre reembolso, sem assegurar cobertura. Não há duração universal de tratamento ou garantia de reconstrução dos vínculos. As informações desta página são educativas e não substituem avaliação individual.'
      ] }
    ],
    steps: [ { title: 'Organizar preocupações', text: 'Considere saúde, vínculos e mudanças na rotina.' }, { title: 'Avaliar a abstinência', text: 'Segurança e desintoxicação são definidas em serviço médico.' }, { title: 'Manter apoios', text: 'Planeje continuidade do cuidado e vínculos em Rio Claro.' } ],
    faqs: [
      { question: 'Parar de beber abruptamente pode ser perigoso?', answer: 'Pode, especialmente após uso intenso ou prolongado. Procure avaliação médica, sem improvisar medicamentos. Confusão intensa, convulsões ou alteração de consciência exigem urgência ou SAMU 192, não espera por acolhimento.' },
      { question: 'Como funciona a desintoxicação para quem procura ajuda em Rio Claro?', answer: 'A equipe médica avalia sintomas e define condutas, monitoramento e local adequado. A Central reúne acompanhamento médico e psiquiátrico integrado e enfermagem; a desintoxicação médica e as necessidades hospitalares seguem encaminhamento a estabelecimentos habilitados externos.' },
      { question: 'Toda pessoa precisa de internação e acompanhamento médico 24h?', answer: 'Não existe indicação única. A necessidade de cuidado hospitalar e monitoramento depende da avaliação médica. Acolhimento voluntário psicossocial em Araraquara não equivale a internação ou serviço médico 24h.' }
    ]
  },
  cocaine: {
    key: 'cocaine', path: '/tratamento-cocaina-crack-rio-claro', label: 'Crack e Cocaína', summary: 'Fissura, apoio psicológico e novos hábitos.',
    title: 'Crack e Cocaína em Rio Claro - SP | Orientação para Acolhimento',
    description: 'Orientação sobre cocaína, crack e fissura para famílias de Rio Claro. Apoio psicossocial e acolhimento voluntário em Araraquara, com encaminhamento médico.',
    heading: 'Cuidado para dependência de crack e cocaína em Rio Claro',
    intro: 'Mudanças no sono, nas relações e no comportamento podem acompanhar o uso de cocaína e crack, mas não definem sozinhas um diagnóstico. Para famílias de Rio Claro, a Central orienta os próximos passos e avalia acolhimento voluntário na sede em Araraquara, sem filial local ou promessa de estabilização rápida.',
    notice: 'Dor no peito, convulsões, alteração de consciência ou risco imediato exigem atendimento de urgência. Acione o SAMU 192; transporte agendado não substitui emergência.',
    condition: 'Dependência de cocaína',
    sections: [
      { title: 'Avaliar comportamento sem reduzir a pessoa à substância', paragraphs: [
        'Os efeitos estimulantes podem envolver alterações de apetite, sono, humor e comportamento, além de riscos físicos e sofrimento mental. Intensidade e duração variam conforme padrão de uso, condições de saúde e outras substâncias. Uma descrição familiar não permite concluir dano cerebral, indicar medicação ou determinar o tipo de atendimento.',
        'Na busca por ajuda em Rio Claro, relate mudanças e riscos de forma objetiva, evitando ameaças ou acusações. A rede de saúde local pode avaliar necessidades médicas e psicossociais. A Central oferece outra via de orientação particular, com encaminhamento externo quando o suporte necessário não é compatível com a sede de acolhimento.'
      ] },
      { title: 'Fissura não tem um relógio igual para todos', paragraphs: [
        'O desejo intenso de consumir pode reaparecer em diferentes momentos. Emoções, lugares e relações podem estar associados ao uso; reconhecer esses contextos com profissionais permite discutir respostas possíveis. Não há tempo fixo de estabilização nem garantia de eliminar a fissura ao mudar de município.',
        'O apoio psicológico informado pela Central é de Margarete Vasques, CRP 06/130268. A proposta reúne 12 Passos, convivência, laborterapia e prevenção à recaída. Psicoterapia cognitiva e reabilitação neuropsicológica específicas não são anunciadas como serviços próprios porque não foram confirmadas. O acompanhamento médico e psiquiátrico integrado participa da avaliação clínica e do manejo de comorbidades; prescrições e condutas cabem aos profissionais responsáveis.'
      ] },
      { title: 'Afastamento temporário com consentimento e propósito', paragraphs: [
        'Um período de acolhimento em Araraquara pode permitir que a pessoa discuta hábitos e relações em outro contexto, quando indicado e aceito. Isso não é isolamento forçado nem solução automática para gatilhos que também poderão existir no retorno a Rio Claro. A decisão precisa considerar saúde, direitos e necessidades individuais.',
        'O plano pode trabalhar maneiras de pedir ajuda, reconhecer sinais de alerta e organizar atividades significativas. A família participa com diálogo e limites respeitosos, não por vigilância constante. Uma crise com risco imediato requer a rede de urgência, sem contenção ou sedação improvisadas em casa.'
      ] },
      { title: 'Preparar a convivência depois do acolhimento', paragraphs: [
        'Antes do retorno a Rio Claro, discuta recursos de continuidade, contatos de apoio e situações que exigem reavaliação. Retomar responsabilidades pode ser gradual. Não é seguro prometer que uma passagem pelo acolhimento garante recuperação permanente ou que todos os vínculos serão reconstruídos no mesmo prazo.',
        'Visitas à sede própria devem ser agendadas e o trajeto confirmado antes de sair. A conversa inicial não assegura vaga, indicação ou resultado. Se ocorrer uma recaída, preserve a segurança e procure revisar o plano com profissionais em vez de tratar a dificuldade como falha moral da pessoa.'
      ] }
    ],
    steps: [ { title: 'Identificar necessidades', text: 'Considere saúde e comportamento sem diagnóstico remoto.' }, { title: 'Discutir estratégias', text: 'Fissura e situações associadas ao uso entram no plano profissional.' }, { title: 'Planejar convivência', text: 'Construa apoios para continuidade em Rio Claro.' } ],
    faqs: [
      { question: 'Em quanto tempo a fissura por cocaína ou crack se estabiliza?', answer: 'Não há prazo fixo. Frequência e intensidade variam conforme a pessoa e seu contexto; acompanhamento e reavaliação orientam o plano. A mudança de ambiente não garante interrupção da fissura.' },
      { question: 'Qual apoio psicológico é informado pela Central?', answer: 'A instituição informa suporte psicológico com Margarete Vasques, CRP 06/130268, integrado ao acolhimento voluntário em Araraquara. Não anuncia psicoterapia cognitiva específica ou reabilitação neuropsicológica não confirmadas.' },
      { question: 'Como a família de Rio Claro pode ajudar sem aumentar o conflito?', answer: 'Procure diálogo respeitoso e apoios previstos no plano profissional. Evite ameaças, punições, sedação e contenção improvisadas. Em risco imediato ou sintomas graves, busque urgência ou SAMU 192.' }
    ]
  },
  involuntary: {
    key: 'involuntary', path: '/internacao-involuntaria-rio-claro', label: 'Internação Involuntária', summary: 'Pedido, avaliação médica e fiscalização.',
    title: 'Internação Involuntária em Rio Claro - SP | Orientação e Direitos',
    description: 'Informação para famílias de Rio Claro sobre pedido, avaliação e fiscalização da internação involuntária. Leis 10.216/2001 e 13.840/2019; cuidado médico externo.',
    heading: 'Internação involuntária em Rio Claro: orientação à família',
    intro: 'Quando a família está diante de uma crise, precisa de informação e avaliação, não de uma promessa de internação. A Central orienta famílias de Rio Claro sobre trâmites e encaminhamentos médicos externos; a sede própria em Araraquara recebe acolhimento voluntário psicossocial e não interna sem consentimento.',
    notice: 'Não se presume que internação seja o único recurso. A decisão exige avaliação médica e critérios legais; risco imediato pede urgência ou SAMU 192, não remoção coercitiva informal.',
    sections: [
      { title: 'Crise familiar e indicação clínica são diferentes', paragraphs: [
        'Recusa de ajuda ou perda percebida de autocrítica pode aumentar a angústia familiar, mas não autoriza automaticamente internação. Relatos precisam ser avaliados por profissionais, considerando risco e possibilidades de cuidado. Não se pode declarar pela internet que a internação é a única forma de salvar uma vida.',
        'Famílias de Rio Claro devem procurar atendimento de urgência diante de risco imediato e avaliação da rede de saúde para necessidades continuadas. A orientação da Central ajuda a organizar dúvidas, sem substituir essa análise. A própria unidade não é hospital e não oferece internação involuntária clínica.'
      ] },
      { title: 'O que fundamenta a decisão médica', paragraphs: [
        'A Lei 10.216/2001 prevê proteção de direitos e internação quando recursos extra-hospitalares se mostram insuficientes, com laudo médico circunstanciado que caracterize os motivos. Internação involuntária não é a mesma coisa que compulsória: a segunda decorre de determinação judicial. Uma família solicitar avaliação não estabelece por si só a necessidade da medida.',
        'Para dependência de drogas, a Lei 13.840/2019 alterou a Lei 11.343/2006 e prioriza tratamento ambulatorial, reservando internação excepcional a unidades de saúde ou hospitais gerais com equipe multidisciplinar. A autorização compete a médico registrado no CRM. Não se afirma exigência universal e exclusiva de psiquiatra nem autorização para internação em comunidade terapêutica acolhedora.'
      ] },
      { title: 'Pedido e fiscalização: responsabilidades distintas', paragraphs: [
        'No regime relacionado ao uso de drogas, o pedido pode ser de familiar ou responsável legal; na absoluta falta desses, de servidor público da saúde, assistência social ou órgãos públicos do Sisnad, exceto segurança pública. A decisão deve ser formalizada pelo médico responsável, depois de avaliar alternativas e requisitos.',
        'A Lei 10.216/2001 prevê comunicação da internação involuntária ao Ministério Público Estadual em até 72 horas pelo responsável técnico do estabelecimento, e o mesmo procedimento na alta. A disciplina da Lei 13.840/2019 prevê comunicação de internações e altas em até 72 horas ao Ministério Público, à Defensoria Pública e a outros órgãos de fiscalização. A família não substitui essas obrigações do serviço médico.'
      ] },
      { title: 'Dignidade em cada etapa para quem vem de Rio Claro', paragraphs: [
        'Tratamento humanizado, proteção contra abusos e informação sobre o cuidado permanecem direitos da pessoa. Não é responsável garantir um procedimento sem qualquer desconforto ou risco; é necessário avaliar condições concretas. Familiares não devem improvisar força, sedação ou transporte coercitivo.',
        'Necessidades médicas são encaminhadas a estabelecimentos habilitados externos, sem anunciar nomes de parceiros ou credenciais não verificadas. O destino, a documentação e as condições devem ser discutidos com os responsáveis pelo atendimento. Esta página não é parecer jurídico nem diagnóstico, e não garante indicação, autorização ou vaga.'
      ] }
    ],
    steps: [ { title: 'Separar crise e urgência', text: 'Risco imediato pertence à rede de emergência.' }, { title: 'Avaliar alternativas', text: 'Critérios e laudo são responsabilidade médica.' }, { title: 'Entender fiscalização', text: 'Comunicações legais competem ao estabelecimento responsável.' } ],
    faqs: [
      { question: 'Quem pode solicitar internação involuntária por dependência de drogas?', answer: 'Familiar ou responsável legal; na absoluta falta deles, servidor público da saúde, assistência social ou órgãos públicos do Sisnad, exceto segurança pública, conforme o regime legal. O pedido não substitui autorização médica e avaliação das alternativas.' },
      { question: 'Quem fiscaliza e recebe a comunicação obrigatória?', answer: 'A Lei 10.216/2001 prevê comunicação ao Ministério Público Estadual em até 72 horas pelo responsável técnico do estabelecimento. A disciplina da Lei 13.840/2019 prevê também Defensoria Pública e outros órgãos de fiscalização. As obrigações seguem o regime aplicável.' },
      { question: 'A Central pode receber uma pessoa de Rio Claro sem consentimento?', answer: 'Não para internação involuntária clínica na sede própria. A Central realiza acolhimento voluntário em Araraquara e orienta encaminhamentos médicos externos. Recusa isolada não autoriza remoção coercitiva informal.' }
    ]
  },
  voluntary: {
    key: 'voluntary', path: '/internacao-voluntaria-rio-claro', label: 'Tratamento Voluntário', summary: 'Escolha consciente, metas e comunicação.',
    title: 'Tratamento Voluntário para Rio Claro - SP | Acolhimento em Araraquara',
    description: 'Acolhimento voluntário para famílias de Rio Claro na sede em Araraquara. Metas individuais, suporte psicológico, 12 Passos e convivência, sem garantia de resultados.',
    heading: 'Acolhimento voluntário para famílias de Rio Claro',
    intro: 'Aceitar ajuda pode começar com uma pergunta sobre o que mudará na rotina e como manter vínculos. Pessoas e famílias de Rio Claro podem conhecer a proposta da Central antes de decidir: acolhimento voluntário psicossocial na única sede em Araraquara, com avaliação e participação da pessoa.',
    notice: 'Consentimento e avaliação individual orientam o acolhimento. Internação médica e desintoxicação não são realizadas na sede; necessidades clínicas recebem encaminhamento externo.',
    sections: [
      { title: 'Uma escolha informada, sem pressão por uma resposta imediata', paragraphs: [
        'É possível reconhecer prejuízos e ainda ter receio do acolhimento. Conhecer a proposta, fazer perguntas e entender direitos e condições permite uma decisão mais consciente. A família pode apoiar, mas não deve apresentar o ingresso como punição ou exigir aceitação a partir de promessas de cura.',
        'Para moradores de Rio Claro, a preparação também envolve organizar responsabilidades, vínculos e deslocamento. Converse com a coordenação antes de viajar. A admissão depende da avaliação, da compatibilidade com o suporte e da disponibilidade; um contato inicial não confirma permanência ou reserva de vaga.'
      ] },
      { title: 'Construir metas que façam sentido para a pessoa', paragraphs: [
        'O plano individual pode discutir hábitos, situações relacionadas ao consumo e maneiras de pedir apoio. Metas precisam considerar recursos e dificuldades reais, não uma lista de conquistas igual para todos. O suporte psicológico informado é de Margarete Vasques, CRP 06/130268, em conjunto com acompanhamento médico e psiquiátrico integrado e enfermagem para supervisão diária e cuidados contínuos.',
        '12 Passos, laborterapia, convivência terapêutica e prevenção à recaída integram a proposta institucional. Trabalhar emoções e relações não equivale a garantir inteligência emocional ou eliminar conflitos. A evolução pede acompanhamento e revisão das prioridades, sem prazo universal de recuperação.'
      ] },
      { title: 'Rotina e comunicação com quem ficou em Rio Claro', paragraphs: [
        'A instituição informa cronograma das 07h às 22h, com períodos de alimentação, organização, apoio psicológico, atividades ao ar livre, reuniões e repouso. A participação segue as necessidades do plano individual. A convivência deve preservar respeito e não ser confundida com confinamento ou exigência de desempenho uniforme.',
        'As visitas familiares são agendadas conforme o cronograma terapêutico. Antes de ingressar, esclareça diretamente como serão organizados os contatos e as visitas; não se inventam horários de ligações, frequência de mensagens ou visitas semanais automáticas. A distância de Rio Claro requer planejamento, mas não impede discutir a participação familiar.'
      ] },
      { title: 'Retornar à rotina com apoios disponíveis', paragraphs: [
        'A continuidade após o acolhimento deve considerar acompanhamento indicado e recursos familiares e comunitários em Rio Claro. Planejar sinais de alerta e pessoas a procurar é diferente de assegurar retorno sem riscos. Trabalho, estudo e convivência podem exigir ajustes graduais definidos conforme o caso.',
        'O acolhimento é particular. A documentação administrativa pode apoiar orientação sobre reembolso, cuja decisão cabe à operadora; não há garantia de cobertura. Pergunte sobre condições e custos previamente. O valor da pessoa não depende da velocidade das mudanças, e recaídas ou dificuldades pedem reavaliação do cuidado.'
      ] }
    ],
    steps: [ { title: 'Conhecer as condições', text: 'Pergunte sobre consentimento, rotina e limites do suporte.' }, { title: 'Definir metas possíveis', text: 'Participe do plano individual e de suas revisões.' }, { title: 'Combinar os vínculos', text: 'Esclareça comunicação, visitas e continuidade em Rio Claro.' } ],
    faqs: [
      { question: 'Como funciona a rotina diária na sede em Araraquara?', answer: 'O cronograma informado vai das 07h às 22h e inclui alimentação, organização, suporte psicológico, 12 Passos, laborterapia, convivência, reuniões e repouso. A participação considera o plano individual.' },
      { question: 'Como combinar comunicação e visitas com a família de Rio Claro?', answer: 'Esclareça as condições de contato com a coordenação antes do ingresso. Visitas seguem agendamento conforme o cronograma terapêutico; não são prometidos horários de ligação ou frequência de mensagens não confirmados.' },
      { question: 'O acolhimento voluntário tem duração padronizada?', answer: 'Não há prazo universal. Permanência e continuidade dependem da avaliação e das necessidades individuais. Não há garantia de cura ou retorno à rotina sem dificuldades; condições devem ser esclarecidas antes da admissão.' }
    ]
  },
  transport: {
    key: 'transport', path: '/resgate-remocao-rio-claro', label: 'Resgate e Remoção Agendada', summary: 'Origem, destino e condições de viagem.',
    title: 'Remoção Agendada para Rio Claro - SP | Orientação Regional',
    description: 'Consulta sobre remoção e translado regional agendado para famílias de Rio Claro. Orientação e suporte para agendamento 24h; confirme condições e destino com a Central em Araraquara.',
    heading: 'Remoção e translado agendado para Rio Claro',
    intro: 'Quem procura resgate em Rio Claro precisa primeiro distinguir uma emergência de um deslocamento planejado. A Central informa remoção e translado regional por agendamento com a coordenação operacional de Luiz Fernando Soares; atende a partir da única sede em Araraquara, com orientação e suporte para agendamento 24 horas. A execução da remoção segue agenda, condições e disponibilidade.',
    notice: 'Surto com risco imediato, convulsões, dor no peito ou alteração de consciência exigem urgência ou SAMU 192. Não aguarde agenda particular ou confirmação de acolhimento.',
    sections: [
      { title: 'O contato institucional não aciona uma equipe de emergência', paragraphs: [
        'A busca por resgate muitas vezes surge quando a família não sabe como agir. O telefone oficial oferece orientação e suporte para agendamento 24h, ajudando a organizar o planejamento e consultar disponibilidade. A execução do transporte é combinada previamente; em emergência, priorize a rede de urgência e o SAMU 192.',
        'Em Rio Claro, risco imediato deve ser dirigido à rede de urgência. O SAMU 192 é um serviço público distinto da Central. Não substitua esse acionamento por tentativas de negociar deslocamento particular, nem improvise transporte de uma pessoa com sintomas graves antes de avaliação adequada.'
      ] },
      { title: 'Confirmar o trajeto depois de definir o cuidado necessário', paragraphs: [
        'O deslocamento de Rio Claro à sede em Araraquara deve ser planejado conforme origem, destino, condições da viagem e disponibilidade. O trajeto regional e os acessos rodoviários precisam ser conferidos antes da saída. Não há estimativa publicada de chegada ou garantia de traslado rápido.',
        'O endereço da única sede própria é R. Alfredo Micelli, 70, em Araraquara. Esse destino é voltado ao acolhimento voluntário psicossocial. Quando há necessidade de hospitalização ou internação involuntária clínica, o destino deve ser estabelecimento médico habilitado externo, conforme avaliação e critérios legais.'
      ] },
      { title: 'Recusa e embarque não autorizam coerção informal', paragraphs: [
        'Uma pessoa recusar ajuda não permite à família aplicar força, sedação ou contenção improvisadas para embarcá-la. A indicação médica e os requisitos legais de internação involuntária não são substituídos por contratação de transporte. Em crise com risco imediato, a prioridade continua sendo a rede de urgência.',
        'As condições efetivas de acompanhamento e deslocamento devem ser consultadas à coordenação. Não se anuncia protocolo próprio de mediação de crises, equipe médica de emergência, veículo discreto ou equipamento específico não confirmado. O respeito à dignidade é uma orientação, não uma promessa de procedimento sem riscos.'
      ] },
      { title: 'Planejamento familiar e privacidade responsável', paragraphs: [
        'Antes de confirmar a viagem, pergunte sobre disponibilidade para sua origem em Rio Claro, custos, documentação, acompanhamento e condições do serviço de destino. Não foi definido um raio fixo de transporte; uma página regional não confirma automaticamente cobertura de toda solicitação.',
        'Compartilhe somente dados necessários no contato oficial e evite relatos em espaços públicos. Discrição total e sigilo absoluto não são garantidos. Preparar uma conversa não comprova remoção realizada, reserva de vaga ou admissão. Agenda, compatibilidade e destino devem ser alinhados antes de qualquer deslocamento.'
      ] }
    ],
    steps: [ { title: 'Reconhecer a emergência', text: 'Risco imediato não deve aguardar agendamento.' }, { title: 'Consultar a origem', text: 'Verifique disponibilidade e condições para Rio Claro.' }, { title: 'Alinhar o destino', text: 'Confirme avaliação, agenda e documentação previamente.' } ],
    faqs: [
      { question: 'Qual é o tempo de deslocamento de Rio Claro até a sede?', answer: 'Não há tempo garantido nesta página. O trajeto depende de origem, condições da viagem e planejamento; confirme rota e destino antes de sair. A existência da página não garante transporte disponível.' },
      { question: 'A Central realiza resgate 24h em Rio Claro?', answer: 'O plantão de orientação e o suporte para agendamento funcionam 24 horas. Remoção e translado são executados conforme agenda, condições e disponibilidade confirmadas com a coordenação operacional. Emergências devem ser dirigidas à rede de urgência ou SAMU 192.' },
      { question: 'Como organizar o embarque e o acompanhamento?', answer: 'Combine documentação, custos, acompanhamento e destino com a coordenação e o serviço responsável. Não improvise força, sedação ou contenção. Não são prometidos veículos específicos, protocolo de crise ou discrição absoluta não confirmados.' }
    ]
  }
};
export const rioClaroSpecialtyList = Object.values(rioClaroSpecialties);
export function rioClaroSpecialtyHead(key: SpecialtyKey) {
  const page = rioClaroSpecialties[key];
  const url = `${siteUrl}${page.path}`;
  return {
    meta: [{ title: page.title }, { name: 'description', content: page.description }, { name: 'robots', content: 'index,follow' }, { property: 'og:title', content: page.title }, { property: 'og:description', content: page.description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: url }, { name: 'twitter:card', content: 'summary_large_image' }],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      institutionalLocalBusiness,
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'pt-BR', ...(page.condition ? { about: { '@type': 'MedicalCondition', name: page.condition } } : {}) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Cidades', item: `${siteUrl}/cidades` },
        { '@type': 'ListItem', position: 3, name: 'Rio Claro', item: `${siteUrl}${rioClaroParentPath}` },
        { '@type': 'ListItem', position: 4, name: page.label, item: url }
      ] },
      { '@type': 'FAQPage', mainEntity: page.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }
    ] }) }]
  };
}
