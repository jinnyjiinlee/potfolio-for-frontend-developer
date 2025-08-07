# 🚀 프론트엔드 개발자 포트폴리오

토스(Toss)의 세련된 디자인과 부드러운 인터랙션에서 영감을 받은 현대적인 포트폴리오 웹사이트입니다.

## ✨ 주요 특징

### 🎨 **토스 스타일 디자인**
- 현대적이고 세련된 그래디언트 디자인
- 부드러운 둥근 모서리와 카드 레이아웃
- 글래스모피즘 효과로 깔끔하고 모던한 UI
- 일관성 있는 색상 시스템과 타이포그래피

### 🎭 **풍부한 애니메이션**
- **Framer Motion** 기반 고품질 애니메이션
- 스크롤 기반 인터랙션과 페이지 전환 효과
- 마우스 움직임에 반응하는 동적 배경 요소
- 마이크로 인터랙션으로 사용자 경험 향상

### 📱 **완전한 반응형 디자인**
- 모바일 우선 접근 방식
- 모든 디바이스에서 완벽한 사용자 경험
- 유연한 그리드 시스템과 적응형 레이아웃

### 🌙 **다크 모드 지원**
- 시스템 설정에 따른 자동 테마 변경
- 모든 컴포넌트에서 일관된 다크 테마 적용

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Emoji + Custom SVG
- **Deployment**: Ready for Vercel/Netlify

## 🚀 빠른 시작

### 1. 저장소 클론
```bash
git clone https://github.com/[your-username]/portfolio.git
cd portfolio
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx      # 네비게이션 헤더
│       ├── Hero.tsx        # 메인 히어로 섹션
│       ├── About.tsx       # 소개 섹션
│       ├── Skills.tsx      # 기술 스택 섹션
│       ├── Projects.tsx    # 프로젝트 섹션
│       └── Contact.tsx     # 연락처 섹션
├── public/
├── package.json
└── README.md
```

## 🎯 주요 섹션

### 🏠 Hero Section
- 동적 배경 효과와 마우스 추적 애니메이션
- 인터랙티브 기술 스택 카드
- 부드러운 CTA 버튼과 스크롤 인디케이터

### 👋 About Section
- 통계 카드와 핵심 가치 소개
- 스크롤 기반 순차 애니메이션
- 호버 효과가 적용된 인터랙티브 카드

### 💻 Skills Section
- 진행률 바가 있는 기술 레벨 표시
- 카테고리별 기술 스택 분류
- 애니메이션 효과가 적용된 프로그레스 바

### 🚀 Projects Section
- 프로젝트 카드에 호버 효과
- 기술 스택과 주요 기능 표시
- 라이브 데모와 GitHub 링크

### 📞 Contact Section
- 인터랙티브 연락 방법 카드
- 실시간 상태 표시가 있는 문의 폼
- 애니메이션 로딩과 성공 상태

## 🎨 커스터마이징

### 개인 정보 수정
각 컴포넌트 파일에서 다음 정보를 수정하세요:

1. **연락처 정보** (`Contact.tsx`)
2. **기술 스택** (`Skills.tsx`)
3. **프로젝트 정보** (`Projects.tsx`)
4. **자기소개** (`About.tsx`)

### 색상 테마 변경
`globals.css`와 각 컴포넌트의 `gradient` 클래스를 수정하여 색상을 변경할 수 있습니다.

## 🚀 배포

### Vercel 배포 (권장)
1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 설정 완료

### Netlify 배포
1. [Netlify](https://netlify.com)에 가입
2. "New site from Git" 선택
3. GitHub 저장소 연결 후 배포

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

## 🤝 기여

이슈나 PR은 언제든 환영합니다!

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
