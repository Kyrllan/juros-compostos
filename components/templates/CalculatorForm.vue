
import type { resolveDirective } from 'vue';
<template>
    <div class="calculator-form">
        <Form @calculate="calculate" />
    </div>
</template>

<script setup lang="ts">
import Form from '../organisms/Form.vue';

const calculate = (form) => {
    console.log("calculate", form)
}

</script>

<style scoped>
.calculator-form {
    width: 800px;
    padding: 2rem 0;
}
</style>