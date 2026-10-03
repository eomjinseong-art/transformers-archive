import type { Source } from "./types";
import {
  WIKI_AOE,
  WIKI_BB,
  WIKI_DOTM,
  WIKI_ONE,
  WIKI_ROTB,
  WIKI_ROTF,
  WIKI_TF1,
  WIKI_TLK,
} from "./sources";

export type Film = {
  slug: string;
  n: number;
  titleKo: string;
  titleEn: string;
  /** 다른 한국어 표기가 널리 쓰일 때만. */
  altTitleKo?: string;
  year: number;
  usRelease: string;
  runtime: string;
  directorKo: string;
  directorEn: string;
  castKo: string;
  kind: "실사" | "실사 스핀오프" | "애니메이션";
  summary: string[];
  /** 실제 차량이 없는 작품이면 이유를 적습니다. */
  noCarsNote?: string;
  posterTone: string;
  sources: Source[];
};

const tone = {
  steel: "linear-gradient(165deg,#1c2430 0%,#0B0D10 48%,#c6a75e33 100%)",
  desert: "linear-gradient(165deg,#3a2a18 0%,#0B0D10 50%,#c6a75e33 100%)",
  moon: "linear-gradient(165deg,#141c28 0%,#0B0D10 50%,#9aa3ad33 100%)",
  rust: "linear-gradient(165deg,#3a2010 0%,#0B0D10 50%,#c67a3244 100%)",
  knight: "linear-gradient(165deg,#1a1a2a 0%,#0B0D10 50%,#8a734044 100%)",
  bee: "linear-gradient(165deg,#3a3418 0%,#0B0D10 46%,#e0c04055 100%)",
  beast: "linear-gradient(165deg,#102018 0%,#0B0D10 50%,#5e8a6a44 100%)",
  cyber: "linear-gradient(165deg,#10283a 0%,#0B0D10 50%,#3aa0c644 100%)",
};

export const films: Film[] = [
  {
    slug: "transformers-2007",
    n: 1,
    titleKo: "트랜스포머",
    titleEn: "Transformers",
    year: 2007,
    usRelease: "2007년 7월 3일 (미국)",
    runtime: "143분",
    directorKo: "마이클 베이",
    directorEn: "Michael Bay",
    castKo: "샤이아 라보프 · 메건 폭스 · 조시 더하멜",
    kind: "실사",
    summary: [
      "에너지의 근원 올스파크를 찾아 지구에 온 오토봇과 디셉티콘. 고등학생 샘 윗위키가 아버지와 고른 첫 차, 낡은 노란 카마로가 사실은 오토봇 범블비였다는 데서 이야기가 시작합니다.",
      "옵티머스 프라임의 피터빌트, 아이언하이드의 GMC 탑킥, 래칫의 허머 H2, 재즈의 폰티액 솔스티스까지 GM 계열 차가 대거 오토봇이 됐고, 디셉티콘 바리케이드는 경찰차로 위장합니다. 마지막은 도심 전투 '미션 시티'입니다.",
    ],
    posterTone: tone.steel,
    sources: [WIKI_TF1],
  },
  {
    slug: "revenge-of-the-fallen",
    n: 2,
    titleKo: "트랜스포머: 패자의 역습",
    titleEn: "Transformers: Revenge of the Fallen",
    year: 2009,
    usRelease: "2009년 6월 24일 (미국)",
    runtime: "150분",
    directorKo: "마이클 베이",
    directorEn: "Michael Bay",
    castKo: "샤이아 라보프 · 메건 폭스 · 조시 더하멜",
    kind: "실사",
    summary: [
      "대학에 들어간 샘의 머릿속에 사이버트론의 기호가 새겨지고, 되살아난 메가트론과 그의 스승 폴른이 지구의 태양을 노립니다. 무대는 상하이에서 이집트 사막까지 넓어집니다.",
      "콜벳 스팅레이 콘셉트 사이드스와이프, 쉐보레 비트·트랙스 쌍둥이, 쉐보레 볼트 졸트, 오토바이 3자매가 새로 합류하고, 건설 장비가 합체한 디버스테이터가 처음 등장합니다.",
    ],
    posterTone: tone.desert,
    sources: [WIKI_ROTF],
  },
  {
    slug: "dark-of-the-moon",
    n: 3,
    titleKo: "트랜스포머 3",
    titleEn: "Transformers: Dark of the Moon",
    altTitleKo: "트랜스포머: 달의 어둠",
    year: 2011,
    usRelease: "2011년 6월 29일 (미국)",
    runtime: "154분",
    directorKo: "마이클 베이",
    directorEn: "Michael Bay",
    castKo: "샤이아 라보프 · 로지 헌팅턴휘틀리 · 조시 더하멜",
    kind: "실사",
    summary: [
      "달 뒷면에 추락했던 오토봇 함선 '아크'와 그 안에 잠든 전임 지도자 센티넬 프라임. 그의 배신으로 시카고가 디셉티콘의 전장이 됩니다.",
      "페라리 458 디노, 메르세데스-벤츠 E550 큐, NASCAR 임팔라 레커스 3인방이 오토봇 쪽에 서고, 사운드웨이브는 메르세데스-벤츠 SLS AMG로 위장합니다.",
    ],
    posterTone: tone.moon,
    sources: [WIKI_DOTM],
  },
  {
    slug: "age-of-extinction",
    n: 4,
    titleKo: "트랜스포머: 사라진 시대",
    titleEn: "Transformers: Age of Extinction",
    year: 2014,
    usRelease: "2014년 6월 27일 (미국)",
    runtime: "165분",
    directorKo: "마이클 베이",
    directorEn: "Michael Bay",
    castKo: "마크 월버그 · 니콜라 펠츠 · 잭 레이너",
    kind: "실사",
    summary: [
      "시카고 전투 이후 정부 조직과 기업 KSI가 트랜스포머를 사냥하는 시대. 텍사스의 발명가 케이드 예거가 고철로 사 온 녹슨 트럭이 옵티머스 프라임이었습니다.",
      "부가티 베이론 드리프트, 콜벳 C7 크로스헤어, 오시코시 군용 트럭 하운드가 새로 합류하고, 람보르기니 아벤타도르를 탄 현상금 사냥꾼 록다운과 KSI가 만든 갈바트론·스팅어가 적으로 나옵니다. 다이노봇이 처음 등장합니다.",
    ],
    posterTone: tone.rust,
    sources: [WIKI_AOE],
  },
  {
    slug: "the-last-knight",
    n: 5,
    titleKo: "트랜스포머: 최후의 기사",
    titleEn: "Transformers: The Last Knight",
    year: 2017,
    usRelease: "2017년 6월 21일 (미국)",
    runtime: "149분",
    directorKo: "마이클 베이",
    directorEn: "Michael Bay",
    castKo: "마크 월버그 · 로라 해덕 · 앤서니 홉킨스",
    kind: "실사",
    summary: [
      "아서왕 전설 속 멀린의 지팡이와 트랜스포머가 지구 역사에 숨어 있었다는 설정. 사이버트론이 지구로 다가오고, 옵티머스는 창조주를 자처하는 퀸테사에게 붙잡힙니다.",
      "프랑스어 억양의 핫 로드가 시트로엥 DS에서 람보르기니 첸테나리오로 갈아타고, 드리프트는 메르세데스-AMG GT R, 하운드는 우니모그로 차를 바꿉니다. 범블비는 6세대 카마로가 됩니다.",
    ],
    posterTone: tone.knight,
    sources: [WIKI_TLK],
  },
  {
    slug: "bumblebee",
    n: 6,
    titleKo: "범블비",
    titleEn: "Bumblebee",
    year: 2018,
    usRelease: "2018년 12월 21일 (미국)",
    runtime: "114분",
    directorKo: "트래비스 나이트",
    directorEn: "Travis Knight",
    castKo: "헤일리 스타인펠드 · 존 시나",
    kind: "실사 스핀오프",
    summary: [
      "1987년 캘리포니아. 사이버트론에서 도망쳐 온 정찰병 B-127이 목소리와 기억을 잃고 노란 폭스바겐 비틀로 숨어 지내다, 열여덟 살 생일을 맞은 찰리 왓슨을 만납니다.",
      "범블비의 첫 지구 이야기를 그린 스핀오프로, 원작 애니메이션처럼 비틀이 다시 범블비가 됩니다. 마지막 장면에서 범블비는 1편과 같은 2세대 카마로로 갈아탑니다.",
    ],
    posterTone: tone.bee,
    sources: [WIKI_BB],
  },
  {
    slug: "rise-of-the-beasts",
    n: 7,
    titleKo: "트랜스포머: 비스트의 서막",
    titleEn: "Transformers: Rise of the Beasts",
    year: 2023,
    usRelease: "2023년 6월 9일 (미국)",
    runtime: "127분",
    directorKo: "스티븐 케이플 주니어",
    directorEn: "Steven Caple Jr.",
    castKo: "앤서니 라모스 · 도미닉 피시백",
    kind: "실사",
    summary: [
      "1994년 뉴욕 브루클린. 일자리를 찾던 전직 군 전자장비 전문가 노아 디아즈가 포르쉐를 훔치려다 그 차가 오토봇 미라지라는 걸 알게 됩니다. 행성을 삼키는 유니크론과 그의 부하 스커지가 시공간 열쇠 '트랜스워프 키'를 노립니다.",
      "동물로 변신하는 맥시멀이 처음 합류하고, 옵티머스는 1980년대 캡오버 트럭, 휠잭은 폭스바겐 버스, 디셉티콘 대신 등장한 테러콘은 피터빌트·스카이라인·GMC 견인차로 위장합니다.",
    ],
    posterTone: tone.beast,
    sources: [WIKI_ROTB],
  },
  {
    slug: "transformers-one",
    n: 8,
    titleKo: "트랜스포머 ONE",
    titleEn: "Transformers One",
    year: 2024,
    usRelease: "2024년 9월 20일 (미국)",
    runtime: "104분",
    directorKo: "조시 쿨리",
    directorEn: "Josh Cooley",
    castKo: "목소리: 크리스 헴스워스 · 브라이언 타이리 헨리 · 스칼릿 조핸슨",
    kind: "애니메이션",
    summary: [
      "사이버트론을 무대로 한 애니메이션. 광부 오라이온 팩스와 D-16이 친구에서 적으로 갈라져 훗날의 옵티머스 프라임과 메가트론이 되기까지를 그립니다.",
    ],
    noCarsNote:
      "이야기가 사이버트론에서만 벌어져 지구 차량으로 변신하는 장면이 없습니다. 그래서 영화 목록에만 올리고 차량 카드는 만들지 않았습니다.",
    posterTone: tone.cyber,
    sources: [WIKI_ONE],
  },
];

export function getFilm(slug: string) {
  return films.find((film) => film.slug === slug);
}

export const LIVE_ACTION_COUNT = films.filter((film) => film.kind !== "애니메이션").length;
