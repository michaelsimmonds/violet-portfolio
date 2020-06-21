<template>
  <div class="contact">
    <Burger />
    <Sidebar />
  </div>
</template>

<script>
import Burger from "./Burger/Burger.vue";
import Sidebar from "./Sidebar/Sidebar.vue";

export default {
  name: "Contact",
  components: {
    Burger,
    Sidebar
  }
};
</script>
