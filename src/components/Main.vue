<template>
  <div>
    <router-view></router-view>
    <p>
      <router-link to="/"></router-link>
      <router-link to="/contact"></router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>
