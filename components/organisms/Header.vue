<template>
    <header>
        <div></div>
        <div>
            <h1>Calculadora Juros Compostos</h1>
        </div>
        <div>
            <v-switch inset @change="toggleTheme" color="primary"></v-switch>
        </div>
    </header>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'primary' : 'secondary'
}

</script>

<style scoped>
header {
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    align-items: center;
    justify-items: center;
    background-color: rgb(var(--v-theme-secondary));
}
</style>