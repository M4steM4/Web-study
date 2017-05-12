# React
Java Script View Component Library


## Table of Contents

1. [Whar is React?](#What-is-React?)


### What is React?


### React 특징

- Use JSX syntax
- Simplex Transmission
- Rendering & 성능 우수


### ㅁㄴㅇ
- props는 보관데이터이므로 변경시엔 부모 컴퍼넌트에서 일어나야 함
-User interface library
-virtual DOM사용(속성을 가진 객체로 바뀐부분만 새로 업데이트)
-virtualDOM 동작(데이터 업데이트 -> UI를 리렌더링 -> 바뀐부분만 업뎃)
-JSX(Javascript Syntax) 확장문법과 Components 개념 js에서 html문법 사용(xml)
-전체 DOM객체를 비동기적 갱신으로 리프레시 되는 부분을 줄임
실제 DOM은 데이터양에 따른 데이터소모가 큼 -> virtualDOM 사용
[특징]
-하나의 컴포넌트가 포괄(재사용성 증가 기대)
-메모리관리와 가비지컬렉션
-서버 & 클라이언트 렌더링(클라이언트 렌더링만함 : SEO)
-render()부분엔 컴포넌트 구조 정의
-ReactDOM 실제 페이지에 JSX코드 렌더링
첫번째 인자는 랜더링할 코드, 두번째 인자는 엘리먼트
-컴포넌트안에서 JSX는 컨테이너안에 포함(ex div)
-변수를 만들고 변수를 출력하고싶으면 {}를 사용
-class는 className으로 background-color는 backgroundColor로
-ReactDOM.render(viewComponentName, rootElement)
-setState는 비동기함수라서 console.log가 먼저 동작함
-ref는 react내에서 id와 같음. 따라서 돔에 직접 접근하는 js대신 사용 가능, 렌더링 메소드나 컨스트럭트 내에선 사용불가능
-localstorage에선 object를 저장x, JSON.stringfy로 문자열치환후 대입
-다시 가져올때는 JSON.parse로 가져옴
-render함수는 렌더링 할 DOM객체를 리턴하여 사용



### Life Cycle API
- 컴포넌트가 DOM에 생성되기전과 후 데이터가 변하기 전과 후 에 실행되는 메소드
- `componentWillMount` : 컴포넌트가 돔 위에 만들어지기 전에 실행
- `componentDidMount` : 컴포넌트가 마치고 실행, 첫 랜더링 후 사용, 다른 js프레임워크나 라이브러리 연동
- `componentWillReceiveProps` : props를 받을때 실행, props에 따라 state업데이트시 유용, setState도 사용 가능
- `shouldComponentUpdate` : props/state 변경시 리렌더링 여부 확인(false, true로 반환, false시 변경안함)
- `componentWillUpdate` : 컴포넌트 업데이트 전 실행, setState는 사용 금지
- `componentDidUpdate` : 컴포넌트가 리렌더링을 마친 후 실행
- `componentWillUnmount` : 컴포넌트가 DOM에서 사라진 후 실행


### React Components Life Cycle Excuse Order

- `getDefaultProps` : When create new object, 기본값 생성
- `getInitialState` : Designate each 관련 instance state, Use props value
- `componentWillMount` : render전에 마지막 인스턴스 제어 단계
- `render` : Create components virtual DOM
- `componentDidMount` : Copy virtual Dom, 실제 DOM생성시 접근 가능







[Props]
-컴포넌트 내부의 Immutable Data(변하지않는 데이터)
-사용(this.props.propsName)
-propsName=“value”
-props기본값 설정 => className.defaultProps = {} //컴포넌트 선언종료후
-props타입 설정 = > Class.propTypes ={}
-기본타입(React.PropTypes.string+isRequired(필수입력))

redux : 어플리케이션 관리
webpack : 모듈 빌더

[State]
-비동기
-컴포넌트 내에서 유동적인 값을 view
-초기설정(기본값)필요
-값 변경시 자동리렌더링(React 장점)
-super()로 props와 this를 참조시킴
-function실행과 동일하게 setState()도 리렌더링 -> this.statefunction() -오류
-setState를 통해 push와 concat으로 값을 변경
-setState시 자동으로 바뀐부분만 렌더링(6번째와 같은의미)


map() : 함수를 파라미터로 배열 내의 요소들을 함수로 처리해 새로운 배열을 생성
map(callback(처리요소, 처리되는 요소의 index, 메소드가 불려진배열), this값)
JSON.stringfy : 여러 필드 비교시 용이
constructor : 컴포넌트가 처음 만들어질때 실행, 기본 state 설정
export defalut : import대체 가능, 일반 export는 안되서 따로 {}에 넣어야 함 (`*as types` 로 대체)

react는 reloading시 construct를 reloading하지않음 -> 기존 데이터 유지
임의의 함수는 this가 없기 때문에 바인딩(bind)필요
component는 props로 전달되기 때문에 클릭이벤트 등을 직접 발생시키지 않음

immutability -> state내부 배열 변경시 라이브러리
… -> 레스트 스프레드 연산자
ref로 document.getElementById(#id)와 같이 사용 가능



[Redux]
-redux는 flux 아키텍쳐를 구현한 라이브러리
-component간의 데이터와 state 관리 효율성 도움
-flux는 추상적 개념
-App의 state를 위해 단 하나의 store을 사용, store의 state는 직접변경 불가
-flux에선 여러개를 사용함(컴포넌트, 이벤트 별로 구조화)
-action을 처리하는함수 == Reducer

[Flux]
-Multi Store 가능
-application 초기화시 store->dispatcher에 action을 부탁
-controller view는 store에 최신상태를 확인
-store가 controller view에 state(상태) 전달
-controller view가 모든 view에게 state 전달
-controller view가 다시 store에 state 부탁
{Action event load시}
-view가 action을 action constructer에 액션을 넘김
-action constructer는 action을 포켓에 맞춘후 dispatcher로 넘김
-dispatcher는 우선순위에 따라 store 넘김
-store은 필요한 action을 골라 state에 맞게 변경
-state 변경완료시 store와 subscribe하고있는 controller view에 알림
-controller view state reload 정보 요청
-store가 요청을 받아 controller view가 받은 정보를 자식뷰에게 전달

[Reducer]
-변화를 일으키는 함수
-비동기작업x, 인수변경x + 동일한 인수면 동일한 결과를 return
-네트워크 및 데이터베이스 금지, 순수API만 사용)
-이전 상태와 액션을 받아서 새로운 상태를 반환
-reducer에는 꼭 root reducer촌재
-view later binding은 component store에 easy하게 connect

[store]
-어플리케이션의 현재 상태를 지니고있음
-dispatch(action)액션을 리듀서로 보냄(현재 자신 상태와 액션)
-subscribe(listener) 상태가 바뀔때마 실행할 콜백함수(listener)

react-redux = view layer binding
provider 컴포넌트에서 리덕스 사용하도록 제공
connect함수 옵션을 인수로 받아서 컴포넌트를 redux에 연결하는 함수 반환
컴포넌트를 redux에 반환하는 또다른 함수(connect()(returnFunction)


react

react redux
redux store => flat하게 include
angular => 투웨이 anjtlrl
structural Sharing
custom Elements
