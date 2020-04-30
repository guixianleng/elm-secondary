# Form封装

<elm-form :ref-obj.sync="formData.ref" :data="formData.data" :field-list="formData.fieldList" :rules="formData.rules" :list-type-info="formData.listTypeInfo" :btnList="formData.btnList" inline labelWidth="" size="small">
</elm-form>

{{ formData.data }}

<script>
export default {
  data () {
    return {
      formData: {
        ref: null,
        data: {
          city: [],
          projectName: '',
          projectType: ''
        },
        rules: {},
        listTypeInfo: {
          projectName: [
            {
              label: '王者农药',
              value: '王者农药'
            }
          ]
        },
        btnList: [
          { label: '查询', type: 'primary', event: 'search' },
          { label: '重置', event: 'reset' }
        ],
        fieldList: [
          {
            label: '城市',
            value: 'city',
            type: 'cascader',
            list: 'area',
            event: 'area',
            el: {
              clearable: true,
              filterable: true,
              grade: 2,
              props: {
                label: 'label',
                value: 'value'
              }
            }
          },
          {
            label: '项目名称',
            value: 'projectName',
            type: 'select',
            list: 'projectName',
            defaultProps: {
              label: 'label',
              value: 'value'
            },
            el: {
              clearable: true,
              filterable: true
            }
          },
          {
            label: '项目类型',
            value: 'projectType',
            type: 'input',
            list: 'type',
            el: {
              clearable: true
            }
          }
        ]
      }
    }
  }
}
</script>

```html
<template>
  <elm-form
    :ref-obj.sync="formData.ref"
    :data="formData.data"
    :field-list="formData.fieldList"
    :rules="formData.rules"
    :list-type-info="formData.listTypeInfo"
    :btnList="formData.btnList"
    inline
    labelWidth=""
    size="small"
  >
  </elm-form>
</template>
<script>
  import ElmForm from 'elm-ui/ElmForm'
  export default {
    components: {
      ElmForm
    },
    data () {
      return {
        formData: {
          ref: null,
          data: {
            city: [],
            projectName: '',
            projectType: ''
          },
          rules: {},
          listTypeInfo: {},
          btnList: [
            { label: '查询', type: 'primary', event: 'search' },
            { label: '重置', event: 'reset' }
          ],
          fieldList: [
            {
              label: '城市',
              value: 'city',
              type: 'cascader',
              list: 'area',
              event: 'area',
              el: {
                clearable: true,
                filterable: true,
                grade: 2,
                props: {
                  label: 'label',
                  value: 'value'
                }
              }
            },
            {
              label: '项目名称',
              value: 'projectName',
              type: 'select',
              list: 'projectName',
              defaultProps: {
                label: 'projectName',
                value: 'id'
              },
              el: {
                clearable: true,
                filterable: true
              }
            },
            {
              label: '项目类型',
              value: 'projectType',
              type: 'input',
              list: 'type',
              el: {
                clearable: true
              }
            }
          ]
        }
      }
    }
  }
</script>
```

### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| ref-obj     | 表单ref   | Object  |   -       |    {}   |
| data| 表单值   | Object  |   -       |    {}   |
| rules| 校验规则   | Object  |   -       |    {}   |
| listTypeInfo| 下拉数据 | Object  |   -       |    {}   |
| fieldList | 表单显示列表 | Array  |   -       |    []   |
| btnList | 表单按钮操作 | Array  |   -       |    []   |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| handleEvent | 事件名回调 | eventName事件名，value 事件值 |
| handleClick | 点击事件回调 | eventName事件名，value 事件值 |

### Slots
| 名称 | 说明 | 
|---------|--------|
| name | 插槽内容 |