import type { Faction } from "@/data/cars";

const style: Record<Faction, string> = {
  오토봇: "border-[#c65e32]/60 text-[#e08a62]",
  디셉티콘: "border-[#8a6ac6]/60 text-[#b39ae0]",
  테러콘: "border-[#9aa3ad]/60 text-[#c3cad1]",
  기타: "border-line text-muted",
};

export function FactionBadge({ faction }: { faction: Faction }) {
  return (
    <span className={`rounded-full border px-2 py-0.5 text-[11px] ${style[faction]}`}>{faction}</span>
  );
}
