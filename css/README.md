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

- Use rule set syntax
- Use media type
- W3C Validation pass is recommended
- Space, line spacing omitted
- 속성값이 0일경우 단위 생략, 마지막 스타일 세미콜론 생략
- font `px`expression : `em` > `%` > `px` > `pt` (1em == 100% == 16px == 12pt)
- ID use calmelcase, class use underscore
- Do not use `@import` : It is applied after loading image in browser
- Do not handling selector with tag name
- Vendor Prefix
    - moz : FireFox
    - webkit : Chrome, Safari
    - o : Opera
    - ms : Explorer


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
- Layout(each element feature and create position)
- Paint Setup
- Paint(create element and input reader -> draw GPU)
- Composite Layers(draw frame)


### CSS Shorthand Rank

- Font

`font: style variant weight size height family`
```CSS
    .element {
        font: normal normal 400 15px normal inherit;
    }
```
- Background

`background: color url(image url) repeat position attachment`
```CSS
    .element {
        background : transparent url(image.jpg) no-repeat center scroll;
    }
```
- List-style

`list-style: type position url(image url)`
```CSS
    .element {
        list-style: circle inside url(list_image.png);
    }
```
- Transition

`(prefix)transition : property duration timing-function delay;`
```CSS
    .element {
        -moz-transition: all 3s ease-out 2s;
    }
```
- Border

`border: width style color`
```CSS
    .element {
        border: 2px dotted red;
    }
```
- Animation

`animation : name duration delay count timing-function direction`
```CSS
    .element {
        animation: move 2s infinite ease-in alternate;
    }
```

- Shadow

`*-shadow : X-axis coordinate Y-axis coordinate spread color`
```CSS
    .element {
        shadow: 5px 5px 3px white;
    }
```


### CSS Button Reset

```CSS
.reset {
    display: inline-block; /* Apply text-align on parents element */
    font-family: inherit; /* Font compulsion inherit */
    vertical-align: middle; /* Differ element compulsion inherit */
    cursor: pointer; /* Cursor view */
    white-space : nowrap; /* Line wrap cancle */
    text-decoration : none; /* Remove text underline */
    background: transparent; /* Set transparent background */
    outline: 0; /* Remove focus outline */
}
```

### CSS Selector

#### **Pseudo Elements**

*엘리먼트의 일부분을 선택하여 삽입된 것을 가상요소라고 함*
- `::after` : Add content after a element
- `::before` : Add content before a element
- `::first-child` : Element's first child element
- `::last-child` :  Element's last child element
- `::nth-child(n)` : Nth element's child element
- `::first-letter` : First text
- `::first-line` : First sentence
- `::selection` : Dragging text
- `::placeholder` : Designate placeholder(input tag) style
- `::spelling-error` : Spelling error style
- `::grammer-error` : Grammer error style


#### **Pseudo Classes**

*가상 클래스로서 특정 이벤트 시 스타일을 적용할 때 사용*
- `:active` : Link click style
- `:focus` : Link focus style
- `:hover` : Link hover style
- `:link` : Link basic style
- `:visited` : Link visited style
- `:checked` : Checked element style
- `:disabled` : Deny element style
- `:empty` : Empty element style
- `:target` : Checked type event style
- `:first-child` : Select first element
- `:first-of-type` : Select first child element like parents element
- `:last-child` : Select last element
- `:last-of-type` : Select last child element like parents element
- `:not` : Select not same tag
- `:nth-child(n)` : Select nth element
- `:nth-last-child(n)` : Select last nth element
- `:nth-of-type(n)` : Select nth child element like parents element
- `:nth-last-of-type(n)` : Select nth last child element like parents element


#### **Background**

- `linear-gradient(to~, x,x,x)` : Insert background gradation
- `attachment` : Background scroll option
    - scroll
    - fixed
    - local
- `color` : Designate background color
- `clip` : Designate background image range
    - border-box
    - padding-box
    - content-box
- `origin` : Designate background image range(same clip option)
- `image` : Designate background image(use `url( )`)
- `position` : Designate background position
    - left
    - right
    - top
    - bottom
    - center
    - x, y(%)
- `repeat` : Designate background image repeat
    - repeat
    - repeat-x
    - repeat-y
    - no-repeat
- `size` : Designate background image size(xpx, ypx)
- `blend-mode` : Designate background gradation option
    - normal
    - multiply
    - screen
    - overlay
    - darken
    - lighten
    - color-dodge


#### **Border**

- `color` : Border color
- `image` : Border image(use `url()`)
- `style` : Element border style
    - dotted
    - dashed
    - solid
    - double
    - groove
- `width` : Element width
    - thin(100)
    - thick(200)
    - medium
    - bold(700)
- `radius` : Element radius
- `spacing` : Designate tr & td border interval
- `collapse` : Designate tr & td border(separate, collapse)


#### **Text**

- `align` : Text sort
    - left
    - right
    - center
    - justify
- `decoration` : Text line
    - underline
    - overline
    - line-through
- `indent` : Text indent[-npx ~ npx]
- `shadow` : Text shadow
- `transform` : Text alphabet
    - capitalize
    - uppercase
    - lowercase
- `overflow` : Text overflow
    - clip
    - ellipsis
    - string


#### **Font**

`@font-face`
- `family` : Font kind
- `size` : Font size
- `style` : Font style(italic, oblique)
- `variant` : Font uppercase and size up(!= small-caps)
- `weight` : Font width(100unit 700 = bolder, normal = 400)


#### **Box**

- `shadow` : Element shadow
- `sizing` : Define box size calculate(padding, margin, border)


#### **Animation**

`@keyframes` : Designate animation function({%{}%{}%{}})
- `delay` : Animation delay(s)
- `direction` : Animation direction
    - normal
    - reverse
    - alternate
- `duration` : Animation moving time(s)
- `iteration-count` : Animation repeat count(infinite)
- `name` : Define animation function name(use `@keyframes`)
- `play-state` : Animation play option(paused, running)
- `timing-function` : Animation movement option
    - linear
    - ease-in
    - ease-out


#### **Transform**

- `translate()` : Element movement(x, y px)
- `rotate()` : Element turn(deg)
- `scale()` : Element size
- `skew()` : Element turn(xdeg, ydeg)
- `matrix()` : Element set (x간격 x비율 y비율 y간격 x시작 y시작)


#### **Transition**

- `delay` : Transition delay time(s)
- `duration` : function moving time(s)
- `timing-function` : Animation movement option


#### **ETC**

- **word**
    - `break` : Word break
        - keep-all
        - break-all
    - `spacing` : Designate text interval(-npx ~ npx)
- **list-style**
    - `type` : Designate list type(decimal, lower-alpha)
    - `position` : List indent(inside, outside)
- `caption-side` : Caption position
- `cursor` : Cursor figure
    - all-scroll
    - help
    - move
    - no-drop
    - pointer
- `clip` : Cut element(x시작점 x축길이 y축길이 y시작점)
- `outline` : Designate outline
- `letter-spacing` : Designate text interval spacing
- `filter` : Image filter
    - blur
    - brightness
    - grayscale
    - invert
    - saturate
- `overflow` : Designate element overflow
    - clip
    - visible
    - scroll
    - auto
- `quotes` : Add quotes(“str”,”str”)

- **display**
    - `block` : Block element
    - `inline` : Inline element(not new line)
    - `inline-block` : Element inline, inside block
- **position**
    - `relative` : Position within embedded element
    - `static` : Fixed within embedded element
    - `absolute` : Location within document
    - `fixed` : Absolute position for scrolling


### Flex

#### **justify-content**
*Horizontal alignment related*

- `flex-start` : Align to right
- `flex-end` : Align to left
- `center` : Align to center
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
