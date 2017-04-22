# HTML
Hyper Text Markup Language


## Table of Contents

1. [HTML Basic Convention](#HTML-Basic-Convention)
1. [Basic HTML](#Basic HTML)
1. [Head Attributes](#Head-Attributes)
1. [HTML Formatting](#HTML-Formatting)
1. [Forms and Input](#Forms-and-Input)
1. [Images](#Images)
1. [Links](#Links)
1. [Lists](#Lists)
1. [Tables](#Tables)
1. [Style and Semantic](#Style-and-Semantic)
1. [Programming](#Programming)
1. [HTML Multimedia](#HTML-Multimedia)
1. [Global Attributes](#Global-Attributes)
1. [Script Event Attributes](#Script-Event-Attributes)
1. [Target Value](#Target-Value)
1. [Input Type](#Input-Type)
1. [ETC](#ETC)


### HTML Basic Convention

- doctype등의 정의문은 대문자로 기재
- 태그는 소문자로 통일, 닫는태그가 있을경우 꼭 기재
- 단일태그 종료시 "/>"사용
- 태그 속성은 모두 소문자, 띄어쓰기는 최소화, 큰따옴표 사용
- 이미지 태그엔 alt속성을 꼭 기재 하는것이 좋음
- 페이지 언어는 <html>에서
- html, head, body태그는 있는것이 좋음
- css 지정시 길어지면 개행
- .htm은 초기 DOS시스템때문에 세문자로 확장한것 .html은 유닉스 운영체제
- <!—[if lt IE 9]> script 파일 <![endif]—> 로 IE9이하버전 강제 해결
- 속성 순서(rel > type > href,src > width,height > target > id > name > class > style)
- javascript는 직접 선언하지 않는다 ex)<input type=“text” onfocus=“this.className=focus”>


### Basic HTML
*HTML 문서를 정의합니다*

- <!DOCTYPE> : doctype임을 정의합니다
- <html> : html 도큐먼트를 정의합니다
- <title> : html문서의 제목을 지정합니다
- <head> : 도큐먼트의 정보들을 정의합니다
- <body> : html문서 body도큐먼트를 지정합니다
- <base> : 문서가 열리는 방법이나 링크등을 지정합니다
- <h(n)> : heading처리를 합니다(숫자가 작을수록 큰 글씨)
- <p> : 텍스트를 문단처리합니다(자동 개행)
- <br> : 엔터 한번 누른 효과를 적용합니다(강제 개행)
- <hr> : 가로줄 한줄을 그어줍니다
- `<!-- -->` : 문장을 주석처리합니다


### Head Attributes
*문서 기본 지정 및 파일 온로드에 이용됩니다, head태그는 꼭 있어야합니다*

- <meta> : 문서의 인코딩 방법을 지정합니다
- <style> : 문서의 CSS스타일을 지정합니다
- <link> : 문서에 외부 파일을 include합니다(href rel type)
- <script> : 문서에 JavaScript코드를 적용합니다(src, type)


### HTML Formatting

- <abbr> : 약어를 정의할때 사용합니다(아무 효과 없음)
- <blockquote> : 문단을 단어 단위로 개행하여 줍니다(들여쓰기 효과)
- <del> : 문장에 취소선을 만듭니다
- <ins> : 문장에 밑줄을 그어줍니다
- <mark> : 문장에 형광펜 효과를 적용합니다(노란색 color)
- <pre> : 문단이 작성된 그대로를 출력해줍니다
- <strong> : 문장을 굵게 만듭니다
- <sub> : 문장을 아래첨자 시킵니다
- <sup> : 문장을 윗첨자 시킵니다
- <em> : 기울임 효과를 적용합니다

- <address> : 주소를 정의할때 사용합니다(기울임 효과)
- <b> : 문장을 굵게 만듭니다
- <bdi> : 다른 텍스트와는 조금 다른 텍스트일때 분리하기위해 사용합니다(아무 효과 없음)
- <bdo> : 텍스트를 좌우반전 시킵니다(dir="rtl")
- <cite> : 제목을 정의할때 사용합니다(이텔릭 효과)
- <code> : 컴퓨터 코드등에 사용합니다(글꼴 변경 효과)
- <dfn> : 용어를 정의할때 사용합니다(기울임 효과)
- <i> : 문장을 이텔릭체로 변경합니다
- <kbd> : 키보드 입력 코드등에 사용합니다(글꼴 변경 효과)
- <meter> : 퍼센트테이지를 나타내는 그래프바를 생성합니다(value)
- <progress> : 프로그래스바를 생성합니다(value)
- <q> : 쌍따옴표로 문장을 감싸줍니다
- <s> : 문자엥 취소선을 만듭니다
- <samp> : 샘플 코드를 표기할때 사용합니다(글꼴 변경 효과)
- <small> : 문장의 font-size를 축소시킵니다
- <time> : 문장이 시간을 나타낼때 사용합니다(효과 없음)
- <u> : 문장에 아래에 줄을 그어줍니다
- <var> : 변수코드를 표기할때 사용합니다(글꼴 변경 효과)


### Forms and Input

- <form> : 유저의 입력을 받는 부분을 정합니다(action="경로" method)
- <input> : 유저의 입력을 받습니다
- <button> : 클릭 버튼을 생성합니다
- <select> : 드롭다운 리스트를 생성합니다

- <textarea> : 유저의 문장을 받을때 사용합니다
- <optgroup> : 드롭다운 튜플을 생성합니다
- <option> : 드롭다운 객체를 생성합니다
- <label> : input 요소설명을 지정합니다(효과 없음)
- <fieldset> : form안에 입력받을 부분을 나눕니다(테두리 효과)
- <legend> : fieldset 요소를 지정합니다
- <datalist> : input창안에 드롭다운을 지정합니다
- <keygen> : 인코딩 요소를 드롭다운합니다
- <output> : html에서 javascript처럼 출력하도록 합니다 - 보충


### Images

- <img> : html문서에 이미지 요소를 삽입합니다(src="경로" alt="이름")
- <map> : 외부 파일을 가져옵니다(name)
- <area> : <map>의 요소를 지정할때 사용합니다
- <canvas> : 페이지에 그래픽을 그리는데 사용합니다(javascript 를 이용)
- <svg> : 웹에대한 그래픽을 정의합니다


### Links

- <a> : 하이퍼 링크를 지정합니다(href="경로")
- <link> : 외부 문서를 include할때 사용합니다(rel="스타일" type="타입" href="경로")
- <nav> : 탐색 링크를 정의합니다(요소 정의 이용)



### Lists

- <ul> : 링크의 요소들을 포함하는 메뉴를 만듭니다(모양)
- <ol> : 링크의 요소들을 포함하는 메뉴를 만듭니다(숫자)
- <li> : 링크의 요소들을 정의합니다

- <dl> : ul, ol과 같이 메뉴를 만듭니다(효과 없음)
- <dt> : 실질적인 ol 이벤트를 합니다
- <dd> : 실질적인 li 이벤트를 합니다


### Tables

- <table> : 테이블을 지정합니다
- <caption> : 테이블 이름을 지정합니다
- <tr> : 테이블의 열을 지정합니다(tr안에 td)
- <th> : 테이블의 행을 지정합니다(표의 상단만)
- <td> : 테이블의 행을 지정합니다

- <thead> : 테이블에서 헤드를 나눌때 사용합니다(효과 없음)
- <tbody> : 테이블에서 바디를 나눌때 사용합니다(효과 없음)
- <tfoot> : 테이블에서 주석을 나눌때 사용합니다(효과 없음)
- <col> : colspan을 지정할때 사용합니다


# Style and Semantic

- <style> : css 요소를 html요소에 적용합니다
- <div> : 도큐먼트에 섹션을 정의합니다(효과 없음)
- <span> : 도큐먼트에 섹션을 정의합니다(효과 없음)
- <header> : 도큐먼트에 헤더를 정의합니다(효과 없음)
- <footer> : 도큐먼트에 주석부분을 정의합니다(효과 없음)
- <main> : 도큐먼트에 메인 부분을 정의합니다(효과 없음)
- <section> : 도큐먼트 섹션을 정의합니다(효과 없음)
- <article> : 아티클 요소를 정의합니다(효과 없음)
- <aside> : 도큐먼트 페이지의 사이브부분을 정의합니다(효과 없음)
- <details> : 중요 부분을 정의할때, 혹은 광고등을 정의합니다(효과 없음)
- <summary> : details의 요소들을 정의합니다(효과 없음)


### Programming

- <script> : 스크립트 파일을 인클루드합니다
- <noscript> : 스크립트 파일이 인클루드 되지 않은 경우 출력할 문장을 정의합니다
- <embed> : swf파일등을 인클루드합니다
- <object> : embed태그와 같은 일을합니다
- <param> : object의 요소들을 정의합니다


### HTML Multimedia

- <video> : 비디오나 영화를 정의합니다
- <source> : 비디오나 영화 요소를 <video>나 <audio>에 삽입합니다(src, type)
- <track> : 비디오나 영화의 자막트랙등을 가져옵니다
- <audio> : 오디오 파일을 정의합니다
- <iframe> : 유투브의 비디오를 가져옵니다(src,{autohide, autoplay, controls loop playlist})


### Global Attributes

- alt : 요소에 기본 텍스트를 지정합니다
- disabled : input tag요소를 불구(사용 제한)으로 지정합니다
- href : 링크될 주소를 지정합니다
- rel : stylesheet 지정
- src : 요소에 경로를 지정합니다
- class : 태그의 클래스 name을 삽입합니다
- data-* : 데이터 타입을 정의합니다
- hidden : 요소가 삽입된 태그를 숨깁니다
- id : 태그의 id name을 삽입합니다
- style : 태그에 style을 지정합니다
- title : 태그의 대표 이름을 지정합니다


### Script Event Attributes

- onload : 페이지가 온로드 되었을때 이벤트를 실행합니다
- onunload : 페이지가 온로드 되지 않았을때 이벤트를 실행합니다
- onblur : 마우스 커서가 떠났을 경우 이벤트를 실행합니다
- onchange : 임의의 값이 변경되었을 경우 이벤트를 실행합니다
- onfocus : 특정 태그에 마우스가 초점되었을 경우 이벤트를 실행합니다
- oninvalid : 입력된 값을 16진수로 변경합니다(ex : %B1)
- onsearch : 엔터가 입력되면 이벤트를 실행합니다
- onselect : 두번 클릭하여 임의의 값이 선택되면 이벤트를 실행합니다
- onsubmit : submit을 눌렀을 경우에 이벤트를 실행합니다

- onkeydown : 입력란에 키보드가 입력되면 이벤트를 실행합니다
- onkeypress : 일부 키보드의 입력만을 받아 이벤트를 실행합니다
- onkeyup : 입력란의 키보드 (수정)

- onclick : 태그를 한번 클릭한 경우 이벤트를 실행합니다
- ondbclick : 태그를 더블 클릭 한 경우 이벤트를 실행합니다
- ondrag : 드래그 되었을 경우 이벤트를 실행합니다
- ondragend :
- ondragenter :
- ondragleave :
- ondragover :
- ondrop :



### Target Value
*문서를 여는 방식을 지정합니다(target)*

`_black` : 새 창 또는 탭에서 문서를 엽니다
`_self`: 동일한 프레임에서 문서를 엽니다
`_parent` : 부모 프레임에서 문서를 엽니다(덮어쓰기)
`_top` : 창 전체에 링크된 문서를 엽니다
`stockitem` : 새로운 탭에 링크된 문서를 엽니다
`framename` : 명명된 프레임에 링크된 문서를 엽니다


### Input Type

- text : input 타입을 text로 지정합니다
- password : input 타입을 비밀번호로 출력하도록 지정합니다
- submit : input 타입을 값을 넘기도록 지정합니다
- radio : input 타입을 선택형으로 지정합니다
- checkbox : input 타입을 중복 선택형으로 지정합니다
- button : input 타입을 버튼형으로 지정합니다
- color : input 타입을 컬러선택으로 바꿉니다(#FFFFFF)
- email : input 타입을 이메일 형식으로 바꿉니다(형식에 맞지않으면 에러)
- number : input 타입을 번호선택으로 바꿉니다(화살표)
- range : input 타입을 숫자 범위지정으로 바꿉니다(바)
- time : input 타입을 시간체킹으로 바꿉니다
- reset : input요소들을 처음 상태로 되돌립니다


### ETC
*<input ~~~~>*

    autocomplete
    autofocus
    form
    formaction
    formenctype
    formmethod
    formnovalidate
    formtarget
    height and width
    list
    min and max
    multiple
    pattern (regexp)
    placeholder
    required
    step


<script src="경로" type="text/javascript">
<link rel="stylesheet" href="경로" type="text/css">
<img alt="이미지이름" src="경로">
