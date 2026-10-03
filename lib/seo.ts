import type { Metadata } from "next";
import type { TfCar } from "@/data/cars";
import type { Film } from "@/data/films";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "트랜스포머 아카이브. 2007년부터 2023년까지 영화 속 차량.",
} as const;

export function canonicalUrl(path: string) {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function clip(text: string, max = 150) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trim()}…`;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  /** 페이지 고유 사진(절대 URL). 없으면 사이트 기본 OG 이미지. */
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const ogImages = image ? [image] : [OG_IMAGE];
  const isHome = path === "/" || path === "";
  const documentTitle = isHome ? SITE_NAME : `${title} · ${SITE_NAME}`;
  const url = canonicalUrl(path);
  const text = clip(description);
  return {
    title: isHome ? { absolute: SITE_NAME } : title,
    description: text,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url,
      siteName: SITE_NAME,
      title: documentTitle,
      description: text,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description: text,
      images: [image ? image.url : OG_IMAGE.url],
    },
  };
}

export function carSeoTitle(car: Pick<TfCar, "characterKo" | "nameKo">) {
  return `트랜스포머 ${car.characterKo} 차 · ${car.nameKo}`;
}

export function carSeoDescription(car: TfCar, filmTitles: string[]) {
  return clip(
    `${car.characterKo}(${car.characterEn})의 실제 차량은 ${car.nameKo}(${car.nameEn}). ${filmTitles.join(", ")}. ${car.oneLiner}`,
  );
}

export function filmSeoTitle(film: Pick<Film, "titleKo" | "year">) {
  return `${film.titleKo} (${film.year}) 차량`;
}

export function filmSeoDescription(film: Film, carCount: number) {
  const cars = carCount > 0 ? `등장 실제 차량 ${carCount}대.` : "실제 차량 없음.";
  return clip(`${film.year}년 ${film.titleKo}. 감독 ${film.directorKo}. ${cars} ${film.summary[0]}`);
}

type Crumb = { name: string; path: string };

export function breadcrumbLd(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function itemListLd(name: string, path: string, items: { name: string; path: string }[]) {
  return {
    "@type": "ItemList",
    name,
    url: canonicalUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.path),
    })),
  };
}

export function websiteLd(description: string) {
  return {
    "@type": "WebSite",
    name: SITE_NAME,
    url: canonicalUrl("/"),
    inLanguage: "ko",
    description,
  };
}

export function movieLd(film: Film) {
  const minutes = /^(\d+)/.exec(film.runtime)?.[1];
  return {
    "@type": "Movie",
    name: film.titleKo,
    alternateName: film.titleEn,
    datePublished: String(film.year),
    ...(minutes ? { duration: `PT${minutes}M` } : {}),
    director: { "@type": "Person", name: film.directorKo },
    description: film.summary[0],
    url: canonicalUrl(`/films/${film.slug}`),
    inLanguage: "ko",
  };
}

/** Thing, not Product: this archive does not sell the car. */
export function carThingLd(car: TfCar, imageUrl?: string) {
  return {
    "@type": "Thing",
    additionalType: "https://schema.org/Vehicle",
    name: car.nameKo,
    alternateName: car.nameEn,
    description: car.oneLiner,
    url: canonicalUrl(`/cars/${car.slug}`),
    brand: { "@type": "Brand", name: car.brandKo },
    ...(imageUrl ? { image: imageUrl } : {}),
  };
}

export function jsonLd(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
