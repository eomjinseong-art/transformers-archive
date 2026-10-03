import Link from "next/link";
import type { TfCar } from "@/data/cars";
import { getFilm } from "@/data/films";
import { FactionBadge } from "@/components/FactionBadge";
import { ImageCredit } from "@/components/ImageCredit";
import { SafeImage } from "@/components/SafeImage";
import { carPhoto } from "@/data/carPhotos";

export const kindTone: Record<TfCar["kind"], string> = {
  트럭: "linear-gradient(165deg,#2a1410 0%,#0B0D10 55%,#c65e3233 100%)",
  승용차: "linear-gradient(165deg,#3a3418 0%,#0B0D10 55%,#C6A75E33 100%)",
  스포츠카: "linear-gradient(165deg,#10283a 0%,#0B0D10 55%,#3aa0c633 100%)",
  모터사이클: "linear-gradient(165deg,#241830 0%,#0B0D10 55%,#c6a75e33 100%)",
  "군용·특수": "linear-gradient(165deg,#102018 0%,#0B0D10 55%,#5e8a6a33 100%)",
};

export function CarCard({ car }: { car: TfCar }) {
  const years = car.filmSlugs
    .map((slug) => getFilm(slug)?.year)
    .filter(Boolean)
    .join(" · ");
  const photo = carPhoto(car.slug);
  return (
    <Link
      href={`/cars/${car.slug}`}
      className="group flex h-full flex-col rounded-lg border border-line p-4 transition-colors hover:border-gold/60"
      style={{ backgroundImage: kindTone[car.kind] }}
    >
      {photo ? (
        <div className="-mx-1 -mt-1 mb-3">
          <div className="relative aspect-video overflow-hidden rounded-md" style={{ background: kindTone[car.kind] }}>
            <SafeImage
              src={photo.src}
              alt={photo.alt}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              objectPosition={photo.objectPosition}
            />
          </div>
          <ImageCredit image={photo} compact plain as="p" />
        </div>
      ) : null}
      <div className="flex items-center gap-2">
        <FactionBadge faction={car.faction} />
        <span className="text-[11px] text-muted">{car.kind}</span>
      </div>
      <p className="mt-3 font-serif text-lg leading-snug text-paper group-hover:text-gold">
        {car.characterKo}
      </p>
      <p className="mt-1 text-sm text-paper/90">→ {car.nameKo}</p>
      <p className="mt-0.5 text-[11px] text-muted">{car.nameEn}</p>
      <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted">{car.oneLiner}</p>
      <p className="mt-auto pt-3 text-[11px] tracking-wide text-gold/80">{years}</p>
    </Link>
  );
}
