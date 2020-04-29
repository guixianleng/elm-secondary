<!--
 * @Author: LenGxin
 * @Description: Do not edit
 * @Date: 2020-03-10 11:01:40
 * @LastEditors: LenGxin
 * @LastEditTime: 2020-04-29 15:23:57
-->
<template>
  <div>
    <el-table
      ref="elmTable"
      :data="data"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <table-item v-bind="$attrs"
        v-for="(item, index) in columns"
        :key="index"
        :column="item">
      </table-item>
    </el-table>
    <elm-pagination
      :total="total"
      :query="query"
      :hidden="paginationHide"
      @pagination="getListData"
      :defaultQuery="queryParams"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import TableItem from './TableItem.vue'

@Component({
  components: {
    TableItem
  }
})

export default class ElmTable extends Vue {
  // 列表数据
  @Prop({ default: () => [] }) private data: any
  // 表格行、列内容
  @Prop({ default: () => [] }) private columns: any
  // 是否显示分页
  @Prop({ default: true}) private showPagination!: boolean
  // 分页总数
  @Prop({ default: 0 }) private total!: number
  // 分页参数
  @Prop({default: () => {}}) private listQuery!: any
  // 自定义分页字段
  @Prop({
    default: () => ({
      page: 'pageNum',
      limit: 'pageSize'
    })
  }) private queryParams!: any

  private ElmTable: any

  // 获取分页参数
  get query () {
    return this.listQuery
  }
  // 显示分页
  get paginationHide () {
    return this.showPagination || this.total > 0
  }

  mounted () {
    this.ElmTable = this.$refs.elmTable
  }

  /**
   * element table 方法，具体看文档说明
   */
  private clearSelection () {
    this.ElmTable.clearSelection()
  }

  private toggleRowSelection (row: any, selected: any) {
    this.ElmTable.toggleRowSelection(row, selected)
  }

  private toggleAllSelection () {
    this.ElmTable.toggleAllSelection()
  }

  private toggleRowExpansion (row: any, expanded: any) {
    this.ElmTable.toggleRowExpansion(row, expanded)
  }

  private setCurrentRow (row: any) {
    this.ElmTable.setCurrentRow(row)
  }

  private clearSort () {
    this.ElmTable.clearSort()
  }

  private clearFilter (columnKey: any) {
    this.ElmTable.clearFilter(columnKey)
  }

  private doLayout () {
    this.ElmTable.doLayout()
  }
  
  private sort (prop: any, order: any) {
    this.ElmTable.sort(prop, order)
  }

  // 分页事件
  private getListData (value: any) {
    this.$emit('update:listQuery', { ...this.query, ...value }).$emit('pageChange')
  }
}
</script>
