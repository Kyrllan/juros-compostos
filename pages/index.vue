<template>
    <div class="container">
        <CalculatorForm />
    </div>
</template>

<script setup lang="ts">
import CalculatorForm from '../components/templates/CalculatorForm.vue';

</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    background-color: rgba(var(--v-theme-background));
    height: 100vh;
}
</style>