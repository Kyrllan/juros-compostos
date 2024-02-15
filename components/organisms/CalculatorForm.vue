<template>
    <div class="calculator-form">
        <FormField label="Valor inicial" type="number" />
        <FormField label="Valor mensal" type="number" />
    </div>
</template>

<script setup lang="ts">
import FormField from '../molecules/FormField.vue';

</script>

<style scoped lang="scss">
.calculator-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
</style>