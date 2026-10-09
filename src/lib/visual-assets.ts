import araraquaraCare from "@/assets/concept-araraquara-care.webp";
import araraquaraEvaluation from "@/assets/concept-araraquara-evaluation.webp";
import araraquaraFamily from "@/assets/concept-araraquara-family.webp";
import araraquaraPath from "@/assets/concept-araraquara-path.webp";
import araraquaraWelcome from "@/assets/concept-araraquara-welcome.webp";
import blogLearning from "@/assets/concept-blog-learning.webp";
import citiesGuidance from "@/assets/concept-cities-guidance.webp";
import cityBauru from "@/assets/concept-city-bauru.webp";
import cityRibeiraoPreto from "@/assets/concept-city-ribeirao-preto.webp";
import cityRioClaro from "@/assets/concept-city-rio-claro.webp";
import citySaoCarlos from "@/assets/concept-city-sao-carlos.webp";
import clinicGuidance from "@/assets/concept-clinic-guidance.webp";
import familyDialogue from "@/assets/concept-family-dialogue.webp";
import homeContinuity from "@/assets/concept-home-continuity.webp";
import homeConversation from "@/assets/concept-home-conversation.webp";
import homeFamily from "@/assets/concept-home-family.webp";
import homeRenewal from "@/assets/concept-home-renewal.webp";
import homeRoutine from "@/assets/concept-home-routine.webp";
import treatmentRoutine from "@/assets/concept-treatment-routine.webp";
import videosProgression from "@/assets/concept-videos-progression.webp";
import welcomeListening from "@/assets/concept-welcome-listening.webp";
import articleWelcome from "@/assets/blog-clinica-busca-orientacao.webp";
import articleAssessment from "@/assets/blog-clinica-avaliacao-inicial.webp";
import articleTherapy from "@/assets/blog-clinica-acompanhamento.webp";
import articleRoutine from "@/assets/blog-clinica-rotina-saudavel.webp";
import articleFamily from "@/assets/blog-clinica-dialogo-familiar.webp";
import articleContinuity from "@/assets/blog-clinica-continuidade-cuidado.webp";

export const visualAssets = {
  home: {
    hero: { src: homeRenewal, alt: "Caminho arborizado com duas pessoas caminhando juntas ao amanhecer" },
    conversation: { src: homeConversation, alt: "Conversa acolhedora representada por duas pessoas junto a uma mesa" },
    welcome: { src: welcomeListening, alt: "Duas pessoas em uma conversa de escuta e acolhimento" },
    routine: { src: homeRoutine, alt: "Caderno e água próximos a uma porta aberta para um jardim" },
    family: { src: homeFamily, alt: "Duas pessoas de gerações diferentes caminhando juntas em um jardim" },
    continuity: { src: homeContinuity, alt: "Pedras e uma planta jovem simbolizando continuidade e novos passos" },
  },
  clinic: { src: clinicGuidance, alt: "Ambiente conceitual preparado para conversa e planejamento do cuidado" },
  treatment: { src: treatmentRoutine, alt: "Pessoa organizando uma rotina em um caderno junto a uma janela" },
  family: { src: familyDialogue, alt: "Família em conversa cuidadosa e gesto de apoio" },
  araraquara: [
    { src: araraquaraPath, alt: "Pessoa diante de caminhos em um parque, representação conceitual de orientação em Araraquara", width: 1600, height: 1067 },
    { src: araraquaraFamily, alt: "Família em conversa, representação conceitual de apoio em Araraquara", width: 1600, height: 1067 },
    { src: araraquaraCare, alt: "Ambiente preparado para uma roda de conversa, representação conceitual de cuidado", width: 1600, height: 1067 },
    { src: araraquaraWelcome, alt: "Porta aberta para um jardim, representação conceitual de acolhimento", width: 1600, height: 1067 },
    { src: araraquaraEvaluation, alt: "Organização de possibilidades sobre uma mesa, representação conceitual de avaliação", width: 1600, height: 1067 },
  ],
  cities: { src: citiesGuidance, alt: "Mapa e caminhos convergentes representando a busca por orientação regional" },
  cityCovers: {
    "sao-carlos-sp": { src: citySaoCarlos, alt: "Mesa preparada para conversa e orientação a famílias de São Carlos" },
    "bauru-sp": { src: cityBauru, alt: "Caderno sendo compartilhado em uma conversa de orientação para Bauru" },
    "ribeirao-preto-sp": { src: cityRibeiraoPreto, alt: "Duas pessoas caminhando juntas, representação de apoio familiar em Ribeirão Preto" },
    "rio-claro-sp": { src: cityRioClaro, alt: "Caminhos entre um jardim e um portão aberto, representação de escolhas em Rio Claro" },
  },
  blog: { src: blogLearning, alt: "Livro aberto e caderno em um ambiente iluminado para leitura e orientação" },
  rehabilitationArticle: {
    welcome: { src: articleWelcome, alt: "Mulher adulta conversa com um interlocutor em ambiente reservado e iluminado" },
    assessment: { src: articleAssessment, alt: "Homem adulto participa de uma conversa de escuta inicial à mesa" },
    therapy: { src: articleTherapy, alt: "Duas mulheres adultas conversam com atenção em um ambiente reservado" },
    routine: { src: articleRoutine, alt: "Três adultos plantam ervas juntos em um canteiro de jardim" },
    family: { src: articleFamily, alt: "Dois familiares adultos participam de uma conversa de orientação à mesa" },
    continuity: { src: articleContinuity, alt: "Duas pessoas conversam sobre planejamento com cadernos abertos à mesa" },
  },
  videos: { src: videosProgression, alt: "Sequência de formas entre sombra e luz representando etapas de mudança" },
} as const;

export const conceptualImageCaption = "Imagem conceitual gerada por IA; não representa uma instalação, paciente ou atendimento real da Central.";