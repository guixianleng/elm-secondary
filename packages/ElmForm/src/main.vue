<template>
  <el-form
    ref="form"
    class="elm-form"
    :class="className"
    :model="data"
    :rules="rulesObj"
    :label-width="labelWidth"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-form-item
      v-for="(item, index) in getConfigList()"
      :key="index"
      :prop="item.value"
      :label="item.label"
      :class="item.className"
    >
      <!-- solt -->
      <template v-if="item.type === 'slot'">
        <slot :name="'form-' + item.value" />
      </template>
      <!-- 普通输入框 -->
      <el-input
        v-if="item.type === 'input'"
        v-model="data[item.value]"
        v-bind="item.el"
        :placeholder="getPlaceholder(item)"
      >
        <template
          :slot="item.slot"
          v-if="item.slot"
        >
          {{ item.slotName }}
        </template>
      </el-input>
      <!-- 文本输入框 -->
      <el-input
        v-if="item.type === 'textarea'"
        v-model.trim="data[item.value]"
        :placeholder="getPlaceholder(item)"
        :autosize="{ minRows: 2, maxRows: 10 }"
        v-bind="item.el"
        @change="handleEvent(item.event)"
      />
      <!-- 计数器 -->
      <el-input-number
        v-if="item.type === 'inputNumber'"
        v-model="data[item.value]"
        v-bind="item.el"
        @change="handleEvent(item.event)"
      />
      <!-- 选择框 -->
      <el-select
        v-if="item.type === 'select'"
        v-model="data[item.value]"
        v-bind="item.el"
        :placeholder="getPlaceholder(item)"
        @change="handleEvent(item.event, data[item.value])"
      >
        <el-option
          v-for="(childItem, childIndex) in listTypeInfo[item.list]"
          :key="childIndex"
          :label="childItem[item.defaultProps.label]"
          :value="childItem[item.defaultProps.value]"
        />
      </el-select>
      <elm-tree-select
        v-if="item.type === 'tree-select'"
        :default-props="item.defaultProps"
        :options="listTypeInfo[item.list]"
        :disabled="item.disabled"
        :showCheckbox="item.showCheckbox"
        v-model="data[item.value]"
      >
      </elm-tree-select>
      <!-- 日期选择框 -->
      <el-date-picker
        v-if="item.type === 'date'"
        v-model="data[item.value]"
        v-bind="item.el"
        :placeholder="getPlaceholder(item)"
        @change="handleEvent(item.event, data[item.value])"
      />
      <!-- 级联选择器 -->
      <el-cascader
        v-if="item.type === 'cascader'"
        v-model="data[item.value]"
        v-bind="item.el"
        :placeholder="getPlaceholder(item)"
        :options="listTypeInfo[item.list]"
        @change="handleEvent(item.event, data[item.value])"
      ></el-cascader>
      <div v-if="item.type === 'button'">
        <el-button
          :type="it.type || null"
          @click="handleClick(it.event)"
          v-for="(it, idx) in btnList"
          :key="idx"
        >
          {{ it.label }}
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import ElmTreeSelect from '../../ElmTreeSelect/src/main.vue'

@Component({
  components: {
    ElmTreeSelect
  }
})
export default class ElmForm extends Vue {
  // 自定义类名
  @Prop({}) className!: string
  // 表单数据
  @Prop({}) data!: any
  // 相关字段
  @Prop({}) fieldList!: Array<any>
  // 按钮列表
  @Prop({}) btnList!: Array<any>
  // 验证规则
  @Prop({}) rules!: any
  @Prop({}) refObj!: any
  @Prop({ default: '120px' }) labelWidth!: any
  // 相关select列表
  @Prop({}) listTypeInfo!: any
  // 选择类型
  private types = ['select', 'date', 'cascader', 'time', 'area']

  // 初始化 rules 校验
  get rulesObj() {
    let newObj: any = {}
    this.fieldList.filter((item: any, index: number) => {
      let that = this
      if (item.required) {
        let arr = that.rules[item.value]
        const SELECT_TYPE = this.types.includes(item.type)
        let newArr: Array<any> = [
          {
            required: true,
            message: `请${SELECT_TYPE ? '选择' : '输入'}${item.label}${
              SELECT_TYPE ? '' : '名称'
            }`,
            trigger: SELECT_TYPE ? 'change' : 'blur'
          }
        ]
        if (arr && arr.length) {
          newObj[item.value] = [...newArr, ...that.rules[item.value]]
        } else {
          newObj[item.value] = [...newArr]
        }
      }
    })
    return newObj
  }

  // 监听 data 变化
  @Watch('data', { deep: true })
  dataChange(val: any) {
    // 将form实例返回到父级
    this.$emit('update:refObj', this.$refs.form)
  }

  mounted() {
    // 将form实例返回到父级
    this.$emit('update:refObj', this.$refs.form)
  }
  
  // 获取字段列表
  private getConfigList() {
    return this.fieldList.filter(
      item =>
        !item.hasOwnProperty('show') || // eslint-disable-line
        (item.hasOwnProperty('show') && item.show) // eslint-disable-line
    )
  }

  // 得到 placeholder 显示
  private getPlaceholder(row: any) {
    let placeholder
    if (row.type === 'input' || row.type === 'textarea') {
      placeholder = '请输入' + row.label
    } else if (this.types.includes(row.type)) {
      placeholder = '请选择' + row.label
    } else {
      placeholder = row.label
    }
    return placeholder
  }

  // 绑定的相关事件
  private handleEvent(ev: string, data: any) {
    this.$emit('handleEvent', ev, data)
  }

  // 派发按钮点击事件
  private handleClick(ev: string, data: any) {
    this.$emit('handleClick', ev, data)
  }
}
</script>

<style lang="scss" scoped>
.elm-form {
  width: 850px;
  &.el-form--inline {
    width: 100%;
  }
  .el-form-item {
    display: inline-block;
    .el-form-item__content {
      .el-input,
      .el-select,
      .el-textarea,
      .el-cascader {
        width: 240px;
      }
      .el-input-number {
        .el-input {
          width: inherit;
        }
      }
    }
  }
  .el-form-block {
    display: block;
    width: 100%;
    .el-form-item__content {
      .el-textarea {
        width: 100%;
      }
    }
  }
  .form-item--btns {
    display: block;
    .el-button {
      margin-right: 10px;
    }
  }
}
.elm-form-block {
  .el-form-item {
    display: block;
    .el-form-item__content {
      .el-input,
      .el-select,
      .el-textarea {
        width: inherit;
      }
      .el-input-number {
        .el-input {
          width: inherit;
        }
      }
    }
  }
  .el-form-block {
    display: block;
    width: 100%;
    .el-form-item__content {
      .el-textarea {
        width: 100%;
      }
    }
  }
}
</style>
<style lang="scss">
.el-cascader-menu__list {
  max-height: 210px !important;
}
</style>
