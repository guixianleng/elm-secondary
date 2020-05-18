import ElmTreeSelect from './src/main.vue'

/* istanbul ignore next */
ElmTreeSelect.install = function(Vue) {
  Vue.component(ElmTreeSelect.options.name, ElmTreeSelect)
}

export default ElmTreeSelect
