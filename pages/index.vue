<template>
    <div class="container">
        <CalculatorForm />
    </div>
</template>

<script setup lang="ts">
import CalculatorForm from '../components/organisms/CalculatorForm.vue';

</script>

<style scoped>
.container {
    padding: 0 2rem;
    background-color: rgba(var(--v-theme-background));
    height: 200vh;
}
</style>