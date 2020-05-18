## 基于elementUI的二次封装
包括表格、表单、分页、树状下拉、省市区联动

### 在线文档地址
https://guixianleng.github.io/elm-secondary/

### 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```shell
 npm i @poly/elm-ui -S
```

### 引入 @poly/elm-ui
在main.js写入以下内容：

```js
import Vue from 'vue';
import ElmUI from '@poly/elm-ui';
import App from './App.vue';

Vue.use(ElmUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 组件库踩坑
1. 封装组件的时候因为使用了ts进行封装的，组件一定要带上`name`
栗子：
```js
...
@Component({
  name: 'ElmPagination'
})
```
注册组件也需要获取组件名`options.name`
```js
...
ElmPagination.install = function(Vue) {
  Vue.component(ElmPagination.options.name, ElmPagination)
}
```
全局按需加载注册组件也需要`options.name`
```js
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.options.name, component)
  })
}
``

## 本地预览
```
yarn install
```

### 运行
```
yarn serve
```
