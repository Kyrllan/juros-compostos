
<template>
  <div class="form-field-select">
    <Label class="form-field-select__label" v-bind="$attrs" />
    <div class="form-field-select-part__input">
      <TextField class="form-field-select__input" v-bind="$attrs" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" />
      <Select v-bind="$attrs" class="form-field-select-select__input" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from '../atoms/TextField.vue';
import Label from '../atoms/Label.vue';
import Select from '../atoms/Select.vue'

defineProps({
  modelValue: {
    type: [Number, String],
    defaul: ""
  },
})
</script>

<style scoped lang="scss">
.form-field-select {
  display: flex;
  flex-direction: column;

  .form-field-select-part__input {
    display: flex;
    border: 2px solid transparent;

    .form-field-select__input {
      width: 75%;
      border-radius: 0;
      padding: 0.4rem;
      background-color: rgb(var(--v-theme-secondary));
      outline: none;
    }

    .form-field-select-select__input {
      width: 25%;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      background-color: rgb(var(--v-theme-tertiary));
      outline: none;
    }

    &:focus-within {
      border: 2px solid rgb(var(--v-theme-tertiary));
      border-radius: 4px;
    }
  }

  &:focus-within .form-field-select__label {
    color: rgb(var(--v-theme-tertiary));
  }
}
</style>