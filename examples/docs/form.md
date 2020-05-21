## Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

### 基本用法

包括各种表单项，比如输入框、选择器

:::demo
```html
<elm-form
  :ref-obj.sync="formData.ref"
  :data="formData.data"
  :field-list="formData.fieldList"
  :rules="formData.rules"
  :list-type-info="formData.listTypeInfo"
  :btnList="formData.btnList"
  @handleClick="handleClick"
>
</elm-form>

<script>
  export default {
    data () {
      return {
        formData: {
          ref: null,
          data: {
            keyWord: '',
            createDate: [],
            orderTypeId: ''
          },
          rules: {},
          listTypeInfo: {
            typeList: [
              {
                label: '区域一',
                value: 'shanghai'
              },
              {
                label: '区域二',
                value: 'beijing'
              }
            ],
          },
          btnList: [
            { label: '立即创建', type: 'primary', event: 'create' },
            { label: '重置', event: 'reset' }
          ],
          fieldList: [
            {
              label: '活动区域',
              value: 'orderTypeId',
              type: 'select',
              list: 'typeList',
              defaultProps: {
                label: 'label',
                value: 'value'
              },
              el: {
                clearable: true
              }
            },
            {
              label: '创建时间',
              value: 'createDate',
              type: 'date',
              el: {
                clearable: true,
                type: 'daterange',
                rangeSeparator: '-',
                startPlaceholder: '开始日期',
                endPlaceholder: '结束日期',
                valueFormat: 'yyyy-MM-dd HH:mm:ss'
              }
            },
            { label: '关键字', value: 'keyWord', type: 'input' },
            {
              type: 'button',
              className: 'form-item--btns'
            }
          ]
        }
      }
    },
    methods: {
      handleClick (evName) {
        switch (evName) {
          case 'create':
            console.log(this.formData.data)
            break
          case 'reset':
            this.formData.ref.resetFields()
            break
        }
      }
    }
  }
</script>
```
:::

### 表单插槽
因内置的表单只支持（文本）输入框、选择器，不支持单选框、多选框、开关，可以使用插槽添加内容

:::demo 使用`slot`插槽，`<template v-slot:form-type></template>`，其中`field-list`的定义`{ label: 'xx', type: 'slot', value: 'type'}`
```html
<elm-form
  :ref-obj.sync="formData.ref"
  :data="formData.data"
  :field-list="formData.fieldList"
  :rules="formData.rules"
  :list-type-info="formData.listTypeInfo"
  :btnList="formData.btnList"
  @handleClick="handleClick"
>
  <template v-slot:form-delivery>
    <el-switch v-model="formData.data.delivery"></el-switch>
  </template>
  <template v-slot:form-type>
    <el-checkbox-group v-model="formData.data.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </template>
  <template v-slot:form-resource>
    <el-radio-group v-model="formData.data.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </template>
</elm-form>

<script>
  export default {
    data () {
      return {
        formData: {
          ref: null,
          data: {
            name: '',
            type: [],
            delivery: false,
            resource: ''
          },
          rules: {},
          listTypeInfo: {},
          btnList: [
            { label: '立即创建', type: 'primary', event: 'create' },
            { label: '重置', event: 'reset' }
          ],
          fieldList: [
            { label: '活动名称', value: 'name', type: 'input' },
            { label: '即时配送', type: 'slot', value: 'delivery'},
            { label: '活动性质', type: 'slot', value: 'type'},
            { label: '特殊资源', type: 'slot', value: 'resource'},
            {
              type: 'button',
              className: 'form-item--btns'
            }
          ]
        }
      }
    },
    methods: {
      handleClick (evName) {
        switch (evName) {
          case 'create':
            console.log(this.formData.data)
            break
          case 'reset':
            this.formData.ref.resetFields()
            break
        }
      }
    }
  }
</script>
```
:::

### 表单验证
在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

:::demo
```html
<elm-form
  :ref-obj.sync="formData.ref"
  :data="formData.data"
  :field-list="formData.fieldList"
  :rules="formData.rules"
  :list-type-info="formData.listTypeInfo"
  :btnList="formData.btnList"
  @handleClick="handleClick"
>
</elm-form>

<script>
  export default {
    data () {
      return {
        formData: {
          ref: null,
          data: {
            name: '',
            createDate: [],
            orderTypeId: '',
            desc: ''
          },
          rules: {
            name: [
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
          },
          listTypeInfo: {
            typeList: [
              {
                label: '区域一',
                value: 'shanghai'
              },
              {
                label: '区域二',
                value: 'beijing'
              }
            ],
          },
          btnList: [
            { label: '创建', type: 'primary', event: 'submit' },
            { label: '重置', event: 'reset' }
          ],
          fieldList: [
            { label: '活动名称', value: 'name', type: 'input', required: true },
            {
              label: '活动区域',
              value: 'orderTypeId',
              type: 'select',
              list: 'typeList',
              required: true,
              defaultProps: {
                label: 'label',
                value: 'value'
              },
              el: {
                clearable: true
              }
            },
            {
              label: '创建时间',
              value: 'createDate',
              type: 'date',
              required: true,
              el: {
                clearable: true,
                type: 'daterange',
                rangeSeparator: '-',
                startPlaceholder: '开始日期',
                endPlaceholder: '结束日期',
                valueFormat: 'yyyy-MM-dd HH:mm:ss'
              }
            },
            {
              label: '活动形式',
              value: 'desc',
              required: true,
              type: 'textarea'
            },
            {
              type: 'button',
              className: 'form-item--btns'
            }
          ]
        }
      }
    },
    methods: {
      handleClick (evName) {
        switch (evName) {
          case 'submit':
            this.formData.ref.validate((valid) => {
              if (valid) {
                console.log(this.formData.data)
              }
            })
            break
          case 'reset':
            this.formData.ref.resetFields()
            break
        }
      }
    }
  }
</script>
```
:::

### 自定义校验规则
这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。
:::demo
```html
<elm-form
  :ref-obj.sync="formData.ref"
  :data="formData.data"
  :field-list="formData.fieldList"
  :rules="formData.rules"
  :list-type-info="formData.listTypeInfo"
  :btnList="formData.btnList"
  @handleClick="handleClick"
  status-icon
>
</elm-form>

<script>
  export default {
    data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 300);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formData.data.checkPass !== '') {
            this.formData.ref.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formData.data.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        formData: {
          ref: null,
          data: {
            pass: '',
            checkPass: '',
            age: ''
          },
          rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
          },
          listTypeInfo: {},
          btnList: [
            { label: '创建', type: 'primary', event: 'submit2' },
            { label: '重置', event: 'reset' }
          ],
          fieldList: [
            { label: '密码', value: 'pass', type: 'input' },
            { label: '确认密码', value: 'checkPass', type: 'input' },
            { label: '年龄', value: 'age', type: 'input' },
            { type: 'button', className: 'form-item--btns' }
          ]
        }
      }
    },
    methods: {
      handleClick (evName) {
        switch (evName) {
          case 'submit2':
            this.formData.ref.validate((valid) => {
              if (valid) {
                console.log(this.formData.data)
              }
            })
            break
          case 'reset':
            this.formData.ref.resetFields()
            break
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
| formData     | 表单数据对象   | object  |   —           |    —     |
| refObj     | null   | string    |  — |     null    |
| fieldList     | 表单内容   | boolean    | — | —   |
| data     | 表单value/v-model   | string/number    | — | false   |
| rules     | 表单验证规则   | object    | — | —   |
| listTypeInfo     | 下拉选择数据   | object    | — | —   |
| btnList     | 按钮列表   | array    | — | —   |

### Methods
| 事件名称	      | 说明    | 回调参数  |
|---------- |-------- |---------- |
| handleClick     | 按钮点击事件处理   | Function(evName: string)  |
| handleEvent     | 内容改变事件处理   | Function(evName: string, value: any)  |

### ElmForm-Item slot
| name      | 说明    |
|---------- |-------- |---------- |
| —     | Form Item 的内容   | 