
<template>
    <div class="form-field">
        <Label class="form-field__label" v-bind="$attrs" />
        <TextField class="form-field__input" v-bind="$attrs" />
    </div>
</template>

<script setup lang="ts">
import TextField from '../atoms/TextField.vue';
import Label from '../atoms/Label.vue';
</script>

<style scoped lang="scss">
.form-field {
    display: flex;
    flex-direction: column;

    .form-field__input {
        border-radius: 0;
        padding: 0.4rem;
        background-color: rgb(var(--v-theme-secondary));

        &:focus {
            outline-color: rgb(var(--v-theme-tertiary));
        }
    }

    &:focus-within .form-field__label {
        color: rgb(var(--v-theme-tertiary));
    }
}
</style>