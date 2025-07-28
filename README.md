# 🎬 shyunu-cinema-FE

> **당신의 영화를 기록하고 공유하세요.**

추천 영화부터 리뷰 작성까지!  
영화를 사랑하는 사람들을 위한 웹 서비스입니다.

## 🚀 배포 링크

👉 [shyunu-cinema-FE 바로가기](https://shyunu-cinema-fe.vercel.app/)

## 📌 프로젝트 소개

**shyunu-cinema-FE**는 영화 추천 및 감상 후기를 나누는 Next.js 미니프로젝트입니다.  
영화를 등록하고, 설명을 확인하고, 리뷰를 남기며 다른 사람들과 영화 경험을 공유할 수 있습니다.

## 🔧 주요 기능

- 🎥 **추천 영화 조회**  
  인기 있는 추천 영화 목록을 확인할 수 있습니다.

- 📚 **등록된 영화 목록 보기**  
  사용자가 등록한 영화들을 리스트 형식으로 보여줍니다.

- 📝 **영화 상세 설명 확인**  
  선택한 영화에 대한 자세한 정보를 제공합니다.

- 💬 **리뷰 등록 / 조회 / 삭제**  
  영화에 대한 감상 리뷰를 작성하고, 다른 사람들의 리뷰도 확인할 수 있습니다.

## 🛠️ 기술 스택

- **Framework:** Next.js (App Router 기반)  
- **Language:** JavaScript, TypeScript 
- **Styling:** CSS Modules (`.module.css`)  
- **Deployment:** Vercel

> ✅ `Next.js App Router`를 기반으로 프로젝트를 구성하였으며, `layout.tsx`, `page.tsx`, `loading.tsx` 등을 활용하여 모듈화된 구조와 향상된 사용자 경험을 구현했습니다.  
> ✅ 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 구성하였고, 파일 기반의 라우팅 시스템을 사용했습니다.

## 🗂️ 프로젝트 구조
<pre>
src/
├── actions/                      # 서버 액션 (리뷰 등록/삭제)
│   ├── create-review.action.ts
│   └── delete-review.action.ts
│
├── app/                          # App Router 기반 페이지 구성
│   ├── (with-searchbar)/search/  # 검색 페이지
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── page.module.css
│   │   └── error.tsx
│   │
│   ├── @modal/(.)movie/[id]/     # 모달 라우팅 구조
│   │   ├── default.tsx
│   │   └── page.tsx
│   │
│   ├── movie/[id]/               # 영화 상세 페이지
│   │   ├── page.tsx
│   │   ├── error.tsx
│   │   ├── page.module.css
│   │   └── layout.module.css
│   │
│   ├── not-found.tsx            # 404 페이지
│   ├── layout.tsx               # 전체 레이아웃
│   └── globals.css              # 전역 스타일
│
├── components/                  # 공통 컴포넌트
│   ├── skeleton/
│   ├── modal.tsx
│   ├── modal.module.css
│   ├── movie-item.tsx
│   ├── movie-item.module.css
│   ├── review-editor.tsx
│   ├── review-editor.module.css
│   ├── review-item.tsx
│   ├── review-item.module.css
│   ├── review-item-delete-button.tsx
│   ├── searchbar.tsx
│   └── searchbar.module.css
│
├── mock/                        # 목 데이터
├── util/                        # 유틸 함수 모음
└── types.ts                     # 타입 정의
</pre>
