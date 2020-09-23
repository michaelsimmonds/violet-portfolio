<template>
  <div class="contact">
    <Nav />
    <ContactDetails />
  </div>
</template>

<script>
import ContactDetails from "./ContactDetails/ContactDetails.vue";
import Nav from "./Nav/Nav.vue";

export default {
  name: "Contact",
  components: {
    ContactDetails,
    Nav
  }
};
</script>
