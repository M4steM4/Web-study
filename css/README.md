# CSS

개인적으로 공부한 CSS관련 자료를 올려둔 것입니다.


## Table of contents
1. asd
1. asd

### CSS Basic Convention
- 상황에 따른 미디어타입 사용, 웹 장애 or 비장애 체크
- W3C Validation 통과를 권장
- 여백, 줄간격 생략, 속성값이 0일경우 단위 생략, 마지막 스타일 세미콜론 생략
- font `px`표현 : `em` > `%` > `px` > `pt` (1em == 100% == 16px == 12pt)
- ID는 calmelcase, class는 underscore
- `@import`사용 금지 : 브라우저에서 이미지 로딩후 적용이 되기 때문
- selector를 tag name으로 핸들링 금지


### *Pseudo-elements*
Pseudo-elements : 엘리먼트의 일부분을 선택하여 삽입된 것을 가상요소라고 함
- ::after : element 뒤에 content 추가시
- ::before : element 앞에 content 추가시
- ::first-child : 첫 element의 자식 요소
- ::first-letter : text 첫글자
- ::first-line : text 첫문장
- ::last-child : 마지막 element 자식 요소
- ::nth-child(n) : n번째 element 자식 요소
- ::selection : 드래드된 text 이벤트
- ::placeholder : placeholder(input tag)의 스타일 지정
- ::spelling-error : 철자 오류가 있을 경우 스타일 지정
- ::grammer-error : 문법적 오류가 있을 경우 스타일 지정


### *가상 클래스*
Pseudo-classes : 가상 클래스로서 특정 이벤트 시 스타일을 적용할 때 사용
- :active : link 클릭 실행시 이벤트
- :focus : link에 마우스 focus시 이벤트
- :hover : link over시 이벤트
- :link : link 기본 이벤트
- :visited : 이미 방문한 link 이벤트
- :checked : 체크된 input type이벤트 지정
- :disabled : 사용 deny된 type이벤트 지정
- :empty : 비어있는 type이벤트 지정
- :target : 선택된 type 이벤트 지정

- :first-child : 부모 요소의 모든 첫번째 자식 요소를 선택하여 스타일을 적용합니다
- :first-of-type : 부모 요소와 같은 모든 첫번째 자식 요소를 선택하여 스타일을 적용합니다
- :last-child : 부모요소의 모든 마지막 자식 요소를 선택하여 스타일을 적용합니다
- :last-of-type : 부모 요소와 같은 모든 마지막 자식 요소를 선택하여 스타일을 적용합니다
- :link : 방문하지 않은 링크를 선택하여 스타일을 적용합니다(list style 1)
- :not : 특정 태그가 아닌 모든 태그의 스타일을 적용합니다
- :nth-child(n) : 특정 태그의 n번째 요소 스타일을 적용합니다
- :nth-last-child(n) : 특정 태그의 뒤에서 n번째 요소 스타일을 적용합니다
- :nth-last-of-type(n) : 부모 요소와 같은 자식 요소를 뒤에서부터 선택하여 스타일을 적용합니다
- :nth-of-type(n) : 부모 요소와 같은 n번째 자식 요소를 선택하여 스타일을 적용합니다


### Background
color image repeat position size attachment origin(clip)

- linear-gradient(to~, x,x,x) :
- attachment : 스크롤 이동시 배경 스크롤 여부[scroll, fixed, local]
- color : 배경 색 지정
- clip(3) : 배경화면 적용 범위 설정[border-box, padding-box, content-box]
- image : 배경 이미지 지정, url( )함수 사용
- origin(3) : 배경화면 이미지 적용 범위 설정(clip과 같음)
- position : 배경화면 지정 위치 설정[left, right, top, bottom, center, xy%]
- repeat : 배경이미지 반복 여부[repeat, repeat-x, repeat-y, no-repeat]
- size(3) : 배경화면 이미지 사이즈 정의[xpx, ypx]
- blend-mode : 배경 이미지 그라데이션 적용방법 선택[normal, multiply, screen, overlay, darken, lighten, color-dodge]


### Border
width style color

- color : border 색상 설정
- image(3) : border에 적용할 이미지 지정, url함수 사용
- style : element 스타일 설정[dotted, dashed, solid, double, groove]
- width : element 두께 설정(thin, thick, medium)
- radius(3) : element 둥글게 처리
- spacing : 테이블에서 tr과 td border간격 지정
- collapse : 테이블에서 tr과 td border 지정[separate, collapse]


### Text

- align : text 정렬 방식 설정[left, right, center, justify]
- decoration : text 줄 표시[underline, overline, line-through]
- indent : text 들여쓰기[-npx ~ npx]
- shadow : text 그림자효과, {x축시작 y축시작 번짐정도 색상}
- transform : text 대소문자 설정[capitalize, uppercase, lowercase]
- overflow : text가 넘어갈 시 처리방법 지정[clip, ellipsis, string]


### Font

`@font-face`
- family : font 종류를 설정
- size : font 크기를 설정(px)
- style : font 출력 스타일을 설정[italic, oblique]
- variant : 모든 text를 대문자화 한 후 기존 대문자 크기 키움[small-caps]
- weight : font 두께 지정(100단위 700 = bolder, normal = 400)


### Box

- shadow : element 그림자 처리, x축-y축-번짐정도-확산정도-색상
- sizing : padding, margin, border의 값을 모두 합쳐서 계산하도록 함(border-box)


### Animation

`@keyframes` : animation 동작 지정{%{}%{}%{}}
- delay : 처리 지연 시간 지정(s)
- direction : animation 방향지정[normal, reverse, alternate]
- duration : animation 동작 시간 지정(s)
- iteration-count : animation 동작 횟수를 지정(s)
- name : function과 같이 animation 이름을 지정(`@keyframes` 로 사용)
- play-state : animation 활성 여부[paused, running]
- timing-function : animation 이동 방식 지정[linear, ease.in.out]


### transform

- translate() : element 이동(xpx, ypx)
- rotate() : element 회전(deg)
- scale() : x대 y로 비율을 늘리거다 줄임
- skew() : x대 y로 회전(xdeg, ydeg)
- matrix() : element 조정, x간격-x비율-y비율-y간격-x시작-y시작


### transition

- delay : transition 처리 지연 시간 지정(s)
- duration : 함수 실행 시간을 지정(s)
- timing-function : animation 이동 방식 지정(linear. ease.in.out)


### etc
{word}
-break : text를 단어마다 끊도록 설정(keep-all, break-all)
-spacing : text 단어 간격 설정(-npx ~ npx)
{list-style}
-type : list 종류 지정(decimal, lower-alpha)
-position : list사용시 들여쓰기 지정(inside, outside)
[caption]-side : caption 위치 지정(top, left, right, bottom)
[cursor] : 커서 모양 지정(all-scroll, help, move, no-drop, pointer)
[clip] : element를 자른다, x시작점-x축길이-y축길이-y시작점(px)
[z-index] : CSS 우선순위를 설정(10단위로 주는것이 좋음)
[outline] : border line위에 line 지정, color-style-width
[filter] : 이미지 필터 지정[blur, brightness, grayscale, invert, saturate]
[overflow] : element px을 벗어난 요소 show시 사용[clip, visible, scroll, auto]
[vertical-align] : element나 문장 수직정렬, 인라인 요소에만 적용(text-top.bottom,middle, %)

block : 블록단위로 처리
inline : 기본값으로 처리(줄바꿈 미적)
inline-block : 요소는 inline으로 내부는 block으로

relative : 포함된 요소안에서 위치
static : 포함된 요소안에서 고정
absolute : 문서내에서 위치
fixed : 스크롤에도 절대적 위치

### CSS shorthand rank
-font
element { font:style variant weight size/height family}
-background
element { background:color url(image url) repeat position attachment}
-list
element { list-style:type position url(image url)}
-transition
(web kinds)transition : property duration timing-function delay;
## Flex

### justify-content
가로 정렬 관련

- flex-start : 맨 오른쪽 기준 정렬
- flex-end : 맨 왼쪽 기준 정렬
- center : 가운데 정렬
- space-between : 가운데 기준으로 양끝정렬
- spcae-around : 가운데 기준으로 균등정렬

### align-item

- flex-start : 맨 윗쪽 기준 정렬
- flex-end : 맨 아랫쪽 기준 정렬
- center : 가운데 정렬
- baseline :
- stretch :

### align-content

- flex-start : 맨 윗쪽 기준 정렬
- flex-end : 맨 아랫쪽 기준 정렬
- center : 가운데 정렬
- space-between : 가운데 기준으로 세로 양끝정렬
- spcae-around : 가운데 기준으로 세로 균등정렬

### flex-direction

- row : 정방향
- row-reverse : 역방향
- column : 세로방향
- column-reverse : 세로 역방향

### flex-wrap

- nowrap : 정렬 안시킴(overflow됨)
- wrap : 폭에 맞춰서 정렬
- wrap-reverse : 바닥 지준으로 wrap정렬

### flex etc
- order : 우선순위로 숫자가 높을수록 우선적으로 정렬
- align-self : 선택된 객체만 align-items값 결정
- flex-flow : direction + wrap
- flex-grow : flex 아이템 공간 차지 비율 설정
- flex-shrink : flex 컨테이너 아이템 축소비율
