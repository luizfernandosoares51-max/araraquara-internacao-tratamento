import salao from "@/assets/facility/araraquara-salao-convivencia.webp.asset.json";
import jogos from "@/assets/facility/araraquara-espaco-jogos.webp.asset.json";
import externa from "@/assets/facility/araraquara-area-externa-estacionamento.webp.asset.json";
import beliches from "@/assets/facility/araraquara-quarto-beliches.webp.asset.json";
import banheiro from "@/assets/facility/araraquara-quarto-banheiro.webp.asset.json";
import placa from "@/assets/facility/araraquara-identificacao-morada-do-sol.webp.asset.json";
import horta from "@/assets/facility/araraquara-horta-hidroponica.webp.asset.json";
import { institutionalIdentity } from "./institutional";
import { siteUrl } from "./site";

export type FacilityPhoto = {
  id: string;
  title: string;
  caption: string;
  alt: string;
  src: string;
  width: number;
  height: number;
};

const brand = "Clínica de recuperação em Araraquara SP - Morada do Sol";

function photo(id: string, title: string, caption: string, place: string, src: string, width: number, height: number): FacilityPhoto {
  return { id, title, caption, alt: `${place} - ${brand}`, src, width, height };
}

/**
 * Fotos reais da unidade masculina de Araraquara enviadas pela instituição.
 * Foto com visitantes identificáveis (incluindo criança) ficou de fora por privacidade;
 * documentos afixados, placa de veículo e pessoa ao fundo foram borrados.
 */
export const facilityPhotos: FacilityPhoto[] = [
  photo("salao-convivencia", "Salão de Convivência e Atividades", "Ambiente amplo e iluminado, com mesa de tênis de mesa e espaço para encontros e atividades em grupo durante o acolhimento voluntário em Araraquara SP.", "Salão de convivência com mesa de tênis de mesa", salao.url, 1080, 810),
  photo("espaco-jogos", "Espaço de Lazer com Jogos", "Momentos de descontração ajudam a construir uma rotina mais equilibrada no cuidado da dependência química e do alcoolismo.", "Espaço de lazer com máquinas de jogos eletrônicos", jogos.url, 1080, 1437),
  photo("area-externa", "Área Externa Arborizada", "Área ampla com palmeiras e estacionamento, que facilita a chegada dos familiares nas visitas agendadas à unidade masculina.", "Área externa arborizada com palmeiras e estacionamento", externa.url, 1080, 1603),
  photo("quarto-beliches", "Acomodação com Beliches", "Quarto organizado, com roupas de cama, mesa e espaço para objetos pessoais, pensado para o descanso e a tranquilidade.", "Quarto com beliches, mesa de madeira e televisão", beliches.url, 1080, 1572),
  photo("quarto-banheiro", "Quarto com Banheiro", "Acomodação com acesso ao banheiro e armário, apoiando uma rotina de higiene e cuidado pessoal durante a reabilitação em saúde mental.", "Quarto com beliche e acesso ao banheiro", banheiro.url, 1080, 1572),
  photo("identificacao-morada-do-sol", "Identificação Institucional", "Placa do Centro de Reabilitação Terapêutico Morada do Sol, mantenedor vinculado da Central. Os documentos afixados foram desfocados por privacidade.", "Placa institucional do Centro de Reabilitação Terapêutico Morada do Sol", placa.url, 1080, 804),
  photo("horta-hidroponica", "Horta Hidropônica e Laborterapia", "Cultivo de hortaliças como parte da laborterapia, atividade que estimula responsabilidade, rotina e contato com a natureza.", "Horta hidropônica com alfaces usada na laborterapia", horta.url, 1080, 1920),
];

export const facilityGalleryId = "estrutura-fisica";

export function facilityGallerySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Estrutura física da unidade masculina em Araraquara (SP)",
    about: { "@id": `${siteUrl}/#organization` },
    contentLocation: { "@type": "Place", name: "Unidade masculina em Araraquara - SP", address: institutionalIdentity.postalAddress },
    associatedMedia: facilityPhotos.map((item) => ({
      "@type": "ImageObject",
      contentUrl: new URL(item.src, siteUrl).toString(),
      name: item.title,
      caption: item.caption,
      description: item.alt,
      width: item.width,
      height: item.height,
    })),
  };
}
