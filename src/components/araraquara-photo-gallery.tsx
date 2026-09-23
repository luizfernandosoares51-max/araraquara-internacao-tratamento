import areaExternaAsset from "@/assets/unidade-araraquara-area-externa.webp.asset.json";
import entradaArcoIrisAsset from "@/assets/unidade-araraquara-entrada-arco-iris.webp.asset.json";
import espacoRecreativoAsset from "@/assets/unidade-araraquara-espaco-recreativo.webp.asset.json";
import patioChuvosoAsset from "@/assets/unidade-araraquara-patio-dia-chuvoso.webp.asset.json";
import patioPrincipalAsset from "@/assets/unidade-araraquara-patio-principal.webp.asset.json";
import salaConvivenciaAsset from "@/assets/unidade-araraquara-sala-de-convivencia.webp.asset.json";

export const araraquaraPhotos = [
  {
    src: areaExternaAsset.url,
    alt: "Vista externa da unidade de Araraquara com pátio arborizado e prédios de telhado vermelho",
    width: 720,
    height: 441,
  },
  {
    src: patioChuvosoAsset.url,
    alt: "Pátio arborizado da unidade de Araraquara em um dia de chuva",
    width: 1400,
    height: 1050,
  },
  {
    src: patioPrincipalAsset.url,
    alt: "Pátio principal da unidade de Araraquara cercado por palmeiras",
    width: 1050,
    height: 1400,
  },
  {
    src: entradaArcoIrisAsset.url,
    alt: "Entrada da unidade de Araraquara com edifícios azuis e arco-íris ao fundo",
    width: 1050,
    height: 1400,
  },
  {
    src: espacoRecreativoAsset.url,
    alt: "Espaço recreativo interno da unidade de Araraquara com jogos eletrônicos",
    width: 1050,
    height: 1400,
  },
  {
    src: salaConvivenciaAsset.url,
    alt: "Sala de convivência da unidade de Araraquara com mesa de tênis de mesa e área de reuniões",
    width: 1400,
    height: 1050,
  },
] as const;

export function AraraquaraPhotoGallery({ light = false }: { light?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {araraquaraPhotos.map((photo, index) => (
        <a
          key={photo.src}
          href={photo.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ampliar foto: ${photo.alt}`}
          className={`group relative overflow-hidden rounded-lg border shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${light ? "border-deep/10 bg-foreground" : "border-border bg-glass"}`}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className={`absolute bottom-2 right-2 rounded-md px-2 py-1 text-[10px] font-semibold shadow-sm ${light ? "bg-deep/90 text-foreground" : "bg-background/90 text-foreground"}`}>
            {index + 1} / 6
          </span>
        </a>
      ))}
    </div>
  );
}