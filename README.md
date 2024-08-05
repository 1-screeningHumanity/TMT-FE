![header](https://capsule-render.vercel.app/api?type=venom&color=gradient&customColorList=6&animation=fadeIn&fontColor=E3DAFF&height=300&section=header&text=티끌%20모의%20태산&fontSize=90) 

# 목차 📚
### 1. [프로젝트 소개](#프로젝트-소개-📢)
### 2. [팀소개](#팀소개-🧑‍💻)
### 3. [기술 스택](#기술-스택)
### 4. [핵심 기능](#핵심-기능)
### 5. [ERD](#ERD)
### 6. [아키텍처](#아키텍처)
### 7. [후기](#후기)


# 프로젝트 소개 📢
  ### <img src="https://github.com/1-screeningHumanity/.github/assets/141290308/fbea4842-c339-4b99-977a-bee4742e09ba" alt="tmt" width="25" height="25"> 티끌 모의 태산 
  - 서비스 URL : https://screeninghumanity.store/
  <br/>

  ### 🗓️ 프로젝트 기간  
  - 2024.04.18 ~ 2024.07.04
  - 총 **12주**
  <br/>
  
  
  ### 📌 서비스 소개 
  
  > **티끌모의태산은?** 
  - **시니어를 대상**으로 한 **주식모의투자서비스** 티끌모의태산 입니다.
  - 주식을 입문하는 시니어분들의 시행착오를 줄여주고자 **간단한UI**와 **음성인식기능**과 **구독** 및 **랭킹**기능을 더하여 시니어분들의 편의와 즐거움을 위해 기획한 모의투자서비스입니다.
  - 실전투자에 입문하기 전 모의투자를 통해 **주식투자의 길잡이**가 되어드립니다.

  <br/>
  
# 팀소개 🧑‍💻
<table>
<tbody>
<tr>
<td align="center"><a href="https://github.com/sw-devr"><img src="https://avatars.githubusercontent.com/u/141290308?v=4" width="100px;" alt=""/><br /><sub><b>오승원 (FE,팀장)</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/jmlee119"><img src="https://avatars.githubusercontent.com/u/68285285?v=4"width="100px;" alt=""/><br /><sub><b>이지민 (FE)</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/KangBaekGwa"><img src="https://avatars.githubusercontent.com/u/160799011?v=4" width="100px;" alt=""/><br /><sub><b>강성욱 (BE)</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/ddohyeong"><img src="https://avatars.githubusercontent.com/u/124120054?v=4" width="100px; alt=""/><br /><sub><b>김도형 (BE)</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/hoontaepark"><img src="https://avatars.githubusercontent.com/u/102753047?v=4" width="100px;" alt=""/><br /><sub><b>박태훈 (BE)</b></sub></a><br /></td>
<tr/>
<td align="center"><sub>회원가입, 로그인, 마이페이지, 구독, 결제, 랭킹</sub></td>
<td align="center"><sub>주식 차트, 채팅, 카테고리, <br/>검색, 알림, 국내지수, 급등주/급락주 </sub></td>
<td align="center"><sub>CI/CD구축, 매수/매도, 검색, 구독, 카테고리 </sub></td>
<td align="center"><sub>실시간 차트, 채팅, 알림, 국내지수, 급등주/급락주 </sub></td>
<td align="center"><sub>회원, security, 마이페이지, 랭킹 집계, 예수금, 포트폴리오 </sub></td>
</tr>
</tbody>
</table>
<br/>

# 기술 스택 
![image](https://github.com/1-screeningHumanity/.github/assets/141290308/9d89ada8-3158-4485-a72d-a7fcb1d2964f)
 

# 핵심 기능
### 1.  회원가입 / 로그인
- 시니어층을 대상하기 떄문에 전화번호, 이름 , 비밀번호로 가입 가능합니다
- 닉네임의 경우 랜덤으로 설정 가능하게 헀습니다.


<img src="https://github.com/1-screeningHumanity/TMT-FE/assets/141290308/e53ae3ce-a022-44e8-b5ff-5538a44335bf" alt="쉬운 간편 로그인 기능" width="300" />
<hr/>

### 2. 주식 / 회원 검색 
- 시니어를 위한 음성인식 기능 추가
- Elastic Stack 을 추가하여 빠른 응답, 필터링을 활용한 유연한 검색 엔진
- 기존 MySql 쿼리를 이용한 query 461ms -> 57ms

<img src="https://github.com/1-screeningHumanity/TMT-FE/assets/141290308/d9536625-7156-4a05-ac0b-3dfb8ce56ec9" alt="쉬운 간편 로그인 기능" width="300" />
<hr/>

### 3. 실시간 차트, 종목 토론방 제공
- 한국투자증권 API 를 사용하여 실시간 차트를 제공하여 실시간 가격을 제공
- SSE 방식을 선택하여 실시간 데이터 수신 
  

<img src="https://github.com/1-screeningHumanity/TMT-FE/assets/141290308/54a4dde5-8980-404c-9965-454a98891cad" alt="쉬운 간편 로그인 기능" width="300" />
<hr/>

### 4. 매매 체결, 알림 발생
- 구매를 원하는 가격과 매매 가격이 같으면 체결
- FCM을 이용한 알림 토큰 발생 및 전송 
- 카프카를 통한 예약 매수 체결과 연동된 기기 알림 서비스

<img src="https://github.com/1-screeningHumanity/.github/assets/68285285/36de80e4-93b5-445f-9abb-a86db9ced125" alt="쉬운 간편 로그인 기능" width="300" />
<hr/>


### 5. 퀴즈 제공
- 주식 입문자를 위해 퀴즈를 제공하여 지식을 늘리고 즐거움 요소를 더 함

<img src="https://github.com/1-screeningHumanity/TMT-FE/assets/141290308/25a2d7d8-eec1-4a78-8a33-18ed66176c56" alt="퀴즈" width="300" />
<hr/>

### 6. 랭킹 서비스 제공
- 스프링 배치를 이용하여 데이터를 집계
- 자산, 수익률 (일, 주, 월) 랭킹을 확인 가능 
<img src="https://github.com/1-screeningHumanity/TMT-FE/assets/141290308/d39b4a72-f67f-4fb4-9eaa-039ca2c4260c" alt="랭킹" width="300" />

### 7. 알림 서비스
- 클라이언트 측에서 fcm 토큰 발급
- 외부 서비스로부터 카프카 메시지로 받아 알림 내용을 Firebase Cloud Messaging을 이용하여 기기에 알림을 전송한다

<img src="https://github.com/1-screeningHumanity/.github/assets/68285285/72190b62-3562-4231-aef8-e60da8428865" alt="쉬운 간편 로그인 기능" width="300" />


### 8. 마이페이지 및 포트 폴리오 
- Redis 에 저장되어있는 실시간 주식 데이터를 이용해 회원의 보유 주식 평가금액을 계산
- 가장 최근 주가를 반영하기 때문에 실시간으로 회원의 주식금액을 반영
- 주식 : 보유 중인 주식 , 매수/매도 내역 조회, 구독자 조회, 즐겨찾기 조회
- 회원 : 비밀번호 변경, 닉네임 변경, 결제하기, 충전하기, 충전내역 조회
<img src="https://github.com/1-screeningHumanity/.github/assets/68285285/b5b73237-026f-4b07-9835-0e2d4dbf867d" alt="쉬운 간편 로그인 기능" width="300" />



# ERD 
![KakaoTalk_Photo_2024-07-02-17-48-40](https://github.com/1-screeningHumanity/.github/assets/68285285/580491bc-0e32-4159-a3d1-626951e4f5a3)



# 아키텍처
![다이어그램V2](https://github.com/1-screeningHumanity/.github/assets/68285285/1b9501ee-0d07-430b-9148-b8494e83d386)

# 후기
### 🔥 오승원 
2달이 조금 넘는 기간동안 주제선정부터 기획, 설계, 개발까지 진행을 하였는데 프론트엔드로써도 신기술을 접해보면서 기술적 성장을 할 수 있었고, 개인적으로도 추후 취업을 했을때 잘 적응 할 수 있을 것 같은 힘을 키울수 있었던 것 같습니다. 좋은 경험이었고 앞으로도 기억에 남을 것 같습니다. 
### 🍀 이지민 
주식 프로젝트를 해보고 싶어서 팀원들에게 하자고 먼저 제안을 했고 실시간 가격을 출력하는 과정에서 sse를 적용해보고 채팅이라는 기능을 해보며 많이 성장했습니다. 프로젝트를 하면서 next js 에 대해 적응을 하고 랜더링 속도를 줄이는 방법등을 고민을 많이 했고, 정규장 시간이 아니면 매수 매도가 안되게끔 하며  다양한 기술을 배운것 같습니다.
### 🙏 강성욱 
먼저, 다양한 기술스택과 경험을 쌓을 수 있는 좋은 주제를 선정하게 되어서 정말 다행이었다 라는 생각이 듭니다. 추후 더 개발적으로 개선할 사항이 많이 생겼다는 점에서 100% 만족하는 팀 프로젝트로 기억에 오래 남을 것 같습니다.
### 🐣 김도형
실시간으로 동시에 많은 데이터를 다루기 위해서 비동기를 지원하는 WebFlux를 사용했다. 리액티브 프로그래밍을 하면서 비동기로 동작하려면 어떤 로직이 좋을 지 많이  생각하게 해준 프로젝트였고, MSA, 헥사고날 아키텍처를 알고 적용해보며 이전 배웠던 DDD의 도메인과 서비스 부분을 더 명확히 이해할 수 있었다. 또한 DB의 Read, Write의 분리 개념도 알게 되었고 Redis Replica CQRS 비교 성능 테스트도 진행해보았다. 
### 🐉 박태훈 
2차 프로젝트를 통해, MSA, EDA 기술을 도입하면서 대용량 트래픽에 대응 할수 있는 방법을 알게되는 유익한 시간이였습니다. 성능개선을 한번더 생각해 볼수 있었고, 헥사고날 아키텍처를 다루면서 아키텍처에 대한 식견을 높일수 있어서 좋았습니다. 2차 프로젝트를 통해 한번더 스킬업을 한 나 자신을 보면서 뿌듯한 감정을 느꼈습니다. 마지막으로 2달동안 정말 고생많이해주신 팀원 분들께 감사의 인사를 드립니다.
