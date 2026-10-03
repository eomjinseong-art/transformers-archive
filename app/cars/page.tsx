import type { Metadata } from "next";
import { AutopixBanner } from "@/components/AutopixBanner";
import { CarExplorer } from "@/components/CarExplorer";
import { JsonLd } from "@/components/JsonLd";
import { cars } from "@/data/cars";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "트랜스포머 차 종류",
  description: `트랜스포머 영화 속 실제 차량 ${cars.length}대. 옵티머스 프라임의 피터빌트, 범블비의 카마로와 비틀, 록다운의 람보르기니까지 캐릭터별로 정리했습니다.`,
  path: "/cars",
});

export default function CarsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          itemListLd(
            "트랜스포머 차 종류",
            "/cars",
            cars.map((car) => ({ name: `${car.characterKo} · ${car.nameKo}`, path: `/cars/${car.slug}` })),
          ),
        ])}
      />
      <h1 className="font-serif text-3xl text-paper">트랜스포머 차 종류</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        오토봇·디셉티콘·테러콘이 변신한 실제 차량 {cars.length}대입니다. 비행기·탱크·가전제품처럼 도로 차량이
        아닌 변신 모드와, 이름 없이 스친 차는 뺐습니다. 자료끼리 연식이나 모델명이 다르면 차량 페이지에 함께 적었습니다.
      </p>
      <div className="mt-6">
        <AutopixBanner content="cars" />
      </div>
      <div className="mt-8">
        <CarExplorer />
      </div>
    </div>
  );
}
