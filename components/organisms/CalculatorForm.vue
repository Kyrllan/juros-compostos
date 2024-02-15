<template>
    <div class="calculator-form">
        <FormField label="Valor inicial" type="number" />
        <FormField label="Valor mensal" type="number" />
        <FormFieldSelect label="Taxa de Juros" :items="items" />
    </div>
</template>

<script setup lang="ts">
import FormField from '../molecules/FormField.vue';
import FormFieldSelect from '../molecules/FormFieldSelect.vue';

const items = [
    { value: "anual", label: "Anual" },
    { value: "mensal", label: "Mensal" },
]

</script>

<style scoped lang="scss">
.calculator-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
</style>