import type { Metadata } from "next";
import { WIKI_CAST } from "@/data/sources";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "출처와 기준",
  description: "트랜스포머 아카이브가 차량 정보를 고르는 기준과 참고한 자료. 자료끼리 연식이 다르면 어떻게 적는지 설명합니다.",
  path: "/sources",
});

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 text-sm leading-7 text-paper">
      <h1 className="font-serif text-3xl">출처와 기준</h1>
      <h2 className="mt-8 font-serif text-xl text-gold">무엇을 실었나</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>오토봇·디셉티콘·테러콘이 실제 도로 차량(트럭·승용차·오토바이·군용 차량)으로 변신한 경우만 차량 페이지로 만듭니다.</li>
        <li>비행기, 탱크, 헬리콥터, 가전제품, 동물 모드는 차량 목록에서 뺐습니다.</li>
        <li>실사 영화 7편을 다룹니다. 애니메이션 《트랜스포머 ONE》은 사이버트론에서만 이야기가 벌어져 영화 페이지만 두었습니다.</li>
      </ul>
      <h2 className="mt-8 font-serif text-xl text-gold">어떻게 확인했나</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>각 영화의 영어 위키백과 출연진 문단과 「트랜스포머 영화 시리즈 등장인물 목록」을 기본으로 삼았습니다.</li>
        <li>팬 위키 TFWiki의 캐릭터 문서로 줄거리 속 장면을 맞춰 보았습니다.</li>
        <li>두 자료가 연식·모델명을 다르게 적으면, 제목에서는 확실한 부분만 쓰고 페이지 안 &lsquo;자료 차이&rsquo; 칸에 양쪽을 모두 적습니다.</li>
      </ul>
      <h2 className="mt-8 font-serif text-xl text-gold">자주 틀리는 것</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>4·5편 옵티머스 프라임은 웨스턴 스타 5700입니다. 웨스턴 스타 4900은 5편의 디셉티콘 온슬로트입니다.</li>
        <li>《범블비》·《비스트의 서막》의 옵티머스는 1987년형 프레이트라이너 FLA입니다. 프레이트라이너 아고시는 4편 갈바트론입니다.</li>
      </ul>
      <h2 className="mt-8 font-serif text-xl text-gold">사진</h2>
      <p className="mt-3">포스터와 영화 스틸은 쓰지 않습니다. 차량 카드는 색 배경만 씁니다.</p>
      <p className="mt-8 text-muted">
        기본 자료:{" "}
        <a href={WIKI_CAST.href} className="underline decoration-line underline-offset-4 hover:text-gold" target="_blank" rel="noopener noreferrer">
          {WIKI_CAST.label}
        </a>
        {" · "}
        <a href="https://tfwiki.net/" className="underline decoration-line underline-offset-4 hover:text-gold" target="_blank" rel="noopener noreferrer">
          TFWiki
        </a>
      </p>
    </div>
  );
}
