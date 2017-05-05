# **Webpack**
Webpack


## Table of Contents

1. [Webpack Package](#Webpack-Package)
1. [Webpack Setting File](#Webpack-Setting-File)
1. [Webpack Dev & Release](#Webpack-Dev-&-Release)
1. [ETC](#ETC)


### Webpack Package

- `babel-core` : ES6 syntax compile
- `babel-preset-latest` : ES5~ES7 plugin preset
- `babel-loader` : connect webpack & babel
- `html-webpack-plugin` : include bundling JS file
- `style-loader, css-loader` : import CSS file
- `node-sass, sass-loader` : import Sass file
- `postcss-loader, autoprefixer` : CSS(Sass) file auto vender prefix
- `raw-loader` : html file Hot reload
- `webpack-browser-plugin` : auto open web browser after bundling
- `extract-text-webpack-plugin` : plugin for except style sheet
- `webpack-strip` : delete debugging log
- `clean-webpack-plugin` : plugin for delete release directory
- `url-loader, file-loader` : font & image module


### Webpack Setting File

- `devtool` : source map & debugging
- `entry` : JS modularization tool
- `output` : define result folder
    - `filename` : designate file name
    - `publicPath` :
- `plugins` : import preset
    - `UglifyJsPlugin` : JS uglify plugin
    - `HtmlWebpackPlugin` : include bundling file in html
    - `HotModuleReplacementPlugin` : HMR plugin
    - `WebpackBrowserPlugin` : browser auto open
- `postcss` : add vender prefix in style sheet
- `module` : options that affect files
    - `loaders` : modularization function
- `devServer` : module setting


### Webpack Dev & Release

- dev file need source map
- source uglify increase bundling time
- HTML file hot reload
- if export style sheet, can not use HMR


### ETC

- `providePlugin` : `$` forced injection
- `dashboard` : webpack neat view
- `cheap-module-source-map` : 배포시 가장 용량이 작음
- `inline-source-map` : debugging, log, bundling time for dev
- `context` : 현재 랩의 루트 경로, node사용시 `__dirname`으로 사용
- 다수의 entry시 bundle파일이 하나로 생성되기때문에 [name]으로 설정