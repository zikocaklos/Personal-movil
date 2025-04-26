<template>
    <form @submit.prevent>
      <BaseInput label="Nombre" v-model="nombre" />
      <BaseInput label="Apellido" v-model="apellido" />
      <BaseInput label="Edad" v-model="edad" />
      <BaseInput label="Correo Electrónico" v-model="email" />
      <BaseInput label="Especialidad" v-model="especialidad" />
      <BaseInput label="Número de Licencia Médica" v-model="licencia" />
      
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
  const especialidad = ref('');
  const licencia = ref('');
  
  const agregar = () => console.log('Agregar médico');
  const modificar = () => console.log('Modificar médico');
  const eliminar = () => console.log('Eliminar médico');
  const consultar = () => console.log('Consultar médico');
  </script>
  