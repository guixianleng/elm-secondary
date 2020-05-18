import ElmForm from './src/main.vue'

/* istanbul ignore next */
ElmForm.install = function(Vue) {
  Vue.component(ElmForm.options.name, ElmForm)
}

export default ElmForm