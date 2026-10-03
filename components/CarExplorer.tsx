"use client";

import { useMemo, useState } from "react";
import { CarCard } from "@/components/CarCard";
import { cars, type Faction, type TfCar, type VehicleKind } from "@/data/cars";
import { films } from "@/data/films";

const tabs = [
  { id: "film", label: "영화별" },
  { id: "faction", label: "진영별" },
  { id: "kind", label: "종류별" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const FACTIONS: Faction[] = ["오토봇", "디셉티콘", "테러콘", "기타"];
const KINDS: VehicleKind[] = ["트럭", "스포츠카", "승용차", "모터사이클", "군용·특수"];

function Grid({ items }: { items: TfCar[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((car) => (
        <CarCard key={car.slug} car={car} />
      ))}
    </div>
  );
}

export function CarExplorer() {
  const [tab, setTab] = useState<TabId>("film");

  const groups = useMemo(() => {
    if (tab === "film") {
      return films
        .map((film) => ({
          key: film.slug,
          title: `${film.year} · ${film.titleKo}`,
          // 여러 편에 나오는 차는 처음 나온 영화에만 묶습니다.
          items: cars.filter((car) => car.filmSlugs[0] === film.slug),
        }))
        .filter((group) => group.items.length > 0);
    }
    if (tab === "faction") {
      return FACTIONS.map((faction) => ({
        key: faction,
        title: faction,
        items: cars.filter((car) => car.faction === faction),
      })).filter((group) => group.items.length > 0);
    }
    return KINDS.map((kind) => ({
      key: kind,
      title: kind,
      items: cars.filter((car) => car.kind === kind),
    })).filter((group) => group.items.length > 0);
  }, [tab]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-4" role="tablist">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            onClick={() => setTab(item.id)}
            className={`rounded-full px-4 py-1.5 text-sm whitespace-nowrap ${
              tab === item.id ? "bg-gold text-bg" : "border border-line text-muted"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {tab === "film" ? (
        <p className="mb-6 text-xs text-muted">여러 편에 나오는 차는 처음 나온 영화 아래에 둡니다.</p>
      ) : null}
      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.key}>
            <h2 className="mb-4 font-serif text-xl text-gold">
              {group.title} <span className="text-sm text-muted">{group.items.length}대</span>
            </h2>
            <Grid items={group.items} />
          </section>
        ))}
      </div>
    </div>
  );
}
