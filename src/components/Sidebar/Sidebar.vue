<template>
  <div class="sidebar">
    <div
      class="sidebar__backdrop"
      @click="closeSidebarPanel"
      :class="{'sidebar__backdrop--active': isPanelOpen}"
    ></div>
    <transition name="slide">
      <div class="sidebar__panel" :class="{'sidebar__panel--active': isPanelOpen}">
        <div class="sidebar__list-wrapper">
          <ul class="sidebar__list">
            <li class="sidebar__list-item">
              <a href="#home" class="sidebar__list-link">Home</a>
            </li>
            <li class="sidebar__list-item">
              <a href="#about" class="sidebar__list-link">About</a>
            </li>
            <li class="sidebar__list-item">
              <a href="#contact" class="sidebar__list-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "../../store.js";
export default {
  methods: {
    closeSidebarPanel() {
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
