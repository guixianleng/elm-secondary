## Table表格
使用前需支持`jsx/tsx`渲染`render`函数

### 基本用法
:::demo 
```html
<elm-table
  :columns="columns"
  :data="listData.list"
>
</elm-table>

<script>
  export default {
    data () {
      return {
        columns: [
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'villageName',
            label: '社区名称'
          },
          {
            prop: 'buildingName',
            label: '楼栋'
          },
          {
            prop: 'room',
            label: '房号'
          }
        ],
        listData: {
          list: [
            {
              phone: 15216101212,
              buildingName: '1栋',
              room: '1-808',
              villageName: '保利城花园'
            }
          ]
        }
      }
    }
  }
</script>
```
:::

### 结合分页使用

:::demo
```html
<elm-table
  :columns="columns"
  :data="listData.list"
  :total="listData.total"
  :listQuery.sync="listQuery"
  @pageChange="getList"
>
</elm-table>

<script>
  export default {
    data () {
      return {
        columns: [
          {
            type: 'selection'
          },
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'villageName',
            label: '社区名称'
          },
          {
            prop: 'buildingName',
            label: '楼栋'
          },
          {
            prop: 'room',
            label: '房号'
          },
          {
            label: '操作',
            width: '80px',
            render: (h, scope) => {
              return (
                <div>
                  <el-button
                    type="primary"
                    size="mini"
                  >查看</el-button>
                </div>
              )
            }
          }
        ],
        listQuery: {
          pageNum: 1,
          pageSize: 10
        },
        listData: {
          list: [
            {
              phone: 15216101212,
              buildingName: '1栋',
              room: '1-808',
              villageName: '保利城花园'
            }
          ],
          total: 50
        }
      }
    },
    methods: {
      getList () {}
    }
  }
</script>
```
:::

### 多级表头

:::demo
```html
<elm-table
  :columns="columns"
  :data="listData.list"
>
</elm-table>

<script>
  export default {
    data () {
      return {
        columns: [
          {
            prop: 'date',
            label: '日期',
            width: 150
          },
          {
            label: '配送信息',
            children: [
              {
                prop: 'name',
                label: '姓名'
              },
              {
                label: '地址',
                children: [
                  {
                    prop: 'province',
                    label: '省份',
                    width: 120
                  },
                  {
                    prop: 'city',
                    label: '市区',
                    width: 120
                  },
                  {
                    prop: 'address',
                    label: '地址',
                    width: 300
                  },
                  {
                    prop: 'zip',
                    label: '邮编'
                  }
                ]
              }
            ]
          },
        ],
        listData: {
          list: [
            {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }
          ]
        }
      }
    }
  }
</script>
```
:::

### 自定义内容
:::demo 
```html
<elm-table
  :columns="columns"
  :data="listData.list"
>
</elm-table>

<script>
  export default {
    data () {
      return {
        columns: [
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'sex',
            label: '性别',
            render: (h, scope) => {
              return (
                <span>{ scope.row.sex == 1 ? '男' : '女' }</span>
              )
            }
          },
          {
            prop: 'address',
            label: '住址'
          },
          {
            label: '操作',
            width: '150px',
            render: (h, scope) => {
              return (
                <span>
                  <el-button
                    size="mini">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger">Delete</el-button>
                </span>
              )
            }
          }
        ],
        listData: {
          list: [
            {
              phone: 15216101212,
              name: '张三',
              sex: 1,
              address: '保利城花园'
            },
            {
              phone: 15216101562,
              name: '李四',
              sex: 0,
              address: '国人大厦'
            }
          ]
        }
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 显示的数据   | array    |  — |     —    |
| columns     | 列表显示内容   | array  |   —      |    —     |
| listQuery     | 表单内容   | boolean    | — | —   |
| showPagination     | 是否显示分页   | boolean    | — | true   |
| total     | 分页总数   | number    | — | —   |
| listQuery     | 分页参数   | object    | — | —   |