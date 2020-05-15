<template>
  <div :class="{ hidden: hidden }" class="elm-pagination">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ElmPagination extends Vue {
  @Prop({ required: true }) private total!: number
  @Prop({ default: () => ({
      pageNum: 1,
      pageSize: 10
    })
  })
  private query!: any
  @Prop({ default: () => [10, 20, 30, 50] })
  private pageSizes!: number[]
  @Prop({ default: 'total, sizes, prev, pager, next, jumper' })
  private layout!: string
  @Prop({ default: true })
  private background!: boolean
  @Prop({ default: false })
  private hidden!: boolean

  // 自定义分页字段
  @Prop({
    default: () => ({
      page: 'pageNum',
      limit: 'pageSize'
    })
  }) private defaultQuery!: any

  // 当前页码
  get currentPage() {
    return this.query[this.defaultQuery.page]
  }
  set currentPage(value) {
    const C_PAGE = this.queryFormat(value, this.pageSize)
    this.$emit('update:query', C_PAGE)
  }

  // 当前页数
  get pageSize() {
    return this.query[this.defaultQuery.limit]
  }
  set pageSize(value) {
    const S_PAGE = this.queryFormat(this.currentPage, value)
    this.$emit('update:query', S_PAGE)
  }
  // 格式化输出query
  queryFormat (page: number, limit: number) {
    let newQuery: any = {}
    newQuery[this.defaultQuery.page] = page
    newQuery[this.defaultQuery.limit] = limit
    return newQuery
  }
  // 改变当前页数
  async handleSizeChange(value: number) {
    const SizeChange = await this.queryFormat(this.currentPage, value)
    this.$emit('pagination', SizeChange)
  }
  // 改变当前页码
  async handleCurrentChange(value: number) {
    const CurrentChange = await this.queryFormat(value, this.pageSize)
    this.$emit('pagination', CurrentChange)
  }
}
</script>

<style lang="scss" scoped>
.elm-pagination {
  background: #fff;
  height: 35px;
  text-align: right;
  &.hidden {
    display: none;
  }
}
</style>
