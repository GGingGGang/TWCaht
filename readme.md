제작중

1. 테일즈위버 채팅 기본 경로가
  c:/Nexon/Talesweaver/chatlog/ 로 되어있음. 이후 변경 가능하게 할 예정
  이 경로가 아니면 server.js를 열고 defaultDirectoryPath = '**'
  **부분을 chatlog 폴더에 넣어주세요.
  
2. localhost 포트 3000에 열리게 해뒀음. 이후 변경 가능하게 할 예정
  포트 3000이 사용중이라면, setport = process.env.PORT || 3000 부분에서 3000부분을 원하는 포트로 바꿔주세요.
  
3. 새로고침 주기는 5000밀리초임. 이후 변경 가능하게 할 예정
  5000밀리초에서 바꾸고 싶다면, setrefresh = process.env.REFRESH || 5000 부분에서 (초) * 1000(밀리초/초)를 곱해서 넣어주세요.
  5초 = 5000, 1초 = 1000
  
4. 최초 필터로, 스크롤 압박을 주는 경험치 획득에 대한 필터를 넣었습니다. 이후 변경 가능하게 할 예정 (비트마스크 이용얘정)

5. node.js 설치 되어있어야하고, 이후 설치안하고 실행가능하게 exe 패키징 예정

6. gui 표현 예정 - electron 사용예정


------------------------------------------------------------------------------------------------------------------
실행
파일 두개, server.js와 chatutils.js를 설치해주시고, 아무 폴더에 같이 넣어주세요.
같은 폴더에서 shift + 왼클릭 후 cmd를 켜주세요. 
cmd에서 npm install express를 작성해주세요. 
설치가 완료됐으면, 경로를 확인해주세요.
    기본 경로가 아니라면 server.js를 메모장으로 키고, defaultDirectoryPath = 'c:/Nexon/Talesweaver/chatlog/'을  defaultDirectoryPath = "챗로그 경로"로 수정해주세요.
cmd에서 ndoe server.js 작성해주세요.
이후 localhost:3000/에 열리게됩니다. 
크롬에서, http://localhost:3000/ 을 입력하고 들어가주세요. 

채팅로그가 켜져있지 않다면, 작동하지않습니다.

-------------------------------------------------------------------------------------------------------------------

 
