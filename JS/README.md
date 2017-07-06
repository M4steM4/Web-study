# **JS**
Java Script
Single Thread non-blocking Language


## Table of Contents

1. [How It Works](#How-It-Works)
1. [JS History](#JS-History)
1. [JS Value Convention](#JS-Value-Convention)
1. [JS Basic Convention](#JS-Basic-Convention)
1. [About JS](#About-JS)
    1. [non-blocking Function](#non-blocking-Function)
    1. [Hoisting](#Hoisting)
    1. [Closure](#Closure)
    1. [Scope Chain](#Scope-Chain)
    1. [Call Stack](#Call-Stack)
    1. [Generator](#Generator)
1. [JS Execution Context](#JS-Execution-Context)
1. [Math Function](#Math-Function)
1. [String Function](#String-Funtion)
1. [Regular Expression Function](#Regular-Expression-Function)
1. [Array Function](#Array-Function)
1. [Browser History API](#Browser-History-API)
1. [Higher-order Function](#Higher-order Function)


### How It Works

1. Webpage request to server
2. Accept response
3. View on browser
- Browser response html, css, js file
- Html, css file parsing to DOM, CSSOM on randering engine
- When HTML parser meet script tag, stop DOM create process
- HTML parser pass control permission to JS engine
- It is meening about [Create DOM delay] by script tag location


### JS History

- JavaScript be developed in 1995 by Brendan Eich(Nescape) for webpage script language
- Nescape require standardization to Ecma International

- In 1997 July, ECMA-262 complete to ECMAScript
- In 1999, ECMAScript 3(ES3) was release
- In 2009, ECMAScript 5(ES5) was release with HTML5
- In 2015, ECMAScript 6(ES6) was release with let keyword, module system, Arrow Function, class system


### JS Value Convention

- `const` : 한번 할당 변수, block scope
- `let` : 재할당 변수, block scope
- `var _value` : 클래스 및 외부함수 참조 불가
- `o_` : 필수 parameter 표현
- `_var` : 변수 은닉, 파라미터 은닉화
- `var`는 할당 없이 스코프에 호이스트, `const`, `let`은 TDZ라는 새로운 할당
- 함수 내부 지역변수가 우선순위가 가장 높음
- const, let은 다른 스코프가 생성되어 변수명 충돌 없음
- default parameter는 뒤
- value type : boolean, Number, String, Object


### JS Basic Convention

- `//FIXME` : 해결 필요
- `//TODO` : 구현 필요
- `this` 할당x, 바인딩o
- `use strict` : 안정성과 효율성 제한
- `document.write` : 표시 위치 지정 불가
- `event.preventDefault` : 이벤트 이외의 별도의 브라우저 행동 제어
- `$.isXXX` > `typeof` => `$.isXXX`가 반환값이 더 정확
- `data.length` : 반복문 사용시 계속해서 프로퍼티 엑세스 => 성능 저하
- `==` 수치만 비교 `===` 자료형까지 비교
- `...` spread : 가변인수 참조, 배열 복사
- `UTF-8` : Ajax 외부데이터 통신시 에러 방지
- `eval()` : 사용 금지(effect : JS syntax excuse function, 호이스팅시 콜스택 최상단 - runtime delay)
- 한 문장 코드 : debugging & 스텝실행 저하
- JSON : JavaScript Object Notification object literal
- Function생성자는 동적 함수 변경 + 코드해석 == 속도저하
- Object, function : camelCase, class : Pascal
- 블록범위 내에서 함수선언 x, 임시함수 사용
- 함수 파라미터 변형 x : object인 경우 문제 발생
- destructuring : 비구조화 할당
- template strings : 문자열 채워넣기(ex : `${value}`)
- Do not use generator, that isn't transpile to ES5
- `setTimeout()` : 내부 함수는 global범위 실행(Because refer window object)
- JS에서 모든 함수가 일급 객체(익명함수 == 람다함수)
- JS file under location : Improve HTML Rendering speed, JS resource require 지연 차단
- Can not refer in IIFE on exterior, If return object binded, can refer that
- JS primitive data type is immutable value
-Js is objected script language



### About JS

#### **non-blocking Function**

- 명령의 수행이 끝나지 않아도 다음 명령 실행
- 많은 양의 요청을 빠르게 처리 가능
- EX
    - setTimeout() 인자로 익명함수를 넘김
    - 전역으로 호이스트 됨
    - window객체를 참조하는 동안 반복문과 할당이 모두 이뤄짐


#### **Hoisting**

- 임의 변수 선언 지역
- 호이스트는 선언과 초기화보다 선행 처리
- 변수의 정의가 범위에 따라 선언와 할당으로 분리
- 함수 선언은 변수 선언을 덮어씀, 변수에 값이 할당된 경우 반대
- 함수 내 변수는 함수의 최상위로, 함수 밖 변수는 global context 최상위로 호이스팅
- 코드 실행 전 전역 변수 호이스팅, undefinded 값
- 무명 함수, 명명 함수는 컴파일 되기 전 변수먼저 hoist


#### **Closure**

- 구조 혹은 패턴으로 만들어진 환경을 기억하는것
- 비공개 내부변수를 갖는 함수 인스턴스 생성자
- 클로저 자신, 전역변수, 이미 할당된 외부 함수의 독립적인 변수를 참조하는 함수
- 함수 생성시 자신과 동일한 스코프 체인 사용
- 스코프 체인으로 내부 함수가 외부 함수의 변수, 파라미터 접근
- 클로저는 참조 접근, 독립된 변수공간
- 자기 스코프보다 상위 스코프의 자유변수는 바인딩하지 않음(상위 스코프 탐색 비용, 변수 저장 비용)


#### **Scope Chain**

- scope는 변수와 매개변수의 접근성과 생존기간
- 하위 함수가 상위 함수의 변수, 파라미터를 참조하는 것
- 변수에 함수 할당시 스코프 체인이 활성화 객체 생성
- 할당시 함수 생성 객체를 활성화 객체에 담음
- 할당된 함수 실행시 함수의 활성화 객체가 따로 생성
- 내부 함수가 외부 함수의 변수를 참조하는건 활성화 객체가 따로 생성되기 때문
- 이 이외의 객체는 글로벌 오브젝트가 담당


#### **Call Stack**

- 코드 정보 저장 스택 자료 구조
- 서브루틴 후 코드 동작 절차 추적에 사용
- lexical 특성 : 전역레벨보다 함수레벨이 우선
- 전역 코드는 콜스택에 push됨
- 브라우저에서는 global객체인 window객체의 프로퍼티로 들어가지만, nodeJS에선 global이라는 이름을 가진 객체로 들어감
- 함수선언 : 콜스택에서 확인 용이, 함수이름 hoisting, ArrowFunction
- 지역 변수는 함수내에서 전역변수보다 높은 우선순위를 가짐(콜스택에서 덮어씀, 함수 선언이 빠르기 때문)
- 명명함수는 호이스트되어 콜스택에서 확인 가능  


#### **Generator**

- 이터레이션을 제어할 수 있는 특별객체생성
- for문을 순회할때 yield를 만날떄까지만 돌고 next()함수 호출을 기다림
- function * 로 사용


### JS Execution Context

- 실행 가능 코드 블럭이 실행되는 환경
    - globval code
    - Eval code
    - Function code
- 실행 필요 정보
    - value(지역변수, object property)
    - parameter
    - function define
    - value’s scope
    - this
- 실행 컨텍스트의 3가지 property
    - Variable Object
    - Scope Chain
    - this value
- 실행 컨텍스트 처리 순서
    1. Scope Chain reset
    1. Variable Instantiation
    1. this value define
- 컨트롤이 실행 컨텍스트 들어가기 전 전역 객체가(Math, String, BOM, DOM, ETC..)들어가고 프로그램 종료시 라이프 사이클 종료
- 실행 컨텍스트 후 스코프 체인이 외부와 활성화
- 함수의 스코프 정의후 Object와 this가 자신의 함수를 참조
- 컨트롤 실행전이기 때문에 변수는 호이스팅 되어있으나 값은 없다.
- 코드를 실행하다 변수가 정의되면 값을 넣고 함수가 정의될 경우 함수를 global code에 넣고 다시 그 함수의 실행 컨텍스트가 실행
- 이때 생성된 함수의 스코프의 0번째는 자기 자신의 스코프, 1번째는 상위 함수의 스코프이며 생성되는 this는 상위 함수를 참조하게 된다.(this는 무조건 전역 객체에 바인딩 되기 때문)


### Math Function

- `Math.ceil(num)` : 소숫점 올림
- `Math.floor(num)` : 소숫점 내림
- `Math.round(num)` : 소숫점 반올림
- `Math.random()` : 1 이하 난수 출력
- `num.toFixed(n)` : 소숫점 반올림
- `num.toString(n)` : 진수 변경


### String Function

- `str.toLowerCase()` : 문자열 소문자화
- `str.toUpperCase()` : 문자열 대문자화
- `str.substring(startn, endn)` : 문자열 부분 자르기
- `str.splice(nth, removeCount, array)` : 배열 자르기
- `str.slice(startn, endn)` : 문자열 부분 자르기
- `str.substr(startn, len)` : 문자열 len만큼 잘라내기
- `str.concat(str)` : 배열 합치기
- `str.indexOf(srcstr)` : 매칭되는 문자열 위치 반환
- `$.trim(str)` : 문자열에서 이스케이프 문자 삭제


### Regular Expression Function

```JavaScript
var ex =  /http(s)?\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gim;
```
- `ex.test(str)` : 정규식 확인후 boolean값으로 반환
- `ex.exec(str)` : 정규식에 맞는 값을 반환
- `str.search(ex)` : 정규식에 맞는 값의 위치를 반환
- `str.match(ex)` : 정규식에 맞는 값을 반환
- `str.replace(ex, chgstr)` : 정규식에 맞는 부분에 문자열 삽입
- `str.split(ex)` : 정규식에 맞는 부분을 잘라 배열화


### Array Function

- `data.push(node)` : 배열 요소를 삽입
- `data.pop()` : 배열 요소 삭제
- `data.unshift(node)` : 배열 앞에 요소 삽입
- `data.shift()` : 배열 앞에 요소 삭제
- `data.toString()` : 배열 모든 요소 출력
- `data.concat(data1, data2)` : 배열 합침
- `data.join('')` : 배열 요소 특정 문자 단위로 합침
- `data.reverse()` : 배열 요소 reverse
- `data.sort(function(){})` : 함수식으로 배열 sort


### Browser History API

- `window.history.back()` : 뒤로가기
- `window.history.forward()` : 앞으로 가기
- `window.history.go(num)` : 원하는 위치 이동
- `window.history.length` : return page index
- `window.onpopstate(event)` : pop state event
- `window.addEventListener(“event”, data, boolean)` :
- `history.pushState(stateObj, title, url)` : create new history
- `history.replaceState()` : change present history


### File API
*fs = require('fs'), fd = file directory, [en] = [encoding], [cal] = [callback]*
- `readFile(filename, [en], [cal])` : Read file
- `fs.writeFile(filename, data, [en], [cal])` : Write file
- `open(path, mode, [cal])` : Open file
- `close('fd, [cal]')` : Close file
- `mkdir(path, [cal])` : Make directory
- `rmdir(path, [cal])` : Remove directory
- `rename(path1, path2, [cal])` : Rename file name
- `chmod('path, mode, [cal]')` : Designate file permissions



### Higher-order Function

- `data.reduce(func, sumVal)` : data를 func해 val에 합침
- `.map(arr, function)` : arr에 객체의 data를 넣은 func의 반환값을 add(list auto parameter & return)
- `.mapcat(arr, function)` : 다중 map에 사용
- `.filter(arr, function)` : function대로 원하는 값을 arr에서 가져옴(조건식 무조건 비교후 제외)
