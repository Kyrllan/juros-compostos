<template>
  <div class="form">
    <FormField label="Valor inicial" type="number" v-model.lazy="form.initialValue" />
    <FormField label="Valor mensal" type="number" v-model.lazy="form.monthlyValue" />
    <FormFieldSelect label="Taxa de Juros" type="number" :items="juros" v-model.lazy="form.interestRate" />
    <FormFieldSelect label="Período em" type="number" :items="periodo" v-model.lazy="form.period" />
    <Button class="form-button" color="rgb(var(--v-theme-primary))" label="Limpar" @click="$emit('clean')" v-ripple />
    <Button class="form-button" color="rgb(var(--v-theme-tertiary))" label="Calcular" @click="$emit('calculate', form)"
      v-ripple />

    {{ form }}
  </div>
</template>

<script setup lang="ts">
import FormField from '../molecules/FormField.vue';
import FormFieldSelect from '../molecules/FormFieldSelect.vue';
import Button from '../atoms/Button.vue';
import { reactive } from 'vue';

const form = reactive({
  initialValue: "",
  monthlyValue: "",
  interestRate: "",
  period: "",
})

const juros = [
  { value: "anual", label: "Anual" },
  { value: "mensal", label: "Mensal" },
]
const periodo = [
  { value: "anos", label: "Anos" },
  { value: "meses", label: "Meses" },
]
</script>

<style scoped lang="scss">
.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-button {
  margin: 1rem 0;
  width: 100%;
  height: 38px;
  transition: filter;

  &:hover {
    filter: brightness(0.9);
  }
}
</style>