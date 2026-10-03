# 트랜스포머 아카이브

화면 제목은 트랜스포머 아카이브입니다. 패키지 이름은 `transformers-archive`입니다.

2007년 《트랜스포머》부터 2023년 《트랜스포머: 비스트의 서막》까지 실사 영화 7편과,
오토봇·디셉티콘·테러콘이 변신한 실제 차량을 정리하는 비공식 팬 아카이브입니다.
애니메이션 《트랜스포머 ONE》(2024)은 지구 차량이 없어 영화 페이지만 둡니다.
Next.js App Router + TypeScript + Tailwind. 분노의 질주 아카이브(`ff-archive`)와 같은 구조입니다.

해즈브로, 파라마운트, 배우, 권리자와 무관합니다. 포스터와 영화 스틸은 쓰지 않습니다.

사이트 주인의 실명은 적지 않습니다.

## 데이터

- `data/films.ts` — 영화 8편 (실사 7 + 애니메이션 1)
- `data/cars.ts` — 차량. 캐릭터, 진영, 실제 차량, 등장 영화, 설명, 자료 차이(`uncertain`), 출처
- `data/sisterCars.ts` — 같은 브랜드 자매 아카이브 차량 주소 (HTTP 200 확인)

## 링크 규칙

- 오토픽스 차량 버튼: `utm_source=transformers-archive&utm_medium=cta&utm_campaign=tf-car&utm_content=<차량 slug>`.
  오토픽스는 카테고리·검색을 URL로 받지 않으므로 홈으로 보내고, 보조 링크로 `/wiki/0N-*.html` 가이드를 잇습니다.
- 헤더·푸터 오토픽스 링크: 캠페인 `tf-car`.
- 자매 아카이브 링크: `utm_source=transformers-archive&utm_campaign=archive-network`.
- 쿠팡 파트너스 배너: 푸터 위 (`components/CoupangBanner.tsx`). 링크는 바꾸지 않습니다.

방문자 수는 Abacus `transformers-archive` / `visits`입니다. 눈 아이콘과 숫자만 표시합니다.

## 로컬 실행

```bash
npm install
npm run dev
```
