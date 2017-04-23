# **CSS**
Cascading Style Sheets


## Table of Contents
1. [CSS Basic Convention](#CSS-Basic-Convention)
1. [CSS Rank](#CSS-Rank)
1. [CSS Layers](#CSS-Layers)
1. [CSS Button Reset](#CSS-Button-Reset)
1. [CSS Selector](#CSS-Selector)
    1. [Pseudo Element](#Pseudo-Element)
    1. [Pseudo Classes](#Pseudo-Classes)
    1. [Background](#Background)
    1. [Border](#Border)
    1. [Text](#Text)
    1. [Font](#Font)
    1. [BOX](#BOX)
    1. [Animation](#Animation)
    1. [Transform](#Transform)
    1. [Transition](#Transition)
    1. [ETC](#ETC)
1. [Flex](#Flex)


### CSS Basic Convention

- 상황에 따른 미디어타입 사용, 웹 장애 or 비장애 체크
- W3C Validation 통과를 권장
- 여백, 줄간격 생략, 속성값이 0일경우 단위 생략, 마지막 스타일 세미콜론 생략
- font `px`표현 : `em` > `%` > `px` > `pt` (1em == 100% == 16px == 12pt)
- ID는 calmelcase, class는 underscore
- `@import`사용 금지 : 브라우저에서 이미지 로딩후 적용이 되기 때문
- selector를 Tag name으로 핸들링 금지
- Vendor Prefix
    - moz : FireFox
    - webkit : Chrome, Safari
    - o : Opera
    - ms : Explorer

<br>
### CSS Rank

1. Object is exposed and how it is represented.
    - display
    - overflow
    - right & left
    - list-style
1. Location and coordinates
    - position
    - float
    - z-index
    - clear
1. Size and white space
    - width
    - height
    - padding
    - margin
1. Outline and background
    - border
    - background
    - outline
1. Font and sort
    - color
    - font
    - text-decoration
    - text-align
    - vertical-align
    - white space
1. Content
    -content


### CSS Layers

- Function Call
- Recalculate Style(element style time calculate)
- Layout(each element feature and position create)
- Paint Setup
- Paint(element create and input reader -> draw GPU)
- Composite Layers(draw frame)


### CSS Shorthand Rank

- font

`font: style variant weight size height family`
```CSS
    .element {
        font: normal normal 400 15px normal inherit;
    }
```
- background

`background: color url(image url) repeat position attachment`
```CSS
    .element {
        background : transparent url(image.jpg) no-repeat center scroll;
    }
```
- list

`list-style: type position url(image url)`
```CSS
    .element {
        list-style: circle inside url(list_image.png);
    }
```
- transition

`(web kinds)transition : property duration timing-function delay;`
```CSS
    .element {
        -moz-transition: all 3s ease-out 2s;
    }
```
- border

`border: width style color`
```CSS
    .element {
        border: 2px dotted red;
    }
```
- animation

`animation : name duration delay count timing-function direction`
```CSS
    .element {
        animation: move 2s infinite ease-in alternate;
    }
```

- shadow

`*-shadow : X-axis coordinate Y-axis coordinate spread color`
```CSS
    .element {
        shadow: 5px 5px 3px white;
    }
```

### CSS Button Reset

```css
.reset {
    display: inline-block; /* 부모요소에서 text-align 적용 */
    font-family: inherit; /* 글꼴 강제 상속 */
    vertical-align: middle; /* 다른 요소 중첩시 강제 상속 */
    cursor: pointer; /* 커서위 손가락표시 */
    white-space : nowrap; /* 줄바꿈 강제 취소 */
    text-decoration : none; /* 글자 밑줄 제거 */
    background: transparent; /* 기본 배경색 투명 */
    outline: 0; /* 포커스시 외곽선 제거 */
}
```

### CSS Selector

#### **Pseudo Elements**

*엘리먼트의 일부분을 선택하여 삽입된 것을 가상요소라고 함*
- `::after` : element 뒤에 content 추가시
- `::before` : element 앞에 content 추가시
- `::first-child` : 첫 element의 자식 요소
- `::first-letter` : text 첫글자
- `::first-line` : text 첫문장
- `::last-child` : 마지막 element 자식 요소
- `::nth-child(n)` : n번째 element 자식 요소
- `::selection` : 드래드된 text 이벤트
- `::placeholder` : placeholder(input tag)의 스타일 지정
- `::spelling-error` : 철자 오류가 있을 경우 스타일 지정
- `::grammer-error` : 문법적 오류가 있을 경우 스타일 지정


#### **Pseudo Classes**

*가상 클래스로서 특정 이벤트 시 스타일을 적용할 때 사용*
- `:active` : link 클릭 실행시 이벤트
- `:focus` : link에 마우스 focus시 이벤트
- `:hover` : link over시 이벤트
- `:link` : link 기본 이벤트
- `:visited` : 이미 방문한 link 이벤트
- `:checked` : 체크된 input type이벤트 지정
- `:disabled` : 사용 deny된 type이벤트 지정
- `:empty` : 비어있는 type이벤트 지정
- `:target` : 선택된 type 이벤트 지정

- `:first-child` : 첫번째 자식요소 선택
- `:first-of-type` : 부모 요소와 같은 첫번째 자식 요소 선택
- `:last-child` : 마지막 자식요소 선택
- `:last-of-type` : 부모 요소와 같은 마지막 자식 요소 선택
- `:not` : 특정 태그가 아닌 요소 선택
- `:nth-child(n)` : n번째 요소 선택
- `:nth-last-child(n)` : 뒤에서 n번째 요소 선택
- `:nth-of-type(n)` : 부모 요소와 같은 n번째 요소 선택
- `:nth-last-of-type(n)` : 부모 요소와 같은 뒤에서 n번째 요소 선택


#### **Background**

- `linear-gradient(to~, x,x,x)` : 배경 그라데이션 삽입
- `attachment` : 스크롤 이동시 배경 스크롤 여부
    - scroll
    - fixed
    - local
- `color` : 배경화면 색 지정
- `clip` : 배경화면 이미지 적용 범위 지정
    - border-box
    - padding-box
    - content-box
- `origin` : 배경화면 이미지 적용 범위 지정(clip과 같음)
- `image` : 배경 이미지 지정, `url( )`함수 사용
- `position` : 배경화면 지정 위치 지정
    - left
    - right
    - top
    - bottom
    - center
    - xy%
- `repeat` : 배경이미지 반복 여부
    - repeat
    - repeat-x
    - repeat-y
    - no-repeat
- `size` : 배경화면 이미지 사이즈 정의[xpx, ypx]
- `blend-mode` : 배경 이미지 그라데이션 적용 방법 선택
    - normal
    - multiply
    - screen
    - overlay
    - darken
    - lighten
    - color-dodge


#### **Border**

- `color` : border 색상지정
- `image` : border에 적용할 이미지 지정, `url()`함수 사용
- `style` : element 스타일 지정
    - dotted
    - dashed
    - solid
    - double
    - groove
- `width` : element 두께 지정
    - thin
    - thick
    - medium
- `radius` : element 곡선 처리
- `spacing` : 테이블에서 tr과 td border간격 지정
- `collapse` : 테이블에서 tr과 td border 지정(separate, collapse)


#### **Text**

- `align` : text 정렬 방식 지정
    - left
    - right
    - center
    - justify
- `decoration` : text 라인 지정
    - underline
    - overline
    - line-through
- `indent` : text 들여쓰기[-npx ~ npx]
- `shadow` : text 그림자 효과
- `transform` : text 대소문자 전환
    - capitalize
    - uppercase
    - lowercase
- `overflow` : text가 넘어갈 시 처리방법 지정
    - clip
    - ellipsis
    - string


#### **Font**

`@font-face`
- `family` : font 종류를 지정
- `size` : font 크기를 지정(px)
- `style` : font 출력 스타일을 지정(italic, oblique)
- `variant` : text를 uppercase 한 후 크기 키움(small-caps)
- `weight` : font 두께 지정(100단위 700 = bolder, normal = 400)


#### **Box**

- `shadow` : element 그림자 처리
- `sizing` : padding, margin, border의 값을 모두 합쳐서 계산하도록 함


#### **Animation**

`@keyframes` : animation 동작 지정{%{}%{}%{}}
- `delay` : 동작 지연 시간 지정(s)
- `direction` : animation 방향 지정
    - normal
    - reverse
    - alternate
- `duration` : animation 동작 시간 지정(s)
- `iteration-count` : animation 반복 횟수 지정
- `name` : function처럼 animation 이름을 지정(`@keyframes` 로 사용)
- `play-state` : animation 활성 여부(paused, running)
- `timing-function` : animation 이동 방식 지정
    - linear
    - ease-in
    - ease-out


#### **Transform**

- `translate()` : element 이동(xpx, ypx)
- `rotate()` : element 회전(deg)
- `scale()` : x대 y로 비율 조정
- `skew()` : x대 y로 회전(xdeg, ydeg)
- `matrix()` : element 조정 (x간격 x비율 y비율 y간격 x시작 y시작)


#### **Transition**

- `delay` : transition 처리 동작 시간 지정(s)
- `duration` : 함수 실행 시간을 지정(s)
- `timing-function` : animation 이동 방식 지정


#### **ETC**

- **word**
    - `break` : text를 단어마다 끊도록 지정
        - keep-all
        - break-all
    - `spacing` : text 단어 간격 지정(-npx ~ npx)
- **list-style**
    - `type` : list 종류 지정(decimal, lower-alpha)
    - `position` : list사용시 들여쓰기 지정(inside, outside)
- `caption-side` : caption 위치 지정
- `cursor` : 커서 모양 지정
    - all-scroll
    - help
    - move
    - no-drop
    - pointer
- `clip` : element를 자름(x시작점 x축길이 y축길이 y시작점)
- `outline` : 바깥 외곽선 지정
- `letter-spacing` : text 자간 간격 지정
- `filter` : 이미지 필터 지정
    - blur
    - brightness
    - grayscale
    - invert
    - saturate
- `overflow` : element px을 벗어난 요소 지정시 사용
    - clip
    - visible
    - scroll
    - auto
- `quotes` : element 앞뒤 삽입문자 지정(“str”,”str”)

- **display**
    - `block` : 블록 단위로 처리
    - `inline` : 기본값으로 처리(줄바꿈 미적)
    - `inline-block` : 요소 inline 내부 block
- **position**
    - `relative` : 포함된 요소안에서 위치
    - `static` : 포함된 요소안에서 고정
    - `absolute` : 문서 내에서 위치
    - `fixed` : 스크롤에도 절대적 위치


### Flex

#### **justify-content**
*가로 정렬 관련*

- `flex-start` : 맨 오른쪽 기준 정렬
- `flex-end` : 맨 왼쪽 기준 정렬
- `center` : 가운데 정렬
- `space-between` : 가운데 기준으로 양끝 정렬
- `spcae-around` : 가운데 기준으로 균등 정렬


#### **align-item**

- `flex-start` : 맨 윗쪽 기준 정렬
- `flex-end` : 맨 아랫쪽 기준 정렬
- `center` : 가운데 정렬
- `baseline` :
- `stretch` :


#### **align-content**

- `flex-start` : 맨 윗쪽 기준 정렬
- `flex-end` : 맨 아랫쪽 기준 정렬
- `center` : 가운데 정렬
- `space-between` : 가운데 기준으로 세로 양끝 정렬
- `space-around` : 가운데 기준으로 세로 균등 정렬


#### **flex-direction**

- `row` : 정방향
- `row-reverse` : 역방향
- `column` : 세로방향
- `column-reverse` : 세로 역방향


#### **flex-wrap**

- `nowrap` : 정렬 안함(overflow됨)
- `wrap` : 폭에 맞춰서 정렬
- `wrap-reverse` : 바닥 기준으로 wrap 정렬


#### **flex etc**

- `order` : 우선순위로 숫자가 높을수록 우선적으로 정렬
- `align-self` : 선택된 객체만 align-items값 결정
- `flex-flow` : direction + wrap
- `flex-grow` : flex 아이템 공간 차지 비율 지정
- `flex-shrink` : flex 컨테이너 아이템 축소 비율
