<template>
    <form @submit.prevent>
      <BaseInput label="Nombre" v-model="nombre" />
      <BaseInput label="Apellido" v-model="apellido" />
      <BaseInput label="Edad" v-model="edad" />
      <BaseInput label="Correo Electrónico" v-model="email" />
      <BaseInput label="Turno Asignado" v-model="turno" />
      <BaseInput label="Área de Atención" v-model="area" />
      
      <div class="mt-4">
        <BaseButton @click="agregar">Agregar</BaseButton>
        <BaseButton @click="modificar">Modificar</BaseButton>
        <BaseButton @click="eliminar">Eliminar</BaseButton>
        <BaseButton @click="consultar">Consultar</BaseButton>
      </div>
    </form>
  </template>
  
  <script setup>
  import BaseInput from '@/components/BaseInput.vue';
  import BaseButton from '@/components/BaseButton.vue';
  
  const nombre = ref('');
  const apellido = ref('');
  const edad = ref('');
  const email = ref('');
  const turno = ref('');
  const area = ref('');
  
  const agregar = () => console.log('Agregar enfermero');
  const modificar = () => console.log('Modificar enfermero');
  const eliminar = () => console.log('Eliminar enfermero');
  const consultar = () => console.log('Consultar enfermero');
  </script>
  