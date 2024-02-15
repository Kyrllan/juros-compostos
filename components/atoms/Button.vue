<template>
    <button v-bind="$attrs" :style="{ 'background-color': color }">{{ label }}</button>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    }
})

</script>

<style scoped></style>