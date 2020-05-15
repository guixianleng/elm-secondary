<template>
  <div id="app">
    <x-header></x-header>
    <div id="app-siderbar">
      <Siderbar :data="navsData"/>
    </div>
    <div id="app-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import Siderbar from './components/Sidebar.vue'
import XHeader from './components/XHeader.vue'
import navConfig from './nav.config.json'

@Component({
  components: {
    XHeader,
    Siderbar
  }
})
export default class App extends Vue {
  private navsData = navConfig
}
</script>

<style lang="scss">
#app {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 65px;
  &-siderbar {
    width: 200px;
    float: left;
  }
  &-view {
    margin-left: 220px;
    padding-bottom: 40px;
  }
} 
</style>
