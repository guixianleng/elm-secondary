<template>
  <aside>
    <div v-for="(item, index) in NavConfig" :key="index">
      <template v-if="item.children">
        <h4>{{ item.title }}</h4>
        <router-link
          v-for="(childItem, childIndex) in item.children"
          class="nav-link"
          :to="childItem.path"
          :key="childIndex"
          >{{ childItem.title }}</router-link
        >
      </template>
      <router-link
        style="font-weight:bold;"
        v-else
        class="nav-link"
        :to="item.path"
        >{{ item.title }}</router-link
      >
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import navConfig from "../nav.config.js";

@Component({
  components: {},
})
export default class Siderbar extends Vue {
  private NavConfig: any = navConfig;
}
</script>

<style lang="scss">
aside {
  line-height: 1;
  border-right: 1px solid #eee;
  padding-left: 12px;
  h4 {
    margin-top: 15px;
    margin-bottom: 2px;
    font-size: 16px;
    color: #333;
    font-weight: 600;
  }
  a {
    display: block;
    color: #313131;
    padding: 10px 0;
    &:hover {
      color: #00A0F0;
    }
    &.router-link-exact-active {
      color: #00A0F0;
      font-weight: bold;
    }
  }
}
</style>
