import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './route.config.js'
import * as ElementUI from '../src/@element-ui.js'
import ElmUI from '../src/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/styles/atom-one-dark.css'
import CodeDemo from './components/CodeDemo.vue'

Vue.config.productionTip = false
Vue.component('code-demo', CodeDemo)

Vue.use(Router).use(ElementUI).use(ElmUI)

new Vue({
  router: new Router({
    routes: routes
  }),
  render: (h) => h(App),
}).$mount('#app')
