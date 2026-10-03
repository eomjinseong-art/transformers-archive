import { archiveNetworkUrl } from "@/lib/site";

/**
 * 한 편짜리 영화 아카이브 세 곳. 2026-10-03에 각 주소와 차량 페이지가 HTTP 200인 것을 확인했습니다.
 */
export const FILM_ARCHIVES = [
  {
    id: "fvf",
    label: "포드 V 페라리 아카이브",
    url: process.env.NEXT_PUBLIC_FVF_ARCHIVE_URL ?? "https://fordvferrari-archive.vercel.app",
    blurb: "《포드 V 페라리》(2019). 1966년 르망의 GT40 Mk II와 페라리 330 P3, 실화와 영화의 차이.",
  },
  {
    id: "rush",
    label: "러쉬 아카이브",
    url: process.env.NEXT_PUBLIC_RUSH_ARCHIVE_URL ?? "https://rush-archive.vercel.app",
    blurb: "《러시: 더 라이벌》(2013). 1976년 F1, 헌트의 맥라렌 M23과 라우다의 페라리 312T2.",
  },
  {
    id: "gt",
    label: "그란 투리스모 아카이브",
    url: process.env.NEXT_PUBLIC_GT_ARCHIVE_URL ?? "https://granturismo-archive.vercel.app",
    blurb: "《그란 투리스모》(2023). 게이머 출신 레이서의 실화와 닛산 GT-R GT3, 르망의 차.",
  },
] as const;

export type FilmArchiveId = (typeof FILM_ARCHIVES)[number]["id"];

export type FilmArchiveCar = {
  archive: FilmArchiveId;
  brand: string;
  slug: string;
  nameKo: string;
  nameEn: string;
};

/** 이 아카이브와 브랜드가 겹치는 차만 둡니다. */
export const FILM_ARCHIVE_CARS: FilmArchiveCar[] = [
  { archive: "fvf", brand: "Ford", slug: "ford-gt40-mk2", nameKo: "포드 GT40 Mk II", nameEn: "Ford GT40 Mk II" },
  { archive: "fvf", brand: "Ford", slug: "ford-gt40-mk1", nameKo: "포드 GT40 Mk I (초기 GT 프로토타입)", nameEn: "Ford GT40 Mk I / early Ford GT prototype" },
  { archive: "fvf", brand: "Ferrari", slug: "ferrari-330-p3", nameKo: "페라리 330 P3", nameEn: "Ferrari 330 P3" },
  { archive: "fvf", brand: "Ford", slug: "ford-mustang-1965", nameKo: "포드 머스탱 (1세대, 1965년형)", nameEn: "Ford Mustang (first generation, 1965 model year)" },
  { archive: "fvf", brand: "Ferrari", slug: "ferrari-250-gt-swb", nameKo: "페라리 250 GT SWB 베를리네타 (SEFAC)", nameEn: "Ferrari 250 GT SWB Berlinetta 'SEFAC'" },
  { archive: "fvf", brand: "Ferrari", slug: "ferrari-250-gto", nameKo: "페라리 250 GTO", nameEn: "Ferrari 250 GTO" },
  { archive: "fvf", brand: "Ferrari", slug: "ferrari-275-gtb", nameKo: "페라리 275 GTB", nameEn: "Ferrari 275 GTB" },
  { archive: "fvf", brand: "Porsche", slug: "porsche-906", nameKo: "포르쉐 906 (카레라 6)", nameEn: "Porsche 906 (Carrera 6)" },
  { archive: "fvf", brand: "Mercedes-Benz", slug: "mercedes-benz-600", nameKo: "메르세데스-벤츠 600 (W100)", nameEn: "Mercedes-Benz 600 (W100)" },
  { archive: "fvf", brand: "Ford", slug: "ford-country-squire", nameKo: "포드 컨트리 스콰이어 (1963년형)", nameEn: "1963 Ford Country Squire" },
  { archive: "rush", brand: "Ferrari", slug: "ferrari-312t2", nameKo: "페라리 312T2", nameEn: "Ferrari 312T2" },
  { archive: "rush", brand: "Ferrari", slug: "ferrari-312t", nameKo: "페라리 312T", nameEn: "Ferrari 312T" },
  { archive: "gt", brand: "Nissan", slug: "nissan-gt-r-nismo-gt3", nameKo: "닛산 GT-R 니스모 GT3", nameEn: "Nissan GT-R Nismo GT3" },
  { archive: "gt", brand: "Nissan", slug: "nissan-370z", nameKo: "닛산 370Z (페어레이디 Z, Z34)", nameEn: "Nissan 370Z (Fairlady Z Z34)" },
  { archive: "gt", brand: "Nissan", slug: "nissan-gt-r-r35", nameKo: "닛산 GT-R (R35, 2017년 이후형)", nameEn: "Nissan GT-R (R35, MY17 facelift)" },
  { archive: "gt", brand: "Nissan", slug: "nissan-gt-r-nismo", nameKo: "닛산 GT-R 니스모 (R35)", nameEn: "Nissan GT-R Nismo (R35)" },
  { archive: "gt", brand: "Nissan", slug: "nissan-gt-r-lm-nismo", nameKo: "닛산 GT-R LM 니스모", nameEn: "Nissan GT-R LM Nismo" },
  { archive: "gt", brand: "Porsche", slug: "porsche-911-gt3-rs-992", nameKo: "포르쉐 911 GT3 RS (992)", nameEn: "Porsche 911 GT3 RS (992)" },
  { archive: "gt", brand: "Volkswagen", slug: "volkswagen-corrado-vr6", nameKo: "폭스바겐 코라도 VR6", nameEn: "Volkswagen Corrado VR6" },
  { archive: "gt", brand: "Lamborghini", slug: "lamborghini-huracan-gt3", nameKo: "람보르기니 우라칸 GT3", nameEn: "Lamborghini Huracán GT3" },
  { archive: "gt", brand: "Lamborghini", slug: "lamborghini-huracan-sto", nameKo: "람보르기니 우라칸 STO", nameEn: "Lamborghini Huracán STO" },
  { archive: "gt", brand: "Nissan", slug: "nissan-ariya", nameKo: "닛산 아리야", nameEn: "Nissan Ariya" },
  { archive: "gt", brand: "Ford", slug: "ford-gt-2005", nameKo: "포드 GT (1세대)", nameEn: "Ford GT (first generation)" },
  { archive: "gt", brand: "Audi", slug: "audi-r8-lms-evo", nameKo: "아우디 R8 LMS 에보", nameEn: "Audi R8 LMS Evo" },
];

function archiveOf(id: FilmArchiveId) {
  return FILM_ARCHIVES.find((a) => a.id === id)!;
}

export function filmArchiveCarsForBrand(brand: string) {
  return FILM_ARCHIVE_CARS.filter((car) => car.brand === brand).map((car) => {
    const archive = archiveOf(car.archive);
    return {
      ...car,
      siteLabel: archive.label,
      href: archiveNetworkUrl(archive.url, `/cars/${car.slug}`, "car"),
    };
  });
}
