<template>
    <form @submit.prevent>
      <BaseInput label="Nombre" v-model="nombre" />
      <BaseInput label="Apellido" v-model="apellido" />
      <BaseInput label="Edad" v-model="edad" />
      <BaseInput label="Correo Electrónico" v-model="email" />
      <BaseInput label="Número de Historia Clínica" v-model="historia" />
      <BaseInput label="Tipo de Afiliación (EPS, Particular...)" v-model="afiliacion" />
      
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
  const historia = ref('');
  const afiliacion = ref('');
  
  const agregar = () => console.log('Agregar paciente');
  const modificar = () => console.log('Modificar paciente');
  const eliminar = () => console.log('Eliminar paciente');
  const consultar = () => console.log('Consultar paciente');
  </script>
  