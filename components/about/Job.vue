<template>
  <div class="flex flex-row flex-wrap">
    <h3 class="text-dark-400 dark:text-white uppercase font-display">{{ job.name }}</h3>
    <h4 class="text-light ml-auto text-sm">{{ job.time }}</h4>
    <p class="text-light text-sm dark:text-grey leading-10">{{ job.description }}</p>
  </div>
</template>
<script>
export default {
  name: "Job",
  props: {
    job: {
      type: Object,
      required: true
    }
  },
};
</script>