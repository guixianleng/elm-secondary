## 省市区级联

## 显示省市区
<elm-cascader v-model="area" :grade="3" style="width:290px"></elm-cascader>
{{ area }}

## 显示省市
<elm-cascader v-model="areaCity" :grade="2" style="width:290px"></elm-cascader>
{{ areaCity }}

## 显示最后一级
<elm-cascader v-model="city" :show-all-levels="false" style="width:290px"></elm-cascader>
{{ city }}

<script>
export default {
  data () {
    return {
      area: '',
      areaCity: '',
      city: ''
    }
  }
}
</script>

```html
<template>
  <elm-cascader v-model="area" style="width:290px"/>
</template>
<script>
  import ElmCascader from 'elm-ui/ElmCascader'
  export default {
    components: {
      ElmCascader
    },
    data () {
      return {
        area: ''
      }
    }
  }
</script>
```

### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| grade     | 精确的级别   | number  |   -       |    3   |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |
