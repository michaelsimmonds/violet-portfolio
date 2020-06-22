<template>
  <div class="sidebar">
    <div
      class="sidebar__backdrop"
      @click="toggle"
      :class="{'sidebar__backdrop--active': isPanelOpen}"
    ></div>
    <transition name="slide">
      <div class="sidebar__panel" :class="{'sidebar__panel--active': isPanelOpen}">
        <div class="sidebar__list-wrapper">
          <ul class="sidebar__list">
            <li class="sidebar__list-item" @click.prevent="toggle">
              <router-link to="/" class="sidebar__list-link">Home</router-link>
            </li>
            <li class="sidebar__list-item" @click.prevent="toggle">
              <router-link to="/about" class="sidebar__list-link">About</router-link>
            </li>
            <li class="sidebar__list-item" @click.prevent="toggle">
              <router-link to="/contact" class="sidebar__list-link">Contact</router-link>
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
    toggle() {
      mutations.toggleNav();
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
