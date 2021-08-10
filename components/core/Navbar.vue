<template>
  <div class="navbar grid md:grid-cols-4 gap-y-4 md:gap-4">
    <NuxtLink to="/">
      Home
    </NuxtLink>

    <NuxtLink to="/portfolio">
      Portfolio
    </NuxtLink>

    <NuxtLink to="/about">
      About
    </NuxtLink>
    <a
      target="_blank"
      href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:c3805f6a-31b7-4afd-962f-9d4bb0834c76"
    >
      Resume
    </a>
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