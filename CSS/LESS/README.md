[LESS]

변수선언 => @변수명:인자값;
믹스인(mixin) => .function-name(@parameter) {~~}
중첩 => a{~~~&:hover {~~~}}
연산 가능(+, *, -등)
@arguments => 모든인자를 받아옴
.function(@value, @colorvalue) {}로 원하는 함수만 실행 가능(@_ : 모든변수)
.function(@value) when (조건문) {} 로 원하는 함수만 실행 가능
#bundle{.mixin(){}} => 캡슐화 소스 제공
변수 유효범위 => blockscope
@import => 파일 불러오기
문자열안에 대입 => @{value}
JS사용 => `사용

{함수}
-색상 관련 함수(@value, %)
lightness() => 밝기정도반환(lightness() > 50%)
saturation() => 채도정도반환
alpha() => 알파정도반환
lighten() => %만큼 value를 밝게
darken() => %만큼 value를 어둡게
saturate() => %만큼 value를 saturate하게
desaturate() => %만큼 value를 덜 staturate하게
fadein() => %만큼 불투명하게
fadeout() => %만큼 투명하게
fade() => %만큼 투명도를 가지는 색상
-수학 관련 함수
round() => 반올림
ceil() => 올림
floor() => 내림
percentage(0.~) => %반환

-형관련 함수
iscolor() => 컬러형인지 체크
isnumber() => 숫자형인지 체크
isstring() => 문자형인지 체크
iskeyword() => 배열키인지 체크
isurl() => url인지 체크
ispixel() => 단위가 px인지 체크
ispercentage() => 단위가 %인지 체크
isem() => 단위가 em인지 체크
