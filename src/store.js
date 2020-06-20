import Vue from "vue";

export const store = Vue.observable({
  isNavOpen: false
});

export const mutations = {
  toggleNav() {
    store.isNavOpen
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
    store.isNavOpen = !store.isNavOpen;
  }
};
