## Pagination分页
当数据量过多时，使用分页分解数据

### 基本用法
:::demo
```html
<elm-pagination
  :total="total"
  :query.sync="queryParams"
  @pagination="getList"
/>
<script>
export default {
  data () {
    return {
      total: 100,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
      }
    }
  },
  methods: {
    getList () {
      console.log(this.queryParams)
    }
  }
}
</script>
```
:::

### 自定义请求参数
:::demo
```html
<elm-pagination
  :total="total"
  :query.sync="query"
  :default-query="queryParams"
  @pagination="getList"
/>
<script>
export default {
  data () {
    return {
      total: 50,
      queryParams: {
        page: 'currentPage',
        limit: 'page_size'
      },
      query: {
        currentPage: 1,
        page_size: 10,
      }
    }
  },
  methods: {
    getList () {
      console.log(this.query)
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
| total     | 总条目数   | number  |     —        |    —     |
| query     | 请求参数   | object    |   — |     —    |
| hidden     | 隐藏分页   | boolean    |   — |     false    |
| defaultQuery     | 自定义分页变量   | object    | — | { page: 'pageNum', limit: 'pageSize' }   |

### Events
| 事件名称	      | 说明    | 回调参数  |
|---------- |-------- |---------- |
| pagination     | 分页参数改变时会触发   | 请求参数  |