<template>
  <div class="contact">
    <Burger />
    <Sidebar />
    <ContactDetails />
  </div>
</template>

<script>
import Burger from "./Burger/Burger.vue";
import Sidebar from "./Sidebar/Sidebar.vue";
import ContactDetails from "./ContactDetails/ContactDetails.vue";

export default {
  name: "Contact",
  components: {
    Burger,
    Sidebar,
    ContactDetails
  }
};
</script>
