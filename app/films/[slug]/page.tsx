import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AutopixBanner } from "@/components/AutopixBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CarCard } from "@/components/CarCard";
import { JsonLd } from "@/components/JsonLd";
import { Sources } from "@/components/Sources";
import { carsForFilm } from "@/data/cars";
import { films, getFilm } from "@/data/films";
import {
  breadcrumbLd,
  filmSeoDescription,
  filmSeoTitle,
  itemListLd,
  jsonLd,
  movieLd,
  pageMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
  return films.map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilm(slug);
  if (!film) return { title: "영화" };
  return pageMetadata({
    title: filmSeoTitle(film),
    description: filmSeoDescription(film, carsForFilm(film.slug).length),
    path: `/films/${film.slug}`,
  });
}

export default async function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = getFilm(slug);
  if (!film) notFound();
  const filmCars = carsForFilm(film.slug);
  const index = films.findIndex((item) => item.slug === film.slug);
  const prev = index > 0 ? films[index - 1] : undefined;
  const next = index < films.length - 1 ? films[index + 1] : undefined;

  return (
    <article className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "영화", path: "/films" },
            { name: film.titleKo, path: `/films/${film.slug}` },
          ]),
          movieLd(film),
          ...(filmCars.length > 0
            ? [
                itemListLd(
                  `${film.titleKo} 등장 차량`,
                  `/films/${film.slug}`,
                  filmCars.map((car) => ({ name: `${car.characterKo} · ${car.nameKo}`, path: `/cars/${car.slug}` })),
                ),
              ]
            : []),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/films", label: "영화" }, { label: film.titleKo }]} />

      <header className="mt-5 rounded-2xl border border-line p-6 sm:p-8" style={{ backgroundImage: film.posterTone }}>
        <p className="text-xs tracking-wide text-gold">
          {film.n}번째 · {film.year} · {film.kind}
        </p>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-paper sm:text-4xl">{film.titleKo}</h1>
        <p className="mt-1 text-sm text-muted">
          {film.titleEn}
          {film.altTitleKo ? ` · 다른 표기 《${film.altTitleKo}》` : ""}
        </p>
        <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          <div className="flex gap-2">
            <dt className="w-14 shrink-0 text-muted">감독</dt>
            <dd className="text-paper">
              {film.directorKo} ({film.directorEn})
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-14 shrink-0 text-muted">개봉</dt>
            <dd className="text-paper">{film.usRelease}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-14 shrink-0 text-muted">출연</dt>
            <dd className="text-paper">{film.castKo}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-14 shrink-0 text-muted">상영</dt>
            <dd className="text-paper">{film.runtime}</dd>
          </div>
        </dl>
      </header>

      <section className="mt-8 max-w-3xl space-y-4">
        <h2 className="font-serif text-xl text-gold">줄거리와 차</h2>
        {film.summary.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-paper">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-gold">
          {film.titleKo} 등장 차량 {filmCars.length > 0 ? `${filmCars.length}대` : ""}
        </h2>
        {film.noCarsNote ? (
          <p className="mt-3 max-w-3xl rounded-lg border border-line bg-card p-4 text-sm leading-7 text-muted">
            {film.noCarsNote}
          </p>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filmCars.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        )}
      </section>

      <div className="mt-10">
        <AutopixBanner content={`film-${film.slug}`} />
      </div>

      <nav className="mt-10 grid grid-cols-2 gap-3 text-sm" aria-label="이전·다음 영화">
        {prev ? (
          <Link href={`/films/${prev.slug}`} className="rounded-lg border border-line p-3 hover:border-gold/60">
            <span className="text-[11px] text-muted">← 이전</span>
            <span className="mt-1 block text-paper">{prev.titleKo}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/films/${next.slug}`}
            className="rounded-lg border border-line p-3 text-right hover:border-gold/60"
          >
            <span className="text-[11px] text-muted">다음 →</span>
            <span className="mt-1 block text-paper">{next.titleKo}</span>
          </Link>
        ) : null}
      </nav>

      <Sources sources={film.sources} />
    </article>
  );
}
