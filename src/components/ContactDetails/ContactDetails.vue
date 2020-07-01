<template>
  <div class="contact-details">
    <h2 class="about-details__home-name">
      <router-link class="about-details__home-link" to="/">Violet Iola Argent</router-link>
    </h2>
    <ul class="contact-details__list">
      <li class="contact-details__list-item">
        <a class="contact-details__link" href="mailto:violetiargent@gmail.com">
          <img class="contact-details__icon" src="static/icons/email.svg" />
          <span>violetiargent@gmail.com</span>
        </a>
      </li>
      <li class="contact-details__list-item">
        <a
          class="contact-details__link"
          href="https://www.instagram.com/viola.argent/"
          target="_blank"
        >
          <img class="contact-details__icon" src="static/icons/instagram.svg" />
          <span>@viola.argent</span>
        </a>
      </li>
      <li class="contact-details__list-item">
        <a
          class="contact-details__link"
          href="https://www.linkedin.com/in/violet-argent-8b512a136/"
          target="_blank"
        >
          <img class="contact-details__icon" src="static/icons/linkedin.svg" />
          <span>linkedin.com/in/violet-argent-8b512a136</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactDetails"
};
</script>

<style lang="scss" >
@import "./ContactDetails.scss";
</style>
