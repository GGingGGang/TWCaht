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
  
4. 최초 필터로, 스크롤 압박을 주는 경험치 획득에 대한 필터를 넣었습니다. 이후 변경 가능하게 할 예정


실행은 server.js를 실행해주세요.
채팅로그가 켜져있지 않다면, 작동하지않습니다.
이후 localhost:setport/에 열리게됩니다.
 

 -------------------------------------------------------------------------------------------------------------------

 
