<template>
    <div class="p-6 bg-white rounded-xl shadow-md">
      <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
      <slot />
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String
  });
  </script>
  