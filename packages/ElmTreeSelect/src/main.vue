<!--
 * @Author: LenGxin
 * @Description: 下拉树状选择
 * @Date: 2020-03-16 16:27:24
 * @LastEditors: LenGxin
 * @LastEditTime: 2020-05-18 10:06:17
-->
<template>
  <el-select
    :value="value"
    v-bind="$attrs"
    v-on="$listeners"
    :clearable="clearable"
    @clear="clearHandle"
    ref="select">
    <el-option :value="value" :label="labelText">
      <el-tree
        ref="selectTree"
        v-bind="$attrs"
        :data="options"
        :props="defaultProps"
        :node-key="defaultProps.value"
        :accordion="accordion"
        :load="loadNode"
        :lazy="lazy"
        :show-checkbox="showCheckbox"
        highlight-current
        :default-expanded-keys="defaultExpandedKey"
        @node-click="handleNodeClick"
        @check="handleNodeChecked"
      >
      </el-tree>
    </el-option>
  </el-select>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'ElmTreeSelect'
})
export default class ElmTreeSelect extends Vue {
  // 配置选项
  @Prop({ default: () => ({
    children: 'children',
    label: 'label',
    value: 'value'
  }) }) private defaultProps!: any
  // 展示数据
  @Prop({ default: () => [] }) private options!: any
  // 选中项
  @Prop({ default: '' }) private value!: any
  // 可清空
  @Prop({ default: false }) private clearable!: boolean
  // 只展开一个同级树节点
  @Prop({ default: true }) private accordion!: boolean
  @Prop({ default: false }) private lazy!: boolean
  // 点击自动关闭下拉
  @Prop({ default: true }) private autoColse!: boolean
  @Prop({ default: false }) private showCheckbox!: boolean
  private labelText: string = ''
  // 默认展开节点
  private defaultExpandedKey: any = []

  @Watch('value', { immediate: true, deep: true })
  valueChange () {
    setTimeout(() => {
      this.$nextTick(() => {
        this.initData()
      })
    }, 500)
  }

  // 初始化数据显示
  private initData () {
    let TreeSelectRef: any = this.$refs.selectTree
    if (this.value) {
      this.defaultExpandedKey = this.value.split(',')
      if (!this.showCheckbox) {
        // 设置默认选中
        TreeSelectRef.setCurrentKey(this.value)
        this.labelText = TreeSelectRef.getCurrentKey() && TreeSelectRef.getCurrentNode()[this.defaultProps.label]
      } else {
        // 设置默认选中
        TreeSelectRef.setCheckedKeys(this.value.split(','))
        let textArr: Array<any> = []
        TreeSelectRef.getCheckedNodes().forEach((item: any) => {
          return textArr.push(item[this.defaultProps.label])
        })
        this.labelText = textArr.join(',')
      }
    } else {
      this.labelText = ''
    }
  }

  // 动态加载
  loadNode (node: any, resolve: any) {
    this.$emit('lazyLoad', node, resolve)
  }

  // 复选框点击
  handleNodeChecked (node: any, keys: any) {
    this.$emit('input', keys.checkedKeys.join(','))
    let labelArr: Array<any> = []
    keys.checkedNodes.forEach((item: any) => {
      return labelArr.push(item[this.defaultProps.label])
    })
    this.labelText = labelArr.join(',')
  }

  // 切换选项
  private handleNodeClick (node: any) {
    let selectRef: any = this.$refs.select
    this.labelText = node[this.defaultProps.label]
    this.$emit('input', node[this.defaultProps.value])
    // 关闭select下拉框
    if (this.autoColse) {
      selectRef.toggleMenu()
    }
  }

  // 清除选中
  clearHandle () {
    this.labelText = ''
    this.defaultExpandedKey = []
    this.clearSelected()
    this.$emit('input', '')
  }
  /* 清空选中样式 */
  clearSelected () {
    let allNode = document.querySelectorAll('#tree-option .el-tree-node')
    allNode.forEach((element: any) => element.classList.remove('is-current'))
  }
}
</script>

<style scoped lang="scss">
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}
.el-select-dropdown__item.selected {
  font-weight: normal;
}
ul li >>>.el-tree .el-tree-node__content {
  height:auto;
  padding: 0 20px;
}
.el-tree-node__label {
  font-weight: normal;
}
.el-tree >>>.is-current .el-tree-node__label {
  color: #409EFF;
  font-weight: 700;
}
.el-tree >>>.is-current .el-tree-node__children .el-tree-node__label {
  color:#606266;
  font-weight: normal;
}
.selectInput {
  padding: 0 5px;
  box-sizing: border-box;
}
</style>
