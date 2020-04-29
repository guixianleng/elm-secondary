<template>
  <div id="app">
    <div id="app-siderbar">
      <Siderbar />
    </div>
    <div id="app-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Siderbar from './components/Sidebar.vue'

@Component({
  components: {
    Siderbar
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  &-siderbar {
    width: 200px;
    float: left;
  }
  &-view {
    margin-left: 220px;
  }
} 
</style>
