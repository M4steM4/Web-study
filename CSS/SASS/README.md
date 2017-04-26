[SASS]

sass는 변수가 블록스코프
변수명 $ 대입  :
&부모참조선택자
!global -> 변수를 전역처리
연산시 단위는 무조건 통일되어야함
partial기능 -> import시 .scss파일이 _로 시작하면 css파일로 변환시 컴파일x
#{} -> pre같은거
상속되지않고 최상위단으로 이동 -> @at-root
@media쿼리 안에선 상속받을순 없고 상속해줄수밖에 없음
반복문 -> @for $value from num through(to) num {}, @each $value in $list {}
@content -> {}안의 내용을 불러옴
sass not == javascript !(!!가능)
NULL은 null이 아님


@import하면 믹스인과 변수 사용 가능(실질적으로 css엔 하나의 파일만 올라가서 http요청은 한번)
상속 : @extend .classname(class(.)대신 %를 사용하면 상속은 가능하지만 컴파일되지않음
선언 : @mixin functionName{}(content())
호출 : @include functionName()
함수 : @function functionName{} -> @mixin과 다르게 return값 존재
확장 : @extend className -> 현재 클래스가 className클래스의 속성을 받게함


[내장함수]
lighten($color, $percent)
darken($color, $percent)
complement($color) -> RGB반전
type-of($value) -> 타입 return
list-saparator($list) -> list를 나누는 기준을 반환(space, comma 등)
nth($list, num) -> num번째 배열의값을 반환
set-nth($list, num, $value)
remove($list, $value)
map-get($mapvalue, $key) -> 멥변수 안에서 key의 value를 끄집어냄
map-merge($mapvalue, map)
inspect($list) -> 실제로 존재하는 list만 view
