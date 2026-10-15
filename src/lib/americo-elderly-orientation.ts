import { americoSpecialty, type SpecialtyContent } from './americo-specialties';

export const americoElderlyOrientation = {
  ...americoSpecialty('elderly'),
  path: '/tratamento-dependentes-idosos-americo-brasiliense',
  title: 'Tratamento para Idosos com Dependência Química em Américo Brasiliense | Central de Acolhimento',
  description: 'Orientação humanizada para idosos e famílias de Américo Brasiliense sobre álcool e medicamentos. Acolhimento em Araraquara sujeito à avaliação. Orientação 24h.',
  heading: 'Acolhimento e orientação sobre tratamento para idosos de Américo Brasiliense',
  intro: 'Quando o uso de álcool ou medicamentos preocupa a família, a pessoa idosa precisa ser ouvida com respeito. A Central oferece orientação a famílias de Américo Brasiliense para organizar avaliação profissional e esclarecer a compatibilidade do acolhimento voluntário na sede em Araraquara. O primeiro contato não confirma diagnóstico, vaga ou admissão.',
  sections: [
    {
      title: 'Cuidado na terceira idade começa pela avaliação individual',
      paragraphs: ['Condições de saúde, mobilidade, memória, alimentação e tratamentos em curso devem ser considerados pelos profissionais responsáveis. A idade não define, sozinha, a modalidade de cuidado. A pessoa idosa participa das decisões, com respeito à sua autonomia e aos seus direitos.', 'Necessidades geriátricas específicas precisam de avaliação e de recursos adequados. Esta página não anuncia programa geriátrico próprio, instituição de longa permanência ou atendimento especializado para demência.'],
    },
    {
      title: 'Álcool e medicamentos: segurança antes de qualquer mudança',
      paragraphs: ['Prepare uma lista dos medicamentos prescritos e das preocupações observadas para conversar com o médico responsável. Não suspenda, reduza ou substitua medicamentos por conta própria e não improvise desintoxicação em casa.', 'A interrupção do álcool após uso intenso ou prolongado também pode exigir cuidado médico. Desintoxicação médica supervisionada, quando indicada, segue encaminhamento a estabelecimentos habilitados; não é anunciada como serviço realizado na sede de acolhimento da Central.'],
    },
    {
      title: 'Acompanhamento e participação familiar',
      paragraphs: ['A instituição informa suporte psicológico com Margarete Vasques (CRP 06/130268), acompanhamento médico e psiquiátrico integrado e enfermagem com supervisão diária e cuidados contínuos. Essas funções não equivalem a hospital próprio, enfermagem 24h ou programa geriátrico confirmado.', 'O acolhimento voluntário inclui convivência terapêutica, 12 Passos, laborterapia e prevenção à recaída, conforme avaliação de compatibilidade. Famílias de Américo Brasiliense podem esclarecer condições de ingresso, visitas agendadas e continuidade do cuidado próximo de casa.'],
    },
    {
      title: 'Orientação 24 horas, com o destino do cuidado esclarecido',
      paragraphs: ['O telefone e WhatsApp (16) 99765-4579 oferecem orientação e suporte para agendamento 24h. A única unidade física da Central fica em Araraquara; não existe filial em Américo Brasiliense. Transporte depende de avaliação, disponibilidade e agendamento.', 'Em confusão súbita, convulsão, alteração de consciência ou risco imediato à vida, procure atendimento de urgência ou ligue SAMU 192. O WhatsApp da Central não substitui um serviço de emergência.'],
    },
  ],
} satisfies SpecialtyContent;