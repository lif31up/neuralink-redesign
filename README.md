# 개요
평소에 흥미롭게 생각하는 뇌공학 회사인 <a href="https://neuralink.com">NEURALINK</a>의 웹사이트를 저만의 방식으로 새롭게 디자인해보았습니다.
##  파일 체계
```
Root
|—app
|——components
|———common: 재사용될 수 있는 요소에 대한 정의가 위치합니다.
|———feature: 특정 페이지에서만 사용될 요소에 대한 정의가 위치합니다.
|—styles: SCSS 파일이 위치합니다.
```
### 기술
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black)

### 스타일 작성에 대한 지시사항
간단한 레이아웃이나 의미적 요소들은 반응형 웹을 위해 `SCSS`를 통해 정의됩니다. 그 외에 추가적이거나 복잡한 `CSS` 정의를 필요로 하는 요소들은 `Tailwind CSS`로 작성했습니다.

### 그 외에 고려된 점들
최대한 Next.js와 친숙해지는 계기가 되기 위해서 Client Side Rendering과 Server Side Rendering을 최대한 그럴듯한 맥락으로 억지로도 좀 사용해보았습니다. 이 점 참고하시고 살펴보시면 감사하겠습니다.
