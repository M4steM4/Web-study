# CSS

개인적으로 공부한 CSS관련 자료를 올려둔 것입니다.


## Table of contents
1. asd
1.

#### CSS Basic Convention
- 상황에 따른 미디어타입 사용, 웹 장애 or 비장애 체크
- W3C Validation 통과를 권장
- 여백, 줄간격 생략, 속성값이 0일경우 단위 생략, 마지막 스타일 세미콜론 생략
- font `px`표현 : `em` > `%` > `px` > `pt` (1em == 100% == 16px == 12pt)
- ID는 calmelcase, class는 underscore
- `@import`사용 금지 : 브라우저에서 이미지 로딩후 적용이 되기 때문
- selector를 tag name으로 핸들링 금지


#### 가상 요소
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


#### 가상 클래스
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
