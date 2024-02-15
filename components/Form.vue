<template>
    <v-form id="form">
        <div>
            <TextField label="TESTEW" variant="outlined" density="compact"></TextField>
        </div>
        <div>
            <v-text-field label="Valor Inicial" variant="outlined"></v-text-field>
            <v-text-field label="Valor Mensal" variant="outlined"></v-text-field>
        </div>
        <div>
            <v-text-field label="Taxa de Juros" variant="outlined"></v-text-field>
            <v-text-field label="Período em:" variant="outlined"></v-text-field>
        </div>
        <div>
            <h1>Actions</h1>
        </div>
    </v-form>
</template>

<script setup lang="ts">
import TextField from './atoms/TextField.vue';

</script>

<style scoped>
#form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
}
</style>