<template>
  <div class="custom-select">
    <select name="" id="">
      <option disabled selected value="">Selecione</option>
      <option v-for="(option, i) in items" :key="i" :value="option.value">{{ option.label }}</option>
    </select>
    <v-icon class="select-icon">mdi-chevron-down</v-icon>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: [
      { value: "valor 1", label: "label 1" },
      { value: "valor 2", label: "label 2" },
      { value: "valor 3", label: "label 3" },
      { value: "valor 4", label: "label 4" },
    ]
  }
})

</script>

<style scoped>
.custom-select {
  display: flex;
  align-items: center;
}

.select-icon {
  width: 20px;
}

select {
  width: calc(100% - 20px);
  outline: none;
  text-align: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>

