<template>
  <div class="mobile-menu lg:hidden flex flex-wrap p-8">
    <Logo size="40px" />
    <button
      class="text-3xl ml-auto block text-primary py-4"
      @click="toggleMenu"
    >
      <i class="fal fa-bars"></i>
    </button>
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        class="menu-wrapper relative w-full bg-grey dark:bg-dark-300 shadow-lg py-8 px-4 mt-8 rounded-xl"
        v-if="isMenuOpen"
      >
        <Navbar />
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.menu-wrapper {
  width: 90%;
  top: 125px;
  @apply left-0 right-0 mx-auto absolute;
}
</style>
<script>
import Navbar from "@/components/core/Navbar";
import Logo from '@/components/core/Logo'
export default {
  name: "MobileMenu",
  components: { Navbar, Logo },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>