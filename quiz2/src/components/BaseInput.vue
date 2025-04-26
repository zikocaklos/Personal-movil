<template>
  <div class="mb-4">
    <label class="block mb-1 font-medium">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
      class="w-full border px-3 py-2 rounded-md"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  placeholder?: string;
  modelValue: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>
