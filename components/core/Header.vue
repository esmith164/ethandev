<template>
  <div class="header py-12">
    <div class="container flex mx-auto flex-row">
      <Logo size="50px" />
      <div class="w-6/12 my-auto">
        <Navbar />
      </div>
      <div class="ml-auto">
        <Theme />
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '@/components/core/Logo'
import Navbar from '@/components/core/Navbar'
import Theme from '@/components/core/Theme'
export default {
  name: 'Header',
  components: { Navbar, Logo, Theme }
}
</script>