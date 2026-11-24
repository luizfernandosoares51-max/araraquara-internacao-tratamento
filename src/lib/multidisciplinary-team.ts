import mayrtonPortrait from "@/assets/team/mayrton.jpg.asset.json";
import isabellyPortrait from "@/assets/team/isabelly.jpg.asset.json";
import margarethPortrait from "@/assets/team/margareth.jpg.asset.json";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  registration?: string;
  description: string;
  portrait?: { url: string; alt: string };
};

// Institution-supplied descriptions, not independent credential verification.
export const multidisciplinaryTeam: readonly TeamMember[] = [
  {
    id: "psychiatry",
    name: "Dr. Mayrton Mascaro Junior",
    role: "Médico Psiquiatra",
    registration: "CRM-SP 119.473",
    portrait: { url: mayrtonPortrait.url, alt: "Foto de Dr. Mayrton Mascaro Junior, médico psiquiatra" },
    description: "Responsável pela avaliação clínica psiquiátrica, prescrição segura quando indicada e acompanhamento médico integral dos pacientes. A desintoxicação médica ocorre em estabelecimentos habilitados, conforme avaliação.",
  },
  {
    id: "psychology",
    name: "Margareth Cristina Vasques Moraes",
    role: "Psicóloga",
    registration: "CRP 06 (Psicologia Clínica)",
    portrait: { url: margarethPortrait.url, alt: "Foto de Margareth Cristina Vasques Moraes, psicóloga" },
    description: "Atendimento psicoterapêutico individual e em grupo, acolhimento emocional e suporte psicológico aos pacientes e familiares.",
  },
  {
    id: "nursing",
    name: "Isabelly Letícia Rosa",
    role: "Enfermeira",
    registration: "COREN-SP 788016",
    portrait: { url: isabellyPortrait.url, alt: "Foto de Isabelly Letícia Rosa, enfermeira" },
    description: "Coordenação dos cuidados de enfermagem 24 horas, monitoramento de sinais vitais e assistência clínica humanizada.",
  },
  {
    id: "therapy",
    name: "Darlan Jorge da Silva",
    role: "Terapeuta Especializado",
    registration: "CRT-SP 299/17",
    description: "Condução de terapias especializadas, prevenção à recaída e desenvolvimento de habilidades comportamentais na reabilitação.",
  },
  {
    id: "coordination",
    name: "Luiz Fernando Soares",
    role: "Coordenador Geral e Acolhimento",
    description: "Coordenação operacional das unidades, triagem humanizada e orientação direta às famílias desde o primeiro contato.",
  },
  {
    id: "administration",
    name: "Vinicius Rafael Moreira da Silva",
    role: "Gestor Administrativo",
    description: "Gestão administrativa, transparência documental e suporte aos familiares na organização de documentos e encaminhamentos junto ao INSS. Laudos clínicos cabem aos profissionais habilitados; a concessão de benefícios depende da análise do INSS.",
  },
];