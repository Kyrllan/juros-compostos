<template>
  <select name="" id="">
    <option v-for="(option, i) in items" :key="i" value="" label=""></option>
  </select>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    default: [
      { value: "valor 1", label: "label 1" },
      { value: "valor 1", label: "label 1" },
      { value: "valor 1", label: "label 1" },
      { value: "valor 1", label: "label 1" },
    ]
  }
})

</script>

<style scoped></style>