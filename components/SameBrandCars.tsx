import Link from "next/link";
import { sameBrandCars, type TfCar } from "@/data/cars";
import { sisterCarsForBrands } from "@/data/sisterCars";

export function SameBrandCars({ car }: { car: TfCar }) {
  const inArchive = sameBrandCars(car);
  const sisters = sisterCarsForBrands([car.brand, ...(car.relatedBrands ?? [])]);
  if (inArchive.length === 0 && sisters.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">같은 브랜드 다른 차</h2>
      {inArchive.length > 0 ? (
        <>
          <p className="mt-2 text-xs leading-6 text-muted">트랜스포머 시리즈 안에서 같은 {car.brandKo} 차량입니다.</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {inArchive.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/cars/${item.slug}`}
                  className="block rounded-lg border border-line px-4 py-3 hover:border-gold/60"
                >
                  <span className="text-[11px] text-gold">{item.characterKo}</span>
                  <span className="mt-1 block text-sm text-paper">{item.nameKo}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {sisters.length > 0 ? (
        <>
          <p className="mt-5 text-xs leading-6 text-muted">
            다른 영화 아카이브의 같은 브랜드 차입니다. 주소는 각 사이트의 차량 페이지가 열리는 것을 확인한 것입니다.
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {sisters.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block rounded-lg border border-line px-4 py-3 hover:border-gold/60">
                  <span className="text-[11px] text-gold">{item.siteLabel}</span>
                  <span className="mt-1 block text-sm text-paper">
                    {item.nameKo} ({item.nameEn})
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}
