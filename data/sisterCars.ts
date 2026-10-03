import {
  BOND_ARCHIVE_LABEL,
  BOND_ARCHIVE_URL,
  FF_ARCHIVE_LABEL,
  FF_ARCHIVE_URL,
  MI_ARCHIVE_LABEL,
  MI_ARCHIVE_URL,
  archiveNetworkUrl,
} from "@/lib/site";
import { filmArchiveCarsForBrand } from "./filmArchives";

export type SisterCarLink = {
  brand: string;
  siteLabel: string;
  nameKo: string;
  nameEn: string;
  href: string;
};

type SisterCar = {
  brand: string;
  base: string;
  siteLabel: string;
  slug: string;
  nameKo: string;
  nameEn: string;
};

const FF = { base: FF_ARCHIVE_URL, siteLabel: FF_ARCHIVE_LABEL };
const MI = { base: MI_ARCHIVE_URL, siteLabel: MI_ARCHIVE_LABEL };
const BOND = { base: BOND_ARCHIVE_URL, siteLabel: BOND_ARCHIVE_LABEL };

/**
 * 자매 아카이브의 /cars/[slug] 주소. 2026-10-03에 각 주소가 HTTP 200이고
 * 해당 아카이브의 <title>을 돌려주는 것을 확인했습니다.
 */
const SISTER_CARS: SisterCar[] = [
  { brand: "Chevrolet", ...FF, slug: "yenko-camaro", nameKo: "1969 쉐보레 옌코 카마로 SYC", nameEn: "1969 Chevrolet Yenko Camaro SYC" },
  { brand: "Chevrolet", ...FF, slug: "camaro-f7-1968", nameKo: "1968 쉐보레 카마로 Z/28", nameEn: "1968 Chevrolet Camaro Z/28" },
  { brand: "Chevrolet", ...FF, slug: "chevrolet-corvette-grand-sport-replica", nameKo: "쉐보레 콜벳 그랜드 스포츠 로드스터 레플리카", nameEn: "Chevrolet Corvette Grand Sport Roadster replica" },
  { brand: "Chevrolet", ...FF, slug: "impala-1961", nameKo: "1961 쉐보레 임팔라", nameEn: "1961 Chevrolet Impala" },
  { brand: "Volkswagen", ...FF, slug: "jetta-mk3", nameKo: "MK3 폭스바겐 제타", nameEn: "MK3 Volkswagen Jetta" },
  { brand: "Mercedes-Benz", ...FF, slug: "w140-han", nameKo: "1992 메르세데스-벤츠 W140", nameEn: "1992 Mercedes-Benz W140" },
  { brand: "Peterbilt", ...FF, slug: "peterbilt-samoa", nameKo: "영화용 피터빌트", nameEn: "Made-for-movie Peterbilt" },
  { brand: "Lamborghini", ...FF, slug: "gallardo", nameKo: "람보르기니 가야르도", nameEn: "Lamborghini Gallardo" },
  { brand: "Lamborghini", ...FF, slug: "murcielago-f8", nameKo: "람보르기니 무르시엘라고", nameEn: "Lamborghini Murciélago" },
  { brand: "Lamborghini", ...MI, slug: "lamborghini-gallardo", nameKo: "람보르기니 가야르도", nameEn: "Lamborghini Gallardo" },
  { brand: "Pagani", ...FF, slug: "huayra-x", nameKo: "파가니 후에이라 트리콜로레", nameEn: "Pagani Huayra Tricolore" },
  { brand: "Porsche", ...FF, slug: "porsche-911-x", nameKo: "포르쉐 911", nameEn: "Porsche 911" },
  { brand: "Nissan", ...FF, slug: "skyline-r34", nameKo: "1999 닛산 스카이라인 GT-R R34", nameEn: "1999 Nissan Skyline GT-R R34" },
  { brand: "Nissan", ...FF, slug: "gtr-r35", nameKo: "2012 닛산 GT-R R35", nameEn: "2012 Nissan GT-R (R35)" },
  { brand: "Plymouth", ...FF, slug: "gtx-1971", nameKo: "1971 플리머스 GTX", nameEn: "1971 Plymouth GTX" },
  { brand: "Plymouth", ...FF, slug: "road-runner", nameKo: "1970 플리머스 로드 러너", nameEn: "1970 Plymouth Road Runner" },
  { brand: "Ford", ...FF, slug: "mustang-1967", nameKo: "1967 포드 머스탱 패스트백", nameEn: "1967 Ford Mustang Fastback" },
  { brand: "Ford", ...BOND, slug: "ford-mustang-bond", nameKo: "포드 머스탱", nameEn: "Ford Mustang" },
  { brand: "Pontiac", ...FF, slug: "fiero-f9", nameKo: "폰티액 피에로", nameEn: "Pontiac Fiero" },
  { brand: "Audi", ...MI, slug: "audi-tt", nameKo: "아우디 TT 로드스터 (8N)", nameEn: "Audi TT Roadster (8N)" },
];

export function sisterCarsForBrands(brands: string[]): SisterCarLink[] {
  const wanted = new Set(brands);
  return SISTER_CARS.filter((car) => wanted.has(car.brand)).map((car) => ({
    brand: car.brand,
    siteLabel: car.siteLabel,
    nameKo: car.nameKo,
    nameEn: car.nameEn,
    href: archiveNetworkUrl(car.base, `/cars/${car.slug}`, "car"),
  })).concat(
    brands.flatMap((brand) =>
      filmArchiveCarsForBrand(brand).map(({ brand: b, siteLabel, nameKo, nameEn, href }) => ({
        brand: b,
        siteLabel,
        nameKo,
        nameEn,
        href,
      })),
    ),
  );
}
