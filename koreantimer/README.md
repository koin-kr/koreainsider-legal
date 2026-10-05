# 타이머

검은 화면에 큰 숫자로 보는 타이머 & 스톱워치. 제목을 붙이고, 기록은 구글 로그인으로 여러 기기에서 동기화됩니다.

## 기능
- 타이머 / 스톱워치 전환
- 30초 ~ 3시간 빠른 선택 (1시간 이상은 둘째 줄), 숫자 왼쪽 버튼은 1분, 오른쪽 버튼은 1초씩 조정 (길게 누르면 연속 조정)
- 시간이 다 되면 3초간 삐비빅 알림 + 깜빡임, 이후 +00:12처럼 초과 시간을 연한 빨간색으로 계속 카운트
- 저장 버튼으로 지금까지 흐른 시간을 바로 기록, 하루 합계 표시
- ☰ 버튼으로 기록 패널 열기. 오전 9시 ~ 다음날 오전 9시를 하루로 묶어서 보여주고, ‹ › 로 이전 날짜 기록 보기
- 구글 로그인 시 기록을 Firestore에 저장, 다른 기기와 실시간 동기화 (로그인 안 하면 이 브라우저에만 저장)
- 실행 중 화면 꺼짐 방지, 전체 화면

## 단축키
| 키 | 동작 |
|---|---|
| Space | 시작 / 일시정지 |
| ↑ / ↓ | 1분 늘리기 / 줄이기 |
| Shift + ↑ / ↓ | 1초 늘리기 / 줄이기 |
| S | 저장 (지금까지 흐른 시간 기록) |
| R | 초기화 (진행 중이면 설정 시간으로, 설정 중이면 00:00으로) |

## 파일
| 파일 | 역할 |
|---|---|
| `index.html` | 앱 전체 |
| `firebase-config.js` | Firebase 연결 정보 (직접 채워야 함) |
| `firestore.rules` | Firestore 보안 규칙 (콘솔에 붙여넣기용) |

## Firebase 설정 (처음 한 번, 10분 정도)
1. https://console.firebase.google.com 에서 **프로젝트 추가** (Google 애널리틱스는 꺼도 됨)
2. 프로젝트 개요에서 **웹 앱 추가(`</>`)** → 앱 이름 입력 → 나오는 `firebaseConfig` 값을 `firebase-config.js`에 붙여넣기
3. **Authentication → 시작하기 → Sign-in method → Google** 사용 설정 (지원 이메일 선택 후 저장)
4. **Authentication → 설정 → 승인된 도메인**에 `<깃허브아이디>.github.io` 추가
5. **Firestore Database → 데이터베이스 만들기** → 위치 `asia-northeast3 (서울)` → 프로덕션 모드
6. **Firestore → 규칙** 탭에 `firestore.rules` 내용을 붙여넣고 **게시**

### 나만 쓰고 싶다면
`firestore.rules`의 조건을 아래처럼 바꾸면 내 계정만 저장할 수 있어요.
```
allow read, write: if request.auth != null
  && request.auth.uid == uid
  && request.auth.token.email == "내이메일@gmail.com";
```

## GitHub Pages 배포
1. 이 폴더의 파일을 저장소 루트에 올립니다
2. 저장소 **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` / `/ (root)` → Save
3. 1~2분 뒤 `https://<아이디>.github.io/<저장소명>/` 에서 열립니다

> `index.html`을 파일로 직접 더블클릭해서 열면 로그인이 동작하지 않아요(브라우저 보안 정책). 배포된 주소나 로컬 서버(`npx serve .`)로 열어 주세요. `localhost`는 Firebase에서 기본으로 허용돼 있어요.
