# JavaScript


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
- 한 문장엔 한줄의 코드만 입력한다 => 디버거로 코드를 추적하기 어려움, 스텝실행 저하
- Strict모드('use strict') => 안정성과 효율성을 위해서 이용하면 안되는것을 방지
- 객체 생성자는 이용하지 않는다 => 객체 개념이 생겼을 뿐더러 자동적으로 기본형을 객체로 변환함
- 자바스크립트 표기 => <script type = "text/javascript">
- 문자 코드 표기 => UTF-8 을 이용 -> Ajax 외부데이터 통신시 에러 방지
- 변수 선언 기법 => 카멜케이스(getPasswd), 파스칼(ParentNode), 언더스코어(get_time)
- 고계 함수 => 함수를 인자 값으로 넘겨줄수 있고 사용 가능하다
- 컴파일 순서 => 함수의 정의 -> 변수의 대입
- 객체 지향 => JS는 객체지향 언어이지만 프로토타입이라는 개념을 바탕으로 사용, 클래스도 있음
- 변수 선언 => `var _value` 로 선언시 클래스나 함수 외부에서 참조할 수 없음
- JSON => JavaScript Object Notification으로 객체 리터럴에 준한 형식이다
- 클로저 => 함수값을 인자로 넘기거나 함수의 작동방식을 인자로 넘겨줄 수 있음, 인자값이 없으면 외부에서 찾음


### JS Exception Convention

- document.write => 표시 위치를 지정할 수 없어 쓰이지 않음
- $.isXXXXX > typeof => $.isXXXX가 반환값이 더 정확
- '==' ,'===' => '=='은 수치값만 비교하고 '==='은 자료형까지 정확히 비교한다
- for(var i in obj){} => 변수 프로퍼티(key)가 담김
- for(var i = 1; len < data.length; i++) => 프로퍼티로 엑세스 하기 때문에 성능이 떨어짐
- 소숫점 곱셈 => 소숫점도 2 진수로 계산되기 때문에 소숫점 오류가 나기 때문에 정수로 치환한 후 계산
- Function 생성자 => Function생성자는 동적으로 함수를 변경하고 코드를 해석해야 하기 때문에 속도저하가 일어남
- o_' => 필수 인수가 아닌 경우 변수는 o_를 붙여서 표현한다
- arguments[] => 가변인수의 변수를 참조할때 사용
- function sum(...numbers) {return numbers.reduce(function(){return})} =>가변인수 참조방법


### JS Array

- 배열 생성 => (var data = [1,2,3,4]) -> 배열은 모두 객체로 취급된다(Call-By-Reference)
- 배열 참조 => 배열을 참조할때는 브래킷과 인덱스 번호를 이용한다(arr[3])
- 연관 배열 => var obj = {a:100, b:200, c:300}


### JS Type
parseInt() => 지수표현 이외의 모든 문장의 숫자형을 반환
parseFloat() => 16 진수 이외의 모든 문장의 숫자형을 반환
Number() => 문자형이 섞인 숫자형 이외의 모든 문자형과 타임스템프를 반환
typeof() => 변수의 데이터형 반환
객체변수.instanceof 생성자 => 생성자 판정


[jQuery 판정 메소드] - boolean값으로 반환
$.isArray() => 배열 여부 판정
$.isEmptyObject() => 비어 있음 여부 판정
$.isFunction() => 함수 여부 판정
$.isNumeric() => 수치 여부 판정
$.isPlainObject() => 객체 여부 판정
$.isWindow() => 윈도우 객체 여부 판정


[JS 기본 함수]
Math.ceil(num) => 소숫점 올림
Math.floor(num) => 소숫점 내림
Math.round(num) => 소숫점 반올림
Math.random() => 1 이하 난수 출력
num.toFixed(n) => 소숫점 반올림
num.toPrecision(n) => 모든 자릿수를 합쳐서 소숫점 반올림
num.toString(n) => 진수 변경


[JS 배열, 문자 함수]
str.length => 문자열 길이 반환
str.toLowerCase() => 문자열 소문자화
str.toUpperCase() => 문자열 대문자화
str.substring(startn,endn) => 문자열 부분 잘라내기, 알아서 startn과 endn구분
str.slice(startn, endn) => 문자열 부분 잘라내기, 음수도 알아서 위치 계산
str.substr(startn, len) => 문자열 len만큼 잘라내기
str.indexOf(srcstr) => 매칭되는 문자열 위치 반환
$.trim(str) => 문자열에서 이스케이프 문자 삭제


[JS 정규식] - var ex =  /http(s)?\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gim
ex.test(str) => 정규식에 맞는지 boolean 값으로 반환
ex.exec(str) => 정규식에 맞는 값을 반환, match와는 다르게 매칭된 문장은 다시 출력하지 않음
str.search(ex) => 정규식에 맞는 값의 위치를 반환
str.match(ex) => 정규식에 맞는 값을 반환
str.replace(ex, chgstr) => 정규식에 맞는 부분에 문자열 삽입
str.split(ex) => 정규식에 대해 일정한 단위로 단어를 잘라 배열로 만듦


[JS 배열 함수]
data.push(node) => 배열 마지막에 요소를 삽입
data.pop() => 배열 마지막 요소를 빼냄
data.unshift(node) => 배열 맨앞에 요소를 삽입
data.shift() => 배열 맨앞에 요소를 빼냄
data.toString() => 배열 모든 요소를 출력
data.concat(data1, data2) => 배열 여러개 한번에 출력
data.join(' ') => 배열 요소를 특정 문자로 합침
data.reverse() => 배열 요소를 뒤집음
data.sort(function(){}) => 함수 안에 수식으로 배열을 정렬
$.extend(targit, data1, data2) => 배열을 타깃에 복사한다
$.map(arr, function(value, index){}) => 배열을 함수처리해서 반환
$.grep(arr, function(value, index){}) => 배열을 함수로 판정해 판정된 배열만 가져옴


[JS 주요 함수]
setTimeout(function, milisec) => milisec가 지난 다음 function을 실행
setInterval(function milisec) => milisec마다 function을 실행(반복)
encodeURIComponent(data) => 특수문자 인코딩
$.parseJSON(str) => 객체 리터럴의 원하는 값을 찾아줌


data.reduce(func, sumVal) => data를 가져와 func실행값을 sumVal과 더해나간다
.map(arr, function) => function대로 원하는 값을 arr에서 추출(함수에 값을 넣어 나온값을 가져옴)
.mapcat(arr, function) => 다중 map에 사용
.filter(arr, function) => function대로 원하는 값을 arr에서 가져옴(조건식 무조건 비교후 제외)

document.createElement(“”) = create new tag
