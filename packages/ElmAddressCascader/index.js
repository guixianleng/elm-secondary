import ElmAddressCascader from './src/main'

/* istanbul ignore next */
ElmAddressCascader.install = function(Vue) {
  Vue.component(ElmAddressCascader.options.name, ElmAddressCascader)
}

export default ElmAddressCascader