# Webpack
Module Builder


## Table of Contents

1. [Why Use Webpack?](#Why-Use-Webpack?)
1. [Webpack Package](#Webpack-Package)
1. [Webpack Setting File](#Webpack-Setting-File)
1. [Webpack Dev & Release](#Webpack-Dev-&-Release)
1. [About Webpack2](#About-Webpack2)
1. [ETC](#ETC)


### Why Use Webpack?

- Bundle only one JS file
- Use npm plugin on front-end code
- Use ES6/ES7 syntax
- Use Sass & LESS on css
- Use HMR(Hot Module Replacement)


### Webpack Package

- `babel-core` : ES6 syntax compile to ES5
- `babel-preset-latest` : ES5~ES7 plugin preset
- `babel-loader` : Connect webpack & babel loader
- `html-webpack-plugin` : Include bundling JS file
- `style-loader, css-loader` : Import CSS file
- `node-sass, sass-loader` : Import Sass file
- `postcss-loader, autoprefixer` : Auto vender prefix on CSS(Sass) file
- `raw-loader` : html file Hot reload
- `webpack-browser-plugin` : Auto open web browser after bundling
- `extract-text-webpack-plugin` : Plugin for except style sheet
- `webpack-strip` : Delete debugging log
- `clean-webpack-plugin` : Plugin for delete release directory
- `url-loader, file-loader` : Font & image module


### Webpack Setting File

- `devtool` : Source map & debugging
- `entry` : JS bundle file entry point(Can use ['file.js', 'files.js'])
- `output` : Define result file route
    - `filename` : Designate bundle file name([name] : entry key value)
    - `path` : Designate bundle file location
    - `publicPath` : Designate bundle file server location
- `plugins` : Import preset
    - `UglifyJsPlugin` : JS uglify plugin, Code minify
    - `HtmlWebpackPlugin` : Include bundling file in html
    - `HotModuleReplacementPlugin` : HMR plugin(Use --hot option)
    - `WebpackBrowserPlugin` : browser auto open
    - `LoaderOptionsPlugin` : Option include on loader
    - `DefinePlugin` : Designate compile time
    - `BannersPlugin` :
	- `IgnorePlugin` :
	- `EnvironmentPlugin` :
	- `ContextReplacementPlugin` :
- `postcss` : Add vender prefix in style sheet
- `module` : Module handling option
    - `loader` : import node moudle
        - `test` : Regular expression
        - `option` : Apply options preset
        - `exclude` : Define exclude folder or file
- `resolve` :

### Webpack Dev & Release

- Dev file need source map
- Source uglify increase bundling time
- HTML file hot reload
- If export style sheet, can not use HMR


### About Webpack2


### ETC

- `providePlugin` : `$` Forced injection
- `dashboard` : webpack neat view
- `cheap-module-source-map` : 배포시 가장 용량이 작음
- `inline-source-map` : debugging, log, bundling time for dev
- `context` : 현재 랩의 루트 경로, node사용시 `__dirname`으로 사용
- 다수의 entry시 bundle파일이 하나로 생성되기때문에 [name]으로 설정
