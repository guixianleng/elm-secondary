## 省市区级联

<elm-table v-loading="listLoading" element-loading-text="Loading" max-height="580" :columns="columns" :data="listData.list" :total="listData.total" :listQuery.sync="listQuery" @pageChange="getList"></elm-table>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class Table extends Vue {
  private listLoading: boolean = false
  private listData: any = {}
  private listQuery: any = {
    pageNum: 1,
    pageSize: 10
  }
  private columns: Array<any> = [
    {
      prop: 'address',
      label: '城市'
    },
    {
      prop: 'projectCode',
      label: '项目编码'
    },
    {
      prop: 'projectName',
      label: '项目名称'
    },
    {
      label: '操作',
      width: '100px'
      // render: (h: any, scope: any) => {
      //   return (
      //     <div>
      //       <el-button type="text" on-click={ () => this.handleOperate('edit', scope.row) }>编辑</el-button>
      //       <el-button type="delete" on-click={ () => this.handleOperate('remove', scope.row) }>删除</el-button>
      //     </div>
      //   )
      // }
    }
  ]
  created () {
    this.getList()
  }
  // 获取列表数据
  private getList () {
    this.listData = {
      list: [
        {
          address: '北京市',
          projectCode: 123,
          projectName: 'table'
        }
      ],
      total: 20
    }
  }
}
</script>

```html
<template>
  <elm-table
    v-loading="listLoading"
    element-loading-text="Loading"
    max-height="580"
    :columns="columns"
    :data="listData.list"
    :total="listData.total"
    :listQuery.sync="listQuery"
    @pageChange="getList"
  >
  </elm-table>
</template>
<script>
  import ElmTable from 'elm-ui/ElmTable'
  export default {
    components: {
      ElmTable
    },
    data () {
      return {
        listLoading: false,
        listData: {},
        listQuery: {
          pageNum: 1,
          pageSize: 10
        },
        columns: [
          {
            prop: 'address',
            label: '城市'
          },
          {
            prop: 'projectCode',
            label: '项目编码'
          },
          {
            prop: 'projectName',
            label: '项目名称'
          },
          {
            label: '操作',
            width: '100px',
            render: (h: any, scope: any) => {
              return (
                <div>
                  <el-button
                    type="text"
                    on-click={() => this.handleOperate('edit', scope.row)}
                  >编辑</el-button>
                  <el-button
                    type="delete"
                    on-click={ () => this.handleOperate('remove', scope.row) }
                  >删除</el-button>
                </div>
              )
            }
          }
        ]
      }
    },
    methods: {
      // 获取列表数据
      getList () {}
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
