import Vue from 'vue'
import Router from 'vue-router'

import navConfig from './nav.config.json'

Vue.use(Router)
const docsRouter = navConfig => {
  let route = []
  navConfig[0].groups.forEach(group => {
    group.list.forEach(nav => {
      route.push({
        path: nav.path,
        name: nav.path,
        component: r =>
          require.ensure([], () => r(require(`@/docs${nav.path}.md`)))
      })
    })
  })
  return route
}
let docsRoute = docsRouter(navConfig)
docsRoute = docsRoute.concat([
  {
    path: '/',
    redirect: '/index',
    name: 'index',
    component: r => require.ensure([], () => r(require(`@/docs/index.md`)))
  }
])
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: docsRoute
})
