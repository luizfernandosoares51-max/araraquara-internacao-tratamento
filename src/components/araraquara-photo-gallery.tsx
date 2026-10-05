import { conceptualImageCaption, visualAssets } from "@/lib/visual-assets";

export const araraquaraPhotos = visualAssets.araraquara;

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
            {index + 1} / {araraquaraPhotos.length}
          </span>
        </a>
      ))}
      <p className={`col-span-full text-xs leading-relaxed ${light ? "text-deep/60" : "text-muted-foreground"}`}>{conceptualImageCaption}</p>
    </div>
  );
}