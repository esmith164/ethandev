<template>
  <div class="landing">
    <div class="header flex flex-wrap mx-auto">
      <img 
        src="@/assets/img/logo.svg"
        width="100px"
        alt="Ethan Smith"
        />
        <h1 class="text-primary dark:text-white font-display text-4xl font-bold uppercase my-auto ml-12">Ethan Smith</h1>
    </div>
    <Navbar />
    
  </div>
</template>
<style lang="scss">
  .landing {
    max-width: 600px;
    @apply  mx-auto flex flex-col;
  }
</style>
<script>
import Navbar from '@/components/core/Navbar'
export default {
  layout: 'empty',
  components: {
    Navbar
  }
}
</script>