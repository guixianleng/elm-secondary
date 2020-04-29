# 省市区级联

### 注意：需要在webpack.base.conf.js 配置areaJSON别名引入地址数据源

<elm-cascader v-model="value" style="width:290px"></elm-cascader>

```html
<template>
  <elm-cascader v-model="value" :label.sync="label"  style="width:290px"/>
  {{label}}
</template>
<script>
  import ElmCascader from 'elm-ui/ElmCascader'
  export default {
    components: {
      ElmCascader
    },
    data () {
      return {
        value: [],
        label: ''
      }
    }
  }
</script>
```
### Extends
[Cascader](http://element.eleme.io/1.4/#/zh-CN/component/cascader)

### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| label[sync]|  选中的文本  | string |   -       |    -    |
| grade     | 精确的级别   | number  |   -       |    3   |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |