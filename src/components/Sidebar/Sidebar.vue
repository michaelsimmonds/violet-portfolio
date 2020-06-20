<template>
  <div class="sidebar">
    <div class="sidebar__backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar__panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "../../store.js";
export default {
  // data: () => ({
  //   isPanelOpen: true
  // }),
  methods: {
    closeSidebarPanel() {
      // this.isPanelOpen = false;
      closeSidebarPanel: mutations.toggleNav;
    }
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    }
  }
};
</script>

<style lang="scss" >
@import "./Sidebar.scss";
</style>
