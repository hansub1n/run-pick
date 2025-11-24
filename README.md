# 런픽(run-pick)

## [런픽 바로가기](https://run-pick.vercel.app/)

![banner](https://github.com/user-attachments/assets/b08c978a-dee2-49fc-a71b-3844a77f151e)

## 👨‍🏫 프로젝트 소개

Pick하고 Run해! 러닝 루틴 제공하고 기록하는 서비스

> 좁게는 런닝머신 이용자, 넓게는 러너를 위한, 영상을 보며 달리고 사진으로 인증기록할 수 있는 서비스입니다.
> 거리별 영상, 인증글, 즐겨찾기, 마이페이지, 친구 기능을 통해 달리기 기록과 챌린지를 관리하고 동기부여를 제공합니다.

<br/>

## 🚩 프로젝트 개요

- **프로젝트명** &nbsp; :&nbsp;
  **런픽(run-pick)**
- **진행 기간** &nbsp;: &nbsp;
  **25.06.30 ~ 25.10.23**

<br/>

## 🧾 목차

1. [주요 기능 소개](#주요-기능-소개)
2. [기술 스택](#기술-스택)
3. [트러블슈팅](#트러블슈팅)
4. [회고](#회고)

   <br/>

## ERD 설계도

<img width="2330" height="1262" alt="supabase-schema-yxidgnwdpxfizivnsqwy (1)" src="https://github.com/user-attachments/assets/4a90e198-20b7-43af-bcfc-7dbc91cf04e2" />

## 주요 기능 소개

<details>
<summary>메인 페이지</summary>
<div markdown="1">
<div align="center">
  <img src="https://github.com/user-attachments/assets/66c8d9f3-d6bc-4b3b-a084-2210c6f9bd2f" alt="메인 페이지" />
</div>
</div>
</details>

<details>
<summary>간편 로그인</summary>
<div markdown="1">
<div align="center">
  <img src="https://github.com/user-attachments/assets/2efe203d-a345-4fae-b8fa-3c3db78fea7b" alt="간편 로그인" width="230"/>
  <img src="https://github.com/user-attachments/assets/3f89de72-80dc-4136-bf3a-66fdc6ee16a7" alt="간편 로그인"  width="230"/>
</div>
</div>
</details>

<details>

<summary>러닝 인증</summary>
<div markdown="1">
<div align="center">
  <img src="https://github.com/user-attachments/assets/0149604e-9375-4be6-abf4-521ef4f96ab7" alt="영상 페이지"  width="230" />
  <img src="https://github.com/user-attachments/assets/045f4004-6ad2-4808-99e7-d1dcfdca07c5" alt="영상 상세 페이지"  width="230" />
  <img src="https://github.com/user-attachments/assets/c1b8e673-d38f-4fee-845d-a2b8058a5015" alt="인증글 작성"  width="230" />
</div>
</div>
</details>

<details>
<summary>챌린지 등록</summary>
<div markdown="1">
<div align="center">
  <img src="https://github.com/user-attachments/assets/318f4b53-5c64-44c4-b9cf-0e05316639ee" alt="챌린지 등록" width="230" />
  <img src="https://github.com/user-attachments/assets/32755eee-5f7f-46ef-bb25-520b85026b2e" alt="챌린지 재등록 불가" width="230" />
</div>
</div>
</details>

<details>
<summary>마이 페이지</summary>
<div markdown="1">
<div align="center">
  <img src="https://github.com/user-attachments/assets/f65b729f-d488-4564-8f94-6760ef8e727e" alt="마이 페이지" width="230" />
</div>
</div>
</details>

<details>
<summary>친구 기능</summary>
<div markdown="1">
<div align="center">
  <img src="https://github.com/user-attachments/assets/7f87c997-9455-4ac1-a6f7-9115a5088cd5" alt="친구 삭제" width="230" />
  <img src="https://github.com/user-attachments/assets/27d64127-6857-42bb-be70-7e32fbda145e" alt="친구 추가 성공" width="230" />
  <img src="https://github.com/user-attachments/assets/9b792ed0-722c-4d81-badf-91d18e6b74ce" alt="친구 추가 실패" width="230" />
</div>
</div>
</details>
<br/>

## 기술 스택

**패키지 매니저**

  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white">

**프레임워크 및 라이브러리**

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"> <img src="https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=Framer&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=Swiper&logoColor=white">

**상태 관리**

<img src="https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white"> <img src="https://img.shields.io/badge/Tanstack Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">

**데이터베이스, 인증**

  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=Supabase&logoColor=white">

**설계**

<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/VSCODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/FIGMA-pink?style=for-the-badge&logo=FIGMA&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br/>

## 🎯 트러블슈팅

### ◉ LCP 지표 개선 + Skeleton UI 적용을 통한 체감 성능 향상

**✔ 문제 상황**

초기 페이지 렌더링 성능이 저조했고,
콘텐츠 로딩 중 빈 화면으로 인해 레이아웃이 변경되는 것이 보여 UX도 좋지 않았습니다.

<br/>
                
| Metric       | Before ❌ | After ✅ |
|--------------|-----------|---------|
| FCP          | 0.9s      | 1.0s    |
| **LCP**      | **17.1s** | **1.0s** |
| TBT          | 50ms      | 0ms     |
| CLS          | 0.044     | 0       |
| Speed Index  | 5.8s      | 4.9s    |

**✔ 원인 분석**

- 주요 이미지가 lazy로딩되어 LCP 요소로 설정되지 않음
- 이미지 크기가 미리 예약되지 않아 CLS 증가
- 이미지 로딩 시 데이터 없음 → 비어 있는 UI 노출

**✔ 해결**

- LCP 최적화 -> priority, width/height 명시
- CLS 방지 -> 이미지 영역 고정
- 비어있는 상태 개선 -> Skeleton UI 도입
- JS 번들 최적화 -> 서버 컴포넌트 전환 및 클라이언트 코드 최소화

**✔ 최종 결과**

- LCP 17.1s → 1.0s (94% 개선)
- CLS 완전 제거 (0으로 안정화)
- 사용자 이탈률 감소 및 초기 상호작용 유도력 증가
- 콘텐츠 로딩 중 UX 품질 개선

<br/>

## 회고

> 이번 프로젝트에서 기획, 디자인, 개발을 모두 맡으며 한 제품이 완성되기까지 필요한 각각의 단계가 얼마나 중요한지 체감했습니다. 특히 사용자 경험을 저해할 수 있는 요소를 줄이기 위해 끊임없이 고민하고, 유저 입장에서 바라보는 습관을 기르게 되었습니다.
