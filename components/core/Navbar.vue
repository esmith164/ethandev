<template>
  <div class="navbar grid grid-cols-4 gap-4">
    <NuxtLink to="/">
      <span>Home</span>
    </NuxtLink>
    <NuxtLink to="/portfolio">
      <span>Portfolio</span>
    </NuxtLink>
    <NuxtLink to="/resume">
      <span>Resume</span>
    </NuxtLink>
    <NuxtLink to="/about">
      <span>About</span>
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
  .navbar {
    a {
      @apply w-full block py-2 rounded-full text-light text-center duration-300 font-display;
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