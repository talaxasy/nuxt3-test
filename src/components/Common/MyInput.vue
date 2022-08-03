<!-- <script lang="ts">
export default {
    name: 'MyInput',
}
</script> -->

<script setup lang="ts">
defineProps<{
    modelValue: string | number;
}>()

defineEmits<{
    (e: 'update:modelValue', value: string | number): void;
}>()

</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue', ($event.target as any).value)" />
</template>