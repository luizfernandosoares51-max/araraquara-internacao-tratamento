import { siteUrl, whatsappNumber } from './site';
import { specialtySources as sharedSources } from './araraquara-specialties';

export const specialtySources = [...sharedSources,
  { label: 'Prefeitura Municipal de Américo Brasiliense — portal oficial', href: 'https://www.americobrasiliense.sp.gov.br/' },
  { label: 'Prefeitura — canal institucional de Saúde e contatos municipais', href: 'https://americobrasiliense.atende.net/subportal/saude' },
] as const;
export const americoParentPath = '/clinica-de-recuperacao-em-americo-brasiliense-sp';
export const americoScope = {
  physicalUnitCity: 'Araraquara', orientationHours: 24, transportByAppointment: true,
  transport24Hours: false, ownMedicalDetox: false, ownInvoluntaryHospitalization: false,
  femaleUnit: false, adolescentProgram: false, geriatricProgram: false,
  gamblingProgram: false, workerMedicalReports: false, clinicalReviewVerified: false,
} as const;

type Section = { title: string; paragraphs: readonly string[] };
type Faq = { question: string; answer: string };
export type SpecialtyContent = {
  key: string; path: string; label: string; summary: string; title: string;
  description: string; heading: string; intro: string; notice: string;
  sections: readonly Section[]; faqs: readonly Faq[];
};

export const americoSpecialtyList = [
  {
    "key": "cocaine",
    "path": "/tratamento-cocaina-crack-americo-brasiliense",
    "label": "Cocaína e Crack",
    "heading": "Dependência de cocaína e crack: apoio para Américo Brasiliense",
    "summary": "Escuta familiar e avaliação para reorganizar hábitos e vínculos.",
    "title": "Cocaína e Crack para Américo Brasiliense SP | Central",
    "description": "Escuta familiar e avaliação para reorganizar hábitos e vínculos. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "No Centro ou no Jardim Planalto, mudanças de sono, gastos e convivência podem motivar uma conversa cuidadosa. A Central orienta famílias de Américo Brasiliense a organizar avaliação e conhecer o acolhimento voluntário em Araraquara, sem diagnóstico remoto.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Relatos concretos ajudam a avaliação",
        "paragraphs": [
          "Descreva episódios, uso de outras substâncias e dificuldades recentes sem rotular a pessoa. Manter compromissos não exclui prejuízos; a avaliação cabe a profissionais habilitados."
        ]
      },
      {
        "title": "Acolhimento e desintoxicação são cuidados diferentes",
        "paragraphs": [
          "Psicologia, 12 Passos, convivência, laborterapia e prevenção à recaída integram o acolhimento confirmado. Desintoxicação médica, quando necessária, é encaminhada a estabelecimentos habilitados."
        ]
      },
      {
        "title": "Construir continuidade em Américo",
        "paragraphs": [
          "Combine participação familiar e acompanhamento após o acolhimento. A proximidade regional pode ajudar a planejar visitas, mas mudar de ambiente não garante recuperação."
        ]
      }
    ],
    "faqs": [
      {
        "question": "A conversa pelo WhatsApp confirma dependência?",
        "answer": "Não. A conversa acolhe dúvidas e organiza próximos passos; diagnóstico e indicação de cuidado dependem de avaliação profissional."
      },
      {
        "question": "A desintoxicação ocorre na sede da Central?",
        "answer": "Não. Desintoxicação médica recebe encaminhamento a estabelecimento habilitado; a sede em Araraquara realiza acolhimento voluntário psicossocial."
      },
      {
        "question": "Dor no peito após uso pode esperar orientação particular?",
        "answer": "Não. Dor no peito, convulsões ou alteração de consciência exigem urgência ou SAMU 192."
      }
    ]
  },
  {
    "key": "alcohol",
    "path": "/tratamento-alcoolismo-americo-brasiliense",
    "label": "Alcoolismo",
    "heading": "Alcoolismo: caminhos de cuidado para Américo Brasiliense",
    "summary": "Apoio diante do uso de álcool, com atenção à saúde e à família.",
    "title": "Alcoolismo para Américo Brasiliense SP | Central",
    "description": "Apoio diante do uso de álcool, com atenção à saúde e à família. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "Mesmo com trabalho e responsabilidades preservados, o consumo pode prejudicar saúde e relações. Famílias de Luiz Ometto e de outros bairros de Américo Brasiliense podem buscar orientação sem esperar que todas as atividades sejam interrompidas.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Além do rótulo de alcoolismo funcional",
        "paragraphs": [
          "Dificuldade de reduzir o consumo, conflitos e mudanças na rotina são motivos para avaliação. A expressão funcional não indica segurança nem substitui análise clínica."
        ]
      },
      {
        "title": "Planejar a redução com segurança",
        "paragraphs": [
          "Após consumo intenso ou prolongado, a abstinência pode trazer complicações. Não improvise medicação ou desintoxicação em casa; procure avaliação médica."
        ]
      },
      {
        "title": "Reconstruir acordos familiares",
        "paragraphs": [
          "A família pode discutir limites, visitas e continuidade em Américo. O acolhimento confirmado inclui suporte psicossocial e prevenção à recaída, sem protocolo universal ou prazo de recuperação."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Manter o emprego afasta a necessidade de tratamento?",
        "answer": "Não. Atividades preservadas não excluem prejuízos relacionados ao álcool; a avaliação individual considera saúde, consumo e vínculos."
      },
      {
        "question": "Existe prazo fixo para recuperação do alcoolismo?",
        "answer": "Não. A duração e a modalidade dependem da avaliação e das necessidades individuais, sem garantia de resultado."
      },
      {
        "question": "Convulsões durante abstinência podem aguardar agendamento?",
        "answer": "Não. Convulsões ou confusão intensa exigem atendimento de urgência ou SAMU 192."
      }
    ]
  },
  {
    "key": "involuntary",
    "path": "/internacao-involuntaria-americo-brasiliense",
    "label": "Internação Involuntária: Orientação",
    "heading": "Internação involuntária: direitos e orientação em Américo Brasiliense",
    "summary": "Esclarecimento legal para decisões familiares responsáveis.",
    "title": "Internação Involuntária: Orientação para Américo Brasiliense SP | Central",
    "description": "Esclarecimento legal para decisões familiares responsáveis. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "Recusa de ajuda não autoriza uma decisão automática de internação. A Central orienta famílias de Américo Brasiliense sobre os requisitos das Leis 10.216/2001 e 13.840/2019 e sobre encaminhamento médico adequado.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Avaliação médica antes da decisão",
        "paragraphs": [
          "Conflito familiar ou uso de substâncias isoladamente não determina internação involuntária. A indicação e autorização são médicas, com observância dos requisitos legais e das alternativas de cuidado."
        ]
      },
      {
        "title": "Responsabilidade do estabelecimento receptor",
        "paragraphs": [
          "A Central presta suporte psicossocial e orientação para encaminhamento. Internação clínica acontece em estabelecimento médico habilitado, não na sede de acolhimento voluntário."
        ]
      },
      {
        "title": "Direitos não desaparecem durante o cuidado",
        "paragraphs": [
          "As comunicações legais aplicáveis em até 72 horas cabem ao estabelecimento que realiza a internação. Famílias do Jardim Santa Terezinha e de toda Américo podem pedir esclarecimentos; esta página não é autorização nem parecer jurídico."
        ]
      }
    ],
    "faqs": [
      {
        "question": "A família pode internar alguém apenas por discordar de suas escolhas?",
        "answer": "Não. A internação involuntária depende de avaliação e autorização médicas e dos requisitos legais; discordância isolada não basta."
      },
      {
        "question": "Quem realiza a internação involuntária?",
        "answer": "O estabelecimento médico habilitado que recebe a pessoa e assume a responsabilidade clínica. A Central orienta o encaminhamento, sem realizar essa internação na sede."
      },
      {
        "question": "O prazo de 72 horas garante recepção?",
        "answer": "Não. Refere-se às comunicações legais aplicáveis sob responsabilidade do estabelecimento receptor, não a vaga, transporte ou tempo de espera."
      }
    ]
  },
  {
    "key": "voluntary",
    "path": "/internacao-voluntaria-americo-brasiliense",
    "label": "Acolhimento Voluntário",
    "heading": "Acolhimento voluntário para famílias de Américo Brasiliense",
    "summary": "Consentimento, rotina terapêutica e participação dos familiares.",
    "title": "Acolhimento Voluntário para Américo Brasiliense SP | Central",
    "description": "Consentimento, rotina terapêutica e participação dos familiares. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "Pedir ajuda pode começar com perguntas sobre convivência, contatos e permanência. Para quem vive no Jardim Vista Alegre ou em outras áreas de Américo, a Central apresenta o acolhimento voluntário na única sede em Araraquara.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Escolha informada e consentimento",
        "paragraphs": [
          "A pessoa precisa compreender proposta, regras, custos e condições. A família apoia a decisão, mas pressão ou engano não substituem consentimento."
        ]
      },
      {
        "title": "Uma rotina com acompanhamento",
        "paragraphs": [
          "A instituição informa atividades entre 07h e 22h, psicologia, 12 Passos, laborterapia, convivência e prevenção à recaída. Há acompanhamento médico e psiquiátrico integrado e enfermagem com supervisão diária, sem transformar a sede em hospital."
        ]
      },
      {
        "title": "Organizar ingresso e retorno",
        "paragraphs": [
          "Confirme compatibilidade, disponibilidade, pertences e visitas antes de viajar. Planeje também os apoios próximos de casa e o acompanhamento indicado após o acolhimento."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Quem decide pelo acolhimento voluntário?",
        "answer": "A pessoa, com consentimento informado e avaliação de compatibilidade; a família pode participar sem substituir sua decisão."
      },
      {
        "question": "Posso comparecer sem confirmar disponibilidade?",
        "answer": "Confirme antes as condições de avaliação e recepção. O primeiro contato não reserva vaga nem garante ingresso imediato."
      },
      {
        "question": "As visitas saindo de Américo são livres?",
        "answer": "Não. Visitas seguem dias e horários agendados com a equipe, conforme as condições do acolhimento."
      }
    ]
  },
  {
    "key": "transport",
    "path": "/resgate-remocao-americo-brasiliense",
    "label": "Resgate e Remoção: Agendamento",
    "heading": "Resgate e remoção para Américo Brasiliense: planejamento seguro",
    "summary": "Organização do deslocamento conforme avaliação e agendamento.",
    "title": "Resgate e Remoção: Agendamento para Américo Brasiliense SP | Central",
    "description": "Organização do deslocamento conforme avaliação e agendamento. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "Uma viagem em momento delicado precisa considerar riscos, consentimento e destino. O plantão conversa com famílias de Américo Brasiliense para organizar o agendamento e confirmar condições operacionais, sem prometer saída imediata.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Origem e necessidade orientam o planejamento",
        "paragraphs": [
          "Centro, São Judas Tadeu e Jardim Planalto têm pontos de saída diferentes. Informe primeiro município e necessidade geral; endereço e dados sensíveis devem ser tratados diretamente quando necessários."
        ]
      },
      {
        "title": "Referência rodoviária sem promessa de rapidez",
        "paragraphs": [
          "A SP-257 é uma referência de acesso regional a conferir conforme origem e destino. Trânsito, avaliação clínica e disponibilidade influenciam o deslocamento; não há prazo garantido por bairro."
        ]
      },
      {
        "title": "Privacidade responsável e destino adequado",
        "paragraphs": [
          "Converse sobre tratamento de informações e condições reais de transporte. Não são anunciados veículos descaracterizados, frota específica ou execução 24h. O destino deve ser compatível com a necessidade clínica."
        ]
      }
    ],
    "faqs": [
      {
        "question": "O plantão 24h significa transporte 24h?",
        "answer": "Não. As 24 horas referem-se à orientação e ao suporte para agendamento. A execução depende de avaliação, disponibilidade e confirmação."
      },
      {
        "question": "Há tempo garantido pela SP-257?",
        "answer": "Não. O trajeto deve ser conferido conforme ponto de saída, destino e trânsito; não há prazo garantido de chegada."
      },
      {
        "question": "Uma emergência pode aguardar transporte agendado?",
        "answer": "Não. Em risco imediato, procure urgência ou ligue SAMU 192; o transporte agendado não substitui emergência."
      }
    ]
  },
  {
    "key": "women",
    "path": "/clinica-recuperacao-feminina-americo-brasiliense",
    "label": "Orientação para Mulheres",
    "heading": "Mulheres e recuperação: orientação para Américo Brasiliense",
    "summary": "Escuta com respeito à privacidade e às necessidades familiares.",
    "title": "Orientação para Mulheres para Américo Brasiliense SP | Central",
    "description": "Escuta com respeito à privacidade e às necessidades familiares. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "Mulheres de Américo Brasiliense podem ter dúvidas sobre responsabilidades familiares, privacidade e escolhas de cuidado. A Central acolhe essas perguntas sem pressupor um único perfil ou anunciar unidade feminina exclusiva.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Considerar prioridades e vínculos",
        "paragraphs": [
          "Trabalho, maternidade e relações podem integrar a conversa com profissionais, sem presumir diagnóstico ou necessidade de permanência. Compartilhe somente o necessário no primeiro contato."
        ]
      },
      {
        "title": "Verificar condições antes de escolher",
        "paragraphs": [
          "Pergunte sobre perfil de admissão, alojamento, convivência e comunicação familiar. Ala feminina, ambientes separados e programas para gestantes não estão confirmados."
        ]
      },
      {
        "title": "Planejar apoio a partir de Américo",
        "paragraphs": [
          "Famílias do Jardim Santa Terezinha e de outros bairros podem organizar avaliação e apoios perto de casa. A sede da Central fica em Araraquara; compatibilidade e encaminhamento precisam ser discutidos individualmente."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Existe unidade feminina da Central em Américo?",
        "answer": "Não. A única sede fica em Araraquara e não há confirmação de ala feminina exclusiva. Esta página oferece orientação."
      },
      {
        "question": "A privacidade é absoluta?",
        "answer": "Não se promete sigilo absoluto. A proteção de informações considera consentimento, segurança e obrigações legais."
      },
      {
        "question": "A página confirma atendimento para gestantes?",
        "answer": "Não. Programas para gestantes ou mães com filhos não foram confirmados; verifique opções compatíveis com avaliação profissional."
      }
    ]
  },
  {
    "key": "medication",
    "path": "/dependencia-medicamentos-tarja-preta-americo-brasiliense",
    "label": "Medicamentos Controlados",
    "heading": "Medicamentos controlados: orientação em Américo Brasiliense",
    "summary": "Dúvidas sobre prescrições e cuidado sem interrupções por conta própria.",
    "title": "Medicamentos Controlados para Américo Brasiliense SP | Central",
    "description": "Dúvidas sobre prescrições e cuidado sem interrupções por conta própria. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "Medo de parar um remédio ou mudanças de dose merecem conversa com o prescritor. Famílias de Luiz Ometto e de toda Américo Brasiliense podem organizar dúvidas sobre sono, ansiedade e uso de medicamentos sem concluir diagnóstico pela tarja.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Prescrição não equivale a uso problemático",
        "paragraphs": [
          "Indicação, duração e efeitos são considerados na avaliação. Leve os nomes dos medicamentos e prescrições ao profissional; não use remédios emprestados ou orientações informais."
        ]
      },
      {
        "title": "Desmame precisa de avaliação médica",
        "paragraphs": [
          "Redução, substituição ou suspensão não têm esquema universal. A Central não anuncia programa próprio de desmame; necessidades de desintoxicação médica seguem encaminhamento adequado."
        ]
      },
      {
        "title": "Manter continuidade com o prescritor",
        "paragraphs": [
          "Converse sobre segurança antes de organizar deslocamento para Araraquara. A família pode apoiar consultas e dúvidas com consentimento, sem administrar mudanças no tratamento por iniciativa própria."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Remédio tarja preta confirma dependência?",
        "answer": "Não. A indicação e o padrão de uso precisam de avaliação; a tarja isolada não determina diagnóstico."
      },
      {
        "question": "A Central oferece protocolo próprio de desmame?",
        "answer": "Não há confirmação desse programa. Alterações do tratamento cabem ao profissional médico responsável."
      },
      {
        "question": "Devo suspender o remédio antes da viagem?",
        "answer": "Não. Discuta continuidade e segurança com o prescritor; não suspenda ou reduza doses por conta própria."
      }
    ]
  },
  {
    "key": "elderly",
    "path": "/clinica-recuperacao-idosos-americo-brasiliense",
    "label": "Pessoas Idosas e Família",
    "heading": "Álcool e medicamentos em idosos: orientação para Américo Brasiliense",
    "summary": "Autonomia e atenção às necessidades clínicas na idade avançada.",
    "title": "Pessoas Idosas e Família para Américo Brasiliense SP | Central",
    "description": "Autonomia e atenção às necessidades clínicas na idade avançada. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "Mudanças de equilíbrio, memória e rotina não devem ser atribuídas apenas à idade. Pessoas idosas e famílias de Américo Brasiliense podem buscar avaliação e orientação sobre compatibilidade do cuidado, sem programa geriátrico próprio anunciado.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Avaliar mudanças recentes",
        "paragraphs": [
          "Relate quedas, tratamentos em curso e mudanças percebidas aos profissionais. Sintomas têm diferentes causas; não presuma que álcool ou medicamentos expliquem tudo."
        ]
      },
      {
        "title": "Respeitar autonomia e necessidades de apoio",
        "paragraphs": [
          "Mobilidade, comunicação e cuidado cotidiano precisam ser esclarecidos antes de escolher um serviço. A pessoa idosa participa das decisões conforme sua condição e seus direitos."
        ]
      },
      {
        "title": "Planejar com os vínculos existentes",
        "paragraphs": [
          "Famílias do Jardim Vista Alegre e de outras áreas podem articular acompanhamento com profissionais próximos. A Central não confirma longa permanência, estrutura geriátrica ou programa para demência."
        ]
      }
    ],
    "faqs": [
      {
        "question": "O acolhimento geriátrico especializado está confirmado?",
        "answer": "Não. A avaliação deve verificar necessidades clínicas, recursos e compatibilidade antes de qualquer ingresso."
      },
      {
        "question": "A família pode retirar remédios de uma pessoa idosa que bebe?",
        "answer": "Não. Doses e combinações precisam de avaliação pelo profissional médico responsável; não ajuste tratamento por conta própria."
      },
      {
        "question": "Confusão súbita pode esperar uma visita?",
        "answer": "Não. Confusão súbita merece avaliação urgente, especialmente com alteração de consciência; procure urgência ou SAMU 192 conforme o risco."
      }
    ]
  },
  {
    "key": "youth",
    "path": "/tratamento-dependencia-jovens-americo-brasiliense",
    "label": "Jovens e Apoio Familiar",
    "heading": "Jovens e dependência: apoio à família de Américo Brasiliense",
    "summary": "Diálogo, avaliação por idade e preservação de vínculos e estudos.",
    "title": "Jovens e Apoio Familiar para Américo Brasiliense SP | Central",
    "description": "Diálogo, avaliação por idade e preservação de vínculos e estudos. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "Conflitos familiares e mudanças na escola não confirmam dependência. A Central orienta famílias de Américo Brasiliense a escutar o jovem e procurar avaliação adequada à idade, sem transformar cuidado em punição.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Escutar sem antecipar diagnóstico",
        "paragraphs": [
          "Pergunte sobre dificuldades e acontecimentos concretos. Sono, escola, trabalho e relações integram o contexto, mas nenhum comportamento isolado determina uma modalidade de tratamento."
        ]
      },
      {
        "title": "Faixa etária e proteção importam",
        "paragraphs": [
          "Programa para adolescentes e admissão de menores não estão confirmados. Responsáveis devem procurar serviços adequados à idade e esclarecer requisitos de proteção."
        ]
      },
      {
        "title": "Continuidade além da primeira conversa",
        "paragraphs": [
          "Estudos e perspectivas de trabalho em Américo podem integrar o planejamento com profissionais. Jovens adultos podem procurar orientação por iniciativa própria, com avaliação e condições de admissão."
        ]
      }
    ],
    "faqs": [
      {
        "question": "A Central confirma admissão de adolescentes?",
        "answer": "Não. Programa para adolescentes e admissão de menores não estão confirmados; procure serviços apropriados à idade."
      },
      {
        "question": "Conflitos familiares indicam acolhimento automaticamente?",
        "answer": "Não. Avaliação considera necessidades, riscos e alternativas; conflito isolado não define indicação."
      },
      {
        "question": "Um jovem adulto pode buscar orientação sozinho?",
        "answer": "Sim. Pode iniciar a conversa por iniciativa própria; avaliação de compatibilidade e disponibilidade continuam necessárias."
      }
    ]
  },
  {
    "key": "gambling",
    "path": "/tratamento-jogos-compulsivos-apostas-americo-brasiliense",
    "label": "Jogos e Apostas",
    "heading": "Jogos e apostas: orientação para famílias de Américo Brasiliense",
    "summary": "Apoio sem julgamento diante de dívidas e impactos nos vínculos.",
    "title": "Jogos e Apostas para Américo Brasiliense SP | Central",
    "description": "Apoio sem julgamento diante de dívidas e impactos nos vínculos. Orientação 24h para famílias de Américo Brasiliense pela Central, com avaliação e condições de cuidado esclarecidas.",
    "intro": "Quando apostas ocupam tempo e recursos, a família pode sentir medo e desgaste. A Central orienta pessoas de Américo Brasiliense sobre avaliação e próximos passos, sem anunciar programa especializado para ludopatia.",
    "notice": "Orientação regional a partir da única sede em Araraquara. Acolhimento voluntário depende de consentimento e compatibilidade; cuidado hospitalar e desintoxicação médica seguem encaminhamento. Em risco imediato, SAMU 192.",
    "sections": [
      {
        "title": "Observar impactos além do valor perdido",
        "paragraphs": [
          "Tentativas de recuperar perdas, ocultação de gastos e compromissos prejudicados podem motivar avaliação. O valor da dívida não determina sozinho diagnóstico ou indicação de acolhimento."
        ]
      },
      {
        "title": "Limites financeiros e participação familiar",
        "paragraphs": [
          "Discuta limites com apoio adequado, sem humilhação ou vigilância coercitiva. Pagar perdas não garante mudança; familiares também podem precisar de suporte."
        ]
      },
      {
        "title": "Privacidade e cuidado profissional",
        "paragraphs": [
          "Pessoas do Centro e de São Judas Tadeu podem iniciar uma conversa sem enviar senhas ou extratos. Esta orientação não é terapia específica ou protocolo psicológico; encaminhamentos dependem de avaliação."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Dívidas de apostas indicam internação?",
        "answer": "Não automaticamente. A avaliação considera comportamento, sofrimento e riscos; dívida isolada não define modalidade."
      },
      {
        "question": "Existe programa especializado para apostas confirmado?",
        "answer": "Não. A Central oferece escuta e orientação familiar, com discussão de encaminhamentos quando necessários."
      },
      {
        "question": "Preciso enviar senhas ou extratos para obter orientação?",
        "answer": "Não. Compartilhe apenas a necessidade geral; nunca envie senhas ou acessos financeiros. Em risco imediato à vida, procure urgência ou SAMU 192."
      }
    ]
  }
] as const satisfies readonly SpecialtyContent[];

export type AmericoSpecialtyKey = typeof americoSpecialtyList[number]['key'];
export function americoSpecialty(key: AmericoSpecialtyKey) {
  const page = americoSpecialtyList.find(item => item.key === key);
  if (!page) throw new Error('Especialidade de Américo Brasiliense indisponível');
  return page;
}
export function americoWhatsappHref(key: AmericoSpecialtyKey) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá, sou de Américo Brasiliense e gostaria de orientação sobre ${americoSpecialty(key).label.toLocaleLowerCase('pt-BR')}.`)}`;
}
export const americoAccess = { route: 'A família pode organizar avaliação e visitas à sede em Araraquara a partir de Américo Brasiliense. Confirme o destino, o ponto de saída e as condições de recepção antes de viajar; a proximidade não garante vaga ou deslocamento imediato.' } as const;
export function americoSpecialtyHead(key: AmericoSpecialtyKey, content?: SpecialtyContent) {
  const page = content ?? americoSpecialty(key);
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
          { '@type': 'ListItem', position: 2, name: 'Américo Brasiliense', item: `${siteUrl}${americoParentPath}` },
          { '@type': 'ListItem', position: 3, name: page.label, item: url },
        ] },
        { '@type': 'FAQPage', mainEntity: page.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      ],
    }) }],
  };
}