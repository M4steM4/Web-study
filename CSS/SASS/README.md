# **Sass**
Syntactically Awesome Style Sheets
It is CSS pre-processor(CSS extend scripting language)

## Table of Contents
1. [Sass Basic Convention](#Sass-Basic-Convention)
1. [](#)


### Sass Basic Convention

- Sass가 포괄적인 의미
- Sass는 중괄호와 세미콜론 제거를 위해 들여쓰기에 의존
- KISS principle(Keep It Simple Stupid)
- `@charset 'utf-8'` : 인코딩
- 특정 css값을 식별, 따옴표 x
- 연산시 단위 통일(px, em)
- 단위 붙이기 : `$value + 0px`
- 변수 선언 : `$valName : value`
- 변수 범위 : block scope
- 전역 변수 : `value !global`
- 불변 변수 : 대문자 & `_`
- 매개 변수 : `$value...`으로 받으면 리스트화
- null대신 not
- lighten과 darken보다 mix를 사용
- partial기능 : import시 `_`파일은 css파일로 변환시 컴파일안함
- `@import` : css엔 하나의 파일만 올라가서 http 요청 한번
- 연산시 단위는 무조건 통일되어야함


### Sass File Structure
*All file use partial*

- base/ : reset, typography, boilerplate code
    - reset.scss
    - typography.scss

- components/ : semi layout, small module
    - button.scss
    - carousel.scss
    - cover.scss
    - dropdown.scss

- layout/ : site layout, grid style
    - navigation.scss
    - grid.scss
    - header.scss
    - footer.scss
    - sidebar.scss
    - forms.scss

- pages/ : limitied files
    - home.scss
    - contact.scss

- themes/ : user theme style
    - theme.scss
    - admin.scss

- utils/ : sass tool, sass helper
    - variables.scss
    - functions.scss
    - mixins.scss
    - helpers.scss

- vendors/ : normalize, exterior library
    - bootstrap.scss
    - jquery_ui.scss

- main.scss
*@import시 _ 생략, shame파일에 css핵파일 넣음*


### Sass Semy Function

- `#{}` : 그대로 출력
- `&` : 부모 참조 선택자
- `&-` : 부모 병합 선택자(name merge)
- `%` : placehold(%val{})
- `!default` : 덮어쓰기 방지
- `@at-root` : 상속하지않고 최상단이동
- `@debug-map` : Data
- `@debug` : Sass script debug
- `@warn` : exception error(but never stop)
- `@error` : exception eroor(but stop)
- `@media쿼리` : 상속받는건 안되고 주는건 됨
- 반복문
    - `@for $value from num through(to) num {}`
    - `@each $value in $list {}`
- `not` === `!`


### Sass Mixin
- `@extend .classname` : class 상속
- `@mixin function()` : 함수 선언
- `@include function()` : 함수 호출
- `@funtion function()` : return 함수 선언
- `@content` : 함수 전달시 받은 내용 로드


### Sass Function
- `lighten($color, $percentage)` : percent만큼 밝은 색상
- `darken($color, $percentage)` : percent만큼 어두운 색상
- `mix(color, $color, $percentage)`
- `complement($color)` : RGB반전
- `type-of($value)` : value type return
- `list-saparator($list)` : list를 나누는 기준을 반환(space, comma 등)
- `nth($list, num)` : num번째 배열값 반환
- `set-nth($list, num, $value)` : num번째 배열값 수정
- `remove($list, $value)` : 배열내부 값 삭제
- `map-get($mapvalue, $key)` -> 멥변수 안에서 key의 value를 끄집어냄
- `map-merge($mapvalue, map)`
- `inspect($list)` -> 실제로 존재하는 list만 view
