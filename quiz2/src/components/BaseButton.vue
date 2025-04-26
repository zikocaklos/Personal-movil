<template>
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mr-2"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </template>
  