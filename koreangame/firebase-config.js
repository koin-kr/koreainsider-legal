// koreantimer 폴더에 있는 firebase-config.js 값을 그대로 복사해 넣으세요. (같은 Firebase 프로젝트를 같이 씁니다)
// 이 값들은 공개돼도 괜찮아요. 데이터 보호는 firestore.rules(보안 규칙)가 담당합니다.
// apiKey가 'YOUR_'로 시작하면 구글 로그인 버튼이 숨겨지고, 게스트(이 브라우저에만 저장) 모드로만 동작해요.
export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID'
};
