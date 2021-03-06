# **Sass**
Syntactically Awesome Style Sheets
It is CSS pre-processor(CSS extend scripting language)


## Table of Contents

1. [Sass Basic Convention](#Sass-Basic-Convention)
1. [Sass File Structure](#Sass-File-Structure)
1. [Sass Semy Function](#Sass-Semy-Function)
1. [Sass Mixin](#Sass-Mixin)
1. [String Function](#String-Functon)
1. [Math Function](#Math-Function)
1. [Color Function](#Color-Function)
1. [List Function](#List-Function)
1. [Map Function](#Map-Function)


### Sass Basic Convention

- `sass style.scss style.css` : compile
- Compile style option
    - `nested` : like sass syntax
    - `expanded` : basic css syntax
    - `compact` : one line css file
    - `compressed` : minify css file
- Sass는 전처리기와 문법 두가지를 의미하며, SCSS와는 표기법에서 차이
- Sass 3.0부터 SCSS(Sassy CSS)가 기본 표기법이 됨
- Sass는 중괄호와 세미콜론 제거를 위해 들여쓰기에 의존
- KISS principle(Keep It Simple Stupid)
- `@charset 'utf-8'` : 인코딩
- Css 단위 식별, 따옴표 x, 연산시 단위 통일
- block scope
- 단위 붙이기 : `$value + 0px`
- 변수 선언 : `$valName : value`
- 전역 변수 : `!global`
- 불변 변수 : 대문자 & `_`
- 매개 변수 : `$value...`으로 받으면 리스트화
- null대신 not
- lighten과 darken보다 mix를 사용
- partial기능 : import시 `_`파일은 css파일로 변환시 컴파일안함
- `@import` : css엔 하나의 파일만 올라가서 http 요청 한번
- 연산시 단위는 무조건 통일되어야함


### Sass Data Type

- Number : `1.2`, `13`, `10px`
- String : `"www.google.com"`, `"line"`
- Color : `blue`, `#04a3f9`, `rgba(244, 56, 53, 0.9)`
- boolean : `true`, `false`
- list : `1px 4px 5px 4px`
- map : key1: value


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
- `@if(){}` : Use if function
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


### String Function

- `quote()` : Add 따옴표
- `unquote()` : 따옴표 삭제
- `str-length()` : 배열 길이 반환
- `str-insert(string, node, index)` : 배열 요소 삽입
- `str-index(string, substring)` : 배열 요소 위치 반환
- `str-slice(string, num)` : 배열 자르기
- `to-upper-case()` : 문자열 대문자화
- `to-lower-case()` : 문자열 소문자화


### Math Function

- `percentage()` : Change number value to percentage value
- `round()` : 반올림
- `ceil()` : 올림
- `floor()` : 내림
- `abs()` : 절댓값
- `min($list...)` : 작은수 반환
- `max($list...)` : 큰수 반환
- `random($list...)` : 랜덤값 반환


### Color Function

*($color, $percentage)*
- `invent()` : Color reverse
- `lighten()` : 채도 % 밝게
- `darken()` : 채도 % 어둡게
- `saturate()` : 명도 % 밝게
- `desaturate()` : 명도 % 어둡게
- `fade-in()` : 알파 % 밝게
- `fade-out()` : 알파 % 어둡게
- `mix(color, $color, $percentage)` : 중간색
- `complement($color)` : RGB반전
- `opacity(value, opc)` : Add opc
- `transparentize(value, opc)` : Subtraction opc


### Data Function

- `type-of()` : Get data type
- `unit()` : Return Data unit
- `unitless()` : Check data has unit
- `comparable()` : Compare data type


### List Function

- `length()` : 길이 반환
- `index(element, index)` : Return element index
- `list-saparator($list)` : list를 나누는 기준을 반환(space, comma 등)
- `append(list, value)` : list에 value 넣음
- `join(list1, list2)` : Combination list
- `zip(list, list, list)` : Reunion each list value
- `nth($list, num)` : num번째 배열값 반환
- `set-nth($list, num, $value)` : num번째 배열값 수정
- `remove($list, $value)` : 배열내부 값 삭제
- `inspect($list)` : 실제로 존재하는 list만 view


### Map Function
- `map-get($mapvalue, $key)` : 맵변수 반환
- `map-merge($mapvalue, map)` : 맵변수 병합
- `map-remove($mapvalue, key)` : 맵변수 삭제
- `map-keys($mapvalue)` : 맵변수 key list로 반환
- `map-has-key($key)` : 맵변수에 key값이 있나 확인
