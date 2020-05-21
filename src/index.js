/*
 * @Author: LenGxin
 * @Description: 注册组件，按需加载
 * @Date: 2020-04-29 10:11:02
 * @LastEditors: LenGxin
 * @LastEditTime: 2020-05-21 09:59:44
 */
import ElmAddressCascader from '../packages/ElmAddressCascader/index.js'
import ElmForm from '../packages/ElmForm/index.js'
import ElmTable from '../packages/ElmTable/index.js'
import ElmTreeSelect from '../packages/ElmTreeSelect/index.js'
import ElmPagination from '../packages/ElmPagination/index.js'

const components = [
  ElmAddressCascader,
  ElmForm,
  ElmTable,
  ElmTreeSelect,
  ElmPagination
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.options.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.1',
  install,
  ElmAddressCascader,
  ElmForm,
  ElmTable,
  ElmTreeSelect,
  ElmPagination
}
