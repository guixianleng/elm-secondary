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