<template>
  <div id="app">
    <div id="app-siderbar">
      <Siderbar />
    </div>
    <div id="app-view" class="markdown-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="tsx">
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
  .markdown-body {
    padding-bottom: 30px;
    .demo {
      margin: 15px 0;
    }
    .language-javascript,
    .language-html {
      font-size: 14px;
      padding: 18px 24px;
      background-color: #fafafa;
      border: 1px solid #eaeefb;
      margin-bottom: 25px;
      border-radius: 4px;
      -webkit-font-smoothing: auto;
      display: block;
    }
    a {
      color: #313131;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      // font-weight: 500;
      margin: 15px 0;
      line-height: 1;
    }
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 14px;
    }
    h5 {
      font-size: 12px;
    }
    h6 {
      font-size: 12px;
      color: #ccc;
    }
    hr {
      margin: 15px 0;
    }
    table {
      width: 100%;
      text-align: left;
      td,
      th {
        border-bottom: 1px solid #f5f5f5;
        padding: 8px;
      }
    }
    pre {
      margin: 10px 0;
    }
    code {
      font-family: Microsoft YaHei;
      margin: 0 1px;
      background: #f2f4f5;
      padding: 0.2em 0.5em;
      border-radius: 3px;
      font-size: 0.9em;
      border: 1px solid #eee;
    }
    hr {
      height: 1px;
      border: 0;
      background: #ebedf0;
      clear: both;
    }
    blockquote {
      font-size: 90%;
      color: #0d1a26;
      border-left: 4px solid #ebedf0;
      padding-left: 0.8em;
      margin: 1em 0;
    }
  }
} 
</style>
