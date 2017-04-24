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


### JS Basic Convention
- 한 문장엔 한줄의 코드 입력 : 디버거로 코드를 추적하기 어려움, 스텝실행 저하
- Strict모드(`use strict`) : 안정성과 효율성을 위해 제한
- 객체 생성자 X : 객체 개념이 생김, JS는 기본적으로 객체 반환
- 문자 코드 표기 : UTF-8 을 이용, Ajax 외부데이터 통신시 에러 방지
- 고계 함수 : 함수를 인자 값으로 넘겨줄수 있고 사용 가능하다
- 변수 선언 : `var _value` 선언은 클래스 및 함수 외부에서 참조할 수 없음
- JSON : JavaScript Object Notification 객체 리터럴 형식
- 클로저 => 함수값을 인자로 넘기거나 함수의 작동방식을 인자로 넘겨줄 수 있음, 인자값이 없으면 외부에서 찾음
- `document.write` : 표시 위치를 지정할 수 없어 쓰이지 않음
- `$.isXXX` > `typeof` => `$.isXXX`가 반환값이 더 정확
- '==' 수치만 비교 '===' 자료형까지 비교
- `for(var i = 1; len < data.length; i++)` : 프로퍼티로 엑세스 하기 때문에 성능이 떨어짐
- 소숫점 곱셈 : 소숫점 2진수 계산 문제로 오류 발생
- Function 생성자 : Function생성자는 동적 함수 변경 + 코드해석 == 속도저하
- function sum(...numbers) {return numbers.reduce(function(){return})} : 가변인수 참조방법
- `o_` : 필수 인수가 아닌 경우 변수는 o_를 붙여서 표현한다 => `...` spread 연산
- `document.createElement(“”) = create new tag`


[비동기 함수]
-전 명령의 수행이 끝나지 않아도 다음 명령을 실행
-많은양의 요청을 빠르게 처리 가능
-예시 : 먼저 setTimeout()에 인자로 넘긴 익명함수는 모두 0.1초 뒤에 호출될 것이다. 그 0.1초 동안에 이미 반복문이 모두 순회되면서 i값은 이미 10이 된 상태. 그 때 익명함수가 호출되면서 이미 10이 되어버린 i를 참조하는 것이다.)

[호이스팅]
-변수의 정의가 그 범위에 따라 선언와 할당으로 분리되는것
-함수내 정의되었을 경우 함수의 최상위로, 함수밖에선 전역컨텍스트의 최상위로 호이스팅
-선언이나 초기화보다 먼저 최상위로 호이스트됨
-함수선언은 변수선언을 덮어쓰지만, 변수에 값이할당된 경우엔 반대임

[클로저]
-자신이 호출된 시점의 스코프를 참조
-scope는 변수와 매개변수의 접근성과 생존기간
-클로저는 값이 아닌 참조로 접근하기 때문에 최근에 갱신된 변수에 참조

[JS Memo]
한번 할당할건 const
재할당 해야되는건 let(둘다 블록스코프)
function선언은 축약형으로
array는 []로
배열복사는 spread 연산자로
string은 "` `"로 +연산자 없이 가능(template strings)
IIFE(immediately-invoked function expression - 즉시실행함수식)
블록안에서 함수선언 no, 임시함수사용 + 함수변수 스코핑
함수의 파라미터는 변형no(오브젝트인 경우 문제 발생)
default parameter는 뒤쪽에




[JS Scope]

scope chain은 중첩함수시 하위함수가 상위함수의 변수 또는 메모리를 참조하는것

실행컨텍스트 : 실행 가능한 코드 블럭이 실행되는 환경
globval code, Eval code, Function code
실행에 필요한 정보 : 변수(지역변수, object property), parameter, function define, value’s scope, this

실행컨텍스트의 3가지 property : Variable Object, Scope Chain, this value

컨트롤이 실행컨텍스트 들어가기전에 전역 객체가(Math, String등 기본함수, BOM, DOM)들어가고 프로그램 종료시 라이프 사이클 종료
실행컨텍스트 처리 순서 : Scope Chain reset-> Variable Instantiation-> this value define

실행 컨텍스트 처리가 끝나면 스코프 체인이 외부와 엮고, 함수의 스코프 정의후 Object 객체과 this가 자신의 함수를 참조하도록 한다. 컨트롤 실행전이기 때문에 변수는 호이스팅 되어있으나 값은 없다.
코드를 실행하다 변수가 정의되면 값을 넣고 함수가 정의될 경우 함수를 global code에 떄려박고 다시 그 함수의 실행 컨텍스트가 실행된다
이때 생성된 함수의 스코프의 0번째는 자기 자신의 스코프 1번째는 상위 함수의 스코프이며 생성되는 this는 상위 함수를 참조하게 된다.(this는 무조건 전역 객체에 바인딩 되기 때문)


[Js generator]

이터레이션을 제어할 수 있는 특별객체생성
for문을 순회할때 yield를 만날떄까지만 돌고 next()함수 호출을 기다림
function * 로 사용



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
- `data.join(' ')` : 배열 요소 특정 문자 단위로 합침
- `data.reverse()` : 배열 요소 reverse
- `data.sort(function(){})` : 함수식으로 배열 sort


### 고계 함수

- `data.reduce(func, sumVal)` : data를 func해 val에 합침
- `.map(arr, function)` : arr에 객체의 data를 넣은 func의 반환값을 add
- `.mapcat(arr, function)` : 다중 map에 사용
- `.filter(arr, function)` : function대로 원하는 값을 arr에서 가져옴(조건식 무조건 비교후 제외)
