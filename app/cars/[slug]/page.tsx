import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CarCard } from "@/components/CarCard";
import { FactionBadge } from "@/components/FactionBadge";
import { JsonLd } from "@/components/JsonLd";
import { SameBrandCars } from "@/components/SameBrandCars";
import { SisterCta } from "@/components/SisterCta";
import { Sources } from "@/components/Sources";
import { brandSlug, cars, getCar } from "@/data/cars";
import { getFilm } from "@/data/films";
import {
  breadcrumbLd,
  carSeoDescription,
  carSeoTitle,
  carThingLd,
  jsonLd,
  pageMetadata,
} from "@/lib/seo";
import { AUTOPIX_GUIDES, TF_CAR_CTA_LABEL, autopixGuideUrl } from "@/lib/site";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

function filmsOf(slugs: string[]) {
  return slugs.map((slug) => getFilm(slug)).filter((film): film is NonNullable<typeof film> => Boolean(film));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return { title: "영화 속 차량" };
  return pageMetadata({
    title: carSeoTitle(car),
    description: carSeoDescription(car, filmsOf(car.filmSlugs).map((film) => `${film.titleKo}(${film.year})`)),
    path: `/cars/${car.slug}`,
  });
}

export default async function CarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();
  const carFilms = filmsOf(car.filmSlugs);
  const sameCharacter = cars.filter((other) => other.slug !== car.slug && other.characterEn === car.characterEn);
  const guide = AUTOPIX_GUIDES[car.guide];

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "차량", path: "/cars" },
            { name: `${car.characterKo} · ${car.nameKo}`, path: `/cars/${car.slug}` },
          ]),
          carThingLd(car),
        ])}
      />
      <Breadcrumbs
        items={[{ href: "/", label: "홈" }, { href: "/cars", label: "트랜스포머 차량" }, { label: car.characterKo }]}
      />

      <header className="mt-5 rounded-2xl border border-line bg-[radial-gradient(circle_at_top_left,#C6A75E22,transparent_60%)] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <FactionBadge faction={car.faction} />
          <span className="rounded-full border border-gold/40 px-2 py-0.5 text-[11px] text-gold">{car.kind}</span>
        </div>
        <p className="mt-4 text-sm text-muted">
          {car.characterKo} ({car.characterEn})
        </p>
        <h1 className="mt-1 font-serif text-3xl leading-tight text-paper">{car.nameKo}</h1>
        <p className="mt-1 text-sm text-muted">{car.nameEn}</p>
        <p className="mt-4 text-base leading-relaxed text-paper">{car.oneLiner}</p>
      </header>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">한눈에</h2>
        <dl className="mt-3 divide-y divide-line rounded-lg border border-line text-sm">
          <div className="flex gap-3 px-4 py-3">
            <dt className="w-20 shrink-0 text-muted">캐릭터</dt>
            <dd className="text-paper">
              {car.characterKo} · {car.faction}
            </dd>
          </div>
          <div className="flex gap-3 px-4 py-3">
            <dt className="w-20 shrink-0 text-muted">실제 차량</dt>
            <dd className="text-paper">
              {car.nameKo} <span className="text-muted">({car.nameEn})</span>
            </dd>
          </div>
          <div className="flex gap-3 px-4 py-3">
            <dt className="w-20 shrink-0 text-muted">브랜드</dt>
            <dd>
              <Link href={`/brands#${brandSlug(car.brand)}`} className="text-paper hover:text-gold">
                {car.brandKo} ({car.brand})
              </Link>
            </dd>
          </div>
          <div className="flex gap-3 px-4 py-3">
            <dt className="w-20 shrink-0 text-muted">등장 영화</dt>
            <dd className="flex flex-wrap gap-x-3 gap-y-1">
              {carFilms.map((film) => (
                <Link key={film.slug} href={`/films/${film.slug}`} className="text-paper hover:text-gold">
                  {film.titleKo} ({film.year})
                </Link>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="font-serif text-xl text-gold">영화 속 이 차</h2>
        {car.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-paper">
            {paragraph}
          </p>
        ))}
        {car.uncertain ? (
          <p className="rounded-lg border border-line bg-card p-4 text-xs leading-6 text-muted">
            <span className="mr-1 text-gold">자료 차이</span>
            {car.uncertain}
          </p>
        ) : null}
      </section>

      <div className="mt-8 rounded-lg border border-gold/50 bg-card p-5">
        <p className="text-sm leading-7 text-paper">
          {car.characterKo}처럼 변신은 못 해도, 내 차는 손볼 수 있습니다. 촬영 차량은 팔지 않고, 자동차 용품은 오토픽스에서 봅니다.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <SisterCta label={TF_CAR_CTA_LABEL} content={car.slug} />
          <a
            href={autopixGuideUrl(car.guide, car.slug)}
            className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-gold"
          >
            오토픽스 가이드 · {guide.label}
          </a>
        </div>
      </div>

      {sameCharacter.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">{car.characterKo}의 다른 차</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sameCharacter.map((other) => (
              <CarCard key={other.slug} car={other} />
            ))}
          </div>
        </section>
      ) : null}

      <SameBrandCars car={car} />

      <p className="mt-8 text-sm">
        <Link href="/cars" className="text-gold">
          트랜스포머 차량 전체 →
        </Link>
      </p>

      <Sources sources={car.sources} />
    </article>
  );
}
