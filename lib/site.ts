export const SITE_NAME = "트랜스포머 아카이브";
export const SITE_TAGLINE =
  "2007년 《트랜스포머》부터 2023년 《트랜스포머: 비스트의 서막》까지";
export const SITE_SUB =
  "실사 영화 7편과 애니메이션 《트랜스포머 ONE》, 오토봇·디셉티콘이 변신한 실제 차량을 모았습니다.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://transformers-archive.vercel.app";

/** Live 007 film archive. bond-archive.vercel.app is a different photo service. */
export const BOND_ARCHIVE_URL =
  process.env.NEXT_PUBLIC_BOND_ARCHIVE_URL ??
  "https://bond-archive-two.vercel.app";

export const MI_ARCHIVE_URL =
  process.env.NEXT_PUBLIC_MI_ARCHIVE_URL ?? "https://mi-archive.vercel.app";

export const FF_ARCHIVE_URL =
  process.env.NEXT_PUBLIC_FF_ARCHIVE_URL ?? "https://ff-archive.vercel.app";

export const SISTER_SITE_URL =
  process.env.NEXT_PUBLIC_SISTER_SITE_URL ?? "https://car-parts-cpang.vercel.app";

export const BOND_ARCHIVE_LABEL = "007 본드 아카이브";
export const MI_ARCHIVE_LABEL = "미션 임파서블 아카이브";
export const FF_ARCHIVE_LABEL = "분노의 질주 아카이브";
export const AUTOPIX_LABEL = "오토픽스";
export const TF_CAR_CTA_LABEL = "이 차량 용품 보러 가기 · 오토픽스";

export const FAN_SITE_DISCLAIMER =
  "트랜스포머 아카이브는 영화를 좋아하는 팬이 만든 비공식 팬사이트입니다. 해즈브로, 파라마운트 픽처스 및 영화 제작사와 어떤 관계도 없으며, 영화 제목·캐릭터 이름과 상표는 각 권리자의 것입니다. 포스터와 영화 스틸은 쓰지 않습니다.";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/films", label: "영화" },
  { href: "/cars", label: "차량" },
  { href: "/brands", label: "브랜드" },
  { href: "/sources", label: "출처" },
] as const;

export type NetworkMedium = "header" | "footer" | "home" | "car";

function withUtm(
  base: string,
  path = "/",
  opts?: { medium?: string; campaign?: string; content?: string },
) {
  const url = new URL(path, base);
  url.searchParams.set("utm_source", "transformers-archive");
  url.searchParams.set("utm_medium", opts?.medium ?? "header");
  url.searchParams.set("utm_campaign", opts?.campaign ?? "tf-car");
  if (opts?.content) url.searchParams.set("utm_content", opts.content);
  return url.toString();
}

export function archiveNetworkUrl(base: string, path = "/", medium: NetworkMedium = "header") {
  return withUtm(base, path, { medium, campaign: "archive-network" });
}

export function bondArchiveUrl(medium: NetworkMedium = "header") {
  return archiveNetworkUrl(BOND_ARCHIVE_URL, "/", medium);
}

export function miArchiveUrl(medium: NetworkMedium = "header") {
  return archiveNetworkUrl(MI_ARCHIVE_URL, "/", medium);
}

export function ffArchiveUrl(medium: NetworkMedium = "header") {
  return archiveNetworkUrl(FF_ARCHIVE_URL, "/", medium);
}

export function sisterUrl(
  path = "/",
  opts?: { medium?: string; campaign?: string; content?: string },
) {
  return withUtm(SISTER_SITE_URL, path, opts);
}

export function autopixUrl(medium: "header" | "footer" | "home" = "header") {
  return sisterUrl("/", { medium, campaign: "tf-car" });
}

/**
 * Car CTA. 오토픽스는 정적 단일 페이지라 카테고리·검색을 URL로 받지 않습니다
 * (카테고리는 화면 안 버튼으로만 바뀜). 그래서 홈으로 보내고, 어느 차에서
 * 왔는지는 utm_content=차량 slug로 남깁니다.
 */
export function tfCarCta(content?: string) {
  return sisterUrl("/", { medium: "cta", campaign: "tf-car", content });
}

/** 오토픽스 관리 가이드 (정적 페이지, HTTP 200 확인). */
export const AUTOPIX_GUIDES = {
  wash: { path: "/wiki/01-wash.html", label: "셀프 세차 기본 세트" },
  maintain: { path: "/wiki/02-maintain.html", label: "주기적으로 가는 소모품" },
  cabin: { path: "/wiki/03-cabin.html", label: "실내를 편하게" },
  electro: { path: "/wiki/04-electro.html", label: "거치·충전·하이패스" },
  safety: { path: "/wiki/05-safety.html", label: "트렁크에 둘 안전 용품" },
} as const;

export type AutopixGuideId = keyof typeof AUTOPIX_GUIDES;

export function autopixGuideUrl(id: AutopixGuideId, content?: string) {
  return sisterUrl(AUTOPIX_GUIDES[id].path, { medium: "cta", campaign: "tf-car", content });
}

export function displayTitle(titleKo: string, titleEn: string) {
  return `${titleKo} (${titleEn})`;
}
