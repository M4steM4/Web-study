# **LESS**
It is CSS pre-processor(CSS extend scripting language)


## Table of Contents

1. [LESS Basic Convention](#LESS-Basic-Convention)
1. [Color Function](#Color-Function)
1. [Color Mix Function](#Color-Mix-Function)
1. [Math Function](#Math-Function)
1. [String Function](#String-Function)
1. [Type Function](#Type-Function)


### LESS Basic Convention

- `@` : 변수 선언, 가변변수
-  `@_` : 모든 변수(값x, 모든조건연산)
- `@arguments` : JS 스프레드 연산자와 비슷
-  `not` : 부정
- `@import` : 파일 불러오기
- 조건에 맞는 함수 실행 : `.function(@value) when (조건문) {}`
- 함수 선언 : `.function-name(@parameter) {~~}`
- 함수 참조 : `.function-name`
- 함수 은닉 : `#tag{.mixin(){}}`
- 내부 함수 참조 : `#tag-name > .function-name`
- 변수 유효 범위 : block scope
- 변수 이름 변수선언 : `@@value`(like php)
- Use JS string syntax : ` `` `


### Color Function
*색상 관련 함수(@value, @percentage)*

- `lightness()` : 밝기 정도 반환
- `saturation()` : 채도 정도 반환
- `alpha()` : 알파 정도 반환
- `lighten()` : 명도 % 밝게
- `darken()` : 명도 % 어둡게
- `saturate()` : 채도 % 밝게
- `desaturate()` : 채도 % 어둡게
- `fadein()` : 알파 % 높게
- `fadeout()` : 알파 % 낮게
- `fade()` : %만큼 투명도를 가지는 색상
- `mix()` : color 두개 섞음


### Color Mix Function

- `multiply()` :
- `screen()` :
- `overlay()` :
- `softlight()` :
- `hardlight()` :
- `difference()` :
- `exclusion()` :
- `average()` :
- `negation()` :


### Math Function

- `round()` : 반올림
- `ceil()` : 올림
- `floor()` : 내림
- `percentage(0.~)` : %반환


### String Function

- `toUpperCase()` : string 대문자화
- `toLowerCase()` : string 소문자화
- `trim()` : string 공백제거


### Type Function

- `iscolor()` : 컬러형인지 체크
- `isnumber()` : 숫자형인지 체크
- `isstring()` : 문자형인지 체크
- `iskeyword()` : 배열의 키인지 체크
- `isurl()` : url인지 체크
- `ispixel()` : 단위가 px인지 체크
- `ispercentage()` : 단위가 %인지 체크
- `isem()` : 단위가 em인지 체크
