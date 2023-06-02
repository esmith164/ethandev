<template>
  <div class="social grid grid-cols-3 mx-auto gap-6">
    <a
      class="social-icon rounded-full bg-dark-300 hover:bg-primary duration-300 flex"
      v-for="social in socials"
      :key="social.path"
      :href="social.path"
    >
      <i
        :class="social.icon"
        class="text-white m-auto block text-2xl"
      />
    </a>
  </div>
</template>
<style lang="scss" scoped>
  .social {
    max-width: 320px;
    .social-icon {
      width: 70px;
      height: 70px;
    }
  }
</style>
<script>
export default {
  name: "Social",
  data() {
    return {
      socials: [
        { icon: "fab fa-discord", path: "/" },
        { icon: "fab fa-linkedin-in", path: "https://www.linkedin.com/in/ethan-s-117757121/" },
        { icon: "fab fa-github", path: "https://github.com/esmith164" },
      ],
    };
  },
};
</script>