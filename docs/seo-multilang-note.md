# 다국어 크롤링 이슈 — 나중에 논의할 것

## 문제
현재 `index.html`은 URL 하나(`/`)에서 JS로 언어를 전환하는 구조(ko/en 완역, zh/ja/vi는 en으로 폴백).
검색엔진은 기본적으로 JS 실행 후 상태나 `localStorage`에 저장된 언어를 크롤링하지 않고,
서버가 최초 응답으로 내려주는 한국어 콘텐츠만 인덱싱함. 그 결과:

- `en`/`zh`/`ja`/`vi` 버전 콘텐츠는 검색엔진에 사실상 노출되지 않음
- 언어별로 별도 URL이 없어 `hreflang` 태그(링크 기반)를 걸 수 없음 — 이번에 추가한 `og:locale`/`og:locale:alternate`는 소셜 공유용 메타데이터일 뿐, 검색엔진의 언어별 색인/전환에는 반영되지 않음
- zh/ja/vi는 실제 번역도 아직 없음 (`index.html`의 `translations.zh = translations.en` 등 폴백 상태)

## 진짜 해결책 (이번 스코프 아님)
- `/en/`, `/zh/`, `/ja/`, `/vi/` 같은 언어별 정적 페이지(또는 서브도메인) 생성
- 각 페이지에 `<link rel="alternate" hreflang="xx" href="...">` 상호 참조 추가
- zh/ja/vi 실제 번역 완료 후 진행해야 의미 있음

## 액션 아이템
- [ ] zh/ja/vi 번역 확정
- [ ] 언어별 정적 페이지 구조 설계 (라우팅/빌드 방식 논의)
- [ ] hreflang 상호 참조 + sitemap.xml에 언어별 URL 추가
