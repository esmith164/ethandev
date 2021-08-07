<template>
  <div class="navbar grid md:grid-cols-4 gap-y-4 md:gap-4">
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/portfolio">
      Portfolio
    </NuxtLink>
    <NuxtLink to="/resume">
      Resume
    </NuxtLink>
    <NuxtLink to="/about">
      About
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
  .navbar {
    a {
      @apply w-full block py-2 rounded-full text-base text-light text-center duration-300 font-display;
      &:hover {
        @apply bg-dark-300 text-white;
      }
      &.nuxt-link-exact-active {
        @apply bg-primary text-white;
      }
    }
  }
</style>
<script>
export default {
  name: "Navbar",
};
</script>