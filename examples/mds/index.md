# 快速上手
### 安装
``` html
  npm install elm-ui
```

### 使用默认全局组件
``` html
  import Vue from 'vue'
  import ElmUI from 'elm-ui/lib/'
  Vue.use(ElmUI)
```

### 使用局部组件
``` html
  import ElmForm from 'elm-ui/lib/ElmForm'
  export default {
    components: {
      ElmForm
    }
  }
```