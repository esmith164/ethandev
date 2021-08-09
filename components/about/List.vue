<template>
  <div>
    <h4 class="text-xl text-dark-400 dark:text-white font-bold uppercase font-display mb-4">{{ name }}</h4>
    <ul class="text-light dark:text-white flex gap-3 flex-col text-sm font-display">
      <li
        v-for="item in items"
        :key="items.indexOf(item)"
      >
      {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    name: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>