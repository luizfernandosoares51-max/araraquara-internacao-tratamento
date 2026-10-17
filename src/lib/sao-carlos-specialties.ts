import { specialtyScope, specialtySources, type SpecialtyKey } from './araraquara-specialties';
import { institutionalLocalBusiness } from './institutional';
import { siteUrl } from './site';

export { specialtySources, specialtyScope };
type SpecialtyPath = '/tratamento-alcoolismo-sao-carlos' | '/tratamento-cocaina-crack-sao-carlos' | '/internacao-involuntaria-sao-carlos' | '/internacao-voluntaria-sao-carlos' | '/resgate-remocao-sao-carlos';
type Specialty = {
  key: SpecialtyKey; path: SpecialtyPath; label: string; summary: string; title: string; description: string;
  heading: string; intro: string; notice: string; condition?: string;
  sections: { title: string; paragraphs: string[] }[];
  steps: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};
export const saoCarlosSpecialties: Record<SpecialtyKey, Specialty> = {
  alcohol: {
    key: 'alcohol', path: '/tratamento-alcoolismo-sao-carlos', label: 'Tratamento do Alcoolismo',
    summary: 'Abstinência, vínculos e apoio à família.',
    title: 'Tratamento do Alcoolismo para São Carlos - SP | Acolhimento em Araraquara',
    description: 'Orientação sobre alcoolismo para famílias de São Carlos. Acolhimento voluntário em Araraquara e encaminhamento para desintoxicação médica quando indicada.',
    heading: 'Tratamento do alcoolismo para famílias de São Carlos',
    intro: 'Problemas com o álcool podem atravessar a rotina de estudos, trabalho e convivência sem serem percebidos de imediato. Famílias de São Carlos podem conversar com a Central sobre acolhimento voluntário e suporte psicossocial na única sede própria, em Araraquara; não há unidade da Central em São Carlos.',
    notice: 'Desintoxicação é cuidado médico externo, não realizado na Central. Convulsões, confusão intensa ou alteração de consciência exigem urgência: SAMU 192.',
    condition: 'Dependência de álcool',
    sections: [
      { title: 'Quando o consumo deixa de ser apenas uma ocasião social', paragraphs: [
        'Encontros universitários, comemorações e momentos de descanso podem incluir álcool, mas o contexto não permite concluir se há dependência. Dificuldade de reduzir o consumo, conflitos recorrentes e prejuízos no sono, nas relações ou nas responsabilidades merecem avaliação. Conseguir trabalhar ou estudar não elimina a possibilidade de sofrimento relacionado ao uso.',
        'Para uma conversa inicial, familiares podem organizar mudanças observadas e tentativas anteriores de buscar ajuda, sem impor rótulos. A rede de saúde de São Carlos, incluindo UBS e CAPS AD, é uma possibilidade de acompanhamento. A Central oferece orientação particular, sem substituir esses serviços nem presumir que toda pessoa precise de acolhimento.'
      ] },
      { title: 'Abstinência: avaliar a segurança antes do deslocamento', paragraphs: [
        'Após uso intenso ou prolongado, a interrupção do álcool pode provocar abstinência e, em alguns casos, complicações graves. Não é seguro organizar uma viagem para acolhimento como alternativa a uma avaliação médica necessária. Tremores e agitação pedem avaliação; convulsões, desorientação e alteração de consciência exigem atendimento de urgência.',
        'A família não deve improvisar medicamentos nem tentar desintoxicação desassistida. Quando indicada, essa etapa ocorre em estabelecimento médico habilitado, com condutas e alta definidas pelos profissionais externos. A sede de Araraquara reúne articulação médica e psiquiátrica com serviços parceiros credenciados e equipe multidisciplinar com supervisão diária e cuidados contínuos. A desintoxicação médica e as necessidades hospitalares seguem encaminhamento ao serviço habilitado adequado.'
      ] },
      { title: 'Reconstruir vínculos sem cobrar mudanças instantâneas', paragraphs: [
        'O apoio psicossocial pode abordar situações associadas ao consumo, comunicação e hábitos cotidianos. A proposta informada pela Central inclui suporte psicológico com Margarete Vasques, CRP 06/130268, 12 Passos, laborterapia, convivência terapêutica e prevenção à recaída. As prioridades são discutidas a partir da avaliação individual, não de um prazo padronizado de recuperação.',
        'Para familiares que vivem em São Carlos, visitas à sede em Araraquara precisam ser combinadas previamente. A ligação regional pela Washington Luís, SP-310, deve ser planejada conforme as condições do trajeto; não há tempo de viagem garantido. O apoio familiar não se resume à visita: conversas e limites respeitosos também precisam ser organizados.'
      ] },
      { title: 'Continuidade do cuidado ao retornar a São Carlos', paragraphs: [
        'A saída do acolhimento não significa que todas as necessidades tenham terminado. Retomar trabalho, estudo e convivência pode exigir acompanhamento psicológico, serviços de saúde e recursos comunitários escolhidos conforme o caso. É importante discutir como reconhecer sinais de alerta e a quem recorrer quando houver dificuldade.',
        'Uma recaída pede reavaliação, não humilhação ou abandono. A família pode ajudar a procurar os apoios previstos no plano, sem assumir o papel de equipe médica. Condições de permanência, custos e documentação administrativa devem ser esclarecidos antes do ingresso; orientação sobre reembolso não garante cobertura de plano de saúde.'
      ] }
    ],
    steps: [ { title: 'Observar sem rotular', text: 'Reúna preocupações sobre saúde, relações e rotina.' }, { title: 'Avaliar riscos médicos', text: 'Abstinência e desintoxicação exigem avaliação em serviço habilitado.' }, { title: 'Planejar o retorno', text: 'Discuta acompanhamento e apoio em São Carlos.' } ],
    faqs: [
      { question: 'A desintoxicação de álcool é feita na Central para quem vem de São Carlos?', answer: 'Não. A Central oferece acolhimento voluntário psicossocial em Araraquara. Desintoxicação médica, quando indicada, é encaminhada a estabelecimentos habilitados; a família não deve substituir avaliação de urgência por uma viagem para acolhimento.' },
      { question: 'É seguro interromper o álcool em casa antes de viajar?', answer: 'Após uso intenso ou prolongado, pode haver abstinência com complicações. Procure avaliação médica, sem automedicação. Convulsões, confusão intensa ou alteração de consciência exigem urgência ou SAMU 192.' },
      { question: 'Como organizar suporte após a saída e o retorno a São Carlos?', answer: 'O plano individual deve discutir acompanhamento de saúde, apoio psicológico e recursos familiares e comunitários. Não há prazo fixo de recuperação nem garantia de resultado; dificuldades ou recaídas pedem reavaliação profissional.' }
    ]
  },
  cocaine: {
    key: 'cocaine', path: '/tratamento-cocaina-crack-sao-carlos', label: 'Crack e Cocaína', summary: 'Fissura, rotina e prevenção à recaída.',
    title: 'Dependência de Cocaína e Crack em São Carlos - SP | Orientação e Acolhimento',
    description: 'Apoio a famílias de São Carlos sobre cocaína e crack, fissura e prevenção à recaída. Acolhimento voluntário na sede em Araraquara, com avaliação individual.',
    heading: 'Cuidado para dependência de cocaína e crack em São Carlos',
    intro: 'O uso de estimulantes pode comprometer sono, vínculos e responsabilidades. A orientação para famílias de São Carlos considera a pessoa e sua história, não apenas a substância. Quando compatível com a avaliação, o acolhimento voluntário da Central ocorre em Araraquara, sem filial em São Carlos.',
    notice: 'Dor no peito, convulsões, alteração de consciência ou risco imediato após o uso exigem urgência. Ligue 192; não aguarde transporte particular agendado.',
    condition: 'Dependência de cocaína',
    sections: [
      { title: 'Pressões cotidianas não definem um diagnóstico', paragraphs: [
        'Em uma cidade com vida universitária e atividades de tecnologia como São Carlos, exigências de desempenho podem fazer parte da história individual. Isso não significa que estudantes ou trabalhadores desses setores usem drogas. Na avaliação, importam o padrão de consumo, os prejuízos, a saúde e as condições reais de vida, sem generalizações sobre um grupo.',
        'Cocaína e crack podem estar associados a alterações de sono, apetite e humor e a riscos cardiovasculares. Não é possível estimar dano neurológico ou indicar uma terapia pela internet. Sintomas agudos devem ser avaliados na rede de saúde, e o acolhimento psicossocial não substitui atendimento médico.'
      ] },
      { title: 'Fissura e impulsividade: apoio, não contenção improvisada', paragraphs: [
        'O desejo intenso de consumir pode variar conforme emoções, ambientes e relações. Reconhecer essas situações com profissionais ajuda a construir estratégias possíveis de pedir apoio e reorganizar escolhas. Não há promessa de eliminar a fissura em determinado número de dias, nem de que sair de São Carlos resolva o problema.',
        'A família não deve aplicar punições, sedação por conta própria ou restrições indevidas. Na Central, o suporte confirmado inclui psicologia, 12 Passos, convivência e prevenção à recaída. Não se anuncia serviço próprio de reabilitação neuropsicológica ou um protocolo farmacológico não informado pela instituição.'
      ] },
      { title: 'Um novo contexto de convivência com consentimento', paragraphs: [
        'Quando indicado e aceito pela pessoa, o acolhimento em Araraquara permite discutir uma rotina diferente de situações habitualmente associadas ao consumo. Esse contexto deve preservar consentimento e dignidade; não é isolamento forçado nem autorização para restringir direitos. A distância geográfica é uma questão logística, não uma garantia terapêutica.',
        'Atendimento psicológico, laborterapia e atividades de convivência integram a proposta institucional. A participação e as metas dependem do plano individual. Famílias de São Carlos podem consultar a coordenação sobre admissão e visitas agendadas antes de usar o acesso regional pela SP-310.'
      ] },
      { title: 'Retomar estudos e trabalho com metas possíveis', paragraphs: [
        'Prevenção à recaída envolve discutir sinais de alerta, pessoas de apoio e formas de continuidade após o acolhimento. Retomar aulas ou atividades profissionais deve considerar condições de saúde e necessidades individuais, sem exigir um retorno imediato ao mesmo ritmo. Não se promete reinserção acadêmica ou profissional.',
        'Recursos de saúde em São Carlos podem integrar a continuidade conforme a avaliação. Uma dificuldade no percurso deve levar à revisão do plano, não à conclusão de que a pessoa fracassou. O contato regional da Central oferece orientação inicial e não constitui diagnóstico, reserva de vaga ou garantia de tratamento.'
      ] }
    ],
    steps: [ { title: 'Considerar a saúde', text: 'Sintomas agudos precisam da rede de urgência.' }, { title: 'Construir o apoio', text: 'Discuta fissura e situações associadas ao consumo com profissionais.' }, { title: 'Reorganizar a rotina', text: 'Estudo, trabalho e vínculos entram no plano individual.' } ],
    faqs: [
      { question: 'A abstinência de cocaína ou crack precisa de avaliação médica?', answer: 'Sim, a avaliação considera sintomas, saúde física e mental e necessidades de acompanhamento. Dor no peito, convulsões, alteração de consciência ou risco imediato exigem urgência ou SAMU 192. A Central não substitui esse atendimento.' },
      { question: 'Existem fases de recuperação iguais para todas as pessoas?', answer: 'Não. Necessidades, intensidade da fissura e evolução variam. O plano individual deve ser reavaliado com profissionais; não se garante recuperação por afastamento geográfico nem por um prazo fixo.' },
      { question: 'Como apoiar o retorno à rotina universitária ou profissional de São Carlos?', answer: 'Discuta metas graduais, acompanhamento e pessoas de apoio no plano de continuidade. A família pode manter diálogo respeitoso sem cobrar desempenho imediato. A Central não promete retorno acadêmico ou profissional garantido.' }
    ]
  },
  involuntary: {
    key: 'involuntary', path: '/internacao-involuntaria-sao-carlos', label: 'Internação Involuntária', summary: 'Direitos, critérios e encaminhamento médico.',
    title: 'Internação Involuntária em São Carlos - SP | Orientação Legal à Família',
    description: 'Orientação para famílias de São Carlos sobre as Leis 10.216/2001 e 13.840/2019. Avaliação e internação médica externas; a Central não interna sem consentimento.',
    heading: 'Internação involuntária em São Carlos: avaliação e direitos',
    intro: 'Diante de recusa de ajuda ou agravamento da situação, famílias de São Carlos precisam distinguir preocupação familiar de indicação médica. A Central orienta os trâmites e encaminhamentos, mas sua única sede em Araraquara realiza acolhimento voluntário, não internação involuntária clínica.',
    notice: 'Recusa, uso de drogas ou conflito familiar não autorizam automaticamente internação. A decisão depende de avaliação médica e requisitos legais; risco imediato exige urgência ou SAMU 192.',
    sections: [
      { title: 'Organizar informações sem decretar perda de discernimento', paragraphs: [
        'Uma família pode estar exausta e receosa sem conseguir avaliar sozinha o risco clínico. Relatar fatos, mudanças de comportamento, histórico de cuidado e riscos observados ajuda os profissionais. Não cabe concluir pela internet que alguém perdeu discernimento, nem interpretar qualquer recusa como justificativa suficiente para retirar sua liberdade.',
        'Em São Carlos, a rede de saúde é um caminho para avaliação. Crises com risco imediato devem ser dirigidas à urgência, não à negociação de acolhimento particular. A Central pode orientar a família sobre diferenças entre cuidado psicossocial, atendimento hospitalar e os próximos passos, sem garantir indicação ou vaga.'
      ] },
      { title: 'Critérios legais e alternativas extra-hospitalares', paragraphs: [
        'A Lei 10.216/2001 protege direitos e prevê internação quando recursos extra-hospitalares se mostrarem insuficientes, com laudo médico circunstanciado que caracterize os motivos. A modalidade involuntária é diferente da compulsória, que decorre de determinação judicial. Uma solicitação familiar não equivale à decisão médica.',
        'A Lei 13.840/2019 alterou a Lei 11.343/2006 para prever tratamento ambulatorial prioritário e internação excepcional relacionada ao uso de drogas, em unidades de saúde ou hospitais gerais com equipe multidisciplinar e autorização de médico registrado no CRM. Não se deve afirmar que a lei exige sempre e exclusivamente um psiquiatra; o enquadramento e a avaliação precisam ser respeitados.'
      ] },
      { title: 'Quem solicita e quem cumpre as comunicações', paragraphs: [
        'No regime relacionado à dependência de drogas, o pedido pode partir de familiar ou responsável legal; na absoluta falta deles, de servidor público da saúde, assistência social ou órgãos públicos do Sisnad, exceto segurança pública. A autorização deve ser formalizada pelo médico responsável, considerando alternativas terapêuticas e os requisitos legais.',
        'A Lei 10.216/2001 prevê comunicação ao Ministério Público Estadual em até 72 horas pelo responsável técnico do estabelecimento, com o mesmo procedimento na alta. A disciplina da Lei 13.840/2019 prevê comunicação de internações e altas, em até 72 horas, ao Ministério Público, à Defensoria Pública e a outros órgãos de fiscalização. Essas obrigações não são transferidas à família ou à Central.'
      ] },
      { title: 'Dignidade e destino adequado para a família de São Carlos', paragraphs: [
        'A pessoa mantém direitos a tratamento humanizado e proteção contra abusos. Não se orienta remoção coercitiva informal, sedação doméstica ou contenção improvisada. Transporte agendado não transforma a sede psicossocial em destino habilitado para internação hospitalar, nem representa autorização médica.',
        'Necessidades de intervenção médica são encaminhadas a estabelecimentos habilitados, sem anunciar parceiros ou credenciais não comprovadas. A família deve discutir condições e documentação com o serviço responsável. Esta orientação é educativa e não substitui avaliação clínica ou parecer jurídico sobre o caso concreto.'
      ] }
    ],
    steps: [ { title: 'Descrever fatos', text: 'Organize preocupações sem presumir indicação de internação.' }, { title: 'Obter avaliação', text: 'Alternativas e critérios são examinados pelo serviço médico.' }, { title: 'Conhecer os direitos', text: 'Laudo e comunicações competem ao estabelecimento responsável.' } ],
    faqs: [
      { question: 'Uma família de São Carlos pode decidir sozinha pela internação involuntária?', answer: 'Não. O pedido familiar não substitui avaliação e decisão médica nem os requisitos das Leis 10.216/2001 e 13.840/2019. Recusa isolada não autoriza automaticamente internação ou remoção forçada.' },
      { question: 'Quais direitos devem ser respeitados durante a avaliação e o cuidado?', answer: 'Dignidade, tratamento humanizado, proteção contra abusos e informação sobre o cuidado devem ser preservados. A internação precisa atender aos critérios legais, com avaliação das alternativas. A Central não realiza internação involuntária na sede própria.' },
      { question: 'É a família que deve fazer a notificação obrigatória em 72 horas?', answer: 'A comunicação legal compete ao estabelecimento médico responsável conforme o regime aplicável, não à família. A Lei 10.216/2001 prevê comunicação ao Ministério Público Estadual em até 72 horas, e a disciplina da Lei 13.840/2019 prevê também Defensoria Pública e outros órgãos de fiscalização.' }
    ]
  },
  voluntary: {
    key: 'voluntary', path: '/internacao-voluntaria-sao-carlos', label: 'Tratamento Voluntário', summary: 'Autonomia, rotina e continuidade do cuidado.',
    title: 'Tratamento Voluntário para São Carlos - SP | Sede em Araraquara',
    description: 'Acolhimento voluntário para pessoas de São Carlos na sede em Araraquara. Apoio psicológico, 12 Passos, convivência e plano individual, sem promessa de cura.',
    heading: 'Acolhimento voluntário para pessoas de São Carlos',
    intro: 'Buscar ajuda pode envolver dúvidas sobre afastar-se temporariamente de estudos, trabalho e família. A Central acolhe essa conversa e oferece acolhimento voluntário psicossocial na sede própria em Araraquara, com participação da pessoa e avaliação individual; não possui unidade em São Carlos.',
    notice: 'Acolhimento voluntário não é internação médica. Necessidades hospitalares ou de desintoxicação são encaminhadas a serviços habilitados; consentimento e avaliação orientam a admissão.',
    sections: [
      { title: 'Escolher o cuidado com informação e participação', paragraphs: [
        'Adesão consciente não significa ausência de medo ou ambivalência. A pessoa pode perguntar sobre rotina, contato com a família, custos e condições antes de decidir. Familiares podem apoiar essa conversa sem ameaças, ultimatos ou promessa de que o ingresso resolverá imediatamente todas as dificuldades.',
        'Para quem vive em São Carlos, planejar um acolhimento também envolve compromissos acadêmicos ou profissionais e a rede de apoio disponível. Não há recomendação geral de abandonar estudos ou emprego. A avaliação deve considerar necessidades de saúde e compatibilidade com o suporte da Central, antes de qualquer deslocamento.'
      ] },
      { title: 'Um plano construído com a pessoa', paragraphs: [
        'O suporte psicológico informado é realizado com Margarete Vasques, CRP 06/130268. História de uso, vínculos, dificuldades e recursos ajudam a discutir objetivos individuais. O plano pode abordar organização cotidiana, consciência dos prejuízos e estratégias de continuidade, sem pressupor a mesma evolução para todos.',
        'A proposta institucional reúne 12 Passos, laborterapia, convivência terapêutica e prevenção à recaída. Não se anuncia uma técnica clínica específica não confirmada nem resultados atribuídos a uma atividade isolada. O articulação médica e psiquiátrica com serviços parceiros credenciados e a enfermagem complementam o cuidado na sede. Necessidades hospitalares seguem encaminhamento conforme avaliação.'
      ] },
      { title: 'Rotina e convivência sem perder a autonomia', paragraphs: [
        'A rotina informada vai das 07h às 22h, com períodos de organização, alimentação, apoio psicológico, atividades ao ar livre, reuniões temáticas e repouso. A participação considera o plano individual; convivência não deve ser apresentada como punição ou imposição de desempenho uniforme.',
        'Visitas à sede em Araraquara seguem agendamento com a coordenação e o cronograma terapêutico. Famílias de São Carlos devem combinar dias, horários e trajeto antes de viajar. Não se promete frequência semanal automática, vaga imediata ou duração universal de permanência.'
      ] },
      { title: 'Preparar o retorno ao contexto de São Carlos', paragraphs: [
        'Retomar a vida acadêmica ou profissional pode ser discutido em etapas, junto com recursos de saúde e apoio comunitário. O objetivo é organizar possibilidades realistas, não garantir reinserção, desempenho ou reconstrução de todas as relações. A continuidade pode exigir acompanhamento após a saída do acolhimento.',
        'Antes da admissão, esclareça condições do acolhimento particular e documentação administrativa. A orientação sobre reembolso não equivale a convênio aceito ou aprovação garantida. O contato inicial pelo telefone regional ajuda a organizar dúvidas, sem afirmar que uma solicitação já resultou em admissão.'
      ] }
    ],
    steps: [ { title: 'Perguntar e decidir', text: 'Conheça condições e limites antes de consentir.' }, { title: 'Participar do plano', text: 'Metas são discutidas conforme a avaliação individual.' }, { title: 'Organizar continuidade', text: 'Considere estudo, trabalho, família e acompanhamento em São Carlos.' } ],
    faqs: [
      { question: 'Como é a rotina do acolhimento para quem vem de São Carlos?', answer: 'Na sede em Araraquara, o cronograma informado vai das 07h às 22h, com organização, alimentação, apoio psicológico, 12 Passos, laborterapia, convivência e repouso. A participação é orientada pelo plano individual.' },
      { question: 'A família pode visitar durante o acolhimento voluntário?', answer: 'Sim, mediante agendamento conforme o cronograma terapêutico. Confirme dias e horários com a coordenação antes de sair de São Carlos; não há visita semanal automática ou acesso sem agendamento.' },
      { question: 'Existe um prazo fixo para voltar ao trabalho ou à universidade?', answer: 'Não. Permanência e continuidade dependem da avaliação e das necessidades individuais. O retorno deve ser discutido com os apoios adequados, sem garantia de prazo ou reinserção acadêmica e profissional.' }
    ]
  },
  transport: {
    key: 'transport', path: '/resgate-remocao-sao-carlos', label: 'Resgate e Remoção Agendada', summary: 'Planejamento regional com a coordenação.',
    title: 'Remoção Agendada para São Carlos e Região | Orientação de Transporte',
    description: 'Orientação sobre remoção e translado agendado para famílias de São Carlos. Plantão de orientação e suporte para agendamento 24h; confirme destino e disponibilidade com a Central em Araraquara.',
    heading: 'Remoção e translado agendado para São Carlos',
    intro: 'Famílias de São Carlos que precisam organizar um deslocamento podem consultar a coordenação operacional de Luiz Fernando Soares. A instituição informa remoção e translado especializado regional por agendamento, a partir da única sede em Araraquara, com plantão de orientação e suporte para agendamento 24 horas. A execução do transporte é combinada conforme condições e disponibilidade.',
    notice: 'A orientação e o suporte para agendamento de resgate/remoção estão disponíveis 24h; o transporte é executado conforme agenda e condições confirmadas. Em crise com risco imediato, convulsões ou alteração de consciência, procure urgência ou SAMU 192, sem aguardar agenda particular.',
    sections: [
      { title: 'Primeiro distinguir uma viagem de uma emergência', paragraphs: [
        'O termo resgate pode aparecer na busca de uma família angustiada, mas não define o serviço disponível. Um deslocamento previamente planejado é diferente de atendimento de emergência. Em surto com risco imediato, dor no peito, convulsões ou alteração de consciência, não é seguro esperar a confirmação de transporte particular.',
        'A rede pública de urgência e o SAMU 192 são separados do telefone da Central. O contato institucional serve para discutir condições e disponibilidade de transporte agendado; não representa acionamento de ambulância, reserva ou garantia de chegada em determinado número de minutos.'
      ] },
      { title: 'Origem, percurso e destino precisam ser confirmados', paragraphs: [
        'O acesso regional entre São Carlos e Araraquara utiliza a Washington Luís, SP-310, mas duração e condições dependem de origem, tráfego e planejamento. A proximidade entre os municípios não implica equipe permanentemente posicionada em São Carlos. Não são publicados tempos de resposta garantidos ou disponibilidade noturna.',
        'A única sede própria fica na R. Alfredo Micelli, 70, em Araraquara. Quando a necessidade é hospitalar ou de internação involuntária clínica, o destino deve ser estabelecimento médico habilitado, conforme avaliação. Transporte não determina indicação médica nem assegura vaga no destino.'
      ] },
      { title: 'Recusa e embarque: respeito aos direitos', paragraphs: [
        'Discordar de um tratamento não autoriza a família a improvisar remoção coercitiva. Não se orientam sedação doméstica, uso de força ou contenção por conta própria. Os trâmites de internação involuntária exigem avaliação e requisitos legais; uma viagem para a sede psicossocial não substitui esse processo.',
        'Antes de confirmar qualquer deslocamento, a coordenação deve esclarecer as condições efetivas e a compatibilidade com o caso. Esta página não descreve protocolo de contenção ou garante profissionais de emergência, veículos discretos ou equipamentos que não foram confirmados pela instituição.'
      ] },
      { title: 'Preparar a conversa e proteger informações pessoais', paragraphs: [
        'Na consulta inicial, informe apenas o necessário sobre origem, destino pretendido e necessidades de orientação. Pergunte quais documentos e condições precisam ser combinados com o serviço responsável. Custos, acompanhamento e possibilidade de transporte devem ser esclarecidos antes de sair de São Carlos.',
        'Respeitar privacidade não significa prometer sigilo absoluto ou dispensar obrigações legais. Evite divulgar relatos em comentários públicos. A preparação de um contato não comprova remoção realizada, admissão ou reserva; o próximo passo depende da confirmação da coordenação e do serviço de destino.'
      ] }
    ],
    steps: [ { title: 'Verificar a urgência', text: 'Emergências não devem aguardar transporte agendado.' }, { title: 'Consultar condições', text: 'Informe São Carlos como origem e esclareça necessidades.' }, { title: 'Confirmar o destino', text: 'Agenda, condições e admissão precisam ser alinhadas previamente.' } ],
    faqs: [
      { question: 'Qual é o tempo de resposta da remoção para São Carlos?', answer: 'Não há tempo garantido. A possibilidade de transporte depende de agendamento, condições e disponibilidade consultadas com a coordenação. Em urgência, acione a rede de emergência ou SAMU 192.' },
      { question: 'A Central realiza resgate 24h ou atendimento noturno em São Carlos?', answer: 'A orientação e o suporte para agendamento funcionam 24 horas. A remoção regional é combinada com a coordenação operacional de Luiz Fernando Soares conforme agenda, condições e disponibilidade. Em emergência, acione o SAMU 192.' },
      { question: 'Como a família deve organizar o embarque?', answer: 'Esclareça previamente destino, documentação, acompanhamento e condições com a coordenação e o serviço responsável. Não improvise força, sedação ou contenção; recusa não autoriza remoção coercitiva informal. Não são prometidos veículos ou protocolos não confirmados.' }
    ]
  }
};
export const saoCarlosSpecialtyList = Object.values(saoCarlosSpecialties);
export const saoCarlosParentPath = '/clinica-de-recuperacao-em-sao-carlos-sp';
export function saoCarlosSpecialtyHead(key: SpecialtyKey) {
  const page = saoCarlosSpecialties[key];
  const url = `${siteUrl}${page.path}`;
  const graph = [
    institutionalLocalBusiness,
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'pt-BR', ...(page.condition ? { about: { '@type': 'MedicalCondition', name: page.condition } } : {}) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Cidades', item: `${siteUrl}/cidades` },
      { '@type': 'ListItem', position: 3, name: 'São Carlos', item: `${siteUrl}${saoCarlosParentPath}` },
      { '@type': 'ListItem', position: 4, name: page.label, item: url }
    ] },
    { '@type': 'FAQPage', mainEntity: page.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }
  ];
  return {
    meta: [{ title: page.title }, { name: 'description', content: page.description }, { name: 'robots', content: 'index,follow' }, { property: 'og:title', content: page.title }, { property: 'og:description', content: page.description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: url }, { name: 'twitter:card', content: 'summary_large_image' }],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }]
  };
}
