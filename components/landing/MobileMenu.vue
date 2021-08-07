<template>
  <div class="mobile-menu md:hidden flex flex-wrap py-8">
    <img
      src="@/assets/img/logo.svg"
      width="40px"
      alt="Ethan Smith"
    />
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
        class="menu-wrapper relative w-full dark:bg-dark-300 py-8 px-4 mt-8 rounded-xl"
        v-if="isMenuOpen"
      >
        <Navbar />
      </div>
    </transition>
  </div>
</template>
<script>
import Navbar from "@/components/core/Navbar";
export default {
  name: "MobileMenu",
  components: { Navbar },
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