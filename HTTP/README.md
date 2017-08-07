# HTTP
Hyper Text Transfer Protocol


## Table of Contents

1. [About HTTP](#About-HTTP)
1. [About Web](#About-Web)


### About HTTP

- HTTP요청은 기본적으로 Cross-Site HTTP Requests가 가능
- Ajax의 이용으로 sciprt에서 생성되는 XMLHttpRequest에도 Cross-Site를 사용하고자 CORS라는 이름으로 권고안이 나옴
- CORS
    - Simple/Preflight
    - Credential/Non-Credential


### About Web

- URL : 정보자원의 위치를 표시하기 위한 기법
- HTTP : 위치표시가 있는 정보자원에 접근하기 위한 통신 규약
- HTML : 정보자원과 정보자원 사이를 오가기 위한 하이퍼텍스트


### ㅁㄴㅇ

- ping : 클릭정보를 서버로 자동 송신
- text/ping으로 전송
- Ping-Form헤더에 현재 페이지 주소 포함
- Referer헤더에 현재 페이지의 주소 포함
- 네트워크대역 효율적으로 이용 가능
- async : 비동기로 스크립트 로딩, defer은 async문제시 작동
- window.navigator.registerProtocolHandler(scheme, url, title)
- outerHTML : 요소를 감싸고있는 태그와 그 아이디, 클래스까지 인자로 가져옴
- xmlns : 네임스페이스로 사용 가능
- manifest : 문서 애플리케이션 캐시목록과 위치 지정, 어플리케이션 캐시에 필요한 파일을 내려받고 위치를 반환 -> 로딩속도 증가와 서버부하 단축
