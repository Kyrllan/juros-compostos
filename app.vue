<template>
  <div>
    <v-switch inset @change="toggleTheme" color="primary"></v-switch>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { computed } from 'vue';

const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'primary' : 'secondary'
}

</script>
