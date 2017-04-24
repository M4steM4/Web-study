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

- `doctype`등의 정의문은 대문자로 작성
- 태그는 소문자로 통일, 닫는태그는 꼭 작성
- 단일태그 종료시 `/>` 사용
- `image`태그엔 alt 작성
- `html`, `head`, `body`태그 필수
- `.htm`은 초기 DOS시스템때문에 세문자로 확장한것 `.html`은 유닉스 운영체제
- 속성 순서(rel > type > href,src >  target > id > name > class > data)
- javascript 직접선언 금지
- `<iframe>` 로딩시 domain이 다르면 성능저하, SEO관점에서 적합하지 않음, 화면빔 현상

### Basic HTML
*HTML 문서 정의*

- `<!DOCTYPE>` : doctype 정의
- `<html>` : html 도큐먼트 정의
- `<title>` : html 문서의 제목 지정
- `<head>` : 도큐먼트 정보 정의
- `<body>` : html 문서 body 도큐먼트
- `<base>` : 문서 로드와 링크 지정
- `<h(n)>` : heading 처리
- `<p>` : 텍스트 문단화
- `<br>` : 강제 개행
- `<hr>` : 줄 삽입
- `<!-- -->` : Text 주석


### Head Attributes
*문서 기본 지정 및 파일 온로드 관련*

- `<meta>` : 문서의 인코딩 지정
- `<style>` : 문서의 CSS스타일 지정
- `<link>` : 문서에 외부 파일 include
- `<script>` : 문서에 JS 파일 include


### HTML Formatting

- `<abbr>` : 약어를 정의시 사용
- `<blockquote>` : Text 단어 단위 개행(들여쓰기 효과)
- `<del>` : Text 취소선
- `<ins>` : Text 밑줄
- `<mark>` : Text 강조(backgroud yellow color)
- `<pre>` : Text가 작성된대로 출력
- `<strong>` : Text weight
- `<sub>` : Text 아래첨자
- `<sup>` : Text 윗첨자
- `<em>` : Text 기울임 효과

- `<address>` : Text 주소 정의(기울임 효과)
- `<b>` : Text weight
- `<bdo>` : Text 좌우 반전(dir="rtl")
- `<cite>` : Text 제목 정의(이텔릭 효과)
- `<code>` : 컴퓨터 코드 Text 정의(글꼴 변경 효과)
- `<dfn>` : Text 용어 정의(기울임 효과)
- `<i>` : Text 기울임 효과
- `<kbd>` : 키보드 입력 Text 정의(글꼴 변경 효과)
- `<meter>` : % graph bar(value)
- `<progress>` : progress bar(value)
- `<q>` : Text 쌍따옴표
- `<s>` : Text 취소선
- `<samp>` : 샘플 Text 지정(글꼴 변경 효과)
- `<small>` : Text font-size 축소
- `<time>` : Text 시간표시(효과 없음)
- `<u>` : Text underline
- `<var>` : 변수 Text 표기(글꼴 변경 효과)


### Forms and Input

- `<form>` : 입력 받는 부분 정의(action="경로" method)
- `<input>` : 입력란 생성
- `<button>` : 클릭 버튼 생성
- `<select>` : 드롭다운 리스트 생성
- `<textarea>` : 문장 입력란 생성
- `<optgroup>` : 드롭다운 튜플 생성
- `<option>` : 드롭다운 객체 생성
- `<label>` : input 요소 설명 지정(효과 없음)
- `<fieldset>` : form안에 입력 section 구분(테두리 효과)
- `<legend>` : fieldset 요소 지정
- `<datalist>` : input내부 드롭다운 지정
- `<keygen>` : 인코딩 요소 드롭다운


### Images

- `<img>` : 이미지 요소 삽입
- `<map>` : 외부 파일 include
- `<area>` : <map>의 요소 지정
- `<canvas>` : 페이지에 그래픽을 그리는데 사용합니다(javascript 를 이용)
- `<svg>` : 웹에대한 그래픽을 정의합니다


### Links

- `<a>` : 하이퍼 링크 지정
- `<link>` : 외부 문서 include
- `<nav>` : section 정의


### Lists

- `<ul>` : 메뉴 list 생성(모양)
- `<ol>` : 메뉴 list 생성(숫자)
- `<li>` : list 요소 정의
- `<dl>` : 메뉴 list 생성(효과 없음)
- `<dt>` : 실질적인 ol 이벤트
- `<dd>` : 실질적인 li 이벤트


### Tables

- `<table>` : 테이블 지정
- `<caption>` : 테이블 이름 지정
- `<tr>` : 테이블의 열 지정
- `<th>` : 테이블의 행 지정(표 상단)
- `<td>` : 테이블의 행 지정

- `<thead>` : 테이블 head section 구분(효과 없음)
- `<tbody>` : 테이블 body section 구분(효과 없음)
- `<tfoot>` : 테이블 foot section 구분(효과 없음)
- `<col>` : colspan 지정시 사용


# Style and Semantic

- `<style>` : css 요소 정의
- `<div>` : 도큐먼트 section 정의(block)
- `<span>` : 도큐먼트 section 정의(inline)
- `<header>` : 도큐먼트 header 정의(효과 없음)
- `<footer>` : 도큐먼트 주석 정의(효과 없음)
- `<main>` : 도큐먼트 메인 정의(효과 없음)
- `<section>` : 도큐먼트 section 정의(inline-block)
- `<article>` : article 요소 정의(효과 없음)
- `<aside>` : 도큐먼트의 사이브 section 정의(효과 없음)
- `<details>` : 중요 부분 정의


### Programming

- `<script>` : script file include
- `<noscript>` : script file error시 출력 문장 정의
- `<embed>` : swf file등을 include
- `<object>` : swf file등을 include
- `<param>` : object의 요소 정의


### HTML Multimedia

- `<video>` : 비디오 정의
- `<source>` : 비디오를 `<video>`나 `<audio>`에 삽입(src, type)
- `<track>` : 비디오의 자막트랙 정의
- `<audio>` : 오디오 파일 정의
- `<iframe>` : 유투브의 비디오 include(src,{autohide, autoplay, controls loop playlist})


### Global Attributes

- `alt` : 요소 기본 텍스트 지정
- `disabled` : 요소 사용 제한 지정
- `href` : 링크 주소 지정
- `rel` : stylesheet 지정
- `src` : 요소 경로 지정
- `class` : class name 지정
- `data-*` : 데이터 타입 정의
- `hidden` : 태그 숨김
- `id` : id name 지정
- `style` : 태그 style 지정
- `title` : 태그 대표 이름 지정


### Script Event Attributes

- `onload` : 페이지 온로드 이벤트
- `onunload` : 페이지 언온로드 이벤트
- `onblur` : 마우스 커서 leave시 이벤트
- `onchange` : 값 변경시 이벤트
- `onfocus` : focus시 이벤트
- `oninvalid` : 입력값 진수 변경
- `onsearch` : 엔터시 이벤트
- `onselect` : 더블클릭으로 선택시 이벤트
- `onsubmit` : submit 이벤트
- `onkeydown` : 키보드 입력시 이벤트
- `onkeypress` : 일부 키보드 입력시 이벤트
- `onclick` : 클릭 이벤트
- `ondbclick` : 더블클릭 이벤트
- `ondrag` : 드래그 이벤트
- `ondragend` : 드래그 종료시 이벤트
- `ondragenter` : 드래그 입력시 이벤트
- `ondragleave` : 드래그 이동시 이벤트
- `ondragover` : 드래그 hover시 이벤트
- `ondrop` :  드롭된 경우 이벤트



### Target Value
*문서를 여는 방식을 지정합니다(target)*

`_black` : 새 창 또는 탭에서 문서 오픈
`_self`: 동일한 프레임에서 문서 오픈
`_parent` : 부모 프레임에서 문서 오픈(덮어쓰기)
`_top` : 창 전체에 링크된 문서 오픈
`stockitem` : 새로운 탭에 링크된 문서 오픈
`framename` : 명명된 프레임에 링크된 문서 오픈


### Input Type

- `text` : input 타입 text
- `password` : input 타입 secret
- `submit` : input 타입 submit(값 전달)
- `radio` : input 타입 선택형
- `checkbox` : input 타입 중복 선택형
- `button` : input 타입 버튼형
- `color` : input 타입 color selector
- `email` : input 타입 이메일 형식(형식에 맞지않으면 에러)
- `number` : input 타입 번호선택(화살표)
- `range` : input 타입 숫자 범위 지정
- `time` : input 타입 시간 체킹
- `reset` : input요소 reset


### ETC
```HTML
    <script src="경로" type="text/javascript"></script>
    <link rel="stylesheet" href="경로" type="text/css">
    <img alt="이미지이름" src="경로">
```
