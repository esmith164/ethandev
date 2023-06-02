<template>
  <div class="neumorphism-toggle mx-auto">
    <input
      type="checkbox"
      id="neumorphism"
      :checked="$colorMode.preference === 'dark'"
      @click="toggleDarkmode"
    >
    <label for="neumorphism" class="bg-white dark:bg-dark-300">
      <div class="switch">
        <div class="dot bg-dark-300 dark:bg-white" ></div>
      </div>
      <span class="text-light text-sm inline-block ml-2 -mt-2">Dark Mode</span>
    </label>
  </div>
</template>
<style lang="scss" scoped>
  .neumorphism-toggle {
    position: relative;
    transition: transform 0.3s;
    width: 200px;
    &:active {
      --scale: 0.96;
    }
    input {
      display: none;
      & + label {
        @apply rounded-full;
        
        padding: 16px 0 16px 20px;
        min-width: 208px;
        display: block;
        cursor: pointer;
        position: relative;

        transition: box-shadow 0.4s;
        &:before {
          content: "";
          @apply absolute left-0 top-0 right-0 bottom-0 duration-300;
          background: linear-gradient(160deg, #f1f4ff, #f9faff);
          opacity: var(--gradient, 0);
        }
        .switch {
          @apply relative inline-block z-10 align-top rounded-full;
          height: 22px;
          width: 40px;
          margin-top: 4px;
         @apply bg-primary;
          &:before {
            content: "";
            @apply absolute left-0 top-0 right-0 bottom-0 bg-primary duration-300;
            border-radius: inherit;
            opacity: var(--gradient, 0);
          }
          .dot {
            @apply absolute rounded-full duration-300;
            width: 24px;
            height: 24px;
            left: -1px;
            top: -1px;
            transform: translateX(var(--offset, 0));

            &:before {
              content: "";
              @apply left-0 right-0 top-0 bottom-0 duration-300;
              border-radius: inherit;
              background: linear-gradient(160deg, #f1f4ff, #f9faff);
              opacity: var(--gradient, 0);
            }
          }
        }
      
        & + span {
    
        }
      }
      &:checked {
        & + label {
          --offset: 18px;

        }
      }
    }
  }
</style>
<script>
export default {
  name: "Theme",
  methods: {
    toggleDarkmode() {
      if (this.$colorMode.preference ==='dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    }
  }
};
</script>