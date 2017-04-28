# **Sass**
Syntactically Awesome Style Sheets
It is CSS pre-processor(CSS extend scripting language)

## Table of Contents
1. [Sass Basic Convention](#Sass-Basic-Convention)
1. [](#)


### Sass Basic Convention

- Ruby로 개발
- 변수 선언 : `$valName : value`
- 변수 범위 : block scope
- 전역 변수 : `value !global`
- partial기능 : import시 `_`파일은 css파일로 변환시 컴파일안함
- `@import` : css엔 하나의 파일만 올라가서 http 요청 한번
- 연산시 단위는 무조건 통일되어야함



### Sass Semy Function

- `#{}` : 그대로 출력
- `&` : 부모 참조 선택자
- `%` : placehold(%val{})
- `@at-root` : 상속하지않고 최상단이동
- `@media쿼리` : 상속받는건 안되고 주는건 됨
- `@for $value from num through(to) num {}, @each $value in $list {}`
- `not` === `!`


### Sass Mixin
- `@extend .classname` : class 상속
- `@mixin function()` : 함수 선언
- `@include function()` : 함수 호출
- `@funtion function()` : return 함수 선언
- `@content` : 함수 전달시 받은 내용 로드



### Sass Function
- `lighten($color, $percent)` : percent만큼 밝은 색상
- `darken($color, $percent)` : percent만큼 어두운 색상
- `complement($color)` : RGB반전
- `type-of($value)` : value type return
- `list-saparator($list)` : list를 나누는 기준을 반환(space, comma 등)
- `nth($list, num)` : num번째 배열값 반환
- `set-nth($list, num, $value)` : num번째 배열값 수정
- `remove($list, $value)` : 배열내부 값 삭제
- `map-get($mapvalue, $key)` -> 멥변수 안에서 key의 value를 끄집어냄
- `map-merge($mapvalue, map)`
- `inspect($list)` -> 실제로 존재하는 list만 view
