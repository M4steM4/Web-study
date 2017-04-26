[Webpack]

webpack - 리소스번들, 자스파일 모듈
i : install
-g :global
-D :present directory

babel-core : es6 문법 컴파일
babel-preset-latest : arrow-funtion and class
babel-loader : connect webpack&babel
html-webpack-plugin : include bundling js file
style-loader, css-loader : import css
node-sass, sass-loader : import scss
postcss-loader autoprefixer : css파일에 auto bender prefix붙임
raw-loader : html file hotReload
webpack-browser-plugin : bundling이 끝나고 자동으로 브라우저 열어줌
extract-text-webpack-plugin : 스타일 시트를 따로 빼기 위한 플러긴
webpack-strip : 디버깅 로그 삭제
clean-webpack-plugin : 배포용 파일 빌드전에 베포용 디렉토리 리셋

providePlugin => $사용 강제 인젝션
dashboard => webpack을 보다 깔끔하게 view
cheap-module-source-map 배포시 가장 용량이 작음
inline-source-map은 디버깅, 로그, 번들링타임으로 개발용에 용이

개발용과 배포용으로 나누는 이유
-개발용 파일은 디버깅때문에 소스맵이 필요
-난독화시키는것이 번들링타임을 증가시킴
-HTML파일을 핫리로드(서버의 재시작 없이 내용이 재교체)하게 만듦
-스타일시트는 외부로빼면 HMR(서버의 재시작없이 새로고침하지않고 수정된부분만 바꿈)이용할수 없음


콜스택 : 코드 정보 저장 스택 자료구조, 서브루틴을 실행한다음 어디로 돌아가야할지 절차를 따라가기위해 사용
전역코드는 콜스택에 push됨
브라우저에서는 global객체인 window객체의 프로퍼티로 들어가지만, nodeJS에선 global이라는 이름을 가진 객체로 들어감
코드가 실행되기전에 전역변수가 호이스팅되고 undefinded값을 가짐
ES6는함수스코프이기 때문에 함수내의 지역변수가 우선순위가 높다
즉시실행함수(IIFE)
{
  let x = 10;
  let print = () => {
    console.log(x); //Uncaught ReferenceError: x is not defined
    let x = 15; //If this code is not present, no error
  };
  print();
}
따라서 다음과 같은 경우엔 호이스팅이 되어있지만 let변수가 제정의 되어서 TDZ에 들어있는 상태이기 때문에 console명령실행때 오류가 난다

es6에서는 const와 let이 새로운 스코프(Script)에 생성되어서 const와 let에 변수명 충돌이 이러나지 않는다.
스코프체인은 함수가 변수에 할당시 활성화 객체가 생성되고 할당되기전 함수가 생성한 객체를 활성화객체에 담음, 할당된 함수가 실행되면 그 함수의 활성화 객체가 따로 생성되어 담아짐, 내부함수가 외부함수의 변수를 참조하고 기억하는것은 활성화 객체가 따로 생성되기 때문. 이 이외의 객체는 글로벌 오브젝트가 담당



[Webpack]

context : 현재 랩의 루트 경로, node사용시 __dirname으로 사용
entry : JS앱의 첫 파일, 실행시 경로의 JS파일을 시작으로 모듈을 import
output : (path-파일 저장 위치, filename-파일 저장 이름) 번들된 파일 저장
publicPath : markup템플릿 정적파일 로딩
module : loaders:[]안에 로드할 파일을 로그하고 loaders의 파일 확장자

다수의 entry시 bundle파일이 하나로 생성되기때문에 [name]으로 설정
