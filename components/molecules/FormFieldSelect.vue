
<template>
    <div class="form-field-select">
        <Label class="form-field-select__label" v-bind="$attrs" />
        <div class="form-field-select-part__input">
            <TextField class="form-field-select__input" v-bind="$attrs" />
            <Select v-bind="$attrs" class="form-field-select-select__input" />
        </div>
    </div>
</template>

<script setup lang="ts">
import TextField from '../atoms/TextField.vue';
import Label from '../atoms/Label.vue';
import Select from '../atoms/Select.vue'
</script>

<style scoped lang="scss">
.form-field-select {
    display: flex;
    flex-direction: column;

    .form-field-select-part__input {
        display: flex;

        .form-field-select__input {
            width: 75%;
            border-radius: 0;
            padding: 0.4rem;
            background-color: rgb(var(--v-theme-secondary));

            &:focus {
                outline-color: rgb(var(--v-theme-tertiary));
            }


        }


        .form-field-select-select__input {
            width: 25%;
            border-radius: 0;
            background-color: rgb(var(--v-theme-tertiary));
            outline-color: rgb(var(--v-theme-tertiary));
        }

    }

    &:focus-within .form-field-select__label {
        color: rgb(var(--v-theme-tertiary));
    }

}
</style>