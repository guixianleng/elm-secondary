import ElmPagination from './src/main.vue'

/* istanbul ignore next */
ElmPagination.install = function(Vue) {
  Vue.component(ElmPagination.name, ElmPagination)
}

export default ElmPagination