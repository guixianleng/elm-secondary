<!--
 * @Author: LenGxin
 * @Description: 改造 el-table-column
 * @Date: 2020-03-11 15:44:40
 * @LastEditors: LenGxin
 * @LastEditTime: 2020-04-29 11:48:58
-->
<template>
  <el-table-column v-bind="$attrs"
    v-on="$listeners"
    :prop="column.prop"
    :label="column.label"
    :type="column.type"
    :index="column.index"
    :width="column.width"
    :min-width="column.minWidth"
    :fixed="column.fixed"
    :render-header="column.renderHeader"
    :sortable="column.sortable || false"
    :sort-method="column.sortMethod"
    :sort-by="column.sortBy"
    :sort-orders="column.sortOrders"
    :resizable="column.resizable || true"
    :formatter="column.formatter"
    :show-overflow-tooltip="column.showOverflowTooltip || false"
    :align="column.align || align || 'left'"
    :header-align="column.headerAlign || headerAlign || column.align || align || 'left'"
    :class-name="column.className"
    :label-class-name="column.labelClassName"
    :selectable="column.selectable"
    :reserve-selection="column.reserveSelection || false"
    :filters="column.filters"
    :filter-placement="column.filterPlacement"
    :filter-multiple="column.filterMultiple"
    :filter-method="column.filterMethod"
    :filtered-value="column.filteredValue">

    <template slot="header"
      slot-scope="scope">
      <table-render v-if="column.renderHeader"
        :scope="scope"
        :render="column.renderHeader">
      </table-render>
      <span v-else>{{ scope.column.label }}</span>
    </template>

    <template slot-scope="scope">
      <table-render
        :scope="scope"
        :render="column.render"
      ></table-render>
    </template>

    <template v-if="column.children">
      <table-item v-for="(col, index) in column.children"
        :key="index"
        :column="col">
      </table-item>
    </template>
  </el-table-column>
</template>

<script lang="tsx">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import TableRender from './TableRender.vue'
import forced from './forced.js'

@Component({
  components: {
    TableRender
  }
})
export default class TableItem extends Vue {
  @Prop({ default: () => [] }) private column!: any
  @Prop() private headerAlign!: string
  @Prop() private align!: string

  private setColumn () {
    const Forced: any = forced
    if (this.column.type) {
      this.column.renderHeader = Forced[this.column.type].renderHeader
      this.column.render = this.column.render || Forced[this.column.type].renderCell
    }
    if (this.column.formatter) {
      this.column.render = (h: any, scope: any) => {
        return (
          <span>{ scope.column.formatter(scope.row, scope.column, scope.row, scope.$index) }</span>
        )
      }
    }
    if (!this.column.render) {
      this.column.render = (h: any, scope: any) => {
        return (
          <span>{ scope.row[scope.column.property] }</span>
        )
      }
    }
  }

  @Watch('column', { immediate: true })
  columnChange () {
    this.setColumn()
  }
}
</script>