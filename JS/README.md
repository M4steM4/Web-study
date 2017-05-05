# **JS**
Java Script

## Table of Contents

1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)


### JS Value Convention

- `const` : 한번 할당 변수, block scope
- `let` : 재할당 변수, block scope
- `var _value` : 클래스 및 외부함수 참조 불가
- `o_` : 필수 parameter 표현
- `var`는 할당 없이 스코프에 호이스트, `const`, `let`은 TDZ라는 새로운 할당
- 함수 내부 지역변수가 우선순위가 가장 높음
- const, let은 다른 스코프가 생성되어 변수명 충돌 없음
- default parameter는 뒤에


### JS Basic Convention

- 주석 `//FIXME`는 해결 필요 `//TODO`는 구현 필요
- if문에는 공백한칸, function에는 공백x
- `eval()` : 취약점때문에 쓰이지 않음
- 한 문장엔 한줄의 코드 : debugging & 스텝실행 저하
- Strict모드(`use strict`) : 안정성과 효율성을 위해 제한
- 문자 코드 표기 : UTF-8 을 이용, Ajax 외부데이터 통신시 에러 방지
- JSON : JavaScript Object Notification 객체 리터럴 형식
- `document.write` : 표시 위치 지정 불가
- `$.isXXX` > `typeof` => `$.isXXX`가 반환값이 더 정확
- `==` 수치만 비교 `===` 자료형까지 비교
- `data.length` : 반복문 사용시 계속해서 프로퍼티 엑세스 => 성능 저하
- Function 생성자 : Function생성자는 동적 함수 변경 + 코드해석 == 속도저하
- 이름이 부여된 함수는 콜스택에서 확인 가능 => 호이스트되기 때문
- 오브젝트, 함수는 camelCase, class는 Pascal
- function sum(...numbers) {return numbers.reduce(function(){return})} : 가변인수 참조방법
- `document.createElement(“”) = create new tag`
- 배열 복사 : spread 연산자(`...`)
- string : 백쿼터로 + 연산자 없이 한줄로 기입 가능
- 블록범위 내에서 함수선언 x, 임시함수 사용
- 함수 파라미터 변형 x : object인 경우 문제 발생



### JS

#### non-blocking Function

- 전 명령의 수행이 끝나지 않아도 다음 명령을 실행
- 많은 양의 요청을 빠르게 처리 가능
- 예시 : 먼저 setTimeout()에 인자로 넘긴 익명함수는 모두 0.1초 뒤에 호출될 것이다. 그 0.1초 동안에 이미 반복문이 모두 순회되면서 i값은 이미 10이 된 상태. 그 때 익명함수가 호출되면서 이미 10이 되어버린 i를 참조하는 것이다.)

#### Hoisting

- 변수의 정의가 그 범위에 따라 선언와 할당으로 분리되는것
- 변수가 함수 내 정의되었을 경우 함수의 최상위로, 함수밖에선 전역컨텍스트의 최상위로 호이스팅
- 호이스트는 선언과 초기화보다 먼저 이루어짐
- 함수 선언은 변수 선언을 덮어쓰지만, 변수에 값이 할당된 경우엔 반대임

#### Closure

- 내부 함수가 외부 함수의 변수 뿐만 아니라 파라미터까지 접근 가능한 것
- 함수가 만들어진 환경과 변수를 "기억" 하는것
- scope는 변수와 매개변수의 접근성과 생존기간
- 클로저는 값이 아닌 참조로 접근, 최근에 갱신된 변수에 참조

#### Scope Chain

- 하위함수가 상위함수의 변수 또는 메모리를 참조하는것
- 스코프체인은 함수가 변수에 할당시 활성화 객체를 생성
- 할당되기전 함수가 생성한 객체를 활성화객체에 담음
- 할당된 함수가 실행되면 그 함수의 활성화 객체가 따로 생성되어 담아짐
- 내부함수가 외부함수의 변수를 참조하고 기억하는것은 활성화 객체가 따로 생성되기 때문
- 이 이외의 객체는 글로벌 오브젝트가 담당

#### Call stack

- 코드 정보 저장 스택 자료구조
- 서브루틴을 실행한다음 어디로 돌아가야할지 절차를 따라가기위해 사용
- 전역코드는 콜스택에 push됨
- 브라우저에서는 global객체인 window객체의 프로퍼티로 들어가지만, nodeJS에선 global이라는 이름을 가진 객체로 들어감
- 코드가 실행되기전에 전역변수가 호이스팅되고 undefinded값을 가짐

#### Generator

- 이터레이션을 제어할 수 있는 특별객체생성
- for문을 순회할때 yield를 만날떄까지만 돌고 next()함수 호출을 기다림
- function * 로 사용

#### Execution Context

- 실행 가능한 코드 블럭이 실행되는 환경
    - globval code
    - Eval code
    - Function code
- 실행에 필요한 정보
    - value(지역변수, object property)
    - parameter
    - function define
    - value’s scope
    - this
- 실행컨텍스트의 3가지 property
    - Variable Object
    - Scope Chain
    - this value
- 실행컨텍스트 처리 순서
    1. Scope Chain reset
    1. Variable Instantiation
    1. this value define
- 컨트롤이 실행컨텍스트 들어가기전에 전역 객체가(Math, String등 기본함수, BOM, DOM)들어가고 프로그램 종료시 라이프 사이클 종료
- 실행 컨텍스트 처리가 끝나면 스코프 체인이 외부와 활성화
- 함수의 스코프 정의후 Object 객체과 this가 자신의 함수를 참조
- 컨트롤 실행전이기 때문에 변수는 호이스팅 되어있으나 값은 없다.
- 코드를 실행하다 변수가 정의되면 값을 넣고 함수가 정의될 경우 함수를 global code에 떄려박고 다시 그 함수의 실행 컨텍스트가 실행
- 이때 생성된 함수의 스코프의 0번째는 자기 자신의 스코프 1번째는 상위 함수의 스코프이며 생성되는 this는 상위 함수를 참조하게 된다.(this는 무조건 전역 객체에 바인딩 되기 때문)


### Math Function

- `Math.ceil(num)` : 소숫점 올림
- `Math.floor(num)` : 소숫점 내림
- `Math.round(num)` : 소숫점 반올림
- `Math.random()` : 1 이하 난수 출력
- `num.toFixed(n)` : 소숫점 반올림
- n`um.toString(n)` : 진수 변경


### String Function

- `str.toLowerCase()` : 문자열 소문자화
- `str.toUpperCase()` : 문자열 대문자화
- `str.substring(startn, endn)` : 문자열 부분 자르기
- `str.slice(startn, endn)` : 문자열 부분 자르기
- `str.substr(startn, len)` : 문자열 len만큼 잘라내기
- `str.indexOf(srcstr)` : 매칭되는 문자열 위치 반환
- `$.trim(str)` => 문자열에서 이스케이프 문자 삭제


### Regular Expression Function
EX) `var ex =  /http(s)?\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gim;`
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


### Higher-order Function

- `data.reduce(func, sumVal)` : data를 func해 val에 합침
- `.map(arr, function)` : arr에 객체의 data를 넣은 func의 반환값을 add
- `.mapcat(arr, function)` : 다중 map에 사용
- `.filter(arr, function)` : function대로 원하는 값을 arr에서 가져옴(조건식 무조건 비교후 제외)
