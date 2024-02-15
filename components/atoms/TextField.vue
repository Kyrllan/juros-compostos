<template>
  <input :type="type" :placeholder="placeholder" :class="class" />
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ""
  },
  class: {
    type: Object,
    default: {}
  }
})

</script>