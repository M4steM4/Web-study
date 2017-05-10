# HTML
Hyper Text Markup Language


## Table of Contents

1. [HTML Basic Convention](#HTML-Basic-Convention)
1. [Basic Tag](#Basic-Tag)
1. [Head Tag](#Head-Tag)
1. [Formatting Tag](#Formatting-Tag)
1. [Form&Input Tag](#Form&Input-Tag)
1. [Image Tag](#Image-Tag)
1. [Link Tag](#Link-Tag)
1. [List Tag](#List-Tag)
1. [Table Tag](#Table-Tag)
1. [Semantic Tag](#Semantic-Tag)
1. [Programming Tag](#Programming-Tag)
1. [Multimedia Tag](#Multimedia-Tag)
1. [Global Attributes](#Global-Attributes)
1. [Script Event Attributes](#Script-Event-Attributes)
1. [Target Attributes](#Target-Attributes)
1. [List Attributes](#List-Attributes)
1. [Input Attributes](#Input-Attributes)
1. [ETC](#ETC)


### HTML Basic Convention

- Define statements like `doctype`s in uppercase
- `<!DOCTYPE html>` sets the document type to HTML5
- Tags should be unified in lowercase
- Closing tag must be written with `/>`
- Create alt in `image` tag
- `.htm` is a three-letter extension for the initial DOS system.
- Do not declare Javascript directly
- Performance degradation if domain is different when loading `<iframe>`


### Basic Tag
*Define HTML document*

- `<!DOCTYPE>` : Define doctype
- `<html>` : Define html documents
- `<title>` : Define html page title
- `<head>` : Define documents information
- `<body>` : Body document
- `<base>` : Document load & link
- `<h(n)>` : Heading disposal
- `<p>` : Text paragraphization
- `<br>` : Forced new line
- `<hr>` : Insert line
- `<!-- -->` : Text comment out


### Head Tag
*Document basic designation & file onload*

- `<meta>` : Designate document encoding
- `<style>` : Designate CSS document style
- `<link>` : Import exterior document
- `<script>` : Import JS document


### Formatting Tag

- `<abbr>` : Define abbreviation
- `<del>` : Delete text
- `<s>` : Delete text
- `<ins>` : Underline text
- `<u>` : Underline text
- `<mark>` : Emphasize text(backgroud-color: yellow)
- `<pre>` : Text write intactly
- `<sub>` : Subscripted text
- `<sup>` : Superscripted text
- `<strong>` : Bold text(Semantically significant)
- `<b>` : Bold text
- `<em>` : Italic text(Semantically significant)
- `<i>` : Italic text
- `<address>` : Address text(Italic effect)
- `<cite>` : Title text(Italic effect)
- `<dfn>` : Term text(Italic effect)
- `<code>` : Computer code text(font change)
- `<kbd>` : keyboard input text(font change)
- `<samp>` : Sample text(font change)
- `<var>` : Value text(font change)
- `<small>` : Small text
- `<time>` : Time text(not effective)
- `<bdo>` : Reverse text(dir="rtl")
- `<q>` : Quotation text
- `<blockquote>` : Long quotation text(Indent effect)
- `<meter>` : Percentage graph bar(value)
- `<progress>` : Progress bar(value)


### Form&Input Tag

- `<form>` : Define input form(action="route" method="")
- `<input>` : Create input form
- `<button>` : Create button
- `<select>` : Create drop&down list
- `<textarea>` : Create long input form
- `<optgroup>` : Create drop&down tuple
- `<option>` : Create drop&down object
- `<label>` : Designate input type(not effective)
- `<fieldset>` : Divide input section(border effect)
- `<legend>` : Define fieldset element
- `<datalist>` : Define drop&down in input내부 드롭다운 지정
- `<keygen>` : Define drop&down about encoding


### Image Tag

- `<img>` : Insert image element
- `<map>` : Insert exterior file
- `<area>` : Designate `<map>` element
- `<canvas>` : Use page graphic(using with JS)
- `<svg>` : Define web graphic


### Link Tag

- `<a>` : Designate hyper link
- `<link>` : Include exterior document
- `<nav>` : Define section


### List Tag

- `<ul>` : Create menu list(figure)
- `<ol>` : Create menu list(number)
- `<li>` : Define list element
- `<dl>` : Create menu list(not effective)
- `<dt>` : `<ol>` event
- `<dd>` : `<li>` event


### Table Tag

- `<table>` : Designate table
- `<caption>` : Designate table title
- `<tr>` : Designate column of table
- `<th>` : Designate row of table(table title section)
- `<td>` : Designate row of table
- `<thead>` : Table head section(not effective)
- `<tbody>` : Table body section(not effective)
- `<tfoot>` : Table foot section(not effective)
- `<col>` : Designate colspan


# Semantic Tag

- `<div>` : Block section
- `<span>` : Inline section
- `<header>` : Head section(not effective)
- `<footer>` : Footer section(not effective)
- `<main>` : Main section(not effective)
- `<section>` : Section(inline-block)
- `<article>` : Article element(not effective)
- `<aside>` : Document side section(not effective)


### Programming Tag

- `<script>` : Include script file
- `<noscript>` : Define error script file
- `<embed>` : Include swf file
- `<object>` : Include swf file
- `<param>` : Define object element


### Multimedia Tag

- `<video>` : Define video
- `<source>` : Insert video at `<video>`or `<audio>`(src, type)
- `<track>` : Define video track
- `<audio>` : Define audio file


### Global Attributes

- `alt` : Designate element basic text
- `disabled` : Designate limited element
- `href` : Designate link address
- `rel` : Designate style sheet
- `src` : Designate element route
- `class` : Designate class name
- `data-*` : Designate data type
- `id` : Designate Id name
- `style` : Designate tag style
- `title` : Designate tag title
- `hidden` : Hide tag


### Script Event Attributes

- `onload` : Page onload event
- `onunload` : Page onunload event
- `onblur` : Cursor leave event
- `onchange` : Value change event
- `onfocus` : Element focus event
- `onsearch` : Enter click event
- `onselect` : Text drag(or select) event
- `onsubmit` : Submit event
- `onkeydown` : Keyboard input event
- `onclick` : Click event
- `ondbclick` : Double click event
- `ondrag` : Drag event
- `ondragend` : Drag element end event
- `ondragenter` : Drag element enter event
- `ondragleave` : Drag element leave event
- `ondragover` : Drag element hover event
- `ondrop` : Element drop event



### Target Attributes
*Designate Document open system(target)*

`_black` : Open new window dor new tab
`_self`: Open same frame
`_parent` : Open here(Over write)
`_top` : Open to the entire window
`stockitem` : Open new tab
`framename` : Open named frame


### List Attributes

- `1` : Number
- `A` : Capital alphabet
- `a` : Lower alphabet
- `I` : Capital Roman number
- `i` : Lower Roman number


### Input Attributes

- `text` : Input text
- `password` : Input secret text
- `radio` : Input select list(only one)
- `checkbox` : Input select list(multiply)
- `submit` : Input submit(pass value)
- `button` : Input button
- `reset` : Input reset
- `range` : Input range bar
- `color` : Input color selector
- `search` : Input search form
- `number` : Input number form(화살표)
- `time` : Input time form
- `email` : Input email form(If it does not match, error occurred)


### Attribute Order

1. `rel`
2. `type`
3. `href`, `src`
4. `target`
5. `id`
6. `name`
7. `class`
8. `data`


### ETC
```HTML
    <script src="경로" type="text/javascript"></script>
    <link rel="stylesheet" href="경로" type="text/css">
    <img alt="이미지이름" src="경로">
```
