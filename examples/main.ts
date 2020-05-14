import Vue from 'vue'
import App from './App.vue'
import router from './route.config.js'
import * as ElementUI from '../src/@element-ui.js'
import ElmUI from '../src/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from "highlight.js"
import demoBlock from './components/demoBlock.vue'

Vue.config.productionTip = false
Vue.component('demoBlock', demoBlock)

Vue.use(ElementUI).use(ElmUI)

router.afterEach((route: any) => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)")
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
