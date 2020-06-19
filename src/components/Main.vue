<template>
  <div>
    <router-view></router-view>
      <p>
        <router-link to="/">Home</router-link>
        <router-link to="/contact">Contact</router-link>
      </p>
  </div>
</template>

<script>

export default {
    name: 'Main'
}

</script>
