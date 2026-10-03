import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { carsForFilm } from "@/data/cars";
import { films } from "@/data/films";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "트랜스포머 영화 순서",
  description:
    "트랜스포머 실사 영화 7편과 애니메이션 트랜스포머 ONE. 개봉 연도, 감독, 한국어 제목, 영화별 등장 차량 수를 순서대로 정리했습니다.",
  path: "/films",
});

export default function FilmsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          itemListLd(
            "트랜스포머 영화 순서",
            "/films",
            films.map((film) => ({ name: `${film.titleKo} (${film.year})`, path: `/films/${film.slug}` })),
          ),
        ])}
      />
      <h1 className="font-serif text-3xl text-paper">트랜스포머 영화 순서</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        개봉 순서입니다. 마이클 베이가 1~5편을 연출했고, 《범블비》는 1987년이 배경인 스핀오프,
        《비스트의 서막》은 1994년이 배경입니다. 이야기 속 시간 순서로 보면 《범블비》 → 《비스트의 서막》 → 1편 순이 됩니다.
        애니메이션 《트랜스포머 ONE》은 지구 차량이 나오지 않아 차량 목록에는 없습니다.
      </p>
      <ol className="mt-8 space-y-4">
        {films.map((film) => {
          const count = carsForFilm(film.slug).length;
          return (
            <li key={film.slug}>
              <Link
                href={`/films/${film.slug}`}
                className="block rounded-lg border border-line p-5 hover:border-gold/60"
                style={{ backgroundImage: film.posterTone }}
              >
                <p className="text-xs text-gold">
                  {film.n}. {film.year} · {film.kind}
                </p>
                <h2 className="mt-1 font-serif text-2xl text-paper">
                  {film.titleKo} <span className="text-base text-muted">({film.titleEn})</span>
                </h2>
                <p className="mt-1 text-sm text-muted">
                  감독 {film.directorKo} · {film.runtime} · {count > 0 ? `차량 ${count}대` : "실제 차량 없음"}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-paper/90">{film.summary[0]}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
