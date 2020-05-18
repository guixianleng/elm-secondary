import ElmCascader from './src/main'

/* istanbul ignore next */
ElmCascader.install = function(Vue) {
  Vue.component(ElmCascader.options.name, ElmCascader)
}

export default ElmCascader