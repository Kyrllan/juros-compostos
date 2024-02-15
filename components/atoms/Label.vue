<template>
    <label>{{ label }}</label>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        default: ""
    }
})

</script>

<style scoped></style>