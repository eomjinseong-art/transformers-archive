import Link from "next/link";
import type { Metadata } from "next";
import { AutopixBanner } from "@/components/AutopixBanner";
import { CarCard } from "@/components/CarCard";
import { JsonLd } from "@/components/JsonLd";
import { brandSlug, brandsWithCars, cars, carsForFilm } from "@/data/cars";
import { LIVE_ACTION_COUNT, films } from "@/data/films";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { FILM_ARCHIVES } from "@/data/filmArchives";
import {
  BOND_ARCHIVE_LABEL,
  FF_ARCHIVE_LABEL,
  MI_ARCHIVE_LABEL,
  SITE_NAME,
  archiveNetworkUrl,
  SITE_SUB,
  SITE_TAGLINE,
  bondArchiveUrl,
  ffArchiveUrl,
  miArchiveUrl,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: SITE_NAME,
  description: `${SITE_TAGLINE}. ${SITE_SUB}`,
  path: "/",
});

const FEATURED = [
  "optimus-prime-peterbilt-379",
  "bumblebee-camaro-second-gen",
  "bumblebee-volkswagen-beetle",
  "lockdown-lamborghini-aventador",
  "hot-rod-lamborghini-centenario",
  "mirage-porsche-964-carrera-rs",
];

export default function HomePage() {
  const featured = FEATURED.map((slug) => cars.find((car) => car.slug === slug)).filter(
    (car): car is (typeof cars)[number] => Boolean(car),
  );
  const brands = brandsWithCars();
  const autobots = cars.filter((car) => car.faction === "오토봇").length;

  return (
    <div>
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <section className="border-b border-line bg-[radial-gradient(circle_at_20%_0%,#C6A75E22,transparent_55%)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="text-[11px] uppercase tracking-[0.26em] text-gold">Transformers Archive</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-paper sm:text-5xl">
            로봇보다 먼저,
            <br />
            차가 있었다
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-paper/90">{SITE_TAGLINE}.</p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
            <div className="rounded-lg border border-line bg-card/70 p-3">
              <dt className="text-[11px] text-muted">실사 영화</dt>
              <dd className="mt-1 font-serif text-2xl text-gold">{LIVE_ACTION_COUNT}편</dd>
            </div>
            <div className="rounded-lg border border-line bg-card/70 p-3">
              <dt className="text-[11px] text-muted">실제 차량</dt>
              <dd className="mt-1 font-serif text-2xl text-gold">{cars.length}대</dd>
            </div>
            <div className="rounded-lg border border-line bg-card/70 p-3">
              <dt className="text-[11px] text-muted">브랜드</dt>
              <dd className="mt-1 font-serif text-2xl text-gold">{brands.length}곳</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/cars" className="rounded-full bg-gold px-4 py-2 font-medium text-bg hover:bg-gold-dim">
              차량 전체 보기
            </Link>
            <Link href="/films" className="rounded-full border border-line px-4 py-2 text-paper hover:border-gold/60">
              영화 순서대로 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-3">
          <h2 className="font-serif text-2xl text-paper">대표 차량</h2>
          <Link href="/cars" className="text-sm text-muted hover:text-gold">
            {cars.length}대 전체 →
          </Link>
        </div>
        <p className="mt-2 text-sm text-muted">
          오토봇 {autobots}대, 디셉티콘·테러콘과 그 밖의 {cars.length - autobots}대. 캐릭터 → 실제 차 순서로 적었습니다.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="font-serif text-2xl text-paper">영화</h2>
        <ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {films.map((film) => {
            const count = carsForFilm(film.slug).length;
            return (
              <li key={film.slug}>
                <Link
                  href={`/films/${film.slug}`}
                  className="flex h-full items-start gap-4 rounded-lg border border-line p-4 hover:border-gold/60"
                  style={{ backgroundImage: film.posterTone }}
                >
                  <span className="font-serif text-3xl text-gold/80">{film.year}</span>
                  <span className="min-w-0">
                    <span className="block font-serif text-lg text-paper">{film.titleKo}</span>
                    <span className="mt-1 block text-xs text-muted">
                      {film.directorKo} · {film.kind} · {count > 0 ? `차량 ${count}대` : "실제 차량 없음"}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-serif text-2xl text-paper">브랜드로 보기</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {brands.map((entry) => (
            <li key={entry.brand}>
              <Link
                href={`/brands#${brandSlug(entry.brand)}`}
                className="inline-block rounded-full border border-line px-3 py-1.5 text-sm text-paper hover:border-gold/60 hover:text-gold"
              >
                {entry.brandKo} <span className="text-muted">{entry.cars.length}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <AutopixBanner content="home" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-[11px] uppercase tracking-[0.18em] text-gold">영화 속 자동차</p>
        <h2 className="mt-2 font-serif text-2xl text-paper">다른 영화 아카이브</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { href: ffArchiveUrl("home"), label: FF_ARCHIVE_LABEL, blurb: "수프라부터 차저까지, 패밀리의 차." },
            { href: bondArchiveUrl("home"), label: BOND_ARCHIVE_LABEL, blurb: "애스턴 마틴 DB5와 본드카." },
            { href: miArchiveUrl("home"), label: MI_ARCHIVE_LABEL, blurb: "에단 헌트 옆의 차와 바이크." },
            ...FILM_ARCHIVES.map((a) => ({ href: archiveNetworkUrl(a.url, "/", "home"), label: a.label, blurb: a.blurb })),
          ].map((site) => (
            <a key={site.label} href={site.href} className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
              <h3 className="font-serif text-lg text-paper">{site.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{site.blurb}</p>
              <p className="mt-3 text-sm text-gold">아카이브 열기 →</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
