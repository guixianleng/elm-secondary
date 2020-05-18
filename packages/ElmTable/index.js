import ElmTable from './src/main.vue'

/* istanbul ignore next */
ElmTable.install = function(Vue) {
  Vue.component(ElmTable.options.name, ElmTable)
}

export default ElmTable