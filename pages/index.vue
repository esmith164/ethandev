<template>
  <div class="landing px-8 gap-12">
    <MobileMenu />
    <div class="header hidden lg:flex flex-wrap mx-auto">

      <h1 class="text-dark-400 dark:text-white font-display text-4xl font-bold uppercase my-auto md:ml-12">Ethan Smith</h1>
    </div>
    <Navbar class="hidden lg:flex duration-300" />
    <p class="text-light dark:text-grey text-center leading-10 mb-0">
       I enjoy developing intuitive SaaS solutions for different business sectors and working in environments that provide an opportunity to apply principles related to computer software, hardware, and application systems.
    </p>
    <ul class="roles flex gap-4 mx-auto flex-col text-center text-light mb-12 lg:mb-0">
      <li class="font-bold">Roles</li>
      <li>Undergraduate Researcher at University of Florida</li>
      <li>Software Developer at <a 
href="https://alqen.com">Alqen.com</a></li>
      <li>Self-Employed at Necton LLC</li>
    </ul>
    <button class="bg-primary hover:bg-dark-300 duration-300 block w-48 mx-auto rounded-full mb-12 lg:mb-0">
      <a 
        href="mailto:me@ethansmith.us"
        class="block py-3 font-display text-white"
      >Get In Touch</a>
    </button>
    <Social class="mb-12 lg:mb-0"/>
    <Theme />
  </div>
</template>
<style lang="scss">
  @media (min-width: 1024px) {
    .landing {
      max-width: 800px;
      @apply m-auto flex flex-col;
    }
  }
</style>
<script>
import Logo from "@/components/core/Logo";
import Navbar from "@/components/core/Navbar";
import MobileMenu from "@/components/landing/MobileMenu";
import Social from "@/components/core/Social";
import Theme from "@/components/core/Theme";

export default {
  layout: "empty",
  components: {
    Logo,
    Navbar,
    MobileMenu,
    Social,
    Theme,
  },
};
</script>
