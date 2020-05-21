## Cascader 省市区级联选择

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择

### 基础用法
:::demo
```html
<elm-address-cascader v-model="area" @change="handleCas"></elm-address-cascader>

<script>
export default {
  data () {
    return {
      area: ["110000", "110100", "110102"]
    }
  },
  methods: {
    handleCas (val) {
      console.log(val)
    }
  }
}
</script>
```
:::

### 显示省市
:::demo
```html
<elm-address-cascader v-model="proCity" :grade="2"></elm-address-cascader>

<script>
export default {
  data () {
    return {
      proCity: ''
    }
  }
}
</script>
```
:::

### 仅显示最后一级
:::demo
```html
<elm-address-cascader v-model="last" :show-all-levels="false"></elm-address-cascader>

<script>
export default {
  data () {
    return {
      last: ''
    }
  }
}
</script>
```
:::

### Attributes
原生属性和props都支持，以下为扩展属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| grade     | 显示级数   | number  |     —        |    3     |