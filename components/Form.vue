<template>
    <v-form id="form">
        <div>
            <v-text-field label="Valor Inicial"></v-text-field>
            <v-text-field label="Valor Mensal"></v-text-field>
        </div>
        <div>
            <v-text-field label="Taxa de Juros"></v-text-field>
            <v-text-field label="Período em:"></v-text-field>
        </div>
        <div>
            <h1>Actions</h1>
        </div>
    </v-form>
</template>

<script setup lang="ts">

</script>

<style scoped>
#form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
}
</style>