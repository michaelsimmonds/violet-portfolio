<template>
  <div class="contact-details">
    <div class="contact-details__section contact-details__section--2">
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
            href="https://www.linkedin.com/in/violetargent/"
            target="_blank"
          >
            <img class="contact-details__icon" src="static/icons/linkedin.svg" />
            <span>linkedin.com/in/violetargent</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="contact-details__section contact-details__section--1">
      <figure class="contact-details__image-wrapper">
        <img class="contact-details__image" src="static/images/cutoff1.jpeg" alt />
      </figure>
    </div>
    <div class="contact-details__overlay"></div>
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
